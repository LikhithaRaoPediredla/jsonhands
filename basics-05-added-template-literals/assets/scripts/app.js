let result=0;
let num1=1;
//create a dictionary
let entry={}
let entries=[]
let sign=''

function list(num1,sign,num2,operation){
    entry={'num1':num1,'sign':sign,'num2':num2,'operation':operation}
    entries.push(entry);
    console.log(entries);
}

function add(){
    let num2=parseInt(userInput.value);
    result= num1+ num2
    description(num1,'+',num2,result);
    list(num1,"+",num2,"add");
    num1=result;
    
}
function sub(){
    let num2=parseInt(userInput.value);
    result= num1- num2
    description(num1,'-',num2,result);
    list(num1,"-",num2,"sub");
    num1=result;
}
function mul(){
    let num2=parseInt(userInput.value);
    result= num1* num2;
    description(num1,'*',num2,result);
    list(num1,"*",num2,"mul");
    num1=result;
}
function div(){
    let num2=parseInt(userInput.value);
    result= num1/ num2;
    description(num1,'/',num2,result);
    list(num1,"/",num2,"div");
    num1=result;
    
}
function description(num1,sign,num2,result){
    let calculationDescription= num1+sign+num2;
    outputResult(result, calculationDescription);
}
addBtn.addEventListener('click',add)
subtractBtn.addEventListener('click',sub)
multiplyBtn.addEventListener('click',mul)
divideBtn.addEventListener('click',div)







