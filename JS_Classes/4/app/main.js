import { CssClass } from "../../3/app/CssClass.js";
import { HtmlElement } from "../../2/app/HtmlElement.js";
import { HtmlBlock } from "./HtmlBlock.js";

const wrapper = new HtmlElement('div'),
    styles = new HtmlElement('style'),
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
wrapper.setAttribute('class', 'wrap');
divChildOne.setAttribute('class', 'block');
divChildTwo.setAttribute('class', 'block');
hOne.textContent = 'What is Lorem Ipsum';
hTwo.textContent = 'What is Lorem Ipsum';
imgOne.setAttribute('src','lipsum.jpg');
imgTwo.setAttribute('src','lipsum.jpg');
imgOne.setAttribute('class','img');
imgTwo.setAttribute('class','img');
imgOne.setAttribute('alt','Lorem Ipsum');
imgOne.setAttribute('alt','Lorem Ipsum');
pOne.textContent = lorem;
pTwo.textContent = lorem;
pOne.setAttribute('class', 'text');
pTwo.setAttribute('class', 'text')
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

styles.textContent = `${new CssClass('wrap').setStyle('display','flex').getCss()}<br>
                        ${new CssClass('block').setStyle('width','300px').setStyle('margin', '10px').getCss()}<br>
                        ${new CssClass('img').setStyle('width','100%').getCss()}<br>
                        ${new CssClass('text').setStyle('text-align','justify').getCss()}`;


const htmlBlock = new HtmlBlock(styles.getHtml(), wrapper.getHtml());

document.querySelector('.container').innerHTML = htmlBlock.getCode();