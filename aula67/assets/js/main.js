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

    function createButtons(li){
        li.innerText += ' ';
        const doneButton = document.createElement('button');
        li.innerText += ' ';
        const delButton = document.createElement('button');
        doneButton.innerText = 'Done';
        delButton.innerText = 'Delete';
        doneButton.setAttribute('class', 'done');
        delButton.setAttribute('class', 'delete');
        li.appendChild(doneButton);
        li.appendChild(delButton);
        
    }

    function addTask(txtInput) {
        const li = createLi();
        li.innerText = txtInput;
        tasks.appendChild(li);
        createButtons(li);
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

        if (el.classList.contains('done')){
            el.classList.add('done-task');
            saveTasks();
        }
    })

    function saveTasks(){
        const liTasks = tasks.querySelectorAll('li');
        const tasksList = [];

        for (let task of liTasks){
            let taskText = task.innerText;
            taskText = taskText.replace('Delete', '').trim();
            taskText = taskText.replace('Done', '').trim();
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

