import type { IMotionDiv } from '@/atoms/motionDiv/motionDiv.type'

export const ASSETS = {
  heroSm: '/assets/executive-summary/hero-sm.png',
  heroLg: '/assets/executive-summary/hero-lg.png',
}

export const LANG = {
  heroAlt: 'The gen one report',
  section2Title: 'How can we create for the future if our digital experiences are stuck in the past?',
  section2Subtitle: `Australia’s largest demographic is the one that’s never known a world without the internet. This means we have to evolve digital experiences to address their needs and expectations. R/GA’s research has identified that Digitally Native Australians’ behaviour, perceptions and preferences can light the way for all of us - they’re the foundation for a new digital world.`,
  section2Subtitle2: `We’ll be releasing new chapters over the coming weeks - register now to be among the first to access.`,
  section2ScrollText: 'Scroll for more',
  section2Register: 'Register for updates',
}

const blueDesktop: IMotionDiv = {
  className: 'blue-box',
  fadeIn: true,
  delay: 0,
  ease: 'easeIn',
  positionInPercent: {
    x0: 33.34,
    y0: 28.39,
  },
  sizeInPercent: {
    w0: 52.5,
    h0: 24.17,
  },
}

const redDesktop: IMotionDiv = {
  className: 'red-box',
  fadeIn: true,
  delay: 0.1,
  positionInPercent: {
    x0: 18.75,
    y0: 52.5,
  },
  sizeInPercent: {
    w0: 23.4,
    h0: 24.51,
  },
}

const cyanGreenDesktop: IMotionDiv = {
  className: 'cyan-green-box',
  fadeIn: true,
  delay: 0.15,
  positionInPercent: {
    x0: 45.72,
    x1: 61.12,
    y0: 70.06,
    y1: 149.29,
  },
  sizeInPercent: {
    w0: 44.65,
    h0: 29.16,
  },
}

const redPinkDesktop: IMotionDiv = {
  className: 'red-pink-box',
  fadeIn: true,
  delay: 0.175,
  positionInPercent: {
    x0: 43,
    x1: -4.375,
    y0: -3.58,
    y1: 89.37,
  },
  sizeInPercent: {
    w0: 13.19,
    h0: 47.87,
  },
}

const blueMobile: IMotionDiv = {
  className: 'blue-box',
  fadeIn: true,
  delay: 0,
  ease: 'easeIn',
  positionInPercent: {
    x0: 27.94,
    y0: 22.02,
  },
  sizeInPercent: {
    w0: 40,
    h0: 26.16,
  },
}

const redMobile: IMotionDiv = {
  className: 'red-box',
  fadeIn: true,
  delay: 0.1,
  positionInPercent: {
    x0: 0,
    y0: 66.25,
  },
  sizeInPercent: {
    w0: 40,
    h0: 26.16,
  },
}

const cyanGreenMobile: IMotionDiv = {
  className: 'cyan-green-box',
  fadeIn: true,
  delay: 0.15,
  positionInPercent: {
    x0: 62.69,
    y0: 85.02,
  },
  sizeInPercent: {
    w0: 37.31,
    h0: 14.98,
  },
}

const redPinkMobile: IMotionDiv = {
  className: 'red-pink-box',
  fadeIn: true,
  delay: 0.175,
  positionInPercent: {
    x0: 39.94,
    y0: 0,
  },
  sizeInPercent: {
    w0: 24.01,
    h0: 33.79,
  },
}

export type IMotionDivKey = 'blueDesktop' | 'redDesktop' | 'cyanGreenDesktop' | 'redPinkDesktop'

export const MOTION_DIVS_DESKTOP = {
  blueDesktop,
  redDesktop,
  cyanGreenDesktop,
  redPinkDesktop,
} as const

export const MOTION_DIVS_MOBILE = {
  blueMobile,
  redMobile,
  cyanGreenMobile,
  redPinkMobile,
} as const

export const MAX_HEIGHT_IN_PX = 755
export const MAX_WIDTH_IN_PX = 1440
export const SECTION_2_THRESHOLD = 0.5
