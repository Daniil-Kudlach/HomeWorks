import { Spinner } from "./Spinner.js";
import { Loader } from "./Loader.js";
import { Reverse } from "./Reverse.js";
const spinners = ['⠋⠙⠚⠞⠖⠦⠴⠲⠳⠓','⢹⢺⢼⣸⣇⡧⡗⡏','☱☲☴','_-=≡=-_','⦾⦿','■□▪▫','⊶⊷','▖▘▝▗','⠁⠂⠄⠂','___-\`\`\'\´-__','✶✸✹✺✹✷','▓▒░','⠁⠃⠓⠛⠙⠉','╗╣╬╩╚╠╔╦','┐┤┼┴└├┬','←↖↑↗→↘↓↙','◡◡⊙⊙◠◠','◴◷◶◵','⠁⠂⠄⡀⢀⠠⠐⠈','▉▊▋▌▍▎▏▎▍▌▋▊▉','▁▃▄▅▆▇█▇▆▅▄▃','⣾⣽⣻⢿⡿⣟⣯⣷','|/-\\','➕❌','-o-','.oO.'];
const reverse = [
    [
        ".  ",
        ".. ",
        "...",
        " ..",
        "  .",
        "   "
    ],
    [
        "▹▹▹▹▹",
        "▸▹▹▹▹",
        "▹▸▹▹▹",
        "▹▹▸▹▹",
        "▹▹▹▸▹",
        "▹▹▹▹▸"
    ],
    [
        "(●_____)(●_____)",
        "(_●____)(_●____)",
        "(__●___)(__●___)",
        "(___●__)(___●__)",
        "(____●_)(____●_)",
        "(_____●)(_____●)",
        "(____●_)(____●_)",
        "(___●__)(___●__)",
        "(__●___)(__●___)",
        "(_●____)(_●____)",
        "(●_____)(●_____)"
    ],
    [
        "●∙∙∙∙",
        "∙●∙∙∙",
        "∙∙●∙∙",
        "∙∙∙●∙",
        "∙∙∙∙●",
        "∙∙∙●∙",
        "∙∙●∙∙",
        "∙●∙∙∙",
        "●∙∙∙∙",
    ],
    [
        "▐|\\____________▌",
        "▐_|\\___________▌",
        "▐__|\\__________▌",
        "▐___|\\_________▌",
        "▐____|\\________▌",
        "▐_____|\\_______▌",
        "▐______|\\______▌",
        "▐_______|\\_____▌",
        "▐________|\\____▌",
        "▐_________|\\___▌",
        "▐__________|\\__▌",
        "▐___________|\\_▌",
        "▐____________|\\▌",
        "▐____________/|▌",
        "▐___________/|_▌",
        "▐__________/|__▌",
        "▐_________/|___▌",
        "▐________/|____▌",
        "▐_______/|_____▌",
        "▐______/|______▌",
        "▐_____/|_______▌",
        "▐____/|________▌",
        "▐___/|_________▌",
        "▐__/|__________▌",
        "▐_/|___________▌",
        "▐/|____________▌"
    ],
    [
        "ρββββββ",
        "βρβββββ",
        "ββρββββ",
        "βββρβββ",
        "ββββρββ",
        "βββββρβ",
        "ββββββρ",
        "βββββρβ",
        "ββββρββ",
        "βββρβββ",
        "ββρββββ",
        "βρβββββ",
        "ρββββββ",
        

    ]  
];
const loaders = ['[■]','|█|',']█[','[║]','█ ','║','▓ ','▒ ','░ ','|','■','≡','¦',']','[','[]','{}','#','/','\\','='];
const ul = document.querySelector('.spinners');
const ulLoad = document.querySelector('.loaders');
const ulRev = document.querySelector('.reverse');
const speed = 100;
let arrSpin = [];


(function(){
    ul.innerHTML = '';
    spinners.forEach((el,i)=>{
        let c = new Spinner(el,i,speed);
        let li = document.createElement('li');
        li.classList.add(`spin${i}`);
        li.style.color = randomColor();
        ul.appendChild(li);
        c.spin();
        arrSpin.push(c);
    });
    loaders.forEach((el,i)=>{
        let li = document.createElement('li');
        li.style.color = randomColor();
        li.classList.add(`li${i}`);
        ulLoad.appendChild(li);
        let l = new Loader(el,i,speed);
        l.load();
    });

    reverse.forEach((el,i) => {
        let li = document.createElement('li');
        li.style.color = randomColor();
        li.classList.add(`rev${i}`);
        ulRev.appendChild(li);
        let r = new Reverse(reverse[i],i,speed);
        r.rev();
    });

}());


function randomColor(){
    return `rgb(${random(0,255)},${random(0,255)},${random(0,255)})`;
}

function random(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}