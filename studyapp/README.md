# Study Hub - Modern Study Organization App

A beautiful, clean web application to organize and manage your study materials, homework, and activities.

## Features

✨ **Key Features:**
- 📚 **Task Management** - Create, edit, and delete study items
- 🎯 **Categorization** - Organize into Homework, Activities, and Study Materials
- ⚡ **Priority Levels** - High, Medium, Low priority tagging
- 📅 **Due Dates** - Track deadlines with calendar support
- 📊 **Statistics** - View progress at a glance
- ✅ **Task Completion** - Mark items as complete
- 🎨 **Beautiful UI** - Modern, clean, aesthetic design

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Sidebar.jsx      - Navigation sidebar
│   ├── TaskForm.jsx     - Form to add/edit items
│   ├── TaskList.jsx     - Display all tasks
│   └── Statistics.jsx   - Stats dashboard
├── App.jsx              - Main app component
├── main.jsx             - Entry point
└── index.css            - Global styles
```

## Usage

1. **Add Item** - Click "Add Item" button
2. **Fill Details** - Enter title, description, category, priority, and due date
3. **Manage** - Edit or delete items by hovering over them
4. **Track Progress** - Mark items complete with the checkbox
5. **Filter** - Use the sidebar to filter by category

## Customization

- Colors can be adjusted in `tailwind.config.js`
- Add more categories in `App.jsx`
- Extend functionality with local storage for persistence

## License

MIT - Feel free to use and modify!
