import type { IColoredBox } from '@/atoms/index'

const SECTION_ONE_CONTENT = {
  color: 'blue',
  navigation: 'Definitions',
  id: 'definitions',
  title: 'Digital Natives and Digital Immigrants',
  titleMobile: 'Definitions',
  titleNumber: '01',
  titleImage: '/assets/chapter-one/1-definition.jpg',
  titleImageMobile: '/assets/chapter-one/1-definition-mobile.jpg',
  titleImageAlt:
    'Image with text that says The idea of “digital natives” has been around for over 20 years, and there is extensive evidence that their early immersion into the digital world has changed the way this group sees and interacts with the world.',
  bodyTitle:
    'Past research has established the clear divide between digital natives and digital immigrants. Teo (2013) established four dimensions of digital nativity:',
  definitionContent: [
    {
      terms: 'Digital Immigrants',
      description:
        'Individuals who were born before the widespread adoption of digital technology and have had to adapt to its use later in life',
      edgeColor: 'cyan',
    },
    {
      terms: 'Digital Natives',
      description:
        'Individuals who have grown up with digital technology from an early age, characterised by high familiarity and comfort with digital environments',
      edgeColor: 'green',
    },
  ],
  point1Content: [
    {
      point: 'Growing up with technology:',
      content: `Digital natives grew up with the internet, mobile phones, and computers. This dimension looks at exposure to digital technologies from a young age and integration into daily life.`,
    },
    {
      point: 'Comfort with multitasking:',
      content:
        'Digital natives perform multiple tasks simultaneously using new operating systems. They are accustomed to using screens and can engage in activities like reading emails and listening to music simultaneously.',
    },
  ],
  point2Content: [
    {
      point: 'Reliant on graphics for communication:',
      content:
        'This dimension emphasises the use of visuals and graphics by digital natives in their communication. They rely on visual elements, such as emojis and abbreviations, to express themselves more comfortably compared to previous generations.',
    },
    {
      point: 'Thrive on instant gratifications and rewards:',
      content:
        'This dimension reflects the eagerness of digital natives to acquire knowledge and their preference for immediate rewards. They have a limited attention span and seek instant gratification in their interactions with digital technologies.',
    },
  ],
  source1:
    'Source: Teo, Timothy. “‘Digital Nativity’: A Definitional Framework.” World Journal on Educational Technology, vol. 5, no. 3, 2013a, pp. 389-394.',
  source2:
    'Source: Çoklar, Ahmet Naci, and Ali Tatli. “Examining the Digital Nativity Levels of Digital Generations: From Generation X to Generation Z.” Shanlax International Journal of Education,  vol. 9, no. 4, 2021,  pp. 433–44.',
}

