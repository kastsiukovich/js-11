var inputData = document.querySelector('#inputTask');
var btnAddTask = document.querySelector('#btn-add');
var ulList = document.querySelector('#list');
var spans = document.getElementsByTagName('span');

//  <li>Task1 <span>Delete</span></li>
function createTask() {
   var inputValue = inputData.value;
   inputData.value = '';


   if (Boolean(inputValue.trim()) === true) {
      var newLi = document.createElement('Li');
      newLi.innerText = inputValue;
      var newSpan = document.createElement('span');
      newSpan.innerText = ' DELETE';
      var date = new Date();
      newSpan.innerText = ' DELETE ' + 'Дата создания: ' + date.toLocaleDateString();

      ulList.append(newLi);
      newLi.append(newSpan);
      removTask();
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

function buttonInfDevelop() {
   var infAboutDeveloper = document.querySelector('.container');
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
   getButt.appendChild(infOfDevelop);
   infOfDevelop.setAttribute('class', 'info');
   infOfDevelop.innerText = 'Информация о разработчике:\n Костюкович Александр Петрович, 10.03.1983';
   infOfDevelop.style.cssText = 'margin-top: 30px; width: auto; display: flex; justify-content: center; border: 1px solid green; font-size: 20px; font-family: Arial; text-align: center;'

}
onclickInfoDev.onclick = onclickButtonInfDevelop;


// function 