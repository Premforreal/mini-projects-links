import { challenges } from './websites.js';

const createAnchorElement = obj => {
    const div = document.createElement('div');
    const a = document.createElement('a');
    a.textContent = obj.title;
    a.href = `${obj.link}`;

    div.appendChild(a);
    return div;
  };
  

const challengeGridEl = document.getElementById('challenges');
challenges.map(createAnchorElement).forEach(el => {
    challengeGridEl.appendChild(el)
    el.className='box'
});





















































//----------------------------------------------------------------------------------------------------------------------

const boxes=document.querySelectorAll('.box')
window.addEventListener('scroll',checkBoxes)
checkBoxes()
function checkBoxes(){
    const triggerBottom=window.innerHeight/5*4
    boxes.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top

        if(boxTop<triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}



