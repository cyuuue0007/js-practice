
//2.字串合體機
const nameInput = document.getElementById('nameInput');
const foodInput = document.getElementById('foodInput');
const combineBtn = document.getElementById('combineBtn');
const combineResult = document.getElementById('combineResult');

combineBtn.addEventListener('click', function () {
    const name = nameInput.value;
    const food = foodInput.value;

    const message = name + '喜歡吃' + food + '🍚'

    combineResult.textContent = message;
})