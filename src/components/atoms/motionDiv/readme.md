## Motion div

Used in http://localhost:3000/executive-summary

Code:

- components/organisms/executiveSummary/IntroMobile.tsx
- components/organisms/executiveSummary/IntroDesktop.tsx

Steps to create a hero animation:

1. Get the configuration ready
2. Set the useViewport hook
3. Convert percentage to pixel
4. Layering the box

### 1. Get the configuration Ready

1. Go to figma:

- Download the image & text layer
- Get the percentage ready range

  - Base
    - width: screen width
    - height: screen height
  - For each boxes
    - Get the position x (left), y (top)
      - [animation start] First section on figma
        - x0 position (left): margin left to screen width
        - y0 position (top): margin top to screen top
      - [animation end] Second section on figma
        - x1 position (left): margin left to screen width
        - y1 position (left): margin left to screen width
    - Get the size w (width), h (height)
      - [animation start] First section on figma
        - w0 size (width): compare width to screen width
        - h0 size (height): compare height to screen height
      - [animation end] Second section on figma
        - w1 size (width): compare width to screen width
        - h1 size (height): compare height to screen height

- Get the mix-blend mode mapped
- Check for nested box

2. Go to code:

- Map the value

  - Example on IntroSection.constant.ts

  ```ts
  import type { IMotionDiv } from '@/atoms/motionDiv/motionDiv.type'

  const cyanGreenDesktop: IMotionDiv = {
    className: 'cyan-green-box', // only use to debugging
    fadeIn: true, // opacity from 0.3 to 1
    delay: 0.15, // varying opacity delay
    positionInPercent: {
      x0: 45.72, // start left
      x1: 61.12, // [optional] end left
      y0: 70.06, // start top
      y1: 149.29, // [optional] end top
    },
    sizeInPercent: {
      w0: 44.65, // start width
      h0: 29.16, // start height
      // has no size transformation
      // to add size transformation just add
      // w1: end width
      // w2: end width
    },
  }
  ```

### 2. Set up the useViewport hook

Example on IntroDesktop.tsx and IntroMobile.tsx

There are 2 types of animation:

- Mobile Portrait
  - use 100% width
  - function used to convert height to design depends on design
    - might use 100% width or 100% height
      - If height = 100% width, use vwToPx
      - If height = 100% height, use vhToPx
    - check IntroMobile.tsx
    - no need to add max_width
- Desktop Landscape, Desktop Portrait, Mobile Landscape
  - get max_height from figma (screen height)
  - get max_width from figma (screen width)

Steps:

1. import dependencies

```tsx
import useViewport from '@/hooks/useViewport'
```

2. setup the hook

   - on Desktop Landscape, Desktop Portrait, Mobile Landscape:

   ```tsx
   const { viewportWidth, viewportHeight, vhToPx, vwToPx } = useViewport({
     maxHeight: MAX_HEIGHT_IN_PX, // optional
     maxWidth: MAX_WIDTH_IN_PX, // optional
   })
   ```

   - on Mobile

   ```tsx
   const { viewportWidth, viewportHeight, vwToPx } = useViewport({})
   ```

### 3.Convert the percentage to pixel

Method:

- `vwToPx`: convert viewport Width percentage to pixel
  - to get x (left position)
  - if height = 100vw
- `vhToPx`: convert viewport Height percentage to pixel

Note:

- [Mobile][Portrait] height might equals width

```tsx
const motionDivsInPx: { [key: string]: IMotionDiv & { size: IMotionDivSize; position: IMotionDivPosition } } =
  useMemo(() => {
    return Object.entries(MOTION_DIVS_MOBILE).reduce(
      (acc: {}, [key, { sizeInPercent, positionInPercent, ...rest }]: [string, IMotionDiv]) => {
        const sizeInPx: IMotionDivSize = {
          w0: vwToPx(sizeInPercent.w0),
          // IF height = width
          // -> use width percentage
          h0: vwToPx(sizeInPercent.h0),
          // ELSE IF height = 100vh
          // -> use height percentage
          // h0: vhToPx(sizeInPercent.h0),
        }
        if (sizeInPercent.w1) sizeInPx.w1 = vwToPx(sizeInPercent.w1)
        if (sizeInPercent.h1) sizeInPx.h1 = vwToPx(sizeInPercent.h1)

        const positionInPx: IMotionDivPosition = {
          x0: vwToPx(positionInPercent.x0),
          // IF height = width
          // -> use width percentage
          y0: vwToPx(positionInPercent.y0),
          // ELSE IF height = 100vh
          // -> use height percentage
          // y0: vhToPx(sizeInPercent.y0),
        }

        if (positionInPercent.x1) positionInPx.x1 = vwToPx(positionInPercent.x1)
        if (positionInPercent.y1) positionInPx.y1 = vwToPx(positionInPercent.y1)

        return { ...acc, [key]: { size: sizeInPx, position: positionInPx, ...rest } }
      },
      {},
    )
  }, [viewportWidth, viewportHeight])
```

### 4. Layering the boxes

To create 3 layer as on http://localhost:3000/executive-summary

1. Map the layer:

- Layer 0 -> blue box
- Layer 1 -> image (woman with text)
- Layer 2 -> other box

2. Go to code

- Create relative container with `overflow-hidden`
  - the left and top position might cause scroll x or y visible

```tsx
<div className="container relative mx-auto h-[100vw] w-full overflow-hidden"></div>
```

- Inside the relative container do layering

```tsx
<div className="container relative mx-auto h-[100vw] w-full overflow-hidden">
  {/* START: layer 0 */}
  <MotionDiv
    {...motionDivsInPx.blueMobile}
    className={cn('bg-accents-blue absolute')}
    motionValue={motionValue}
    inputRange={motionInputRange}
  />
  {/* END: layer 0 */}
  {/* START: layer 1 */}
  <Image fill alt={LANG.heroAlt} src={ASSETS.heroSm} priority className="object-contain transition-opacity delay-300" />
  {/* END: layer 1 */}
  {/* START: layer 2 */}
  <MotionDiv
    {...motionDivsInPx.cyanGreenMobile}
    className={cn('absolute mix-blend-exclusion transition-all')}
    motionValue={motionValue}
    inputRange={motionInputRange}
    ease="easeIn"
  >
    {/* [!!] multiple layer on box with different overlay */}
    <div className="size-full bg-accents-cyan mix-blend-overlay">
      <div className="h-full w-[38.82%] bg-gr-green-white pl-[61.26%] mix-blend-normal" />
    </div>
  </MotionDiv>
  {/* END: layer 2 */}
</div>
```
