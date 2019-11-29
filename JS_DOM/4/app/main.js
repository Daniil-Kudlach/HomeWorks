class NewsBlock {
    constructor() {
        this.container = document.querySelector('.container');
        this.url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=147b68d27027415f8a6f01ee1b021393';
        this.newsObj = {};
        this.newsArr = [];
        this.count = 0;
        this.youtubeRegexp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i;
        window.addEventListener('scroll', () => this.scroll());
        this.getNews();
    }

    getNews() {
        const ajax = new XMLHttpRequest();
        ajax.addEventListener('readystatechange', () => {
            if (ajax.status == 200 && ajax.readyState == 4) {
                if (ajax.responseText) {
                    this.newsObj = JSON.parse(ajax.responseText);
                    return this.createNewsArr();
                }
            }
        });
        ajax.open('get', this.url, true);
        // ajax.setRequestHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");
        ajax.send();
    }

    createNewsArr() {
        let len = this.newsObj.articles.length;
        for (let i = 0; i < len; i++) {
            let img = document.createElement('img');
            if (this.newsObj.articles[i].urlToImage) {
                img.src = this.newsObj.articles[i].urlToImage;
            } else {
                let a = this.newsObj.articles[i].url;
                a = a.match(this.youtubeRegexp);
                if (a) {
                    img.src = `https://img.youtube.com/vi/${a[1]}/maxresdefault.jpg`;
                }
            }
            let date = new Date(this.newsObj.articles[i].publishedAt),
                newsBlock = this.crEl('div'),
                newsTitle = this.crEl('div'),
                newsText = this.crEl('div'),
                newsAuthorAndDate = this.crEl('div');
            newsTitle.innerHTML = `<h3>${this.newsObj.articles[i].title}</h3>`;
            newsTitle.append(img);
            newsText.classList.toggle('newsText');
            newsText.innerHTML = `<p>${this.newsObj.articles[i].description||''}<a href="${this.newsObj.articles[i].url||''}">[more]</a></p>`;
            newsAuthorAndDate.classList.toggle('authorAndDate');
            newsAuthorAndDate.innerHTML = `<small><b><i>${this.newsObj.articles[i].author||''}</i></b></small><small class ='date'>${date.toDateString()||''}</small>`;
            newsBlock.classList.toggle('newsBlock');
            newsBlock.append(newsTitle, newsText, newsAuthorAndDate);
            this.newsArr.push(newsBlock);
        }
        return this.writeNews();
    }

    crEl(el) {
        return document.createElement(el);
    }

    writeNews() {
        let len = this.newsArr.length;
        for (let i = 0; i < 3; i++) {
            if (this.count < len) {
                this.container.append(this.newsArr[this.count]);
                this.count++;
            } else {
                return;
            }
        }
        return;
    }

    scroll(ev) {
        if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            this.writeNews();
        }
    }
}

const News = new NewsBlock();