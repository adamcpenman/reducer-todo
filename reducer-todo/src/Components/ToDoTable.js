import React from 'react';

function ToDoTable(props){
return (
    <div>
        <body>
            { props.tasks.length > 0 ? (
                props.tasks.map(task => (
                    <div key={task.id} >
                    {task.item}
                    {task.completed}
                    <button onClick={() => props.editRow(task)}>
                        Edit
                    </button>
                    <button onClick={() => props.deleteRow(task.id)}>
                        Delete
                    </button>
                    
                    </div>
                ))
            ) : (
                <div colSpan={1}>No Tasks!</div>
            )
            
            }

        </body>
    </div>
)
}

export default ToDoTable;