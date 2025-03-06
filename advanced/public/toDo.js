document.addEventListener('DOMContentLoaded', () => {
    /*let myTasks = [];
    myTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(myTasks);*/

    const add = document.getElementById('add');
    add.addEventListener('click', addTask);

    const tasks = document.getElementById('tasks');
    let counter = 1;

    const filters = document.getElementById('filters');
    filters.addEventListener('change', filterTasks);

    function addTask() {
        //Div principale
        const div = document.createElement('div');

        //Div container + texte
        const leftDiv = document.createElement('div');
        const rightDiv = document.createElement('div');

        //Créer la checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = counter;
        
        //Nom de la tâche
        const name = document.createElement('label');
        name.textContent = 'Tâche ' + counter;

        //Former la div container + texte
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(name);

        //Mettre la liste des tâches
        /*myTasks.push(myTask);
        localStorage.setItem("tasks", JSON.stringify(myTasks));
        let myTask = [checkbox, name];*/

        //Icône modificatipn
        const updateIcon = document.createElement('i');
        updateIcon.classList.add('fa-solid', 'fa-pencil');
        updateIcon.title = 'Modifier';
        updateIcon.classList.add('updateIcon');

        //Modification du nom
        updateIcon.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = name.textContent;

            //Remplacer name par le input
            leftDiv.replaceChild(input, name);
            //Mettre le focus sur le nom
            input.focus();

            //Quand on perd le focus, mettre la valeur de l'input à la place du nom
            input.addEventListener('blur', () => {
                name.textContent = input.value; 
                leftDiv.replaceChild(name, input); 
            });
        });

        //Icône suppression
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid', 'fa-trash');
        deleteIcon.title = 'Supprimer';
        deleteIcon.classList.add('deleteIcon');

        //Suppression
        deleteIcon.addEventListener('click', () => {
            div.remove();
            /*myTasks.pop(myTask);
            localStorage.setItem("tasks", JSON.stringify(myTasks));*/
        });
         
        //Former la div d'icônes
        rightDiv.appendChild(updateIcon);
        rightDiv.appendChild(deleteIcon);

        //Former la div principale
        div.appendChild(leftDiv);
        div.appendChild(rightDiv);
        document.getElementById('tasks').appendChild(div);
        div.classList.add('task');

        counter+= 1
    }
    
    //Filtrer les tâches
    function filterTasks() {
        //Récupérer la valeur du filtre
        const filterValue = filters.value;

        //Récupérer toutes les classes task
        const allTasks = document.querySelectorAll('.task');

        //Si c'est ongoing, on cache les finished
        if (filterValue === "ongoing") {
            allTasks.forEach(task => {
                task.style.display = 'flex';
                const checkbox = task.querySelector('input');
                if (checkbox.checked) {
                    task.style.display = 'none'; 
                } 
            });
        } else if (filterValue === "finished") { //Si c'est finished, on cache les ongoing
            allTasks.forEach(task => {
                task.style.display = 'flex';
                const checkbox = task.querySelector('input');
                if (!checkbox.checked) {
                    task.style.display = 'none'; 
                } 
            });
        } else { //Sinon on affiche tout
            allTasks.forEach(task => {
                task.style.display = 'flex';
            });
        }
    }
});