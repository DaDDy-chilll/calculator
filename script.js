let numbers = document.querySelectorAll('.number');
let resultValue = document.querySelector('#result-value');
let historyValue = document.querySelector('#history-value');
let operators = document.querySelectorAll('.operator');
let button = document.querySelector('.button');

button.addEventListener('click',function(){
    button.classList.add('container')
    button.classList.remove('button')
})
// console.log(operators);

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    element.addEventListener('click',function(){
        // console.log(this.id)
        resultValue.innerText = resultValue.innerText + this.id;
    })
    
}

for (let i = 0; i < operators.length; i++) {
    const element = operators[i];
    element.addEventListener('click',function(){
        if(this.id == 'clear'){
            resultValue.innerText = '';
        }else if(this.id == 'blackspace'){
            let out =  document.querySelector('#result-value').innerText;
            let result = out.substr(0,out.length - 1);
            resultValue.innerText = result;
            
        }else{
            if(this.id == '='){
                let resultOut = document.querySelector('#result-value').innerText;
                let historyOut = document.querySelector('#history-value').innerText;
                let result = eval(historyOut+resultOut);
                resultValue.innerText = result
                historyValue.innerText = '';
                resultValue.style.color = 'green';
            }else{
                console.log('his')
                let resultOut = document.querySelector('#result-value').innerText;
                historyValue.innerText = resultOut + this.id;
                resultValue.innerText = '';
            }
        }
    })
    
}
