//3.奇偶判斷器

//1.找到畫面上的元素，綁定變數
const numberInput = document.getElementById('numberInput');
const checkBtn = document.getElementById('checkBtn');
const result = document.getElementById('result');

//2.監聽按下按鈕的按件
checkBtn.addEventListener('click', function () {
    const value = numberInput.value;
    const num = Number(value);

    if (isNaN(num)) {
        result.textContent = '請輸入數字，感恩';
        return;
    }

    if (num % 2 === 0) {
        result.textContent = `${num} 是偶數～～`;
    } else {
        result.textContent = `${num} 是奇數～～`;
    }

});