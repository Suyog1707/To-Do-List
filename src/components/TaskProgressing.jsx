import PrintTask from "./PrintTask.jsx";

function TaskProgressing({ SendTask, tasks }) {
    return (
        <div>
            {tasks.map((task) => {

                const convertToDelete = () => {
                    task.status = 'Delete'
                    SendTask;
                }

                const convertToToDo = () => {
                    task.status = 'to-do'
                    SendTask;
                }

                const convertToDone = () => {
                    task.status = 'done'
                    SendTask;
                }

                return task.status === 'in-progress' &&
                    <div key={task.id} className='flex my-3 justify-between'>
                        <PrintTask task={task.taskToDo} />

                        <div className="flex gap-3">
                            <button className='p-1 focus:border-1 rounded-[5px] bg-gray-500 focus:none' onClick={convertToToDo}>To Do</button>
                            <button className='p-1 focus:border-1 rounded-[5px] bg-gray-500 focus:none' onClick={convertToDone}>Done</button>
                            <button className='p-1 focus:border-1 rounded-[5px] bg-gray-500 focus:none' onClick={convertToDelete}>Delete</button>
                        </div>
                    </div>
            })}
        </div>
    );
}

export default TaskProgressing;