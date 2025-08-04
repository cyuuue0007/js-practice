//抓物件
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const guessResult = document.getElementById('guessResult');
const resetBtn = document.getElementById('resetBtn');


//產生一個隨機數字（1~10)
let answer = Math.floor(Math.random() * 10) + 1;
console.log('正確答案是：', answer);

//監聽按鈕
guessBtn.addEventListener('click', function () {
    const userGuess = Number(guessInput.value);

    //檢查室不是數字
    if (isNaN(userGuess)) {
        guessResult.textContent = '請輸入數字';
        return
    }

    //檢查是不是在1~10範圍內
    if (userGuess < 1 || userGuess > 10) {
        guessResult.textContent = '錯囉，提示是在1～10之間';
        return;
    }

    //判斷猜對還是猜錯
    if (userGuess === answer) {
        guessResult.textContent = '答對囉';
        guessBtn.disabled = true;
        guessBtn.style.display = 'none';
        resetBtn.style.display = 'inline'; // 顯示「再玩一次」按鈕
    } else {
        guessResult.textContent = '猜錯了～再猜一次吧～哈哈哈哈！'
    }
});

//監聽再玩一次按鈕
resetBtn.addEventListener('click', function () {
    answer = Math.floor(Math.random() * 10) + 1;
    console.log('新的答案是：', answer);
    guessInput.value = '';
    guessResult.textContent = '--';
    guessInput.disabled = false;
    guessBtn.disabled = false;
    guessBtn.style.display = 'inline'; // 再次顯示猜按鈕
    resetBtn.style.display = 'none'; // 隱藏再玩一次按鈕
});