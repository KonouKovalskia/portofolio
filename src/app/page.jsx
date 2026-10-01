import Image from 'next/image'
import Orbits from '@/components/Orbits'
import { projects } from '@/data/projects'

const EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'faizghiffari@gmail.com'

const contacts = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: 'GitHub', value: 'KonouKovalskia', href: 'https://github.com/KonouKovalskia' },
  { label: 'LinkedIn', value: 'Muhammad Faiz Ghiffari', href: 'https://www.linkedin.com/in/muhammad-faiz-ghiffari-729b6524b/' },
]

export default function Home() {
  return (
    <>
      <header className="hero">
        <Orbits />
        <nav className="top" aria-label="Sections">
          <span>Muhammad Faiz Ghiffari</span>
          <span className="top-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </span>
        </nav>
        <div className="center">
          <h1>Konou</h1>
          <p>Frontend developer in Bandung</p>
        </div>
        <p className="lede">
          I build web products people use, and I&apos;m looking for a frontend
          internship. <a href={`mailto:${EMAIL}`}>Email me</a>
        </p>
      </header>

      <main className="path">
        <section id="work">
          <h2>Work</h2>
          {projects.map(p => (
            <article className="project" id={p.slug} key={p.slug}>
              <a className="shot" href={p.url} target="_blank" rel="noopener noreferrer" tabIndex={-1} aria-hidden="true">
                <Image
                  src={p.image}
                  alt=""
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  sizes="(max-width: 1100px) 100vw, 1000px"
                />
              </a>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p className="meta">
                {p.stack.join(', ')}.{' '}
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  Open {new URL(p.url).hostname}
                </a>
              </p>
            </article>
          ))}
        </section>

        <section id="about">
          <h2>About</h2>
          <div className="about">
            <Image
              className="portrait"
              src="/images/Konou.png"
              alt="Portrait of Muhammad Faiz Ghiffari"
              width={1094}
              height={1163}
              sizes="240px"
            />
            <div>
              <p>
                I&apos;m an IT student at Telkom University, focused on frontend. I care
                about interfaces that are clear on the first visit, and code I can still
                read six months later.
              </p>
              <p>
                I work mostly in Next.js and React with Tailwind, Supabase and Vercel,
                and design in Figma before I build. I want an internship on a team that
                ships to real users.
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <ul className="contact-list">
            {contacts.map(c => (
              <li key={c.label}>
                <span>{c.label}</span>
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>© 2026 Muhammad Faiz Ghiffari</footer>
    </>
  )
}
