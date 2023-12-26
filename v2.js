// add task
const add_btn = document.getElementById('add_btn');
const all__btn = document.getElementById('all__btn')
const today = document.querySelector('.today'); 
let comp_btn;
let comp_btn_noactive;
let deleteBtn; 

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
    today__task__name.value = 'Click to change';
    

    // Date
    const today__list__date = document.createElement('p')
    today__list__date.classList.add('today__list__date')

    
    let hourse = document.createElement('span').innerHTML = currentHours + ' : ';
    let minutes = document.createElement('span').innerHTML = currentMinutes;

    // delete button
    deleteBtn = document.createElement('div')
    deleteBtn.classList.add('deleteBtn_noactive')

    deleteBtn.addEventListener('click', () => {
        today__list__item.remove()
    })

    today.insertBefore(today__list__item, all__btn)
        today__list__item.append(today__box)
            today__box.append(comp_btn)
            today__box.append(comp_btn_noactive)
            today__box.append(today__task__name)
        today__list__item.append(today__list__date)
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

    doneTask()
    delBtn()
}); 

// date
const currentDate = new Date();

const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();


// add function done task
function doneTask(){
    comp_btn.addEventListener('click', (event) => {
        const clickedElement = event.currentTarget;
        const listItem = clickedElement.closest('.today__list__item');

        clickedElement.style.display = 'none';
        clickedElement.parentElement.querySelector('.comp_btn_noactive').style.display = 'block';
        clickedElement.parentElement.querySelector('.today__task__name').style.color = '#7A7777';
        clickedElement.parentElement.querySelector('.today__task__name').style.textDecoration = 'line-through';
        clickedElement.parentElement.querySelector('.today__task__name').readOnly = 'true';
        

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
        clickedElement.parentElement.querySelector('.today__task__name').readOnly = 'false';
        

        const listDate = listItem.querySelector('.today__list__date');
        listDate.style.color = '#F5F5F5';
        listDate.style.textDecoration = 'none';
    });
}

// delete btn
function delBtn(){
    const delete__btn = document.querySelector('.delete__btn')

    delete__btn.addEventListener('click', () => {
        deleteBtnArray.forEach(element => {
            element.classList.remove('deleteBtn_noactive');
            element.classList.add('deleteBtn');
        });
    });
}