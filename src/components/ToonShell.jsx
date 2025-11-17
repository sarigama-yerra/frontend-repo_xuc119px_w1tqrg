import { Link, NavLink } from 'react-router-dom'

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-full border-4 border-black/70 shadow-[4px_4px_0_0_rgba(0,0,0,0.6)] transition-all duration-200 text-sm md:text-base ${
          isActive
            ? 'bg-white text-black'
            : 'bg-yellow-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

export default function ToonShell({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-green-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-60 pointer-events-none" aria-hidden>
        <div className="w-[120vw] h-[120vw] rounded-full bg-[radial-gradient(circle_at_30%_20%,#bde7ff,transparent_50%)] absolute -top-40 -left-20" />
        <div className="w-[120vw] h-[120vw] rounded-full bg-[radial-gradient(circle_at_70%_60%,#ffd6e7,transparent_50%)] absolute -bottom-40 -right-20" />
      </div>

      <header className="relative z-10 px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.6)] flex items-center justify-center">
            <span className="text-3xl">🤖</span>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-black drop-shadow-[2px_2px_0_rgba(255,255,255,0.9)]">
              Ayushman AI
            </div>
            <div className="text-xs md:text-sm text-black/70 -mt-1">Toon Health Assistant</div>
          </div>
        </Link>

        <nav className="flex gap-2 md:gap-3">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/chat">Chat</NavItem>
          <NavItem to="/symptoms">Symptoms</NavItem>
          <NavItem to="/faq">FAQ</NavItem>
          <NavItem to="/connect">Doctor</NavItem>
        </nav>
      </header>

      <main className="relative z-10 pb-16">{children}</main>

      <footer className="relative z-10 px-4 md:px-8 pb-8 text-center text-sm text-black/70">
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur rounded-full px-4 py-2 border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]">
          <span className="font-bold">Powered by Sarvam</span>
          <span className="text-xs">• prototype UI</span>
        </div>
      </footer>
    </div>
  )
}
