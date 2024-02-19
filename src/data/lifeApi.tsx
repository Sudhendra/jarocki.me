import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { XIcon } from '../components/icons/XIcon';
import AmbitLogo from '../images/logos/ambit.png';
import BarepapersLogo from '../images/logos/barepapers.svg';
import BimLogo from '../images/logos/bim.png';
import CDGOLogo from '../images/logos/cdgo.png';
import NortheasternLogo from '../images/logos/Northeastern.jpg';
import EvercastLogo from '../images/logos/evercast.svg';
import Howdy from '../images/logos/howdy.png';
import JarockiMeLogo from '../images/logos/jarocki.svg';
import RapydAILogo from '../images/logos/rapydai.webp';
import MonitoLogo from '../images/logos/monito.svg';
import Consultly from '../images/logos/consultly.svg';
import MobileVikingsLogo from '../images/logos/mv.png';
import RoundsqrLogo from '../images/logos/roundsqr.webp';
import Camp4Logo from '../images/logos/camp4.jpg';
import TastyCloudLogo from '../images/logos/tastycloud.png';
import YearProgressLogo from '../images/logos/yearprogress.svg';
import Minimal from '../images/logos/minimal.svg';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';

export const Name = 'Sudhendra Kambhamettu';
// I used to consider myself a software engineer, but the reality is that I simply enjoy creating things
export const About = (
  <>
    {`I merely aim to explore the universe & my re-current muse has become Artificial Intelligence. If you'd like to get in touch,`}{' '}
    <ExternalLink href="sudhendrakambahmettu@gmail.com">send me an email.</ExternalLink>
  </>
);
export const AboutExtended = `I am an eternal champion of exploration who embodies a free flow of ideas; set out to build & break things for the fun of it.`
export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: any;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'Consultly',
    techStack: ['Side Project', 'Python', 'React.js', 'NLP', 'LLM'],
    description: 'AI recommendation platform for E-commerce.',
    logo: Consultly,
  },
  {
    title: 'Monito',
    techStack: ['Side Project', 'TypeScript', 'Next.js', 'Browser Extension'],
    description: 'Browser extension that records everything happening in a web application.',
    logo: MonitoLogo,
    link: {
      label: 'monito.dev',
      href: 'https://monito.dev',
    },
  },
  {
    title: 'Jarocki.me',
    techStack: ['Side Project', 'Next.js', 'MDX'],
    description: 'My personal website you are currently on, built with Next.js.',
    logo: JarockiMeLogo,
    link: {
      label: 'github.com',
      href: 'https://github.com/BartoszJarocki/web-jarocki-me',
    },
  },
  {
    title: 'Minimal',
    techStack: ['Side Project', 'Next.js', 'Puppeteer'],
    description: 'Minimalist calendars, habit trackers and planners generator.',
    logo: Minimal,
    link: {
      label: 'useminimal.com',
      href: 'https://useminimal.com',
    },
  },
  {
    title: 'Barepapers',
    techStack: ['Side Project', 'Next.js', 'Puppeteer'],
    description: 'Generates beautiful wallpapers using random shapes and gradients.',
    logo: BarepapersLogo,
    link: {
      label: 'barepapers.com',
      href: 'https://barepapers.com',
    },
  },
  {
    title: 'Year progress',
    techStack: ['Side Project', 'TypeScript', 'Next.js'],
    description: 'Tracks current year progress and displays a countdown.',
    logo: YearProgressLogo,
    link: {
      label: 'getyearprogress.com',
      href: 'https://getyearprogress.com',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'Parabol',
    techStack: ['Full Stack Developer', 'TypeScript', 'React', 'Node.js', 'GraphQL'],
    description: 'The Agile meeting co-pilot that delivers better meetings with less effort.',
    logo: Camp4Logo,
    link: {
      label: 'github.com',
      href: 'https://github.com/ParabolInc/parabol',
    },
  },
  {
    title: 'Evercast',
    techStack: [
      'Lead Frontend Developer',
      'From scratch',
      'TypeScript',
      'React',
      'Node.js',
      'GraphQL',
    ],
    description:
      'Creative collaboration platform that combines video conferencing and HD media streaming.',
    logo: EvercastLogo,
    link: {
      label: 'evercast.us',
      href: 'https://www.evercast.us/',
    },
  },
  {
    title: 'Mobile Vikings',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Android application for leading virtual mobile operator in Poland.',
    logo: MobileVikingsLogo,
    link: {
      label: 'mobilevikings.pl',
      href: 'https://mobilevikings.pl/',
    },
  },
  {
    title: 'Howdy',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Howdy is a place for you to join communities you care about.',
    logo: Howdy,
    link: {
      label: 'play.google.com',
      href: 'https://play.google.com/store/apps/details?id=com.howdyhub.howdy',
    },
  },
  {
    title: 'Tastycloud',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Android application for managing and displaying restaurant menus in kiosk mode.',
    logo: TastyCloudLogo,
    link: {
      label: 'tastycloud.fr',
      href: 'https://www.tastycloud.fr/',
    },
  },
  {
    title: 'Ambit',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Android application that helps with sharing your contact details.',
    logo: AmbitLogo,
  },
  {
    title: 'Bim',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Android application that helps with booking a table in a restaurants.',
    logo: BimLogo,
  },
  {
    title: 'Canal Digital GO',
    techStack: ['Lead Android Developer', 'Android', 'Kotlin'],
    description: 'Video streaming mobile application for Canal Digital subscribers.',
    logo: CDGOLogo,
  },
];

