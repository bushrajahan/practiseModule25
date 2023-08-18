// add event button handler 
// than find the inpurt 

document.getElementById('btn-withdraw')?.addEventListener('click',function(){
    const newValue = InputValue('withdraw-input');
    // console.log(newValue);
    const oldValue = CheckTotal('withdraw');

    const total = newValue + oldValue;
    
    const withdraw = 'withdraw';

    const balance ='balance'

    const balanceValue = CheckTotal(balance);

    const newBalnce = balanceValue - total;
    // console.log(newBalnce)
    if(total > newBalnce){
        alert('please check your balance');
        return;
    }
    setValue(balance,newBalnce);
    setValue(withdraw,total);



})