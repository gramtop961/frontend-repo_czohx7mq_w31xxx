import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="relative py-24 bg-slate-950/60">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] opacity-5 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Powering the future of play</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Gameon’s World unifies competitive gaming, NFTs, and crypto rails into one seamless experience. Earn real value from your skills, own your in‑game assets, and participate in a thriving player economy.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
