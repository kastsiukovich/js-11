var inputData = document.querySelector('#inputTask');
var btnAddTask = document.querySelector('#btn-add');
var ulList = document.querySelector('#list');
var spans = document.getElementsByTagName('span');
var span = document.getElementsByClassName('span')[0];
var container = document.querySelector('.container');


function createTask() {
   var inputValue = inputData.value;
   inputData.value = '';

   if (Boolean(inputValue.trim()) === true) {
      inputData.style.borderColor = 'green';
      span.innerText = ''
      var newLi = document.createElement('li');
      newLi.innerText = inputValue;

      var newSpan = document.createElement('span');
      newSpan.innerText = ' DELETE ';
      var date = new Date();
      var spanDate = document.createElement('p');
      spanDate.innerText = ' Дата создания: ' + date.toLocaleDateString();
      spanDate.style.display = 'inline-block';

      ulList.append(newLi);
      newLi.append(newSpan);
      newLi.append(spanDate);
      undeline();

   } else {
      inputData.style.borderColor = 'red';
      span.innerText = 'Вы не ввели название task!'
   }
   removTask();
   tasksCounter()
}

btnAddTask.onclick = createTask;

function removTask() {
   for (let spanItem of spans) {
      spanItem.onclick = function () {
         spanItem.parentElement.remove();
         tasksCounter()
      }
   }
}
removTask()

var infAboutDeveloper = document.querySelector('body');
function buttonInfDevelop() {
   var newChild = document.createElement('button');
   infAboutDeveloper.append(newChild);
   newChild.setAttribute('class', 'btn btn-primary col-4 info-dev');
   newChild.innerText = 'Информация о разработчике';
   newChild.style.cssText = 'color: red; padding: 5xp 5px; width: auto; background-color: yellow; border: 1px solid yellow; margin-top: 30px;';
}
buttonInfDevelop();


var onclickInfoDev = document.querySelector('.info-dev');
function onclickButtonInfDevelop() {
   var getButt = document.querySelector('body');
   var firstName = prompt('Введите фамилию', '');
   var lastName = prompt('Введите имя', '');
   var patronymic = prompt('Введите отчеставо', '');
   var dateDevel = prompt('Введите дату рождения', '');
   if (firstName === null) {
      firstName = '';
   }
   if (lastName === null) {
      lastName = '';
   }
   if (patronymic === null) {
      patronymic = '';
   }
   if (dateDevel === null) {
      dateDevel = '';
   }

   var infOfDevelop = document.createElement('p');
   getButt.appendChild(infOfDevelop);
   infOfDevelop.setAttribute('class', 'info');
   infOfDevelop.innerText = `Информация о разработчике: ${firstName} ${lastName} ${patronymic} ${dateDevel}`;
   infOfDevelop.style.cssText = 'margin-top: 30px; width: auto; display: flex; justify-content: center; border: 1px solid green; font-size: 20px; font-family: Arial; text-align: center;'
}
onclickInfoDev.onclick = onclickButtonInfDevelop;

var liPush = document.getElementsByTagName('li');
function undeline() {
   for (let li of liPush) {
      li.onclick = function () {
         if (li.className !== 'through') {
            li.style.textDecoration = 'line-through'
            li.className = 'through';
         } else {
            li.style.textDecoration = 'none';
            li.className = '';
         }
         tasksCounter()
      }
   }
}
undeline()


function tasksCounter() {
   var closedTasks = document.getElementsByClassName('through').length;
   var allTasks = document.getElementsByTagName('li').length;
   var activeTasks = allTasks - closedTasks;
   if (document.getElementsByClassName('newP').length === 0) {
      var p = document.createElement('p');
      p.setAttribute('class', 'newP');
      p.append(`Выполнено задач: ${closedTasks}. Активные задачи: ${activeTasks}`);
      container.append(p);
   } else {
      document.getElementsByClassName('newP')[0].innerText = `Выполнено задач: ${closedTasks}. Активные задачи: ${activeTasks}`;
   }
}
tasksCounter()
