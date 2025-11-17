import { motion } from 'framer-motion'

const phases = [
  { q: 'Q1', year: '2025', items: ['Core protocol upgrade', 'Marketplace alpha', 'Early tournaments'] },
  { q: 'Q2', year: '2025', items: ['Mobile companion app', 'Staking live', 'Partnership integrations'] },
  { q: 'Q3', year: '2025', items: ['New titles launch', 'Creator tools', 'Esports league'] },
  { q: 'Q4', year: '2025', items: ['DAO governance', 'Cross-chain bridges', 'Global finals'] },
]

export default function Roadmap(){
  return (
    <section id="roadmap" className="py-24 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Roadmap</h2>
          <p className="mt-4 text-slate-300">A bold path forward for a player‑owned future.</p>
        </div>
        <div className="mt-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-500/40 via-indigo-400/40 to-cyan-400/40" />
          <div className="grid md:grid-cols-2 gap-8">
            {phases.map((p, i) => (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay: i*0.05}} className={`relative rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 ${i%2===0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="text-cyan-300 font-semibold">{p.q} • {p.year}</div>
                <ul className="mt-3 space-y-2 text-slate-200">
                  {p.items.map((it, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
