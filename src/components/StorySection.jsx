import { motion } from 'motion/react'

export default function StorySection({ stats }) {
  return (
    <section className="story-section" id="story">
      <motion.div
        className="section-inner"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
      >
        <p className="section-kicker">The atmosphere</p>
        <h2>Ένα site που μοιάζει με άνοιγμα ταινίας.</h2>
        <p className="section-text">
          All VFX and editing by Paraklitos-Konstantinos Foteinakis.
        </p>

        <div className="stat-grid">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                className="stat-card"
                key={item.label}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              >
                <Icon size={24} />
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </motion.article>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
