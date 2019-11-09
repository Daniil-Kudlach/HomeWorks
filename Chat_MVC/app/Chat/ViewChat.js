export class ViewChat {
    constructor(funcSent, funcNameChange, funcColorChange) {
        this.postBtn = this.chEl('.post_btn');
        this.nameBtn = this.chEl('.add_name_btn');
        this.addColor = this.chEl('.add_color');
        this.addName = this.chEl('.add_name');
        this.contentName = this.chEl('.content-name');
        this.postText = this.chEl('.post_text');
        this.msgBox = this.chEl('.info');
        this.postBtn.addEventListener('click', funcSent);
        this.nameBtn.addEventListener('click', funcNameChange);
        this.addColor.addEventListener('change', funcColorChange);
    }

    clearMsgBox() {
        this.msgBox.innerHTML = '';
        return;
    }

    writeMessage(names, text, times, color) {
        let div = document.createElement('div'),
            time = document.createElement('div'),
            name = document.createElement('div'),
            txt = document.createElement('div');
        txt.textContent = `${text}`;
        name.textContent = `${names}:`;
        time.textContent = `${times}`;
        div.classList.add('msg');
        txt.classList.add('msg-txtBox');
        name.classList.add('msg-nameBox');
        time.classList.add('msg-timeBox');
        div.append(name);
        div.append(txt);
        div.append(time);
        txt.style.color = color;
        this.msgBox.append(div);
        this.msgBox.scrollTop = this.msgBox.scrollHeight;
        return;
    }

    setName(name) {
        this.addName.value = '';
        this.contentName.innerHTML = name;
        return;
    }

    setColor(color) {
        this.postText.style.color = color;
        this.addColor.value = color;
        return;
    }

    getName() {
        return this.addName.value;
    }

    getColor() {
        return this.addColor.value;
    }

    postMessage() {
        return this.postText.value;
    }

    clearTextArea() {
        this.postText.value = '';
        return;
    }

    chEl(el) {
        return document.querySelector(el);
    }
}