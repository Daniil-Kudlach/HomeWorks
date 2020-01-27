import {Circle} from './Circle.js';


const info = document.querySelector('.info');
const btn = document.querySelector('.addBtn');
const input = document.querySelector('.textInput');
const circle = new Circle();

btn.addEventListener('click', ()=>{
    let r = input.value;
    if(!r){
        return
    }else{
        circle.radius = r;
        info.innerHTML = `  <code>const circle = new Circle();</code>
                            <code>circle.radius = ${r};</code>
                            <code>console.log(circle.radius); // ${circle.radius}</code>
                            <code>console.log(circle.diameter); // ${circle.diameter}</code>
                            <code>console.log(circle.getArea()); // ${circle.getArea()}</code>
                            <code>console.log(circle.getLength()); // ${circle.getLength()}</code>`;
    }
    input.value = '';
})