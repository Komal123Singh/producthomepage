function CartDisplay(){
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var prname=document.getElementById("prname").value;
    var pqname=document.getElementById("pqname").value;
    var prcname=document.getElementById("prcname").value;
    var adname=document.getElementById("adname").value;
    var cqname=document.getElementById("cqname").value;
    var Cname=document.getElementById("C").value;
    var bt=document.getElementById("btn").value;
    if(fname.trim()==""){
        alert("Enter first name");
    }
    else if(lname.trim()==""){
        alert("Enter Last name");
    }
    else if(prname.trim()==""){
        alert("Enter Product name");
    }
    else if(prcname.trim()==""){
        alert("Enter product price");
    }
    else if(isNaN(prcname)){
        alert("Enter only numeric value");
    }
    else if(pqname.trim()==""){
        alert("Enter quantity of product");
    }
    else if(isNaN(pqname)){
        alert("Enter only numeric value");
    }
    else if(adname.trim()==""){
        alert("Address field Required!!!");
    }
    else if(cqname.trim()==""){
        alert("Enter Contact To place order!");
    }
    else if(isNaN(cqname) && cqname.length<11){
        alert("Enter only 10 numeric value");
    }
    else{
        alert("Your Order has placed!")
    }
    
}