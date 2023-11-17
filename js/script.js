let repeat = true;
while (repeat) {
    let arithmeticAction = prompt(`What arithmetic action do you want to make?
For addition type: ADD;
For sibstraction: SUB;
For multiplication: MUL;
For division: DIV.`, '')
    if (arithmeticAction === 'ADD' || arithmeticAction === 'SUB' || arithmeticAction === 'MUL' || arithmeticAction === 'DIV') {

        let check = false;
        let firstNum;
        do {
            firstNum = +prompt('Enter first number:');
            if (typeof firstNum === 'number' && isNaN(firstNum) === false) {
                check = false;
            }
            else {
                alert(`Please numbers only`);
                check = true;
            }
        }
        while (check);
        console.log(firstNum)
        let secondNum;
        do {
            secondNum = +prompt('Enter second number');
            if (typeof secondNum === 'number' && isNaN(secondNum) === false) { check = false; }
            else {
                alert(`Please numbers only`);
                check = true;
            }
        } while (check);
        console.log(secondNum)

        let result;
        let sign;

        switch (arithmeticAction) {
            case 'ADD':
                sign = "+";
                result = firstNum + secondNum;
                break;
            case 'SUB':
                sign = "-";
                result = firstNum - secondNum;
                break;
            case 'MUL':
                sign = "*";
                result = firstNum * secondNum;
                break;
            case 'DIV':
                sign = "/";
                result = firstNum / secondNum;
                break;
        };
        alert(`${firstNum} ${sign} ${secondNum} = ${result} `);
    }
    else {
        arithmeticAction = prompt('Please enter: ADD, SUB, MUL, DIV');
    } repeat = confirm('Do you want to repeat?')
}