const cards = document.querySelector('.boxes');
const boxes = cards.querySelectorAll('.box');

cards.addEventListener('click',(e)=>{
    let box = e.target.closest('.box');
    if (box) {   
        boxes.forEach(box=>{
            box.classList.remove('active');
        })
        box.classList.add('active');
        box.querySelector("input[type='radio']").checked=true;
    }
        
})