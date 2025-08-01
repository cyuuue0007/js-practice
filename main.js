
//迷你加總器
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const sumBtn = document.getElementById('sumBtn');
const resultSpan = document.getElementById('result');

sumBtn.addEventListener('click', function() {
    const val1 = num1Input.value ;
    const val2 = num2Input.value ;

    const num1 = Number(val1);
    const num2 = Number(val2);

    const sum = num1 + num2;

    resultSpan.textContent = sum;
});