export class UserModel {
    constructor(funcHandler) {
        // this.url = 'https://randomuser.me/api/';
        // this.method = 'get';
        // this.async = true;
        this.funcHandler = funcHandler;
        this.users = [];
        this.config = ['get', 'https://randomuser.me/api/', true];

    }
    // получаем user-обьект
    getUser() {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('readystatechange', () => {
            if (ajax.status == 200 && ajax.readyState == 4) {
                // добавляем в массив user-обьект - обработанный в контроллере
                this.users.push(this.funcHandler(ajax.responseText).results[0]);
                // передаем обратно в контроллер массив с user-обьектом
                this.funcHandler(this.users);
            }
        });
        ajax.open(...this.config);
        ajax.setRequestHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
        ajax.send();
    }

    clearTable() {
        this.users = [];
    }

    clearRow(r) {
        // очищаем массив от удаленного user-обьекта
        this.users.splice(r, 1);
        // возвращаем обновленный массив
        return (this.users);
    }

}