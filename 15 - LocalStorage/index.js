const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

const clearButton = document.querySelector('.clear');
const checkAllButton = document.querySelector('.checkAll');
const uncheckAllButton = document.querySelector('.uncheckAll');

function addItem(e){
  e.preventDefault();
  const text = addItems.querySelector('[name=item]').value;
  
  const item = {
    text,
    done: false
  };

  addItems.reset();
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

function populateList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e){
  const element = e.target;
  if(element.matches('input')){
    const i = element.dataset.index;
    items[i].done = !items[i].done;
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  }
}

function clearList(){
  items = [];
  populateList(items, itemsList);
  localStorage.removeItem('items');
}

function checkAll(){
  items.forEach(item => item.done = true);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

function uncheckAll(){
  items.forEach(item => item.done = false);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearButton.addEventListener('click', clearList);
checkAllButton.addEventListener('click', checkAll);
uncheckAllButton.addEventListener('click', uncheckAll);

populateList(items, itemsList);