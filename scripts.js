function sumIt(){
    let num1;
    let num2;
    num1=document.getElementById("number1").Value;
    num2=document.getElementById("number2").Value;
    let result;
    result=Number(num1)+Number(num2);
    document.getElementById("sum").innerHTML=result;
}