export const SocialMedia = [
  { name: 'Twitter', link: 'https://x.com/sudhendrakambh3', icon: XIcon },
  // { name: 'Instagram', link: 'https://www.instagram.com/bartosz.jarocki/', icon: InstagramIcon },
  { name: 'Github', link: 'https://github.com/SudhendraK', icon: GitHubIcon },
  { name: 'LinkedIn', link: 'https://www.linkedin.com/in/sudhendrak', icon: LinkedInIcon },
] as const;

export const Work = [
  {
    company: 'Camp4 Therapeutics',
    title: 'Computational Biology ML R&D',
    logo: Camp4Logo,
    start: 'Jul. 2023',
    end: 'Dec. 2023',
  },
  {
    company: 'Northeastern University',
    title: 'Research Assistant',
    logo: NortheasternLogo,
    start: 'Feb. 2023',
    end: 'Jul. 2023',
  },
  {
    company: 'RAPYD.AI Gmbh',
    title: 'AI Product Developer',
    logo: RapydAILogo,
    start: 'Dec. 2020',
    end: 'Dec. 2021',
  },
  {
    company: 'RoundSqr',
    title: 'Computer Vision Developer',
    logo: RoundsqrLogo,
    start: 'Jun. 2020',
    end: 'Aug. 2020',
  },
] as const;

export const CompaniesLinks = [
  {
    name: 'VisionMedia',
    link: 'https://www.visionmedia.com/',
  },
  {
    name: 'DKMS',
    link: 'https://www.dkms.org/en',
  },
  {
    name: 'AAA',
    link: 'https://www.aaa.com/',
  },
  {
    name: 'PolskaPress',
    link: 'https://polskapress.pl/pl',
  },
  {
    name: 'Canal Digital',
    link: 'https://www.canaldigital.no/',
  },
] as const;

export const Books = [
  {
    name: 'Chain-of-Thought Prompting Elicits Reasoning in LLMs',
    link: 'https://drive.google.com/file/d/1hjPwBC_Vq1WjKs1Jpqzd70Vjd6hWb3lE/view?usp=drive_link',
  },
  {
    name: 'Weak-to-String Generalization: Eliciting Strong Capabilities with Weak Supervision',
    link: 'https://cdn.openai.com/papers/weak-to-strong-generalization.pdf',
  },
  {
    name: 'The Hardware Lottery',
    link: 'https://arxiv.org/pdf/2009.06489.pdf',
  },
  {
    name: 'Evaluating the Zero-shot Robustness of Instruction-tuned Language Models',
    link: 'https://arxiv.org/pdf/2306.11270.pdf',
  },
  {
    name: 'The Future of AI in Space',
    link: 'https://ieeexplore.ieee.org/abstract/document/1667956',
  },
  {
    name: 'QLoRA: Efficient Finetuning of Quantized LLMs',
    link: 'https://arxiv.org/pdf/2305.14314.pdf',
  },
  {
    name: 'Orca 2: Teaching Small Language Models How to Reason',
    link: 'https://arxiv.org/pdf/2311.11045.pdf',
  },
] as const;

export const VideosWorthWatching = [
  {
    name: 'Steve Jobs 2005 Stanford Commencement Address',
    link: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
  },
  {
    name: 'Falcon Heavy & Starman',
    link: 'https://www.youtube.com/watch?v=A0FZIwabctw',
  },
] as const;

export const Podcasts = [
  {
    name: '2nd Place @ Reinvent-the-wheel Hackathon',
    link: 'https://www.linkedin.com/posts/sudhendrak_artficialintelligence-machinelearning-hackathon-activity-6997787097537355776-N6Ij?utm_source=share&utm_medium=member_desktop',
  },
  {
    name: "Built 'The Algorithm X' and Failed!",
    link: 'https://www.thehindu.com/news/national/andhra-pradesh/students-innovation-to-the-fore-at-vit-exhibition/article30053937.ece',
  },
  {
    name: '1st Place in Engineering Clinics @ VIT-AP',
    link: 'https://www.thehindu.com/news/national/andhra-pradesh/students-innovation-to-the-fore-at-vit-exhibition/article30053937.ece',
  },
  {
    name: 'Created & Organized - The Mindhack! Summit (1st ever student led free Global AI summit during COVID)',
    link: 'https://www.youtube.com/@mindhacksummit292/featured',
  },
  {
    name: "Qualified for 'Google Build for India'",
    link: '',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Andrew Wilkinson',
    link: 'https://twitter.com/awilkinson',
  },
  {
    name: 'Oliur',
    link: 'https://twitter.com/UltraLinx',
  },
  {
    name: 'Jack Butcher',
    link: 'https://twitter.com/jackbutcher',
  },
  {
    name: 'Sahil Lavingia',
    link: 'https://twitter.com/shl',
  },
  {
    name: 'James Clear',
    link: 'https://twitter.com/JamesClear',
  },
  {
    name: 'Naval',
    link: 'https://twitter.com/naval',
  },
  {
    name: 'Paul Graham',
    link: 'https://twitter.com/paulg',
  },
  {
    name: "John O'Nolan",
    link: 'https://twitter.com/JohnONolan',
  },
  {
    name: 'Jon Yongfook',
    link: 'https://twitter.com/yongfook',
  },
  {
    name: 'Joel Gascoigne',
    link: 'https://twitter.com/joelgascoigne',
  },
  {
    name: 'Pieter Levels',
    link: 'https://twitter.com/levelsio',
  },
] as const;

