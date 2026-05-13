import { Film, Play, Skull } from 'lucide-react'
import Hero from './components/Hero.jsx'
import FilmGrain from './components/FilmGrain.jsx'
import Sparks from './components/Sparks.jsx'
import TrailerSection from './components/TrailerSection.jsx'
import StorySection from './components/StorySection.jsx'
import LegalFooter from './components/LegalFooter.jsx'

const movie = {
  pretitle: 'THE MOVIE',
  title: 'ΜΠΡΟΓΚΑΣ',
  eyebrow: 'A short film by Παράκλητος-Κωνσταντίνος Φωτεινάκης',
  logline: 'Μια ιστορία που κινείται ανάμεσα στο φως και στο σκοτάδι.',
  year: '1985-1988',
  rating: '16+',
  genre: 'Mystery / Drama',
}

const stats = [
  { icon: Film, label: 'Format', value: 'Short Film' },
  { icon: Skull, label: 'Mood', value: 'Cinematic' },
  { icon: Play, label: 'Trailer', value: 'Coming Soon' },
]

export default function App() {
  return (
    <main className="site-shell">
      <FilmGrain />
      <Sparks amount={28} />
      <Hero movie={movie} />
      <StorySection stats={stats} />
      <TrailerSection />
      <LegalFooter />
    </main>
  )
}