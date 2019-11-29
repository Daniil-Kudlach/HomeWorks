class Gallery {
    constructor() {
        this.images = [];
        this.count = 0;
        this.preloader = document.querySelector('.preloader');
        this.btnLeft = document.createElement('div');
        this.btnRight = document.createElement('div');
        this.container = document.createElement('div');
        this.background = document.createElement('div');
        document.body.addEventListener('mousemove', this.parallax.bind(this));
        this.getImages();
    }

    getImages() {
        this.preloader.classList.toggle('load');
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('readystatechange', () => {
            if (ajax.status == 200 && ajax.readyState == 4) {
                if (ajax.responseText) {
                    return this.writeImages(JSON.parse(ajax.responseText));
                }
            }
        });
        ajax.open('get', `https://pixabay.com/api/?key=14372257-cb318aa222aec925300c9947b&page=${this.random(25)}`, true);
        // ajax.setRequestHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
        ajax.send();
    }

    writeImages(data) {
        if (data.totalHits == 0) {
            return this.getImages();
        } else {
            for (let i = 0; i < 20; i++) {
                let img = new Image();
                img.src = data.hits[i].largeImageURL;
                this.images.push(img);
            };
            this.makeGallery()
            return;
        }
    }

    makeGallery() {
        let img = this.images[0];
        img.onload = () => {
            this.preloader.classList.toggle('load');
            this.container.append(img);
            this.container.classList.add('container');
            this.btnRight.classList.add('right', 'btnRight');
            this.btnLeft.classList.add('left', 'btnLeft', 'unactiveBtn');
            this.background.classList.add('background');
            this.btnLeft.addEventListener('click', this.click.bind(this));
            this.btnRight.addEventListener('click', this.click.bind(this));
            this.background.style.backgroundImage = `url(${this.images[0].src}`;
            document.body.prepend(this.background, this.btnLeft, this.container, this.btnRight);
            document.body.style.backgroundColor = 'rgba(0,0,0,0.8)';
        }
    }

    parallax(ev){
        const x = ev.pageX / window.innerWidth;
        const y = ev.pageY / window.innerHeight;
        this.background.style.transform = `translate(-${x * 40}px, -${y * 40}px)`;
        this.container.style.transform = `translate(${x * 15}px, ${y * 15}px)`;
    }1

    click(ev) {
        if (ev.target.classList[0] == 'left') {
            if (this.count == 0) {
                return;
            } else {
                this.count--;
            }
            (this.count == 0) ? this.activeBtn(this.btnLeft): 0;
            (this.count == 18) ? this.activeBtn(this.btnRight): 0;
            let img = this.images[this.count];
                this.container.innerHTML = '';
                this.container.append(img);
                this.background.style.backgroundImage = `url(${img.src})`;
                return;
        } else if (ev.target.classList[0] == 'right') {
            if (this.count == 19) {
                return
            } else {
                this.count++;
            }
            (this.count == 19) ? this.activeBtn(this.btnRight): 0;
            (this.count == 1) ? this.activeBtn(this.btnLeft): 0;
            let img = this.images[this.count];
                this.container.innerHTML = '';
                this.container.append(img);
                this.background.style.backgroundImage = `url(${img.src})`;
                return;
        }
    }

    activeBtn(btn) {
        btn.classList.toggle('unactiveBtn');
    }

    random(max) {
        return Math.floor(Math.random() * (max - 1) + 1);
    }

}

const gallery = new Gallery();