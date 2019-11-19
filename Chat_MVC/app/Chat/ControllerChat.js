import {
    ModelChat
} from './ModelChat.js'
import {
    ViewChat
} from './ViewChat.js'

export class ControllerChat {
    constructor() {
        this.model = new ModelChat((d) => this.receiveData(d));
        this.view = new ViewChat(() => this.sentMessage(), () => this.changeName(), () => this.changeColor());
        this.interval = (setInterval(() => this.model.start(), 1000));
        this.start();
    }

    start() {
        this.model.start();
        this.view.setName(this.model.userName);
        this.view.setColor(this.model.textColor);
        return;
    }

    sentMessage() {
        let msg = this.view.getMessage();
        if (!msg) {
            return;
        } else {
            this.view.clearTextArea();
            this.model.postMessage(msg);
            return;
        }
    }

    receiveData(data) {
        data = this.model.setMessages(JSON.parse(data));
        if (!data) {
            return;
        } else {
            data.forEach((el) => {
                this.view.writeMessage(
                    el.name || 'anonimus',
                    el.text,
                    el.time,
                    el.color
                );
            });
            return;
        }
    }

    changeName() {
        let name = this.view.getName();
        if (!name) {
            return;
        } else {
            this.view.setName(this.model.setName(name));
            return;
        };
    }

    changeColor() {
        let color = this.view.getColor();
        if (!color) {
            return;
        } else {
            this.view.setColor(this.model.setColor(this.view.getColor()));
            return;
        };
    }
}