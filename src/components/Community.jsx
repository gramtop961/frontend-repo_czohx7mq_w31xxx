import { motion } from 'framer-motion'
import { Discord, Twitter, Send } from 'lucide-react'

export default function Community(){
  const links = [
    { name: 'Discord', href: '#', icon: Discord, color: 'from-indigo-500 to-cyan-400' },
    { name: 'X (Twitter)', href: '#', icon: Twitter, color: 'from-slate-300 to-white' },
    { name: 'Telegram', href: '#', icon: Send, color: 'from-fuchsia-500 to-pink-400' },
  ]

  return (
    <section id="community" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Join the Community</h2>
          <p className="mt-4 text-slate-300">Connect with players, creators, and partners.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {links.map(({name, href, icon:Icon, color}) => (
            <motion.a key={name} href={href} whileHover={{ y: -4 }} className={`rounded-2xl p-6 border border-white/10 bg-gradient-to-br ${color} bg-clip-padding text-white/90` }>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-slate-900/60 backdrop-blur grid place-items-center border border-white/10">
                  <Icon className="text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">{name}</p>
                  <p className="text-white/80 text-sm">Join now</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
