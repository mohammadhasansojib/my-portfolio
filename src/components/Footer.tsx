// components/Footer.tsx

export function Footer() {
  return (
    <footer className="border-t border-muted-foreground/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Hasan. All rights reserved.</p>

        <a href="#home" className="hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}