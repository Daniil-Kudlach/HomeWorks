export class HtmlElement {
    constructor(name) {
        this.name = name;
        this.selfClosing = false;
        this.textContent = '';
        this.attributes = [];
        this.styles = [];
        this.childrens = [];
    }

    setAttribute(name, value) {
        this.propChanger('attributes', name, value);
        return this;
    }

    setStyle(name, value) {
        this.propChanger('styles', name, value);
        return this;
    }

    appendChild(el) {
        this.childrens.push(el);
        return this;
    }

    prependChild(el) {
        this.childrens.unshift(el);
        return this;
    }

    getHtml() {
        let str = `<br>&lt${this.name}`;
        if (this.selfClosing) {
            str += '/&gt';
            return;
        } else {
            this.attributes.forEach((el) => {
                str += ` ${el.name}="${el.value}"`
            });
            if(this.styles.length > 0){
                let styles = ' styles="';
                this.styles.forEach((el) => {
                    styles += `${el.name}: ${el.value};`;
                });
                str += `${styles}"`;
            };
            str += '&gt';
            if (this.textContent) {
                str += `<br>${this.textContent}`;
            }
            this.childrens.forEach(el => {
                str += `${el.getHtml()}`;
            });
            str += `<br>&lt/${this.name}&gt`;
            return str;
        }
    }

    propChanger(prop, name, value) {
        if (this[prop].find(el => {
                if (el.name == name) {
                    el.value = value;
                    return true;
                }
            }) == undefined) {
            this[prop].push({
                name: name,
                value: value
            });
        }
    }
}