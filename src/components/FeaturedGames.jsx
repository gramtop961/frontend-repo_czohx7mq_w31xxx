import { motion } from 'framer-motion'

const games = [
  { title: 'Neon Drift', genre: 'Arcade • Racer', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop' },
  { title: 'Cyber Arena', genre: 'PvP • Tactics', img: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2069&auto=format&fit=crop' },
  { title: 'Quantum Runner', genre: 'Arcade • Platformer', img: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop' },
]

export default function FeaturedGames(){
  return (
    <section id="games" className="py-24 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Games</h2>
          <p className="mt-4 text-slate-300">Jump into competitive experiences designed for speed and skill.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {games.map((g) => (
            <motion.div key={g.title} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="aspect-video overflow-hidden">
                <img src={g.img} alt={g.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <p className="text-white font-semibold text-lg">{g.title}</p>
                <p className="text-cyan-300 text-sm mt-1">{g.genre}</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 text-white">Play</a>
                  <a href="#" className="px-4 py-2 rounded-full bg-white/10 text-white border border-white/10">Details</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
