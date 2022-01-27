var inputData = document.querySelector('#inputTask');
var btnAddTask = document.querySelector('#btn-add');
var ulList = document.querySelector('#list');
var spans = document.getElementsByTagName('span');

//  <li>Task1 <span>Delete</span></li>
function createTask() {
   var inputValue = inputData.value;
   inputData.value = '';


   if (Boolean(inputValue.trim()) === true) {
      var newLi = document.createElement('li');
      newLi.innerText = inputValue;
      // console.log(newLi.firstChild)

      var newSpan = document.createElement('span');
      newSpan.innerText = ' DELETE ';
      var date = new Date();
      var spanDate = document.createElement('p');
      spanDate.innerText = ' Дата создания: ' + date.toLocaleDateString();
      spanDate.style.display = 'inline-block';
      // if (newElCount.className === 'counter') {
      //    ;
      // };
      ulList.append(newLi);
      newLi.append(newSpan);
      newLi.append(spanDate);

      removTask();
      undeline();
   }
}


btnAddTask.onclick = createTask;

function removTask() {
   for (let spanItem of spans) {
      spanItem.onclick = function () {
         spanItem.parentElement.remove();
      }
   }
}
// removTask();
var infAboutDeveloper = document.querySelector('.container');
function buttonInfDevelop() {

   var newChild = document.createElement('button');
   infAboutDeveloper.appendChild(newChild);
   newChild.setAttribute('class', 'btn btn-primary col-4 info-dev');
   newChild.innerText = 'Информация о разработчике';
   newChild.style.cssText = 'color: red; padding: 5xp 5px; width: auto; background-color: yellow; border: 1px solid yellow; margin-top: 30px;';


}
buttonInfDevelop();


var onclickInfoDev = document.querySelector('.info-dev');

function onclickButtonInfDevelop() {
   var getButt = document.querySelector('.container');
   var infOfDevelop = document.createElement('ul');
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
   getButt.appendChild(infOfDevelop);
   infOfDevelop.setAttribute('class', 'info');
   infOfDevelop.innerText = `Информация о разработчике: ${firstName} ${lastName} ${patronymic} ${dateDevel}`;
   infOfDevelop.style.cssText = 'margin-top: 30px; width: auto; display: flex; justify-content: center; border: 1px solid green; font-size: 20px; font-family: Arial; text-align: center;'

}
onclickInfoDev.onclick = onclickButtonInfDevelop;

var liPush = document.getElementsByTagName('li');
var item;
function undeline() {
   for (let li of liPush) {
      li.onclick = function () {
         if (li.style.textDecoration === 'none') {
            li.style.textDecoration = 'line-through';
            item = li.style.textDecoration;
            if (li.style.textDecoration = 'line-through') {
               li.className = 'through';
               // item = li.className;
            }
            counter();
         } else {
            li.style.textDecoration = 'none';
            counter();
         }
      }
   }
}

// var count = document.getElementsByClassName('info-dev');
function counter() {
   var yes = 0;
   var no = 0;

   var newElCount = document.createElement('p');
   infAboutDeveloper.insertBefore(newElCount, onclickInfoDev);
   newElCount.innerText = `Выполненная задача: ${yes}.\n Не выполненная задача: ${no}`;
   for (let c of liPush) {
      // c = function () {
      //    if (item === 'line-through') {
      //       ++yes;
      //    }
      // }
   }
}
counter();


