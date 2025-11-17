import { motion } from 'framer-motion'

const partners = [
  { name: 'Astra Labs' },
  { name: 'Nova Chain' },
  { name: 'MetaForge' },
  { name: 'GlitchX' },
  { name: 'Hyperplay' },
  { name: 'Vector Works' },
]

export default function Partners(){
  return (
    <section id="partners" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Partners & Investors</h2>
          <p className="mt-4 text-slate-300">Backed by pioneers in gaming, crypto, and infrastructure.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {partners.map((p, i) => (
            <motion.div key={p.name} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.4, delay:i*0.03}} className="h-20 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-slate-300 hover:text-white hover:bg-white/10">
              <span className="tracking-wide">{p.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
