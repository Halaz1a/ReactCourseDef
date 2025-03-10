import app from "../app.module.css"
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import React, { useState } from 'react';

function Task({ name, deleteTask, taskId, editTask  }) {

  //Par défaut pas en mode édition, donc le nom par défaut s'affiche
  const [isEditing, setEdit] = useState(false); 
  //Par défaut le nom est le nom par défaut
  const [newName, setName] = useState(name);

  //Passer en édition
  const startEditing = () => {
    setEdit(true);
  };

  //Mettre à jour le nouveau nom
  const editing = (newName) => {
    setName(newName.target.value);
  };

  //Sauvegarder le nom dans la tâche
  const save = () => {
    if (newName !== name) {
        editTask(taskId, newName); 
    }
    //Désactiver le mode édition
    setEdit(false);  
  };

  return (
    <div className={app.task}>
      <div className={app.informations}>
        <input type="checkbox"></input>
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={editing}
            onBlur={save} //Sauvegarde dès que l'on perd le focus
            autoFocus //Focus automatique quand le champ apparaît
          />
        ) : (
          <p>{newName}</p>
        )}
      </div>
      <div className={app.informations}>
        <span><DeleteIcon onClick={deleteTask} /></span>
        <span><EditIcon onClick={startEditing} /></span>
      </div>
    </div>
  )
}

export default Task