import { useState } from 'react'
import { BookOpen, Plus, Trash2, Check, Calendar, Tag } from 'lucide-react'
import Sidebar from './components/Sidebar'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import Statistics from './components/Statistics'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [view, setView] = useState('all') // 'all', 'homework', 'activities', 'materials'

  const categories = [
    { id: 'homework', label: 'Homework', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { id: 'activities', label: 'Activities', color: 'bg-purple-100', textColor: 'text-purple-700' },
    { id: 'materials', label: 'Study Materials', color: 'bg-green-100', textColor: 'text-green-700' },
  ]

  const addTask = (task) => {
    if (editingTask) {
      setTasks(tasks.map(t => t.id === editingTask.id ? { ...task, id: editingTask.id } : t))
      setEditingTask(null)
    } else {
      setTasks([...tasks, { ...task, id: Date.now() }])
    }
    setShowForm(false)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  const startEditTask = (task) => {
    setEditingTask(task)
    setShowForm(true)
  }

  const filteredTasks = tasks.filter(task => {
    if (view === 'all') return true
    return task.category === view
  })

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    homework: tasks.filter(t => t.category === 'homework').length,
    activities: tasks.filter(t => t.category === 'activities').length,
    materials: tasks.filter(t => t.category === 'materials').length,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex">
      <Sidebar 
        categories={categories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        view={view}
        setView={setView}
      />
      
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Study Hub</h1>
                <p className="text-gray-600">Organize your learning journey</p>
              </div>
            </div>
            <button
              onClick={() => {
                setEditingTask(null)
                setShowForm(!showForm)
              }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Plus className="w-5 h-5" />
              Add Item
            </button>
          </div>

          {/* Statistics */}
          <Statistics stats={stats} />

          {/* Form */}
          {showForm && (
            <TaskForm
              onSubmit={addTask}
              onCancel={() => {
                setShowForm(false)
                setEditingTask(null)
              }}
              initialData={editingTask}
              categories={categories}
            />
          )}

          {/* Tasks List */}
          <TaskList
            tasks={filteredTasks}
            onDelete={deleteTask}
            onToggle={toggleComplete}
            onEdit={startEditTask}
            categories={categories}
          />
        </div>
      </div>
    </div>
  )
}
