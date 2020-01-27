export class CssClass {
    constructor(name) {
        this.name = name;
        this.styles = [];
    }

    setStyle(name, value) {
        if (this.styles.find(el => {
                if (el.name == name) {
                    el.value = value;
                    return true;
                }
            }) == undefined) {
            this.styles.push({
                name: name,
                value: value
            });
        }
        return this;
    }

    deleteStyle(name, value) {
        this.styles.splice(this.styles.findIndex(el => {
            return el.name == name;
        }), 1);
        return this;
    }

    getCss() {
        let str =  `.${this.name}{<br>`;
        this.styles.forEach(el => {
            str += `${el.name}:${el.value};<br>`;
        })
        return `${str}}`;
    }
}