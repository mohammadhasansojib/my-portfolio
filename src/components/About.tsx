// components/About.tsx

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-3xl px-4 py-16 md:py-20"
    >
      <div className="mb-10 text-center md:mb-14">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          About Me
        </h2>
        <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-primary" />
      </div>

      <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
        <p>
          My journey into programming started with curiosity about how the
          websites and apps I used every day actually worked underneath the
          surface. That curiosity turned into focused, hands-on learning —
          and eventually into a genuine pull toward backend engineering,
          where I could dig into how data flows, how systems are structured,
          and how everything holds together under real-world use.
        </p>

        <p>
          I especially enjoy building things with real complexity underneath
          — authentication systems, APIs that need to handle edge cases
          gracefully, and backend logic that has to actually hold up, not
          just work in a demo. I care about writing code that's easy for
          future-me — or anyone else — to read, understand, and extend
          without fear of breaking something.
        </p>

        <p>
          Outside of code, I enjoy staying active and keeping my mind
          engaged in other ways — whether that's sports, sketching, reading,
          or just exploring something completely unrelated to a screen. I
          find that stepping away from code regularly actually makes me
          sharper when I come back to it.
        </p>

        <p>
          I'd describe myself as curious, detail-oriented, and a little
          stubborn about doing things properly rather than just making them
          work. Right now, I'm focused on landing my first developer role
          and continuing to sharpen my backend skills — and genuinely
          excited about the kind of engineer I'll grow into along the way.
        </p>
      </div>
    </section>
  )
}