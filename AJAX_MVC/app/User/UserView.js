export class UserView {
    constructor(clickButtonFunction, clickButtonFunctionClear, clickButtonFClearAll) {
        this.container = document.querySelector('.container');
        this.table = this.createTable();
        this.createButtonAdd(clickButtonFunction, 'Create');
        this.createButtonAdd(clickButtonFClearAll, 'Clear All');
        this.clickButtonFunctionClear = clickButtonFunctionClear;
    }
    createButtonAdd(func, text) {
        // создание кнопки для добавления user-обьекта
        const btn = document.createElement('button');
        btn.innerText = text;
        btn.addEventListener('click', func);
        this.container.appendChild(btn);
    }
    createTable() {
        // создание таблицы
        const table = document.createElement('table');
        document.body.insertBefore(table, this.container.nextSibling);
        return table;
    }

    createButtonClear() {
        // создание кнопки -удалить-
        const btn = document.createElement('button');
        btn.innerText = 'Delete';
        btn.addEventListener('click', (ev) => this.clickButtonFunctionClear(ev));
        return btn;
    }

    renderUser(i, data) {
        // создание ряда в таблице
        let row = this.table.insertRow();
        row.classList.add(`${data.gender}`);
        row.innerHTML += `
        <td><span>${i}</span></td>
    <td><img src="${data.picture.large}" alt="userphoto"></td>
    <td><span>${data.name.first} ${data.name.last}\n-${data.name.title}-</span></td>
    <td><span>gender:</span>\n${data.gender}</td>
    <td class="tdAge"><span>age:</span> ${data.dob.age}</td>
    <td><span>login:</span>\n${data.login.username}</td>
    <td><span>password:</span>\n${data.login.password}</td>
    <td><span>email:</span>\n${data.email}</td>
    <td><span>cellphone:</span>\n${data.cell}</td>
    <td></td>`;
        // внесение кнопки -удалить- в последнюю ячейку ряда
        row.lastChild.append(this.createButtonClear());
    }

    clearRow(r) {
        // удаление ряда из таблицы
        this.table.deleteRow(r);
    }

    clearTable() {
        // очистка таблицы для внесения обновленных данных
        this.table.innerHTML = '';
    }
}