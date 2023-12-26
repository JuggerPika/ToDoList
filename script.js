// add task
const add_btn = document.getElementById('add_btn');
const all__btn = document.getElementById('all__btn')
const today = document.querySelector('.today'); 
let comp_btn;
let comp_btn_noactive;
let deleteBtnArray = [];
let priorityBtnArray = [];

add_btn.addEventListener('click', function() {
    // create element
    // div
    const today__list__item = document.createElement('div')
    today__list__item.classList.add('today__list__item')

    // div box for img and input
    const today__box = document.createElement('div')
    today__box.classList.add('today__box')

    // img with emptyCircle
    comp_btn = document.createElement('IMG');
    comp_btn.src = './svg/emptyCircle.png';
    comp_btn.classList.add('comp_btn');

    // img with fullCircle
    comp_btn_noactive = document.createElement('IMG')
    comp_btn_noactive.classList.add('comp_btn_noactive')
    comp_btn_noactive.src = './svg/fullCircle.png'

    // input
    const today__task__name = document.createElement('input')
    today__task__name.classList.add('today__task__name')
    today__task__name.value = 'Task';
    today__task__name.type = 'textarea'
    today__task__name.select();
    

    // Date
    const today__list__date = document.createElement('p')
    today__list__date.classList.add('today__list__date')

    
    let hourse = document.createElement('span').innerHTML = currentHours + ' : ';
    let minutes = document.createElement('span').innerHTML = currentMinutes;

    // delete button
    const deleteBtn = document.createElement('IMG')
    deleteBtn.src = './svg/trash.png'
    deleteBtn.classList.add('deleteBtn_noactive')

    deleteBtn.addEventListener('click', () => {
        today__list__item.remove();
        const index = deleteBtnArray.indexOf(this);
        if (index > -1) {
            deleteBtnArray.splice(index, 1);
        }
    });
    
    // priority button
    const priortityBtn = document.createElement('IMG')
    priortityBtn.src = "./svg/priority.png"
    priortityBtn.classList.add('priortityBtn_noactive')
    let isButtonColored = false;

    priortityBtn.addEventListener('click', function () {
        const index = priorityBtnArray.indexOf(this);
        if (index > -1) {
            priorityBtnArray.splice(index, 1);
        }
        
        if (isButtonColored) {
            today__list__date.style.color = '#F5F5F5';
            today__task__name.style.color = '#F5F5F5';
            priortityBtn.src = "./svg/priority.png"
            isButtonColored = false
        } else {
            today__list__date.style.color = '#FF7276';
            today__task__name.style.color = '#FF7276';
            priortityBtn.src = "./svg/priority_red.png"
            isButtonColored = true
        }
    });


    // insert block
    today.insertBefore(today__list__item, all__btn)
    today__list__item.append(today__box)
    today__box.append(comp_btn)
    today__box.append(comp_btn_noactive)
    today__box.append(today__task__name)
    today__list__item.append(today__list__date)
    today__list__date.append(priortityBtn)
    // if hourse < 10 
    if(currentHours < 10){
        hourse = hourse.innerHTML = '0' + currentHours + ' : ';
        today__list__date.append(hourse)
    }
    else{
        today__list__date.append(hourse)
    }
    // if minutes
    if(currentMinutes < 10){
        minutes = hourse.innerHTML = '0' + currentMinutes;
        today__list__date.append(minutes)
    }
    else{
        today__list__date.append(minutes)
    }   
    today__list__date.append(deleteBtn)
    deleteBtnArray.push(deleteBtn);

    doneTask()
    delBtn()
    priorBtn()
    
}); 

// date
const currentDate = new Date();

const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();

// present day
const day = currentDate.getDate();   
const month = currentDate.getMonth() + 1; 
const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
const monthName = months[currentDate.getMonth()];
const year = currentDate.getFullYear(); 



const today__date = document.querySelector('.today__date').innerHTML = monthName + " " + day + ', ' + year;

