'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Download, Mail, Sparkles } from 'lucide-react'
import { about, achievement, certifications, highlights, profile, projects } from '@/data/profile'

const navItems = ['DASHBOARD', 'WHO AM I?', 'MY PROJECTS', 'CERTIFICATIONS', 'CONTACT ME']

const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } }

function SectionHeading({ children, eyebrow }: { children: React.ReactNode; eyebrow: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{children}</h2></div>
}

function SocialLinks() {
  return <div className="social-links" aria-label="Social links">
    <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
    <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
    <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
  </div>
}

function MissingImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false)
  return failed ? <div className={`image-fallback ${className || ''}`} aria-label={alt}><span>AS</span><small>ASSET READY</small></div> : <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  return <motion.article className="project-card" variants={reveal} whileHover={{ y: -8 }}>
    <div className="project-image"><MissingImage src={project.image} alt={`${project.name} preview`} /><span className="project-index">0{index + 1}</span></div>
    <div className="project-copy"><div><p className="card-kicker">SELECTED WORK</p><h3>{project.name}</h3></div><ArrowUpRight size={18} className="muted-icon" /></div>
    <p className="card-description">{project.description}</p>
    <div className="tag-row">{project.tech.map((tag) => <span key={tag}>{tag}</span>)}</div>
    <a className="text-link" href={project.github} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={15} /></a>
  </motion.article>
}

export default function Page() {
  const [roleIndex, setRoleIndex] = useState(0)
  const roles = profile.roles
  useEffect(() => { const interval = window.setInterval(() => setRoleIndex((current) => (current + 1) % roles.length), 2500); return () => window.clearInterval(interval) }, [roles.length])

  return <main>
    <nav className="top-nav" aria-label="Main navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-').replace('?', '')}`}>{item}</a>)}</nav>
    <div className="ambient ambient-red" /><div className="ambient ambient-cyan" />

    <section id="dashboard" className="hero section-wrap">
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}><div className="image-shell"><MissingImage src={profile.image} alt="Portrait of Ankita S" /></div><span className="orbit-label">CS / AI / ML</span></motion.div>
      <motion.div className="hero-copy" initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18, duration: 0.7 }}>
        <div className="hero-overline"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</div>
        <h1>{profile.name}</h1>
        <div className="role-line"><span className="role-prefix">//</span><AnimatePresence mode="wait"><motion.span key={roles[roleIndex]} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>{roles[roleIndex]}</motion.span></AnimatePresence></div>
        <p className="tagline">{profile.tagline}</p><SocialLinks />
        <a className="resume-button" href={profile.resume} target="_blank" rel="noreferrer"><Download size={16} /> RESUME <span>↗</span></a>
      </motion.div>
      <div className="hero-meta"><span>01 / 05</span><span>SCROLL TO EXPLORE <span className="scroll-line" /></span></div>
    </section>

    <motion.section id="who-am-i" className="section-wrap content-section" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <SectionHeading eyebrow="A LITTLE CONTEXT">WHO AM I?</SectionHeading><div className="about-grid"><div className="about-intro">{about.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="highlight-panel"><div className="panel-label"><Sparkles size={15} /> BEYOND THE SCREEN</div>{highlights.map((item, index) => <motion.div className="highlight-item" key={item} whileHover={{ x: 5 }}><span>0{index + 1}</span><p>{item}</p></motion.div>)}<div className="achievement"><span>FEATURED</span><strong>{achievement}</strong></div></div></div>
    </motion.section>

    <motion.section id="my-projects" className="section-wrap content-section projects-section" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.14 }}>
      <SectionHeading eyebrow="THINGS I HAVE BUILT">MY PROJECTS</SectionHeading><div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
    </motion.section>

    <motion.section id="certifications" className="section-wrap content-section" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
      <SectionHeading eyebrow="LEARNING IN PUBLIC">CERTIFICATIONS</SectionHeading><div className="cert-grid">{certifications.map((certificate) => <motion.a className="cert-card" key={certificate.name} href={certificate.href} target="_blank" rel="noreferrer" whileHover={{ y: -6 }}><div className="cert-image"><MissingImage src={certificate.image} alt={`${certificate.name} preview`} /><span>VIEW ↗</span></div><div className="cert-copy"><h3>{certificate.name}</h3><p>{certificate.issuer}</p></div></motion.a>)}</div></motion.section>

    <motion.section id="contact-me" className="section-wrap contact-section" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
      <SectionHeading eyebrow="LET'S MAKE SOMETHING">CONTACT ME</SectionHeading><div className="contact-card"><div><p className="contact-label">OPEN TO GOOD CONVERSATIONS</p><h3>I&apos;d love to collaborate on AI, ML, research, hackathons, or innovative software projects.</h3></div><div className="contact-actions"><a className="email-link" href={`mailto:${profile.email}`}><Mail size={19} /> {profile.email}</a><SocialLinks /></div></div><footer><span>ANKITA S / PORTFOLIO</span><span>BUILT WITH CURIOSITY · 2025</span></footer></motion.section>
  </main>
}
