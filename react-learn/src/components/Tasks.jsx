import app from "../app.module.css"
import Task from './Task';

function Tasks({tasks, deleteTask, editTask}) {
    return (
        <div className={app.tasks}>
            {tasks.map((task) => (
                <Task key={task.id} name={task.name} 
                deleteTask={() => deleteTask(task.id)} editTask={editTask} taskId={task.id}/>
            ))}
        </div>
    )
}

export default Tasks