// add function done task
function doneTask(){
    comp_btn.addEventListener('click', (event) => {
        const clickedElement = event.currentTarget;
        const listItem = clickedElement.closest('.today__list__item');

        clickedElement.style.display = 'none';
        clickedElement.parentElement.querySelector('.comp_btn_noactive').style.display = 'block';
        clickedElement.parentElement.querySelector('.today__task__name').style.color = '#7A7777';
        clickedElement.parentElement.querySelector('.today__task__name').style.textDecoration = 'line-through';
        


        const listDate = listItem.querySelector('.today__list__date');
        listDate.style.color = '#7A7777';
        listDate.style.textDecoration = 'line-through';
    });

    comp_btn_noactive.addEventListener('click', (event) => {
        const clickedElement = event.currentTarget;
        const listItem = clickedElement.closest('.today__list__item');

        clickedElement.style.display = 'none';
        clickedElement.parentElement.querySelector('.comp_btn').style.display = 'block';
        clickedElement.parentElement.querySelector('.today__task__name').style.color = '#F5F5F5';
        clickedElement.parentElement.querySelector('.today__task__name').style.textDecoration = 'none';
        

        const listDate = listItem.querySelector('.today__list__date');
        listDate.style.color = '#F5F5F5';
        listDate.style.textDecoration = 'none';
    });
}

// delete btn
function delBtn(){
    const delete__btn = document.querySelector('.delete__btn')
    const delete__btn_second = document.querySelector('.delete__btn_second')
    const priority__btn = document.querySelector('.priority__btn')

    delete__btn.addEventListener('click', () => {
        deleteBtnArray.forEach(element => {
            element.classList.remove('deleteBtn_noactive');
            element.classList.add('deleteBtn');
        });

        add_btn.style.display = 'none'
        delete__btn.style.display = 'none'
        delete__btn_second.style.display = 'block'
        priority__btn.style.display = 'none'
        all__btn.style.justifyContent = 'center'

    });

    delete__btn_second.addEventListener('click', () => {
        deleteBtnArray.forEach(element => {
            element.classList.add('deleteBtn_noactive');
            element.classList.remove('deleteBtn');
        });

        add_btn.style.display = 'block'
        delete__btn.style.display = 'block'
        delete__btn_second.style.display = 'none'
        priority__btn.style.display = 'block'
        all__btn.style.justifyContent = 'space-between'
    })
}


// priority btn
function priorBtn() {
    const priority__btn = document.querySelector('.priority__btn')
    const delete__btn = document.querySelector('.delete__btn')
    const priority__btn_second = document.querySelector('.priority__btn_second')

    priority__btn.addEventListener('click', () => {
        const elements = document.querySelectorAll('.priortityBtn_noactive');
        elements.forEach(element => {
            element.classList.remove('priortityBtn_noactive');
            element.classList.add('priortityBtn');
        });

        delete__btn.style.display = 'none'
        priority__btn.style.display = 'none'
        priority__btn_second.style.display = 'block'
        add_btn.style.display = 'none'
        all__btn.style.justifyContent = 'center'
    });

    priority__btn_second.addEventListener('click', () => {
        const elements = document.querySelectorAll('.priortityBtn');
        elements.forEach(element => {
            element.classList.remove('priortityBtn');
            element.classList.add('priortityBtn_noactive');
        });

        delete__btn.style.display = 'block'
        priority__btn.style.display = 'block'
        priority__btn_second.style.display = 'none'
        add_btn.style.display = 'block'
        all__btn.style.justifyContent = 'space-between'
    });
}

// drag item
document.addEventListener('DOMContentLoaded', function () {
    let isDraggable = true;

    const sortable = new Draggable.Sortable(document.querySelector('.today'), {
        draggable: '.today__list__item',
        handle: '.today__box',
        mirror: {
            appendTo: 'body',
            constrainDimensions: true,
        },
    });

    function updateOrder() {
        const items = document.querySelectorAll('.today__list__item');

    }

    sortable.on('sortable:sort', (event) => {
        const { over, overContainer } = event;
        if (over && overContainer) {
            over.style.transition = 'transform 0.1s ease-in-out';
        }
    });

    sortable.on('drag:stop', (event) => {
        const { over } = event;
        if (over) {
            over.style.transition = '';
        }
        updateOrder();
    });

    document.addEventListener('mousedown', (event) => {
        const isInput = event.target.tagName.toLowerCase() === 'input';
        isDraggable = !isInput;
    });

    sortable.on('drag:start', (event) => {
        if (!isDraggable) {
            event.cancel();
        }
    });

    updateOrder();
});
