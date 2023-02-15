function generatePin(){
    const randomNumber=Math.round(Math.random()*10000);
    return randomNumber;
 }
function getPin(){
    const pin=generatePin();
    const pinString=pin+'';
    if(pinString.length===4){
        return pin;
    }
    else{
        return getPin();
    }
}




document.getElementById('generate-button').addEventListener('click',function(){
   const pinNum=getPin();
   const getPinField=document.getElementById('getPinField');
   getPinField.value=pinNum;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number=event.target.innerText;
   const calculatorField=document.getElementById('calculatorField');
   const calculatorInput=calculatorField.value;
    if(isNaN(number)){
        if(number=='C'){
            calculatorField.value='';
          
        }
        else if(number==='<'){
            const digits=calculatorInput.split('');
            digits.pop();
            const remainingDigits=digits.join('');
            calculatorField.value=remainingDigits;
        }
    }
   else{
   
    const newTypeNumber=calculatorInput+number;
      calculatorField.value=newTypeNumber;  
} 
    
})
document.getElementById('submit-btn').addEventListener('click',function(){
    const theGenerateNumber=document.getElementById('getPinField');
    const thePinFieldValue=theGenerateNumber.value;

    const theCalculatorNumber=document.getElementById('calculatorField');
    const theCalculatorFieldValue=theCalculatorNumber.value;
    const pinSuccess=document.getElementById('success-message');
    const pinError=document.getElementById('error-message');
    if(thePinFieldValue===theCalculatorFieldValue){
        
        pinSuccess.style.display='block';
        pinError.style.display='none';
    }
    else{
    
    pinError.style.display='block';
    pinSuccess.style.display='none';
    }
})
