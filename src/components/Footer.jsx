import { Github, Mail, Globe } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="bg-slate-950 border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© 2025 Gameon’s World. All rights reserved.</p>
        <div className="flex items-center gap-4 text-slate-300">
          <a href="#" className="hover:text-white"> <Globe className="h-5 w-5"/> </a>
          <a href="mailto:hello@gameons.world" className="hover:text-white"> <Mail className="h-5 w-5"/> </a>
          <a href="#" className="hover:text-white"> <Github className="h-5 w-5"/> </a>
        </div>
      </div>
    </footer>
  )
}
