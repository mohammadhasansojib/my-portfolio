// components/Footer.tsx

export function Footer() {
  return (
    <footer className="">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Mohammad Hasan Sojib. All rights reserved.</p>

        <a href="#home" className="hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}