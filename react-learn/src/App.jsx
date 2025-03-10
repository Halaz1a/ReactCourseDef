import "./App.css"
import app from "./app.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import Button from './components/Button'
import Task from './components/Task'
import Tasks from './components/Tasks'
import React, {useState, useEffect} from 'react'

function App() {
  //tasks est ce qui sera manipulé
  //setTasks permet de mettre à jour tasks
  //On met entre parenthèses dans le useState la valeur initiale
  const [tasks, setTasks] = useState(() => {
    // Essayer de récupérer les tâches depuis le localStorage
    const savedTasks = localStorage.getItem('tasks');

    //Si des tâches sont stockées, on les récupère, sinon on prend un tableau vide
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = () => {
    const index = tasks.length + 1;
    const id = Date.now();
    const name = `Nouvelle tâche ${index}`;
    const task = { id: id, name: name };
    //On ajoute à tasks la nouvelle task grâce à la syntaxe de décomposition
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  const deleteTask = (taskId) => {
    // On filtre la liste des tâches pour supprimer celle dont l'id correspond
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editTask = (taskId, newName) => {
    const updatedTasks = tasks.map(task =>
      //Modification dynamique de task avec la syntaxe de décomposition
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (

    <div className={app.main}>
      <h1>Liste des tâches à réaliser</h1>

      <div className={app.buttons}>
        <Button label="Ajouter" onClick={addTask}/>

        <select className={app.filters}>
          <option value="all">Toutes</option>
          <option value="ongoing">En cours</option>
          <option value="finished">Terminées</option>
        </select>
      </div>

      <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />

      
    </div>

  )
}

export default App