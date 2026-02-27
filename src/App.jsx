import { useState } from 'react';
import './App.css';
import TaskNotDone from './components/TaskNotDone';
import TaskProgressing from './components/TaskProgressing';
import TaskDone from './components/TaskDone';

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('taskToDo')) || []);

  const [inputTask, setInputTask] = useState('');

  const addToTask = (event) => {
    setInputTask(event.target.value);
  };

  async function SendTask() {
    setInputTask('');

    const newTask = [
      ...tasks,
      {
        taskToDo: inputTask,
        status: 'to-do',
        id: crypto.randomUUID()
      }
    ]

    setTasks(newTask);
  }

  function handleKeyDown(event) {

    if (event.key === 'Enter') {
      SendTask();
    } else if (event.key === 'Escape') {
      setInputTask('');
    }

  }

  const reset = () => {
    setTasks([]);
    setInputTask('');
  }

  return (
    <div className='flex flex-col reletive items-center min-h-screen'>
      <h1 className='text-4xl text-8xl text-4xl text-gray-100 my-6 font-bold'>To Do List</h1>

      <div className='flex w-[50%] px-2 my-6 justify-between'>
        <input className='w-full text-white p-3 rounded-[25px] bg-black'
          type='text'
          onChange={addToTask}
          placeholder='Enter the Task to do'
          value={inputTask}
          onKeyDown={handleKeyDown}
        />

        <div className='flex p-2 gap-3'>
          <button className='p-2 focus:border-1 rounded-[5px] bg-white focus:none' onClick={SendTask}>add</button>
          <button className='p-2 focus:border-1 rounded-[5px] bg-white focus:none' onClick={reset} >reset</button>
        </div>
      </div>



      <div className='flex flex-col w-full px-[200px] justify-start gap-y-6 my-6'>
        <div className='flex flex-col'>
          <span className='flex flex-col items-center text-4xl text-gray-300 font-bold'>Task to be Done</span>
          <TaskNotDone SendTask={SendTask} tasks={tasks} />
        </div>

        <div className='flex flex-col'>
          <span className='flex flex-col items-center text-4xl text-gray-300 font-bold'>Task in Progress</span>
          <TaskProgressing SendTask={SendTask} tasks={tasks} />
        </div>

        <div className='flex flex-col'>
          <span className='flex flex-col items-center text-4xl text-gray-300 font-bold' >Task Done</span>
          <TaskDone SendTask={SendTask} tasks={tasks} />
        </div>
      </div>

    </div>
  );
}

export default App
