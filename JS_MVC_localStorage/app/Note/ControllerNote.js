import {
    ModelNote
} from './ModelNote.js';
import {
    ViewNote
} from './ViewNote.js';

export class ControllerNote {
    constructor() {
        this.view = new ViewNote(
            this.clickBtnAdd.bind(this),
            this.clickBtnClear.bind(this),
            this.relPage.bind(this)
        );
        this.model = new ModelNote();
    }

    relPage(){
        const text = this.model.text;
        if(text){
            this.view.renderText(text);
        }
    }

    clickBtnAdd() {
        const uText = this.view.getText();
        if(uText){
        const textArr = this.model.parseText(uText);
        this.view.renderText(textArr);
        }else{
        return;
        }
    }

    clickBtnClear() {
        this.view.clearAll();
        this.model.clearAll();
    }

}