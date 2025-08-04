// js/include.js
function loadHTML(selector, filePath) {
    fetch(filePath)
        .then((res) => res.text())
        .then((html) => {
            document.querySelector(selector).innerHTML = html;
        });
}
