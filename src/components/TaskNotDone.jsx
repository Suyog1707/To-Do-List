import PrintTask from "./PrintTask.jsx";

function TaskNotDone({ SendTask, tasks }) {

    return (
        <div>
            {tasks.map((task) => {

                const convertToDelete = async () => {
                    task.status = 'Delete'
                    await SendTask();
                }

                const convertToProgress = async () => {
                    task.status = 'in-progress'
                    await SendTask();
                }

                const convertToDone = async () => {
                    task.status = 'done'
                    await SendTask();
                }

                if (task.status === 'to-do' && task.taskToDo != '') {
                    return (
                        <div key={task.id} className='flex my-3 justify-between'>
                            <PrintTask task={task.taskToDo} />

                            <div className="flex gap-3">
                                <button className='p-1 focus:border-1 rounded-[5px] bg-gray-500 focus:none' onClick={convertToProgress}>In Progress</button>
                                <button className='p-1 focus:border-1 rounded-[5px] bg-gray-500 focus:none' onClick={convertToDone}>Done</button>
                                <button className='p-1 focus:border-1 rounded-[5px] bg-gray-500 focus:none' onClick={convertToDelete}>Delete</button>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default TaskNotDone;