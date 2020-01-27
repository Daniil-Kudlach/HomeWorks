import {
    CssClass
} from './CssClass.js';

const cssClass = new CssClass('red');
const container = document.querySelector('.container');

container.innerHTML += '<span>const cssClass = new CssClass("red");</span>';
cssClass.setStyle('width', '100px');
container.innerHTML += `<span>cssClass.setStyle('width', '100px'); //<br>${cssClass.getCss()}</span>`;
cssClass.setStyle('color', 'red');
container.innerHTML += `<span>cssClass.setStyle('color', 'red'); //<br>${cssClass.getCss()}</span>`;
cssClass.setStyle('font-weight', 'bold');
container.innerHTML += `<span>cssClass.setStyle('font-weight', 'bold'); //<br>${cssClass.getCss()}</span>`;
cssClass.deleteStyle('color');
container.innerHTML += `<span>cssClass.deleteStyle('color'); //<br>${cssClass.getCss()}</span>`;
container.innerHTML += `<span>cssClass.getCss(); //<br>${cssClass.getCss()}</span>`;