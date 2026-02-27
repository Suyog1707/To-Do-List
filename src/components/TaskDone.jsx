import PrintTask from "./PrintTask.jsx";

function TaskDone({ tasks }) {
    return (
        <div>
            {tasks.map((task) => {

                const convertToDelete = () => {
                    task.status = 'Delete'
                }

                const convertToToDo = () => {
                    task.status = 'to-do'
                }

                const convertToProgress = () => {
                    task.status = 'in-progress'
                }

                return task.status === 'done' &&
                    <div key={task.id} className='flex my-3 justify-between'>
                        <PrintTask task={task.taskToDo} />

                        <div className="flex gap-3">
                            <button className='p-1 focus:border-1 rounded-[5px] bg-gray-500 focus:none' onClick={convertToToDo}>To Do</button>
                            <button className='p-1 focus:border-1 rounded-[5px] bg-gray-500 focus:none' onClick={convertToProgress}>In Progress</button>
                            <button className='p-1 focus:border-1 rounded-[5px] bg-gray-500 focus:none' onClick={convertToDelete}>Delete</button>
                        </div>
                    </div>
            })}
        </div>
    );
}

export default TaskDone;