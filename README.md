# To-Do List (React + Tailwind CSS)

Simple To-Do List application built with React and Tailwind CSS. Uses React hooks to manage state and callback props to transfer tasks between status containers (e.g., not-done → in-progress → done).

## Features

- Create and list tasks
- Move tasks between statuses using buttons (status change handled by parent state)
- Responsive UI styled with Tailwind CSS
- Lightweight, no backend required (uses in-memory state)

## Tech Stack

- React (functional components + hooks)
- Tailwind CSS for styling
- Vite / Create React App (project starter — follow your existing setup)

## Project structure (important files)

```
src/
  components/
    printTask.jsx       — task item component (emits status change via callback)
    TaskNotDone.jsx     — lists tasks not done
    ...other components
  App.jsx
  main.jsx
public/
package.json
```

## How status transfer works

- Task item components (e.g., `PrintTask`) do NOT mutate props.
- They receive an `onChangeStatus(id, newStatus)` callback prop from the parent.
- When a button is clicked, the component calls `onChangeStatus` with the task id and desired status.
- The parent component updates its state (e.g., moves the item to a different array or updates the task's `status` property), which re-renders the lists.

Example parent handler (conceptual):

```js
// find task by id, update status, update state arrays
function handleChangeStatus(id, newStatus) {
  setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
}
```

## Setup & Run

1. Install dependencies

   ```bash
   npm install
   ```

   or

   ```bash
   yarn
   ```

2. Start dev server

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

   (or `npm start` / `yarn start` depending on starter)

3. Build for production

   ```bash
   npm run build
   ```

   or

   ```bash
   yarn build
   ```

## Notes

- Ensure you pass valid arrays as props to list components (`contents`, `tasks`, etc.) or provide default `[]` to avoid runtime errors.
- Keep mutation out of components; update state in parent components via setters from `useState`.

## Contributing

- Open issues or PRs for bug fixes or small improvements.
- Keep changes focused and update README if APIs change.

## License

- MIT (or choose appropriate license)
