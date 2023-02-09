const previousResultText = document.querySelector('#previous-result')
const currentResultText = document.querySelector('#current-result')
const buttons = document.querySelectorAll('#keyboard button')

/*função constructor uma de suas funções é expecificar valores únicos*/
class Calculator {
    constructor(previousResultText, currentResultText){
        //impresso na tela
        this.previousResultText = previousResultText;
        this.currentResultText = currentResultText;
        //digitando no momento
        this.currentResult = '';
    }
    //método para adicionar digitos na tela
    addDigit(digit){
        // teste para não repetir os pontos
        if(digit === '.' && this.currentResultText.innerText.includes('.')){
            return;
        }
        this.currentResult = digit;
        this.updateScreen();
    }
    //operações da calculadora
    processOperation(operation){
        console.log(operation)
    }
    //método para atualizar a tela
    updateScreen(){
        this.currentResultText.innerText += this.currentResult;
    }    
}
const calc = new Calculator(previousResultText, currentResultText)

/*Criar um evento para a variavel buttons onde o evento seguinte é (e) e dentro dele é possivel extrair diversas informações*/
buttons.forEach((btn) =>{
    btn.addEventListener('click', (e) =>{
        const value = e.target.innerText;
        if(+value >= 0 || value === '.'){
            calc.addDigit(value);
        }else{
            console.log('OP: ' + value);
        }
    });
});

