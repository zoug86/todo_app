import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';


function EditTodoForm({ id, task, isEditing, editTodo, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, value);
            toggleEditForm();
            reset();
        }}
            style={{ marginLeft: "1rem", wirth: "50%" }}

        >
            <TextField onChange={handleChange} margin="normal" value={value} fullWidth autoFocus />
        </form >
    )
}

export default EditTodoForm;