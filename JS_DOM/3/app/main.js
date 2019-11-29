const blockHeader = document.querySelectorAll('.blockHeader');
const blockText = document.querySelectorAll('.blockText');
blockHeader.forEach((el) => {
    el.addEventListener('click', (ev) => {
        blockText.forEach((el) => {
            el.classList.contains('visible') ? el.classList.toggle('visible') : 0;
        })
        ev.target.nextElementSibling.classList.toggle('visible');
    })
});