const dom = {
    monthInput: document.querySelector('.month'),
    yearInput: document.querySelector('.year'),
    container: document.querySelector('.container'),
    btn: document.querySelector('.btnCreate')
}

class Table {
    constructor(month, year, container) {
        this.table = document.createElement('table');
        this.container = container;
        this.date = new Date(+year, +month - 1, 1);
        this.lastDay = new Date(+year, +month, 0).getDate();
        this.makeCalendar(this.container, this.date);
    }
    makeCalendar(container, date) {
        container.innerHTML = '';
        this.table.innerHTML = '<th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th>';
        let span = document.createElement('span');
        let d = date.toDateString().split(' ');
        span.textContent = `${d[1]} ${d[3]}`;
        container.append(span,this.table);
        let cou = this.counter();
        let day = date.getDay();
            day==0?day=7:0;
        for (let j = 1; j <= 6; j++) {
            let row = this.table.insertRow();
            if(j==2){
                day = 0;
            }
            for (let i = 1; i <= 7; i++) {
                let td = document.createElement('td');
                if ((i >= day)) {
                    let c = cou();
                    if(c <= this.lastDay){
                        td.innerHTML = c;
                        (i>=6)?td.style.color = 'red':0;
                    }else if(c>this.lastDay&&i==1){
                        return;
                    }
                }
                row.appendChild(td);
            }
        }

    }

    counter() {
        let count = 1;
        return function () {
            return count++;
        }
    }

}

dom.btn.addEventListener('click', () => {
    let month = dom.monthInput.value;
    let year = dom.yearInput.value;
    const table = new Table(month, year, dom.container);

});