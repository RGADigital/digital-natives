import type { IColoredBox } from '@/atoms/index'
import type { IBody } from '@/templates/articleBody/ArticleBody.type'

const SECTION_ONE_CONTENT: IBody = {
  color: 'yellow',
  navigation: 'Summary',
  id: 'summary',
  title: 'Summary',
  titleNumber: '01',
  bodyTitle: `“Technology should be embraced, not feared.”`,
  paragraph1Content: [
    `Gen One are at ease in their relationship with technology and its pace of change, confident in its positive influence on their day-to-day life and long-term ambitions.`,
  ],
  paragraph2Content: [
    `In contrast, Digital Adopters struggle to balance technology with daily life and are concerned about the consequences of being left behind.`,
  ],
  image: [
    {
      alt: `Image that shows comments from Ayaan, a Gen One that says “For me it's like heaven… every daily task, that's made your life much easier. You can do almost everything with your phone, you can watch Netflix, it's your personal trainer. Now it's your weather forecast as well. So obviously it's made life easier.” and from Vivian, a digital adopter that says "I guess being left behind... my biggest fear is picking up something and being like, oh, how do I use it?”`,
      src: '/assets/chapter-two/1-summary.jpg',
      srcMobile: '/assets/chapter-two/1-summary-mobile.jpg',
    },
  ],
}
const SECTION_TWO_CONTENT: IBody = {
  color: 'cyan',
  navigation: 'Technology’s day-to-day impact',
  id: 'technology-day-to-day-impact',
  title: 'Technology’s day-to-day impact',
  titleNumber: '02',
  bodyTitle: 'Gen One and Digital Adopters alike recognise the need for a balanced approach to technology use.',
  paragraph1Content: [
    `Gen One are more confident in managing their technology use, appearing more adept at integrating it seamlessly into their lives while maintaining a focus on physical and mental well-being. They appreciate technology in enhancing convenience, efficiency, and connectivity in their lives, and are cognisant of maintaining a health balance between online and offline activities.`,
    `Digital Adopters, on the other hand, are engaged in a tug-of-war with technology.`,
  ],
  paragraph2Content: [
    `While acknowledging its many high-level benefits, they describe many perceived downsides, including the increased prevalence of mental health challenges, and limitations on emotional connection and privacy: these are the costly trade-offs to themselves and society for the many benefits it offers.`,
    `Interestingly, there was consensus across generations that technology has a net positive impact on everyone, particularly for older people. This belief is founded on the potential for technology to enhance various aspects of life, from health and transport to personal connections.`,
  ],
  quoteContent: [
    {
      avatar: '/assets/chapter-two/avatar/melissa.png',
      author: 'Melissa, Digital Adopter',
      edgeColor: 'pink',
      quote: `“It feels like it's addictive sometimes and you know, sometimes you're like, oh wrap it up or whatever, and then you can't like then something else jumps to mind and then you're like, oh OK, look this up. I gotta do this. So yeah, it's sometimes a bit of a love hate relationship with it….it's finding that sweet spot, I guess.”`,
    },
  ],
  image: [
    {
      alt: '',
      src: '/assets/chapter-two/2-hero-banner.jpg',
      srcMobile: '/assets/chapter-two/2-hero-banner-mobile.jpg',
    },
  ],
}

