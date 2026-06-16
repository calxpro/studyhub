import { Trash2, Edit2, Check, Calendar, Tag, AlertCircle } from 'lucide-react'

export default function TaskList({ tasks, onDelete, onToggle, onEdit, categories }) {
  const getPriorityColor = (priority) => {
    const colors = {
      high: 'bg-red-100 text-red-700 border-red-300',
      medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
      low: 'bg-green-100 text-green-700 border-green-300',
    }
    return colors[priority] || colors.medium
  }

  const getCategoryColor = (category) => {
    const colors = {
      homework: 'bg-blue-100 text-blue-700',
      activities: 'bg-purple-100 text-purple-700',
      materials: 'bg-green-100 text-green-700',
    }
    return colors[category] || 'bg-gray-100 text-gray-700'
  }

  const formatDate = (dateString) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  const isOverdue = (dueDate) => {
    if (!dueDate) return false
    return new Date(dueDate) < new Date() && new Date(dueDate).toDateString() !== new Date().toDateString()
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="inline-block p-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full mb-4">
          <Check className="w-12 h-12 text-indigo-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">All Caught Up!</h3>
        <p className="text-gray-600">No items in this category. Add one to get started.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {tasks.map(task => (
        <div
          key={task.id}
          className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-5 border border-gray-100 flex items-start gap-4 group ${
            task.completed ? 'opacity-75' : ''
          }`}
        >
          {/* Checkbox */}
          <button
            onClick={() => onToggle(task.id)}
            className={`flex-shrink-0 mt-1 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
              task.completed
                ? 'bg-gradient-to-r from-indigo-500 to-purple-600 border-indigo-500'
                : 'border-gray-300 hover:border-indigo-500'
            }`}
          >
            {task.completed && <Check className="w-4 h-4 text-white" />}
          </button>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    task.completed
                      ? 'line-through text-gray-500'
                      : 'text-gray-900'
                  }`}
                >
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-gray-600 text-sm mb-3">{task.description}</p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 items-center">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(task.category)}`}>
                    {task.category.charAt(0).toUpperCase() + task.category.slice(1)}
                  </span>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                  </span>
                  {task.dueDate && (
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 ${
                      isOverdue(task.dueDate)
                        ? 'bg-red-100 text-red-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      <Calendar className="w-3 h-3" />
                      {formatDate(task.dueDate)}
                      {isOverdue(task.dueDate) && <AlertCircle className="w-3 h-3 ml-1" />}
                    </span>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                <button
                  onClick={() => onEdit(task)}
                  className="p-2 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                  title="Edit"
                >
                  <Edit2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="p-2 hover:bg-red-100 text-red-600 rounded-lg transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
