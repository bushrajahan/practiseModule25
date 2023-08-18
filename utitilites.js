// at first find the button 

// find the input 
// fint the  value of input and convert it into the float and return this value 

// then find the value of deposite total
// convert this value into float 
// return this value
// find the total value of depoaite

// find the total value of deposite 

// now work on setValue

// and set this value into deposite total

function InputValue(input){
    const FindInput = document.getElementById(input);

    const ValueOfFindInput = FindInput.value;
    const FloatOfValueOfInput = parseFloat(ValueOfFindInput);
    if(isNaN(FloatOfValueOfInput)){
        alert('please provide a number');
        return;
    }
    // console.log(ValueOfFindInput);
    FindInput.value = '';

    return FloatOfValueOfInput;
}

//find the value of balance 

function CheckTotal(balance){
    const OldBalance = document.getElementById(balance);
    const ValueOfOldBalance = OldBalance?.innerText;
    const FloatOfValue = parseFloat(ValueOfOldBalance);
    // if(isNaN(FloatOfValue)){
    //     alert('please Enter a number');
    //     return;
    // }
    console.log(FloatOfValue);
    return FloatOfValue;
}
 
function setValue(balance,newValue){
    const balanceOfTotal = document.getElementById(balance);
    if(isNaN(newValue)){
        alert('please provide a number ');
        return;
    }
    balanceOfTotal.innerText = newValue;
   console.log(newValue,balanceOfTotal);
}
