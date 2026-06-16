import { BarChart3, CheckCircle, BookOpen, Zap, Archive } from 'lucide-react'

export default function Statistics({ stats }) {
  const statCards = [
    {
      label: 'Total Items',
      value: stats.total,
      icon: BookOpen,
      color: 'from-blue-500 to-blue-600',
      lightColor: 'bg-blue-100',
    },
    {
      label: 'Completed',
      value: stats.completed,
      icon: CheckCircle,
      color: 'from-green-500 to-green-600',
      lightColor: 'bg-green-100',
    },
    {
      label: 'Homework',
      value: stats.homework,
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      lightColor: 'bg-purple-100',
    },
    {
      label: 'Activities',
      value: stats.activities,
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      lightColor: 'bg-yellow-100',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statCards.map((card, index) => {
        const Icon = card.icon
        return (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium mb-1">{card.label}</p>
                <p className="text-3xl font-bold text-gray-900">{card.value}</p>
              </div>
              <div className={`bg-gradient-to-br ${card.color} p-3 rounded-lg`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
