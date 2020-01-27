import {
    HtmlElement
} from './HtmlElement.js';
const wrapper = new HtmlElement('div'),
    divChildOne = new HtmlElement('div'),
    divChildTwo = new HtmlElement('div'),
    hOne = new HtmlElement('h3'),
    hTwo = new HtmlElement('h3'),
    imgOne = new HtmlElement('img'),
    imgTwo = new HtmlElement('img'),
    pOne = new HtmlElement('p'),
    pTwo = new HtmlElement('p'),
    aOne = new HtmlElement('a'),
    aTwo = new HtmlElement('a');
const lorem = `Lorem ipsum, dolor sit amet consectetur 
adipisicing elit. Libero, eligendi nesciunt. 
Quo accusamus sint in nisi reprehenderit minus, 
dolorem maiores adipisci! Ut, sint? Totam voluptates 
soluta autem. Dicta aperiam, blanditiis illo commodi 
fugit odit, quos voluptatibus architecto dolor neque 
rem corrupti distinctio tempora omnis, non voluptate 
cum. Placeat laborum asperiores expedita voluptatem 
amet a, tempore quo officia, nam labore rem debitis 
iste. Maxime mollitia dolorem deserunt temporibus 
ex sint quam assumenda et ullam, eveniet distinctio 
odio, doloribus sit excepturi quibusdam! Inventore 
id labore nihil libero reiciendis sunt amet natus 
nemo cupiditate ratione. Cum unde sed, dolore id 
quis illum nostrum.`;

wrapper.setAttribute('id', 'wrapper');
wrapper.setStyle('display', 'flex');
divChildOne.setStyle('width', '300px');
divChildOne.setStyle('margin', '10px');
divChildTwo.setStyle('width', '300px');
divChildTwo.setStyle('margin', '10px');
hOne.textContent = 'What is Lorem Ipsum';
hTwo.textContent = 'What is Lorem Ipsum';
imgOne.setStyle('width', '100%');
imgTwo.setStyle('width', '100%');
imgOne.setAttribute('src','lipsum.jpg');
imgTwo.setAttribute('src','lipsum.jpg');
imgOne.setAttribute('alt','Lorem Ipsum');
imgOne.setAttribute('alt','Lorem Ipsum');
pOne.setStyle('text-align', 'justify');
pTwo.setStyle('text-align', 'justify');
pOne.textContent = lorem;
pTwo.textContent = lorem;
aOne.setAttribute('href','https://www.lipsum.com');
aTwo.setAttribute('href','https://www.lipsum.com');
aOne.setAttribute('target', '_blank');
aTwo.setAttribute('target', '_blank');
aOne.textContent = 'More...';
aTwo.textContent = 'More...';
wrapper.appendChild(divChildTwo);
wrapper.prependChild(divChildOne);
divChildOne.appendChild(hOne);
divChildOne.appendChild(imgOne);
divChildOne.appendChild(pOne);
pOne.appendChild(aOne);
divChildTwo.appendChild(hTwo);
divChildTwo.appendChild(imgTwo);
divChildTwo.appendChild(pTwo);
pTwo.appendChild(aTwo);

document.querySelector('.container').innerHTML = wrapper.getHtml();