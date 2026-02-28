import PrintTask from "./PrintTask.jsx";

function TaskDone({ SendTask, tasks }) {
    return (
        <div>
            {tasks.map((task) => {

                const convertToDelete = async () => {
                    task.status = 'Delete';
                    await SendTask();
                }

                const convertToToDo = async () => {
                    task.status = 'to-do';
                    await SendTask();
                }

                const convertToProgress = async () => {
                    task.status = 'in-progress';
                    await SendTask();
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