export class ViewNote {
    constructor(fAdd, fClear, fLoad) {
        this.txtBox = document.querySelector('#txtBox');
        this.textArea = document.querySelector('#textArea');
        this.addBtn = document.querySelector('#addBtn');
        this.clearBtn = document.querySelector('#clearBtn');

        document.addEventListener('DOMContentLoaded', fLoad);
        this.addBtn.addEventListener('click', fAdd);
        this.clearBtn.addEventListener('click', fClear);
    }

    getText(text) {
        return this.textArea.value;
    }

    renderText(text){
        this.clearAll();
        this.textArea.value = '';
        text.forEach(e => this.addEl(e));
    }

    addEl(text){
        const p = document.createElement('p');
        p.textContent = text;
        this.txtBox.prepend(p);
    }

    clearAll() {
        this.txtBox.innerHTML = '';
    }

}