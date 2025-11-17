import { motion } from 'framer-motion'
import { Trophy, Coins, ShoppingBag, Sword, BarChart3 } from 'lucide-react'

const items = [
  { icon: Sword, title: 'Games', desc: 'Skill-based titles with competitive ladders and Web3 rewards.' },
  { icon: Coins, title: 'Token', desc: 'Native utility powering rewards, fees, and governance.' },
  { icon: ShoppingBag, title: 'NFT Marketplace', desc: 'Trade, collect, and upgrade interoperable in-game assets.' },
  { icon: Trophy, title: 'Tournaments', desc: 'Seasonal events with prize pools, sponsorships, and NFTs.' },
  { icon: BarChart3, title: 'Leaderboards', desc: 'Global rankings with anti-cheat and provable fairness.' },
]

export default function Ecosystem(){
  return (
    <section id="ecosystem" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">A unified, player‑owned ecosystem</h2>
          <p className="mt-4 text-slate-300">Built for speed, fairness, and true digital ownership.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="relative rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-fuchsia-500/30 to-cyan-400/30 border border-white/10 grid place-items-center">
                <Icon className="text-cyan-300" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-slate-300">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
