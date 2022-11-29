const nums = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operator')
const dlt = document.querySelector('#delete')
const ac = document.querySelector('#AC')
const equal = document.querySelector('#equals')

//make a button that adds
function add(num1, num2){
  let res = num1 + num2;
   return res
};
//a button that subtracts
function subtract(num1, num2){
dif = num1 - num2;
return dif
}
//a button that multiplies
function multiply (num1, num2){
  product = num1 * num2;
    return product
}
//a button that divides
function divide(num1, num2){
   quotient = num1/num2;
   return quotient
}
let num1 = ''
let num2 = ''
let operater = ''
// a button that operates
function operate(operater, num1, num2){
  if (operater === add){
      return add(num1, num2); 
  }
  else if (operater === subtract){
    return subtract(num1, num2); 
}
  else if (operater === multiply){
    return multiply(num1, num2); 
  
}
  else (operater === divide)
   return divide(num1, num2); 

}



// display makes what button is clicked
const screen = document.getElementById('display');
function displayNum(x){
  (screen.innerHTML += x).toString()
}

//del deletes one thing
const del = document.getElementById('delete');
function delt(){
  screen.textContent = screen.textContent.slice(0, -1)
}

//AC clears all
const clear = document.getElementById('AC');
function clearAll(){
  screen.innerHTML = ''
}


//when operator is clicked let num1 = screen.innerhtml
// and let operator = the button clicked
//then clear display
function Oper(x){
 num1 = (+screen.textContent);
 operater = x;
screen.innerHTML = '';
 
}
//store num2 then call operate function and display the return
function eqal(){
  num2 = (+screen.textContent);
 screen.innerHTML = '';
 screen.innerHTML = operate(operater, num1, num2);
  
 }
 
