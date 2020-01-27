export class HtmlBlock{
    constructor(styles, html){
        this.styles = styles;
        this.root = html;
    }
    getCode(){
        let str = this.styles;
        str += this.root;
        return str;
    }
}