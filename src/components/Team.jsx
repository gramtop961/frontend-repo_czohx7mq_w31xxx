import { motion } from 'framer-motion'

const team = [
  { name: 'Alex Rivera', role: 'CEO & Co‑Founder', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Mina Chen', role: 'CTO & Game Architect', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop' },
  { name: 'Jamal Ortiz', role: 'Head of Ecosystem', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1887&auto=format&fit=crop' },
  { name: 'Sofia Patel', role: 'Design Director', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1887&auto=format&fit=crop' },
]

export default function Team(){
  return (
    <section id="team" className="py-24 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Team</h2>
          <p className="mt-4 text-slate-300">Builders, gamers, and crypto natives.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m) => (
            <motion.div key={m.name} whileHover={{ y: -5 }} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
              <div className="aspect-square overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <p className="text-white font-semibold">{m.name}</p>
                <p className="text-cyan-300 text-sm mt-1">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
