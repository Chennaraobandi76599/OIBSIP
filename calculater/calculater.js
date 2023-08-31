function dis(val){
    document.getElementById("result").value+=val
    }
    function solve(){
    let fun1=document.getElementById("result").value
    let fun2=eval(fun1)
    document.getElementById("result").value=fun2
    }
    function clr(){
    document.getElementById("result").value=""
    }
    function delete1(){
    a= document.getElementById("result").value;
    document.getElementById("result").value=a.substring(0,a.length-1);
    }