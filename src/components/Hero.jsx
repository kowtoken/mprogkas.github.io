import { motion } from 'motion/react'

export default function Hero({ movie }) {
  return (
    <section className="hero" id="top">
      <div className="spotlight"></div>
      <div className="fog fog-one"></div>
      <div className="fog fog-two"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 34, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.15, ease: 'easeOut' }}
      >
        <h2 className="cinema-title top-title" data-text={movie.pretitle}>
          {movie.pretitle}
        </h2>

        <p className="eyebrow">{movie.eyebrow}</p>
        <p className="hero-location">
          Άγιος Δημήτριος - Αθήνα 1985-1988
        </p>

        <h1 className="cinema-title main-title" data-text={movie.title}>
          {movie.title}
        </h1>

        <p className="subtitle">{movie.logline}</p>

        <div className="actions">
          <a className="btn" href="#trailer">
            Δες το trailer
          </a>

          <a className="btn" href="#story">
            Μάθε περισσότερα
          </a>
        </div>
      </motion.div>

      <div className="hero-meta">
        Official Film Website ·  © Paraklitos-Konstantinos Foteinakis. All rights reserved.
      </div>

      <div className="rating">
        {movie.rating}
      </div>
    </section>
  )
}