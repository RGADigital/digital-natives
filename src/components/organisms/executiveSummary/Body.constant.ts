export const LANG_SECTION = {
  section1: {
    navigation: 'Challenge',
    navigationLink: 'challenge',
    title: 'The Challenge',
    titleNumber: '01',
    bodyTitle: 'Our digital landscape has been shaped by, and for, Digital Adopters',
    statContent: [
      {
        src: '/assets/exec-summary/the-challenge-1.jpg',
        alt: 'Image with text that says Gen one is 18% Of Gen One are more likely to be concerned about their screen time than Digital Adopters',
      },
      {
        src: '/assets/exec-summary/the-challenge-2.jpg',
        alt: `Image with text that says They're out here living this luscious life and the average person is just at home watching them.`,
      },
    ],
    paragraph1Content: [
      `Those who were not born into the digital world but have had to adapt. However, the world is now
                      majority Digital Natives or 'Gen One' of a true digital world.`,
      `Digital Adopters are cautious when adopting new technology and old, inefficient experiences have
                      often been digitised rather than reimagining them for new audiences and technology.`,
    ],
    paragraph2Content: [
      `Gen One are the most vocal critics of these technologies: they play a crucial role in identifying
                      issues and pushing for improvements.`,
      `Persisting with a design approach from the Digital Adopter era risks alienating Gen One and
                      limiting the adoption of new technology that can provide greater access and opportunities for all.`,
    ],
  },
  section2: {
    navigation: 'Opportunity',
    navigationLink: 'opportunity',
    title: 'The Opportunity',
    titleNumber: '02',
    bodyTitle: 'In contrast, Gen One have grown up with technology as pervasive and integral to their lives.',
    statContent: [
      {
        src: '/assets/exec-summary/the-opportunity-1.jpg',
        alt: 'Image with text that says Gen one is 51% of Gen One are optimistic about the future of tech to enable  human connection, compared to 37% of Digital Adopters.',
      },
      {
        src: '/assets/exec-summary/the-opportunity-2.jpg',
        alt: `Image with text that quote "Thinking about the actual role technology plays... It's a thing that's everywhere you don't actually realise how important it is." from Chelsea, age 21`,
      },
    ],
    paragraph1Content: [
      `They seamlessly adopt new digital tools into their daily routines and have an expectation for
                      interactions to be fluid, intuitive, and almost imperceptible within their lifestyle. Their usage
                      habits and behaviours reflect a world that is now digital first.`,
      `Despite their ease with technology, Gen One shares the same fundamental life concerns as previous
                      generations, such as financial security, career progression, education, and adapting to life
                      changes.`,
    ],
    paragraph2Content: [
      `Given their openness and enthusiasm for adopting new technology, both public and private sector
                      organisations should actively engage younger Australians as partners, and accelerate technological
                      advancements and innovations for their key life moments.`,
      `In our increasingly digital world, a Gen One first approach enables us to uplift and accelerate
                      our progress toward a more inclusive future for all.`,
    ],
  },
  section3: {
    navigation: 'Research',
    navigationLink: 'research',
    title: 'Our Research',
    titleNumber: '03',
    bodyTitle:
      'R/GA sought to uncover the ambitions, behaviours, motivations and barriers of using digital services among Gen One, and contrast that with Digital Adopters.',
    statContent: [
      {
        src: '/assets/exec-summary/the-research-1.jpg',
        alt: 'Image with text that says 2x Gen One are twice more  likely to identify as neurodiverse or LGBTIQ+ than Digital Adopters',
      },
      {
        src: '/assets/exec-summary/the-research-2.jpg',
        alt: `Image with text that says I think it's entertaining to just kind of sit there and watch someone talk about all this stuff that's going on in their lives.`,
      },
    ],
    paragraph1Content: [
      `In particular, we wanted to know how we could use the distinct behaviours of Gen One to unlock new
  techniques to make digital services more accessible to vulnerable Australians - like First
  Nations, CALD, neurodiverse and LGBTIQ+ Australians.`,
      `In particular, we wanted to know how we could use the distinct behaviours of Gen One to unlock new
  techniques to make digital services more accessible to vulnerable Australians - like First
  Nations, CALD, neurodiverse and LGBTIQ+ Australians.`,
    ],
    paragraph2Content: [
      ` broad cross-section of Australians, and narrowed in on their experience around key life stages
                      like starting or finishing education, moving home or changing jobs.`,
      ` While those born after 1997 are generally considered Digital Natives, our research found that the
                      characteristics of Gen One are even more prevalent among under 18s and present among those in
                      their 20s and 30s - a continuum, not a monolithic group.`,
    ],
  },
}

export const LANG = {
  ...LANG_SECTION,
  title: 'Executive Summary',
  chapterTitle: 'Chapter One',
}

export const NAVIGATION_HEADER = Object.entries(LANG_SECTION)
  .map(([key, { navigation, navigationLink }]) => {
    if (!navigation) return null
    return {
      sectionName: key,
      key: key?.replace('section', ''),
      label: navigation,
      href: `#${navigationLink}`,
    }
  })
  .filter(Boolean)
