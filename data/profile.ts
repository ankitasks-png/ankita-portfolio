export const profile = {
  name: 'ANKITA S',
  email: 'ankita.s@example.com',
  image: '/ankuhill.jpg',
  resume: '/resume.pdf',
  tagline: 'Inquisitive and geek for anything technical, movies and sports',
  roles: ['CSE Student', 'ML Enthusiast', 'Cybersecurity Beginner', 'Fitness Freak', 'Musician (Singer and Guitarist)'],
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    github: 'https://github.com/',
  },
} as const

export const about = `B.Tech Computer Science Engineering undergraduate at PES University with a strong passion for Artificial Intelligence, Machine Learning, and emerging technologies. I have worked on academic and other projects which include SDN-based traffic monitoring systems, RAG-based recommendation systems, 1D CNNs for EEG signal classification, SAM/PedVision-based medical image segmentation, U-Net-based X-ray reconstruction, adaptive AI systems, and scalable AI content moderation APIs.\n\nThrough these experiences, I've developed strong teamwork, communication, adaptability and problem-solving skills while balancing technical growth with creativity and extracurricular involvement.`

export const highlights = [
  'Participated in hackathons including CTFs, Mystara, IBM Global Datathon, Hack-O-Ween, GRASP and Genesys.',
  'Singer and guitarist with MCoP, performing at Battle of Bands – Aatmatrisha\'25.',
  "Runners-up in Inter-Department Women's Badminton with a strong interest in sports and fitness.",
  'Member of the SIG at CCBD-CDSAML Research Center exploring AI/ML through collaborative learning.',
]

export const achievement = 'CIE SPARK – Top 20 Finalist – Entrepreneurial Ideathon'

export const projects = [
  { name: 'SDN Traffic Monitoring', description: 'A network intelligence system for monitoring and understanding software-defined network traffic.', tech: ['Python', 'SDN', 'Networking'], image: '/projects/sdn-traffic-monitoring.jpg', github: 'https://github.com/' },
  { name: 'PetMatchAI', description: 'A thoughtful recommendation experience that connects people with compatible pets using AI.', tech: ['RAG', 'Python', 'AI/ML'], image: '/projects/petmatch-ai.jpg', github: 'https://github.com/' },
  { name: 'Mission Parakram', description: 'A focused technical exploration built around mission planning, intelligence and resilient systems.', tech: ['Computer Vision', 'AI', 'Research'], image: '/projects/mission-parakram.jpg', github: 'https://github.com/' },
  { name: 'NeuroSense', description: 'An EEG signal classification project exploring neural patterns through deep learning.', tech: ['1D CNN', 'EEG', 'Deep Learning'], image: '/projects/neurosense.jpg', github: 'https://github.com/' },
] as const

export const certifications = [
  { name: 'AI / Machine Learning Certification', issuer: 'Certification preview', image: '/certificates/certificate-1.jpg', href: '/certificates/certificate-1.jpg' },
  { name: 'Cybersecurity Fundamentals', issuer: 'Certification preview', image: '/certificates/certificate-2.jpg', href: '/certificates/certificate-2.jpg' },
  { name: 'Data & Technology Program', issuer: 'Certification preview', image: '/certificates/certificate-3.jpg', href: '/certificates/certificate-3.jpg' },
] as const
