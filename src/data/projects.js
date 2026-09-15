import dentalImage from '../assets/images/Dental-image.png'
import fitnessImage from '../assets/images/fitness.jpg'
import mobileWorldImage from '../assets/images/project1.jpg'
import greensImage from '../assets/images/project2.jpg'
import forestTourImage from '../assets/images/project3.jpg'
import reactPortfolioImage from '../assets/images/project4.jpg'

export const featuredProjects = [
  {
    id: 'dental-clinic',
    name: 'Dental Clinic Website',
    badge: 'Concept Project',
    description:
      'A modern dental clinic website concept designed to present treatments, doctors, testimonials, gallery and appointment/contact options.',
    tech: ['React', 'CSS', 'Responsive Design'],
    demoUrl: 'https://dental-clinic-web-delta.vercel.app/',
    githubUrl: 'https://github.com/Bala-638/dental-clinic-web',
    image: dentalImage,
    note: 'Concept project — created as a demonstration and not a client project.',
  },

  {
    id: 'gym-trainer',
    name: 'Gym Trainer Website',
    badge: 'Concept Project',
    description:
      'A modern fitness trainer website designed to showcase training programs, services, transformations and contact options.',
    tech: ['React', 'CSS', 'Responsive Design'],
    demoUrl: 'https://fitness-web-navy-one.vercel.app/',
    githubUrl: 'https://github.com/Bala-638/fitness-web',
    image: fitnessImage,
    note: 'Concept project — created as a demonstration and not a client project.',
  },
]

export const otherProjects = [
  {
    id: 'mobile-world',
    name: 'Mobile World',
    description:
      'A product-listing concept site for browsing mobile phones by brand and price.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://bala-638.github.io/Mobile_World/index.html',
    githubUrl: '#',
    image: mobileWorldImage,
  },

  {
    id: 'greens',
    name: 'Greens',
    description:
      'A clean grocery/vegetables ordering concept with category-based browsing.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://e-commerce-greens.vercel.app/',
    githubUrl: '#',
    image: greensImage,
  },

  {
    id: 'forest-tour',
    name: 'Forest Tour Website',
    description:
      'A travel-style landing page built around a forest tourism experience.',
    tech: ['HTML', 'CSS', 'Bootstrap'],
    demoUrl: 'https://bala-638.github.io/Forest/',
    githubUrl: '#',
    image: forestTourImage,
  },

  {
    id: 'react-portfolio',
    name: 'Personal Portfolio (React)',
    description:
      'An earlier React practice project used to learn component-based development.',
    tech: ['React', 'CSS'],
    demoUrl: 'https://bala-638.github.io/Personal-Portfolio/',
    githubUrl: '#',
    image: reactPortfolioImage,
  },
]
