function insert(num){
    var numb = document.getElementById('last-calc').innerHTML;
    document.getElementById('last-calc').innerHTML = numb + num;
}
function clean(){
    document.getElementById('last-calc').innerHTML = '';
}
function back(){
    var valor = document.getElementById('last-calc').innerHTML;
    document.getElementById('last-calc').innerHTML = valor.substring(0, valor.length - 1);
}
function calculate(){
    var valor = document.getElementById('last-calc').innerHTML;
    if(valor){
        document.getElementById('last-calc').innerHTML = eval(valor)
    }
}