const SECTION_TWO_CONTENT = {
  color: 'blue',
  navigation: 'Our research',
  id: 'our-research',
  title: 'Our Research Hypotheses and Approach',
  titleNumber: '02',
  cards: [
    {
      preview: {
        subtitle: 'Finding 01',
        title: 'Our objectives',
        image: '/assets/chapter-one/2-preview-1.jpg',
        imageMobile: '/assets/chapter-one/2-preview-1-mobile.jpg',
      },
      modal: {
        subtitle: 'Finding 01',
        title: 'Our objectives',
        image: '/assets/chapter-one/2-modal-1.jpg',
        imageMobile: '/assets/chapter-one/2-modal-1-mobile.jpg',
        downloadLink: '',
        content: [
          `Understand the digital lifestyle, perceptions and behaviours of young Australians, and how that changes with age`,
          `Explore the tensions and challenges posed by digital nativity, such as cognitive overload and trust in institutions`,
          `Identify the most valuable strategies to enhance digital communications, service delivery and trust among younger Australians`,
        ],
        contentType: 'ol',
      },
    },
    {
      preview: {
        subtitle: 'Finding 02',
        title: 'Our hypothesis',
        image: '/assets/chapter-one/2-preview-2.jpg',
        imageMobile: '/assets/chapter-one/2-preview-2-mobile.jpg',
      },
      modal: {
        subtitle: 'Finding 02',
        title: 'Our hypothesis',
        image: '/assets/chapter-one/2-modal-2.jpg',
        imageMobile: '/assets/chapter-one/2-modal-2-mobile.jpg',
        downloadLink: '',
        content: [
          `Due to their lifelong exposure to technology, digital natives often contend with cognitive overload and shorter attention spans. Therefore, their expectations and engagement patterns with digital services differ significantly from previous generations.`,
          `Choice architecture and gamification techniques can reduce cognitive overload and enhance engagement among digital natives when interacting with government services.`,
          `Digital natives' engagement and adoption of digital services are influenced by their privacy concerns, trust in the brand, and the ethical use of choice architecture, gamification, and personalisation, which are moderated by performance and effort expectancy, social influence, and facilitating conditions.`,
        ],
        contentType: 'ol',
      },
    },
    {
      preview: {
        subtitle: 'Finding 03',
        title: 'Our approach',
        image: '/assets/chapter-one/2-preview-3.jpg',
        imageMobile: '/assets/chapter-one/2-preview-3-mobile.jpg',
      },
      modal: {
        subtitle: 'Finding 03',
        title: 'Our approach',
        image: '/assets/chapter-one/2-preview-3.jpg',
        imageMobile: '/assets/chapter-one/2-modal-3-mobile.jpg',
        downloadLink: '',
        content: [
          `Learn from the experts: A review of the extant literature on what defines and drives digital natives `,
          `Listen to digital natives and digital immigrants: In-depth interviews and diary studies with 18 Australians aged from 15 - 59 to explore digital behaviour, choice architecture, cognitive overload, personalisation and trust`,
          `Validate findings and measure desirability: A survey of 1,561 Australians to quantify the differences across the digital divide and measure the desirability of new tactics to engage them.`,
        ],
        contentType: 'ol',
      },
    },
    {
      preview: {
        subtitle: 'Finding 04',
        title: 'Research Sample',
        image: '/assets/chapter-one/2-preview-4.jpg',
        imageMobile: '/assets/chapter-one/2-preview-4-mobile.jpg',
      },
      modal: {
        subtitle: 'Finding 04',
        title: 'Research Sample',
        image: '/assets/chapter-one/2-preview-4.jpg',
        imageMobile: '/assets/chapter-one/2-modal-4-mobile.jpg',
        downloadLink: '',
        content: [
          `Personal data is less and less personal - the genie is out of the bottle. Gen One feels confident they can stay in control but demands ethical usage.`,
          `Gen One are less concerned about data breaches, spam and the privacy of their personal data. However, they are less trusting of the government as custodian of their personal data than Digital Adopters, particularly for service history (54% vs. 63%) and location data (54% vs. 64%). The trend is reversed for private companies - they have higher comfort sharing data like their health (47% vs. 34%) and demographics (71% vs. 60%).`,
        ],
        image1: '/assets/chapter-one/2-modal-4-1.jpg',
        alt1: 'Image that compare gender of Gen One ( 58% are female, 40% are male, and 1% are non-binary/gender non-conforming) and Digital adopter (54% are female and 46% are male)',
        image2: '/assets/chapter-one/2-modal-4-2.png',
        alt2: 'Image with text hat says Gen One are more diverse: they are more likely to identify as indigenous, LGBTIQ+ or neurodiverse as Digital Adopters',
        image3: '/assets/chapter-one/2-modal-4-3.jpg',
        alt3: 'Image that compare area (Capital city, regional city, rural or remote) of Gen One and Digital Adopter using bar chart shows similar trend, with highest percentage on capital city, then regional city, and the lowest on rural or remote.',
        image4: '/assets/chapter-one/2-modal-4-4.jpg',
        alt4: 'Image that compare state (NSW, Vic, QLD, WA, SA, TAS, ACT, NT) of Gen One and Digital Adopter using bar chart shows similar trend, with highest percentage on NSW and the lowest on NT',
      },
    },
  ],
}

