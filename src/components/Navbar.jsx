import { Menu, X, Gamepad2, Rocket, Wallet } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const NavLinks = () => (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
      <li><a href="#about" className="text-slate-200/90 hover:text-white transition">About</a></li>
      <li><a href="#ecosystem" className="text-slate-200/90 hover:text-white transition">Ecosystem</a></li>
      <li><a href="#games" className="text-slate-200/90 hover:text-white transition">Games</a></li>
      <li><a href="#token" className="text-slate-200/90 hover:text-white transition">Token</a></li>
      <li><a href="#roadmap" className="text-slate-200/90 hover:text-white transition">Roadmap</a></li>
      <li><a href="#partners" className="text-slate-200/90 hover:text-white transition">Partners</a></li>
      <li><a href="#team" className="text-slate-200/90 hover:text-white transition">Team</a></li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center">
              <Gamepad2 className="h-5 w-5 text-cyan-300" />
            </div>
          </div>
          <div className="">
            <p className="text-white font-semibold leading-none">Gameon’s World</p>
            <p className="text-xs text-cyan-300/80 leading-none mt-1">Play • Earn • Conquer</p>
          </div>
        </a>

        <nav className="hidden lg:block">
          <NavLinks />
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="#community" className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition border border-white/10">Join the Ecosystem</a>
          <a href="#games" className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition flex items-center gap-2">
            <Rocket className="h-4 w-4" /> Play Now
          </a>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-4">
            <NavLinks />
            <div className="flex flex-col gap-3">
              <a href="#community" className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition border border-white/10 text-center">Join the Ecosystem</a>
              <a href="#games" className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] transition flex items-center gap-2 justify-center">
                <Wallet className="h-4 w-4" /> Explore Games
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
