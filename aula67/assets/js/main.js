    const taskInput = document.querySelector('.task-input');
    const tasks = document.querySelector('.tasks');
    const add = document.querySelector('.add');

    function createLi(){
        const li = document.createElement('li');
        return li;
    }

    taskInput.addEventListener('keypress', function(e){
        if (e.keyCode === 13) {
            if (!taskInput.value) return;
            addTask(taskInput.value);
        }
    });

    function cleanInput(){
        taskInput.value = '';
        taskInput.focus();
    }

    function createDelButton(li){
        li.innerText += ' ';
        const delButton = document.createElement('button');
        delButton.innerText = 'Delete';
        delButton.setAttribute('class', 'delete');
        li.appendChild(delButton);
    }

    /* function createDoneButton(li){
        li.innerText += ' ';
        const doneButton = document.createElement('button');
        doneButton.innerText = 'Done';
        doneButton.setAttribute('class', 'done');
        li.appendChild(doneButton);
    } */

    function addTask(txtInput) {
        const li = createLi();
        li.innerText = txtInput;
        tasks.appendChild(li);
        createDelButton(li);
        //createDoneButton(li);
        cleanInput();
        saveTasks();
    }

    add.addEventListener('click', function(){
        if (!taskInput.value) return;
        addTask(taskInput.value);
        
    });

    document.addEventListener('click', function(e){
        const el = e.target;

        if (el.classList.contains('delete')){
            el.parentElement.remove();
            saveTasks();
        }
    })

    function saveTasks(){
        const liTasks = tasks.querySelectorAll('li');
        const tasksList = [];

        for (let task of liTasks){
            let taskText = task.innerText;
            taskText = taskText.replace('Delete', '').trim();
            tasksList.push(taskText);
        }

        const tasksJSON = JSON.stringify(tasksList);
        localStorage.setItem('tasks', tasksJSON);

    }

    function getTasks(){
        const tasks = localStorage.getItem('tasks');
        const tasksList = JSON.parse(tasks);
        for (let task of tasksList){
            addTask(task);
        }
    }

    getTasks();