const SECTION_THREE_CONTENT = {
  color: 'magenta',
  navigation: 'The Digital Native Continuum',
  id: 'the-digital-native-continuum',
  title: 'The Digital Native Continuum',
  titleNumber: '03',
  paragraph1Content: [
    `Our research has confirmed that as boundaries increasingly blur across our physical and digital worlds, generational differences have emerged – relationship to technology, digital habits, trust and the appeal of engagement techniques like gamification and personalisation correlate strongly with age.`,
    `While being born before or after 1997 was a useful tool for segmentation, it’s not the only factor in digital nativity. Looking at global social and economic policy, Van Dijk (2020) breaks down the digital divide into five perspectives: technological, economic, educational, social and persuasive. Governments and businesses can play a role in closing the divide through investment and policy.`,
  ],
  paragraph2Content: [
    `R/GA’s research confirms that other factors beyond age play a role in digital nativity: including geography, family background, education and other socioeconomic characteristics. Younger Australians from more vulnerable backgrounds have not had the same access and opportunity for early-age immersion in the digital world, so they think and behave similarly to digital immigrants, and vice-versa for older Australians. This makes the opportunity to bring a Digital Native-first approach to all Australians an exciting opportunity to close the digital divide for governments and businesses.`,
  ],
  image: '/assets/chapter-one/3-infographic.jpg',
  imageMobile: '/assets/chapter-one/3-infographic-mobile.jpg',
  imageAlt: 'Image about the digital divide',
  description:
    'Digital nativity is not just a result of age: other factors play a role in digital nativity, including geography, family background, education and other socioeconomic characteristics. It’s better understood as a set of behaviours and perceptions that is more prevalent among younger Australians and less so among older Australians.',
  source: 'Source: Van Dijk, Jan A.G.M. The Digital Divide. John Wiley & Sons, 2020.',
}

const SECTION_FOUR_CONTENT = {
  color: 'blue',
  navigation: 'Life Events and Digital Natives',
  id: 'life-events-and-digital-natives',
  title: 'Life Events and Digital Natives',
  titleNumber: '04',
  paragraph1Content: [
    `While we sought to understand what makes digital natives tick in their day-to-day interactions with digital experiences, looking at critical life stages helps us unpack their behaviour when they’re most in need of support - and test which improvements to the experience would be most impactful.`,
    `Recent research and analysis have identified that reframing service delivery and support around life stages improves accessibility and efficiency.`,
  ],
  paragraph2Content: [
    ` For our research, we adapted the life stages framework to deep-dive into how digital natives’ behaviour changes in proximity to important life events.`,
  ],
  imageHeader: 'Research respondents across life stages',
  image: '/assets/chapter-one/4-life-event.jpg',
  imageMobile: '/assets/chapter-one/4-life-event-mobile.jpg',
  imageAlt: 'Image about the adopter age group',
  description:
    'Digital nativity is not just a result of age: other factors play a role in digital nativity, including geography, family background, education and other socioeconomic characteristics. It’s better understood as a set of behaviours and perceptions that is more prevalent among younger Australians and less so among older Australians.',
  source: 'Source: Van Dijk, Jan A.G.M. The Digital Divide. John Wiley & Sons, 2020.',
  lifeStages: [
    'Started high school',
    'Changed high schools',
    'Left school',
    'Started further education',
    'Completed apprenticeship',
    'Became a parent',
    'Bought a home to live in',
    'Bought investment property',
    'Moved home',
    'Got married',
    'Got divorced or separated',
    'Entered the workforce',
    'Started a business',
    'Became unemployed',
    'Retired',
  ],
}

const SECTION_FIVE_CONTENT = {
  color: 'red',
  navigation: 'Digital Natives to Gen One',
  id: 'digital-natives-to-gen-one',
  title: 'From Digital Natives to Gen One',
  titleNumber: '05',
  paragraph1Content: [
    `Our research has highlighted that this rethink is more urgent than ever, and that the highly distinct
  behaviours of those born into a world infused with technology are not getting due consideration.`,
  ],
  paragraph2Content: [
    `Without a change in mindset, we risk permanently undermining a growing majority of Australians' access to impactful services and experiences.`,
    `It’s more accurate to think of digital natives not as the next generation but as the first generation of a new age of digital: Gen One. The Gen One report is a re-introduction to this new generation and a call to action for brands and government organisations to radically rethink the way they engage Australians through digital.`,
  ],
}

export const LANG = {
  section1: SECTION_ONE_CONTENT,
  section2: SECTION_TWO_CONTENT,
  section3: SECTION_THREE_CONTENT,
  section4: SECTION_FOUR_CONTENT,
  section5: SECTION_FIVE_CONTENT,
  title: 'Who is Gen One?',
  chapterTitle: 'Chapter One',
}

export const NAVIGATION_HEADER = ['section1', 'section2', 'section3', 'section4', 'section5']
  .map(key => {
    const section = LANG?.[key as keyof typeof LANG]
    if (!section || typeof section === 'string') return null
    const { navigation, id, color } = section
    if (!navigation) return null
    return {
      sectionName: key,
      key: key.replace('section', ''),
      label: navigation,
      color: color as IColoredBox['color'],
      href: `#${id}`,
    }
  })
  .filter(Boolean)
