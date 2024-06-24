import type { IColoredBox } from '@/atoms/index'

const SECTION_ONE_CONTENT = {
  color: 'yellow',
  navigation: 'Challenge',
  id: 'challenge',
  title: 'The Challenge',
  titleNumber: '01',
  bodyTitle:
    'Our digital landscape has largely been shaped by, and for, Digital Adopters - those who were not born into the digital world but have had to adapt. However, the world is now majority Digital Natives or “Gen One”, the first generation of a true digital world.',
  statContent: [
    {
      src: '/assets/page-executive-summary/1-challenge.png',
      srcMobile: '/assets/page-executive-summary/1-challenge-mobile.jpg',
      alt: 'Image with text that says Gen one is 18% Of Gen One are more likely to be concerned about their screen time than Digital Adopters',
    },
  ],
  quoteContent: {
    quote: `I think it's just like body expectations and they're out here living this luscious life, like traveling every weekend and the average person is just like at home watching them. So it just kind of makes you think like, why not me? Like why can't I be doing that?`,
    author: `Tayla, 17`,
    edgeColor: 'yellow',
  },
  paragraph1Content: [
    `Digital Adopters are cautious when adopting new technology and old, inefficient experiences have often been digitised as-is, rather than reimagining them for new audiences and technology.`,
    `Gen One are the most vocal critics of these technologies: they play a crucial role in identifying issues and pushing for improvements.`,
  ],
  paragraph2Content: [
    `Persisting with a design approach from the Digital Adopter era risks alienating Gen One and limiting the adoption of new technology that can provide greater access and opportunities for all.`,
  ],
}
const SECTION_TWO_CONTENT = {
  color: 'cyan',
  navigation: 'Opportunity',
  id: 'opportunity',
  title: 'The Opportunity',
  titleNumber: '02',
  bodyTitle: 'In contrast, Gen One have grown up with technology as pervasive and integral to their lives.',
  statContent: [
    {
      src: '/assets/page-executive-summary/2-opportunity-1.png',
      srcMobile: '/assets/page-executive-summary/2-opportunity-1-mobile.png',
      alt: 'Image with text that says Gen one is 51% of Gen One are optimistic about the future of tech to enable  human connection, compared to 37% of Digital Adopters.',
    },
  ],
  quoteContent: {
    quote: `“Thinking about the actual role technology plays... It's a thing that's everywhere you don't actually realise how important it is.”`,
    author: 'Chelsea, 21',
    edgeColor: 'cyan',
  },
  paragraph1Content: [
    `They seamlessly adopt new digital tools into their daily routines and have an expectation for interactions to be fluid, intuitive, and almost imperceptible within their lifestyle. Their usage habits and behaviours reflect a world that is now digital first.`,
    `Despite their ease with technology, Gen One shares the same fundamental life concerns as previous generations, such as financial security, career progression, education, and adapting to life changes.`,
  ],
  paragraph2Content: [
    `Given their openness and enthusiasm for adopting new technology, both public and private sector organisations should actively engage younger Australians as partners, and accelerate technological advancements and innovations for their key life moments.`,
    `In our increasingly digital world, a Gen One first approach enables us to uplift and accelerate our progress toward a more inclusive future for all.`,
  ],
}

