import { motion } from 'motion/react'
import { Play } from 'lucide-react'

export default function TrailerSection() {
  return (
    <section className="trailer-section" id="trailer">
      <motion.div
        className="trailer-card"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <div className="trailer-frame">
          <div className="play-orb">
            <Play size={34} fill="currentColor" />
          </div>

          <p>Trailer placeholder</p>
        </div>

        <div className="trailer-copy">
          <p className="section-kicker">Coming soon</p>

          <h2> Το πραγματικό trailer.</h2>

          

          <p className="media-rights">
            Η κινηματογραφική ταινία «ΜΠΡΟΓΚΑΣ», καθώς και το σύνολο του περιεχομένου της — εικόνα, σκηνοθεσία, μοντάζ, οπτικά εφέ, χρωματική επεξεργασία, τίτλοι, γραφικά, ήχος, ψηφιακή επεξεργασία, post-production και κάθε συνοδευτικό οπτικοακουστικό στοιχείο - υλικό 
            — αποτελούν αποκλειστική πνευματική ιδιοκτησία του Παράκλητου-Κωνσταντίνου Φωτεινάκη.

          </p>
        </div>
      </motion.div>
    </section>
  )
}