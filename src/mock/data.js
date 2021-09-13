import { nanoid } from 'nanoid'

// HEAD DATA
export const headData = {
  title: 'Virtual Assistant', 
  lang: 'en', 
  description: 'Virtual assistant CV.', 
}

// HERO DATA
export const heroData = {
  title: 'Richard',
  name: 'Hernandez',
  subtitle: 'Professional virtual assistant',
  cta: 'Contact me!',
}

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hard-working and self-motivated virtual assistant with 2+ years experience in website content administration, record-keeping, and various personal assistance tasks.',
  paragraphTwo: 'Able to focus on work without need for supervision.',
  paragraphThree: 'Uploaded and edited content for 5 websites with more than 100,000 monthly visitors each in 2018.',
  paragraphFourth: 'Organized and maintained online company files, invoices, and other digital documentation.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
}

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    title: 'Microsoft Excel',
    img: 'project1.png',
    info: 'Capturing and recording important data, also shortcuts and formula functions.',
    info2: 'Sorting and filtering data and utilizing pivot tables to do a perfect analysis of the information.',
    // url: '', //// if no 'url' will be "#"
    // repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Data miner',
    img: 'project2.jpg',
    info: 'Work on Marketing, IT, Education and Customer Service Projects as requested by the Director of Inside Sales and Customer Service',
    info2: 'Type at least 45 words per minute with accuracy above 85%',
    // url: '',
    // repo: 'https://github.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    title: 'Copywriting',
    img: 'project3.jpg',
    info: 'Own copywriting for assigned device and service brands—specifically taglines, why buys, detail page headlines, digital ads, and retail signage—while adhering to an authentic brand voice.',
    info2: 'Boosted SEO traffic from 1 to 8 million users monthly in 16 months for 3 domains',
    // url: '',
    // repo: 'https://github.com/', // if no repo, the button will not show up
  },
]

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to reach out to me!',
  btn: 'Interact with me',
  email: 'richardhernnadez@protonmail.com',
}

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      // url: '',
    },
    {
      id: nanoid(),
      name: 'twitter',
      // url: '',
    },
    {
      id: nanoid(),
      name: 'facebook',
      // url: '',
    },
  ],
}