const SECTION_THREE_CONTENT = {
  color: 'magenta',
  navigation: 'Human connection in the digital age',
  id: 'human-connection-in-the-digital-age',
  title: 'Human connection in the digital age',
  titleNumber: '03',
  bodyTitle:
    'When considering the impact of technology, personal connection is a recurring theme among both groups. While social media offers unparalleled opportunities to stay connected, it also raises concerns about the erosion of face-to-face interactions and cyber-bullying.',
  paragraph1Content: [
    `Gen One sees the benefits of remaining connected in real-time using social media and other technology, and were not as worried about 'too much' time spent online - they accepted that as inevitable and used their devices to connect with friends socially.`,
    `Digital Adopters feel more guilty about the time they spend online. They are more likely to see technology as a zero-sum proposition between time on devices and creating genuine connections with others, and not just with friends and family.`,
  ],
  paragraph2Content: [],
  quoteContent: [
    {
      avatar: '/assets/chapter-two/avatar/ayaan.png',
      author: 'Ayaan, Gen One',
      edgeColor: 'yellow',
      quote: `“I guess we've become more attached to our phones and less to each other.”`,
    },
    {
      avatar: '/assets/chapter-two/avatar/melissa-2.png',
      author: 'Melissa, Digital Adopter',
      edgeColor: 'yellow',
      quote: `“And it's just like you don't wanna lose human interaction either. I think that's the main thing that I am like, it's not trying to lose this. I mean, now we have robots, like cleaners that clean the plates of restaurants. Like here we go: no more waitresses, no more waiters”`,
    },
    {
      avatar: '/assets/chapter-two/avatar/vivian.png',
      author: 'Vivian, Digital Adopter',
      edgeColor: 'yellow',
      quote: `“A lot of stuff is shared online as well. Not more to show off, but more to just keep it connected with other people close around us and they're like, hey, you know, everyone's still connected. This is what we've got going on in our life right now.”`,
    },
  ],
}
const SECTION_FOUR_CONTENT = {
  color: 'blue',
  navigation: 'The Future of Technology',
  id: 'the-future-of-technology',
  title: 'The Future of Technology',
  titleNumber: '04',
  bodyTitle:
    'Gen One is far more enthusiastic about the potential for technology to create a better future for everyone.',
  paragraph1Content: [
    `Gen One is far more enthusiastic about the potential for technology to create a better future for everyone. In particular, they look forward to advances in eCommerce, AR/VR and streaming technology, but are also less concerned about negative trends like misinformation, data breaches and scams.`,
  ],
  paragraph2Content: [
    `Digital Adopters, while also looking forward to technological advancements, express more caution. They are more likely to worry about the long-term impacts of technology on physical and mental health, particularly for younger people.`,
  ],
  quoteContent: [
    {
      avatar: '/assets/chapter-two/avatar/tayla.png',
      author: 'Tayla, Gen One',
      edgeColor: 'cyan',
      quote: `“Because someone like Apple doing [the Vision Pro] means that it's gonna just go crazy and expand. Like it's like we're seeing a new introduction, like when they released the first iPhone, like that would have just been crazy and it just kind of feels like that. It’s like a new wave of technology is coming.”`,
    },
  ],
  image: [
    {
      alt: 'Chart that shows Gen one are much more excited about the future of technology than Digital Adopters',
      src: '/assets/chapter-two/4-chart.jpg',
      srcMobile: '/assets/chapter-two/4-chart-mobile.jpg',
    },
  ],
}
const SECTION_FIVE_CONTENT = {
  color: 'red',
  navigation: 'Accelerating Artificial Intelligence',
  id: 'accelerating-artificial-intelligence',
  title: 'Accelerating Artificial Intelligence',
  titleNumber: '05',
  bodyTitle: '',
  paragraph1Content: [
    `A sense of tech optimism among Gen One extends into their perception of AI, but they can recognise some downsides. Gen One are generally more accepting of AI's role in their lives, seeing it as a tool that can enhance convenience and efficiency - but worry that will make people less motivated and make the digital world more boring to interact with.`,
  ],
  paragraph2Content: [
    `Digital Adopters, however, are more concerned about AI's potential to disrupt job markets and devalue human skills. This highlights a fear of losing the human touch in various aspects of life and work.`,
  ],
  quoteContent: [
    {
      avatar: '/assets/chapter-two/avatar/darcy.png',
      author: 'Darcy, Digital Adopter',
      edgeColor: 'yellow',
      quote: `“I guess we've become more attached to our phones and less to each other.”`,
    },
    {
      avatar: '/assets/chapter-two/avatar/gus.png',
      author: 'Gus, Gen One',
      edgeColor: 'yellow',
      quote: `“And it's just like you don't wanna lose human interaction either. I think that's the main thing that I am like, it's not trying to lose this. I mean, now we have robots, like cleaners that clean the plates of restaurants. Like here we go: no more waitresses, no more waiters”`,
    },
    {
      avatar: '/assets/chapter-two/avatar/claudia.png',
      author: 'Claudia, Gen One',
      edgeColor: 'yellow',
      quote: `“A lot of stuff is shared online as well. Not more to show off, but more to just keep it connected with other people close around us and they're like, hey, you know, everyone's still connected. This is what we've got going on in our life right now.”`,
    },
  ],
}
const SECTION_SIX_CONTENT = {
  // TODO: update this color
  color: 'yellow',
  navigation: 'What it means for Gen One Design',
  id: 'what-it-means-for-gen-one-design',
  title: `What it means for Gen One Design`,
  titleNumber: '06',
  bodyTitle: '',
  paragraph1Content: [
    `Gen One Design should be balanced, considering the perspective of both Gen One and Digital Adopters.`,
    `The nuanced understanding of technology among Gen One equips them to navigate the digital landscape wisely. They embrace innovation while being mindful of its potential downsides. We should focus on creating intuitive, user-friendly experiences that cater to this generation's confidence and comfort with technology.`,
    `Gen One's comfort with technology pervasiveness opens the door for the integration of new technologies into various aspects of their lives, enabling the exploration of more innovative approaches that Digital Adopters would be hesitant to embrace.`,
  ],
  paragraph2Content: [
    `In addition, their greater enthusiasm for future advancements makes them more likely to adopt new approaches that enhance convenience and efficiency in daily life. `,
    `For Digital Adopters, a more cautious approach is necessary. Addressing concerns about privacy, data security, and the addictive nature of technology is crucial. Solutions should include features that enhance usability and accessibility, helping this group feel more secure and confident in their technology use.`,
    `However, once something new is introduced to Gen One, Adopters will follow, by their nature, or by fear of being left behind.`,
  ],
}

const SECTION_SEVEN_CONTENT: IBody = {
  // TODO: update this color
  color: 'cyan',
  navigation: 'Implications for government-to-citizen engagement',
  id: 'implications-for-government-to-citizen-engagement',
  title: 'Implications for government-to-citizen engagement',
  titleNumber: '07',
  paragraphOlContent: [
    {
      title: 'Be brave',
      description:
        'Gen One is attracted to new and innovative technology, willing to take a chance on something groundbreaking but unproven. As with any new technology, getting early adopters excited will ultimately attract the masses.',
    },
    {
      title: 'Be balanced',
      description:
        'Any technology advance should be tempered by ensuring privacy, security and malicious actors are addressed, particularly to keep Digital Adopters confident in its long-term net benefit.',
    },
    {
      title: 'Be human',
      description:
        'Gen One believe that technology will ultimately bring people together - if we dehumanise our experiences, making them more like processes or forms, they will feel less connected to the benefits and less likely to use them.',
    },
  ],
}

export const LANG = {
  section1: SECTION_ONE_CONTENT,
  section2: SECTION_TWO_CONTENT,
  section3: SECTION_THREE_CONTENT,
  section4: SECTION_FOUR_CONTENT,
  section5: SECTION_FIVE_CONTENT,
  section6: SECTION_SIX_CONTENT,
  section7: SECTION_SEVEN_CONTENT,
  title: 'Gen One and Technology',
  chapterTitle: 'Chapter Two', // on mobile
}

export const NAVIGATION_HEADER = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7']
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
