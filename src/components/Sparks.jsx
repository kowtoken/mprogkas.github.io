import { useMemo } from 'react'

function random(min, max) {
  return Math.random() * (max - min) + min
}

export default function Sparks({ amount = 28 }) {
  const sparks = useMemo(() => {
    return Array.from({ length: amount }, (_, index) => ({
      id: index,
      left: random(0, 100),
      duration: random(6, 15),
      delay: random(0, 8),
      opacity: random(0.3, 0.85),
      size: random(1, 2.3),
    }))
  }, [amount])

  return (
    <div className="sparks">
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="spark"
          style={{
            left: `${spark.left}%`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            animationDuration: `${spark.duration}s`,
            animationDelay: `${spark.delay}s`,
            opacity: spark.opacity,
          }}
        />
      ))}
    </div>
  )
}