const SECTION_THREE_CONTENT = {
  color: 'magenta',
  navigation: 'Research',
  id: 'research',
  title: 'Our Research',
  titleNumber: '03',
  bodyTitle:
    'R/GA sought to uncover the ambitions, behaviours, motivations and barriers of using digital services among Gen One, and contrast that with Digital Adopters.',
  statContent: [
    {
      src: '/assets/page-executive-summary/3-our-research-1.png',
      srcMobile: '/assets/page-executive-summary/3-our-research-1-mobile.png',
      alt: `Image with text that says we heard from 1579 Australian to understand what makes Gen One different.`,
    },
    {
      src: '/assets/page-executive-summary/3-our-research-2.png',
      srcMobile: '/assets/page-executive-summary/3-our-research-2-mobile.jpg',
      alt: 'Image with text that says Gen One are twice as likely to identify as neurodiverse or LGBTIQ+ than Digital Adopters',
    },
  ],
  paragraph1Content: [
    `In particular, we wanted to know how we could use the distinct behaviours of Gen One to unlock new techniques to make digital services more accessible to vulnerable Australians - like First Nations, CALD, neurodiverse and LGBTIQ+ Australians.`,
    `Our multimodal research with 1,579 Australians aged 15 and above included diary studies, in-depth interviews and a quantitative study. Our research included a diversity of demographics and geographies to ensure we heard from a`,
  ],
  paragraph2Content: [
    ` broad cross-section of Australians, and narrowed in on their experience around key life stages like starting or finishing education, moving home or changing jobs.`,
    `While those born after 1997 are generally considered Digital Natives, our research found that the characteristics of Gen One are even more prevalent among under 18s and present among those in their 20s and 30s - a continuum, not a monolithic group.`,
  ],
}

const SECTION_FIVE_CONTENT = {
  color: 'red',
  navigation: 'Reimagining',
  id: 'reimagining',
  title: 'Reimagining the Digital World',
  titleNumber: '05',
  bodyTitle:
    'Our research highlighted the sharp division in the digital behaviours of Gen One and Digital Adopters in Australia, and their assessments of the current landscape of digital services.',
  statContent: [
    {
      src: '/assets/page-executive-summary/5-reimagining-1.png',
      alt: `Image with text that says 48% of Gen One prefer visually appealing imagery, bright colours and design online, compared to 33% of Digital Adopters`,
    },
  ],

  quoteContent: {
    quote: `“Like we're in 2024... Every other state has a cool website.”`,
    author: 'Imogen, 28',
  },
  paragraph1Content: [
    `Alongside the exploratory research, by investigating specific life stages we were able to find and prioritise the digital tactics and features that are most likely to drive adoption and ongoing engagement.`,
    `Our research highlights a critical juncture for our society. We are presented with a choice: continue with outdated design philosophies that risk alienating digital natives and stifling transformative technologies, or capitalise on the adaptability and digital fluency of Gen One to forge new innovative solutions for all.`,
  ],
  paragraph2Content: [
    `We have already seen evidence of how Gen One-driven design has influenced everything from social media apps to beauty brands to productivity tools - these experiences are faster, mobile-first, more utilitarian and more personalised.`,
    `We believe the choice is clear, by reimagining how we design for life experiences of Gen One, we can revolutionise both public and private sectors, ensuring that no segment of society is left behind.`,
  ],
}

