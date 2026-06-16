import { BookMarked, GraduationCap, Zap, Archive } from 'lucide-react'

export default function Sidebar({ categories, activeCategory, setActiveCategory, view, setView }) {
  const sidebarItems = [
    { id: 'all', label: 'All Items', icon: BookMarked },
    { id: 'homework', label: 'Homework', icon: GraduationCap },
    { id: 'activities', label: 'Activities', icon: Zap },
    { id: 'materials', label: 'Study Materials', icon: Archive },
  ]

  return (
    <div className="w-64 bg-white shadow-lg border-r border-gray-100 p-6 hidden md:flex flex-col h-screen sticky top-0">
      <div className="mb-8">
        <h2 className="text-lg font-bold text-gray-900">Categories</h2>
      </div>

      <nav className="space-y-2 flex-1">
        {sidebarItems.map(item => {
          const Icon = item.icon
          const isActive = view === item.id
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-3">Quick Info</p>
        <div className="space-y-2 text-sm">
          <p className="text-gray-600">Stay organized and focused on your studies!</p>
        </div>
      </div>
    </div>
  )
}
