'use client'

import { motion } from 'framer-motion'
import StatsCounter from '@/components/ui/stats-counter'
import { useStats } from '@/hooks/use-stats'

export default function StatsSection() {
  const { data: stats, isLoading } = useStats()

  if (isLoading) return null

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className={`text-4xl lg:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                <StatsCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
