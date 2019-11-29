const btn = document.querySelector('.track-button');
const line = document.querySelector('.track-line');
const trackContainer = document.querySelector('.track-container');
const percentCounter = document.querySelector('.percentCounter');
const myPosition = localStorage.getItem('position') || 0;
btn.style.left = `${myPosition}%`;
trackContainer.style.background = `linear-gradient(to right,rgb(134, 176, 212) ${myPosition}%, white ${myPosition}% 100%)`
btn.addEventListener('mousedown', mouseDown);

function mouseDown(ev) {
    document.body.style.cursor = 'pointer';
    btn.addEventListener('mouseup', mouseUp);
    document.body.addEventListener('mousemove', mouseMove);
    document.body.addEventListener('mouseup', mouseUp);
    document.body.addEventListener('mouseleave', mouseUp);
}

function mouseMove(ev) {
    const pos = line.getBoundingClientRect();
    const btnRelativePos = Math.floor((((ev.x) - pos.x) * 100) / (pos.width));
    if (btnRelativePos > 100) {
        return;
    } else if (btnRelativePos < 0) {
        return;
    } else {
        btn.style.left = `${btnRelativePos}%`;
        trackContainer.style.background = `linear-gradient(to right,rgb(134, 176, 212) ${btnRelativePos}%, white ${btnRelativePos}% 100%)`
        percentCounter.innerText = `${btnRelativePos}%`
        localStorage.setItem('position', btnRelativePos);
    }
}

function mouseUp(ev) {
    percentCounter.innerHTML = '';
    document.body.style.cursor = 'inherit';
    document.body.removeEventListener('mousemove', mouseMove);
}