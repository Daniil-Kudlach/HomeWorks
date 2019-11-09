export class ModelChat {
    constructor(funcHandler) {
        this.funcHandler = funcHandler;
        this.userName = localStorage.getItem('userName') || 'User';
        this.textColor = localStorage.getItem('textColor') || '#08090a';
        this.api = 'http://so2niko.zzz.com.ua/examples/chat/api.php';
        this.length = 0;
    }

    start() {
        this.getMessages();
        return;
    }

    getMessages() {
        const aja = new XMLHttpRequest();
        aja.addEventListener('readystatechange', () => {
            if (aja.status == 200 && aja.readyState == 4) {
                this.funcHandler(aja.responseText);
            }
        });
        aja.open('get', this.api, true);
        // aja.setRequestHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
        aja.send();
        return;
    }

    setMessages(data) {
        if (this.length < data.length) {
            this.length = data.length;
            return data;
        } else {
            return false;
        }
    }

    postMessage(msg) {
        const aja = new XMLHttpRequest();
        aja.open('post', this.api, true);
        aja.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        aja.send(`data=true&name=${this.userName}&color=${this.textColor}&text=${msg}`);
        return;
    }

    setName(item) {
        localStorage.setItem('userName', item);
        this.userName = item;
        return localStorage.getItem('userName');
    }

    setColor(item) {
        localStorage.setItem('textColor', item);
        this.textColor = item;
        return localStorage.getItem('textColor');
    }

}