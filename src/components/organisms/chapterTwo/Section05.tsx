import { Text } from '@mantine/core'

import cn from '@/utils/cn'

import { TitleContent } from '@/organisms/twoColumnStatText'

import { LANG } from './Body.constant'

interface Props {
  isMobile?: boolean
}

export default function SectionFive({ isMobile }: Readonly<Props>) {
  return (
    <div className={cn('dn-section-two__section-header', 'grid grid-cols-12', { 'pt-[30px] pb-[46px]': isMobile })}>
      <TitleContent title={LANG.section5.title} titleNumber={LANG.section5.titleNumber} />
      <div
        className={cn('col-span-12 grid grid-cols-12 order-3', 'lg:px-5 pt-[110px] lg:pt-[52px] lg:pb-[80px] lg:gap-5')}
      >
        {/* START: p1 */}
        <div
          className={cn('col-span-12', {
            'flex flex-col gap-5': true,
            'col-span-6': !isMobile,
          })}
        >
          <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
            {`In the decades since the term “digital native” was coined, there has been extensive examination of the
            implications for topics as diverse as `}
            <a
              href="https://www.researchgate.net/publication/257101965_IGovernment_A_new_perspective_on_the_future_of_government_digitisation"
              target="_blank"
              rel="noreferrer"
            >
              government service delivery
            </a>
            ,{' '}
            <a
              href="https://www.researchgate.net/publication/344433621_Consumer_Behavior_in_the_Digital_Age"
              target="_blank"
              rel="noreferrer"
            >
              user experience
            </a>
            ,{' '}
            <a
              href="https://www.researchgate.net/publication/346843332_Generational_Differences_in_Omnichannel_Experience_Rising_New_Segment_Gen_Z"
              target="_blank"
              rel="noreferrer"
            >
              omnichannel retailing
            </a>
            ,{' '}
            <a
              href="https://www.emerald.com/insight/content/doi/10.1108/EMJB-09-2021-0132/full/html?skipTracking=true"
              target="_blank"
              rel="noreferrer"
            >
              digital finance
            </a>
            ,{' '}
            <a
              href="https://www.researchgate.net/publication/329452733_'Better_understanding_about_what's_going_on'_young_Australians'_use_of_digital_technologies_for_health_and_fitness"
              target="_blank"
              rel="noreferrer"
            >
              health and wellbeing
            </a>
            {` and `}
            <a
              href="https://www.researchgate.net/publication/348509163_Millennial_and_generation_Z_digital_marketing_communication_and_advertising_effectiveness_A_qualitative_exploration"
              target="_blank"
              rel="noreferrer"
            >
              advertising
            </a>
            {`. What is common across the literature is that digital natives’ higher digital experience standards demand a
            re-evaluation of priorities for governments and businesses.`}
          </Text>
          <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
            {LANG.section5.paragraph1Content[0]}
          </Text>
        </div>
        {/* END: p1 */}
        {/* START: p2 */}
        <div
          className={cn('col-span-12', {
            'flex flex-col gap-5': true,
            'col-span-6': !isMobile,
          })}
        >
          <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
            {LANG.section5.paragraph2Content[0]}
          </Text>
          <Text component="p" className="font-m-body lg:!font-body text-m-body lg:!text-body">
            {LANG.section5.paragraph2Content[1]}
          </Text>
        </div>
        {/* END: p2 */}
      </div>
    </div>
  )
}
