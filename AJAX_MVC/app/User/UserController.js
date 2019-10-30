import {
    UserView
} from './UserView.js';
import {
    UserModel
} from './UserModel.js';
export class UserController {
    constructor() {
        this.model = new UserModel((d) => this.receiveData(d));
        this.view = new UserView(() => this.clickBtnHandler(),
            (ev) => this.clickBtnClear(ev),
            () => this.clearAll());
    }

    clickBtnHandler() {
        //Запустить модель
        this.model.getUser();
    }

    receiveData(data) {
        if (typeof data === "string") {
            return JSON.parse(data);
        } else {
            // очистить таблицу для сортировки
            this.view.clearTable();
            // сортировка массива по имени и дате рождения
            data = data.sort((a, b) => {
                let nameA = a.name.first.toLowerCase(),
                    nameB = b.name.first.toLowerCase();
                if (nameA === nameB) {
                    return a.dob.age - b.dob.age;
                }
                return nameA < nameB ? -1 : 1;
            })
            // по одному обьекту-user передаём на внесение в таблицу
            for (let i = 0; i < this.model.users.length; i++) {
                this.view.renderUser(i + 1, data[i]);
            }
        };
    }

    clearAll() {
        this.view ? this.view.clearTable() : 0;
        this.model.clearTable();
    }

    clickBtnClear(ev) {
        // из события клика берем номер ряда который нужно удалить
        const row = ev.target.parentElement.parentElement.rowIndex;
        // передаем его на удаление ряда
        this.view ? this.view.clearRow(row) : 0;
        // и на удаление из массива
        this.receiveData(this.model.clearRow(row));
    }
}