export const LANG_SECTION = {
  section1: SECTION_ONE_CONTENT,
  section2: SECTION_TWO_CONTENT,
  section3: SECTION_THREE_CONTENT,
  section4: {
    color: 'blue',
    navigation: 'Our findings',
    id: 'our-findings',
    title: 'What We Found',
    titleNumber: '04',
    cards: [
      {
        preview: {
          subtitle: 'Finding01',
          title: 'Their relationship to technology',
          image: '/assets/page-executive-summary/4-what-we-found-card-1-preview.jpg',
          imageMobile: '/assets/page-executive-summary/4-what-we-found-card-1-preview-mobile.jpg',
        },
        modal: {
          subtitle: 'Finding01',
          title: 'Our objectives',
          image: '/assets/page-executive-summary/4-what-we-found-card-1-preview.jpg',
          imageMobile: '/assets/page-executive-summary/4-what-we-found-card-1-preview-mobile.jpg',
          content: [
            'Gen One are at ease with their relationship with technology, confident in its ability to positively influence their broader life ambitions.',
            'Our research found that while their technology habits are meaningfully different to digital adopters, they are far more optimistic about the future of technology, including AI (37% vs. 30%) and the potential for technology to enable greater human connection (51% vs. 37%)',
          ],
        },
      },
      {
        preview: {
          subtitle: 'Finding02',
          title: 'Digital diet and behaviours',
          image: '/assets/page-executive-summary/4-what-we-found-card-2-preview.png',
          imageMobile: '/assets/page-executive-summary/4-what-we-found-card-2-preview-mobile.jpg',
        },
        modal: {
          subtitle: 'Finding02',
          title: 'Digital diet and behaviours',
          image: '/assets/page-executive-summary/4-what-we-found-card-2-modal.jpg',
          imageMobile: '/assets/page-executive-summary/4-what-we-found-card-2-modal-mobile.jpg',
          content: [
            `Gen One knows that to be out of touch with technology is to be out of touch with the world. They want to balance their daily intake of technology with mindful awareness of potential drawbacks, finding it enjoyable and beneficial for various aspects of their life including education and work, social fulfilment and entertainment.`,
            `In practice, they have much higher daily screen time than Digital Adopters - and are more concerned about the effect this has on their wellbeing (18% more likely for those using screens for at least 4 hours a day).`,
          ],
        },
      },
      {
        preview: {
          subtitle: 'Finding03',
          title: 'The emotional toll of distraction',
          image: '/assets/page-executive-summary/4-what-we-found-card-3-preview.png',
          imageMobile: '/assets/page-executive-summary/4-what-we-found-card-3-preview-mobile.jpg',
        },
        modal: {
          subtitle: 'Finding03',
          title: 'The emotional toll of distraction',
          image: '/assets/page-executive-summary/4-what-we-found-card-3-preview.png',
          imageMobile: '/assets/page-executive-summary/4-what-we-found-card-3-modal-mobile.png',
          content: [
            `Despite being more entertaining and engaging, short form, ever-changing and easily consumable content has the highest appeal to Gen One - but these small seeds can blossom into distraction blackholes.`,
            `As a result, Gen One reports higher enjoyment, inspiration and empowerment from being online, but are also feeling more anxious, overwhelmed and, above all, distracted. Overall, both positive emotions (+7%) and negative emotions (+8%) are amplified among Gen One.`,
          ],
        },
      },
      {
        preview: {
          subtitle: 'Finding04',
          title: 'Trust, data and security',
          image: '/assets/page-executive-summary/4-what-we-found-card-4-preview.png',
          imageMobile: '/assets/page-executive-summary/4-what-we-found-card-4-preview-mobile.jpg',
        },
        modal: {
          subtitle: 'Finding04',
          title: 'Trust, data and security',
          image: '/assets/page-executive-summary/4-what-we-found-card-4-preview.png',
          imageMobile: '/assets/page-executive-summary/4-what-we-found-card-4-modal-mobile.jpg',
          content: [
            `Personal data is less and less personal - the genie is out of the bottle. Gen One feels confident they can stay in control but demands ethical usage.`,
            `Gen One are less concerned about data breaches, spam and the privacy of their personal data. However, they are less trusting of the government as custodian of their personal data than Digital Adopters, particularly for service history (54% vs. 63%) and location data (54% vs. 64%). The trend is reversed for private companies - they have higher comfort sharing data like their health (47% vs. 34%) and demographics (71% vs. 60%).`,
          ],
        },
      },
    ],
  },
  section5: SECTION_FIVE_CONTENT,
}

export const LANG = {
  ...LANG_SECTION,
  title: 'The Report at a Glance',
  chapterTitle: 'Chapter One',
}

export const NAVIGATION_HEADER = Object.entries(LANG_SECTION)
  .map(([key, { navigation, id, color }]) => {
    if (!navigation) return null
    return {
      sectionName: key,
      key: key?.replace('section', ''),
      label: navigation,
      color: color as IColoredBox['color'],
      href: `#${id}`,
    }
  })
  .filter(Boolean)
