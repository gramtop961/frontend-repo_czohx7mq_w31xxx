import { motion } from 'framer-motion'
import { Coins, ShieldCheck, Repeat } from 'lucide-react'

export default function TokenUtility(){
  const utilities = [
    { icon: Coins, title: 'Earn', desc: 'Win matches, complete quests, and earn tokens instantly.' },
    { icon: Repeat, title: 'Stake', desc: 'Stake to boost rewards, unlock tiers, and support the network.' },
    { icon: ShieldCheck, title: 'Trade', desc: 'Swap seamlessly within the ecosystem and partner exchanges.' },
  ]

  return (
    <section id="token" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Token Utility</h2>
          <p className="mt-4 text-slate-300">Designed for real utility and sustainable economics.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {utilities.map(({icon:Icon, title, desc}) => (
            <motion.div key={title} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4}} className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
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
