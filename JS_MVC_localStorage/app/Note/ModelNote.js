export class ModelNote {
    constructor() {
        this.text = JSON.parse(localStorage.getItem('txt')) || [];
    }

    parseText(txt) {
        this.text.push(txt);
        localStorage.setItem('txt', JSON.stringify(this.text));
        return [...this.text];
    }

    clearAll() {
        this.text = [];
        localStorage.setItem('txt', JSON.stringify(this.text));
    }

}