export const Blogs = [
  {
    name: 'Summit a Himalayn Peak ❄️',
    link: '',
    checked: true,
  },
  {
    name: 'Run 100km in 2 weeks 🏃‍♀️',
    link: '',
    checked: true,
  },
  {
    name: 'Run in snow 🥶',
    link: '',
    checked: true,
  },
  {
    name: 'Summit Mt. Everest 🏔️',
    link: '',
    checked: false,
  },
  {
    name: 'Finish a sub 4hr Marathon ⏳',
    link: '',
    checked: false,
  },  
  {
    name: 'Make a Podcast? 🎧',
    link: '',
    checked: false,
  }, 
] as const;

export const Quotes = [
  {
    content: 'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content: 'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content: 'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
] as const;

export const Tools = {
  Workstation: [
    {
      title: '14” MacBook Pro, M1 Max, 32GB RAM (2021)',
      description:
        'This laptop is a top-of-the-line machine that can handle virtually any task you throw at it, making it a worthwhile investment for anyone looking for a reliable and powerful laptop that can be used for years.',
      href: 'https://amzn.to/3XkWxhF',
    },
    {
      title: 'Apple Studio Display 5K (Standard Glass)',
      description:
        '5K resolution helps to reduce strain on the eyes and makes it more comfortable to work for long periods of time. Not to mention that it looks great.',
      href: 'https://amzn.to/3NnMlAu',
    },
    {
      title: 'Logitech MX Keys Mini',
      description:
        'Backlit keys, compact design, good battery life and a great typing experience. Matches the space gray color of the laptop almost perfectly.',
      href: 'https://amzn.to/3qSUNQS',
    },
    {
      title: 'Logitech MX Master 3',
      description: "Let's be honest, it just looks great with MX Keys Mini keyboard.",
      href: 'https://amzn.to/3qXIvXl',
    },
    {
      title: 'Apple Magic Trackpad',
      description:
        'Gestures, taps and swipes are something I miss when I work with my laptop closed.',
      href: 'https://amzn.to/3pgETza',
    },
    {
      title: 'Apple Magic Mouse',
      description:
        'Because it looks great and it allows me to post pictures with how badly the charging port is designed.',
      href: 'https://amzn.to/43UuA30',
    },
    {
      title: 'Autonomous ErgoChair Pro',
      description: `If I'm going to slouch in the worst ergonomic position imaginable all day, I might as well do it in an expensive chair.`,
      href: 'https://www.autonomous.ai/office-chairs/ergonomic-chair',
    },
  ],
  Software: [
    {
      title: 'Visual Studio Code',
      description: `I still miss WebStorm but at least VS Code does not consume 1000% CPU when I open it. And to be fair, it's a great editor.`,
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'iTerm2',
      description: `I'm honestly not even sure what features I get with this that aren't just part of the macOS Terminal but it's what I use.`,
      href: 'https://iterm2.com/',
    },
    {
      title: 'TablePlus',
      description: `Great software for working with databases. Has saved me from building about a thousand admin interfaces for my various projects over the years.`,
      href: 'https://tableplus.com/',
    },
    {
      title: 'Figma',
      description: `I'm not a designer but it allows me to quickly mock up interfaces and play with my ideas. One day I'll learn how to use it properly.`,
      href: 'https://www.figma.com/',
    },
    {
      title: 'Notion',
      description: `I use it for everything. I have a separate workspace for each of my projects and I use it to keep track of my tasks, notes, and ideas.`,
      href: 'https://www.notion.so/',
    },
    {
      title: 'Raycast',
      description: `Window management, quick access to my most used apps, and a bunch of other useful features. I use it every day.`,
      href: 'https://www.raycast.com/',
    },
    {
      title: '1Password',
      description: `Not much to say here. It's a great password manager.`,
      href: 'https://1password.com/',
    },
    {
      title: 'Cron',
      description: `Calendar application done right`,
      href: 'https://cron.com/',
    },
  ],
} as const;
