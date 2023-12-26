// add task
const add_btn = document.getElementById('add_btn');
const clone__item = document.getElementById('clone__item');
const today = document.querySelector('.today'); 
let cloneItem;

add_btn.addEventListener('click', function() {
    // create element
    const hours = document.getElementById('hours').innerHTML = currentHours;
    const minuts = document.getElementById('minuts').innerHTML = currentMinutes;
    cloneItem = clone__item.cloneNode(true);
    
    doneTask()
    cloneItem.style.display = 'flex';
    today.insertBefore(cloneItem, add_btn)
});

// date
const currentDate = new Date();

const currentHours = currentDate.getHours();
const currentMinutes = currentDate.getMinutes();


// add function done task

function doneTask(){
    

    comp_btn.addEventListener('click', (event) => {
        const clickedElement = event.currentTarget;

        clickedElement.querySelector('.comp_btn').style.display = 'none';
        clickedElement.querySelector('.comp_btn_noactive').style.display = 'block';
        clickedElement.querySelector('.today__task__name').style.color = '#7A7777'
        clickedElement.querySelector('.today__list__date').style.color = '#7A7777'
    });

    comp_btn.addEventListener('dblclick', (event) => {
        console.log('1')
        const clickedElement = event.currentTarget;

        clickedElement.querySelector('.comp_btn').style.display = 'block';
        clickedElement.querySelector('.comp_btn_noactive').style.display = 'none';
        clickedElement.querySelector('.today__task__name').style.color = '#F5F5F5'
        clickedElement.querySelector('.today__list__date').style.color = '#F5F5F5'
    })
}
