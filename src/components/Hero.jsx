import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs tracking-wider text-cyan-200">Next‑gen Crypto Gaming</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_4px_24px_rgba(99,102,241,0.3)]">
            Play. Earn. Conquer. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300">Welcome to Gameon’s World.</span>
          </h1>
          <p className="mt-6 text-slate-200/90 text-lg">
            A unified hub for skill‑based games, NFTs, crypto rewards, and a player‑driven economy. Dive into an immersive universe where every match matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#community" className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">Join the Ecosystem</a>
            <a href="#games" className="px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white shadow-[0_0_25px_rgba(99,102,241,0.55)] hover:shadow-[0_0_40px_rgba(99,102,241,0.8)] transition">Play Now</a>
            <a href="#games" className="px-5 py-3 rounded-full bg-white/10 text-white border border-white/10 hover:bg-white/15 transition">Explore Games</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_60%),radial-gradient(ellipse_at_top_left,rgba(244,114,182,0.1),transparent_50%)]" />
    </section>
  )
}
