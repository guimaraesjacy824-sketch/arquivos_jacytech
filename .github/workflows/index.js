    
    nome=prompt("Qual é o seu nome completo?");
    alert("Olá, "+nome+" seja bem-vindo à Calculadora Tech!\n Aqui você pode fazer cálculos básicos de aritmética. ");

    function soma(){ 
        var lig1=n1;
        var lig2=n2;
        var resultado=eval(lig1.value)+ eval(lig2.value);
        sms.innerHTML="<h1>"+lig1.value+"+"+lig2.value+"="+resultado+"</h1>";
        lig1.value="";
        lig2.value="";
    }
    function sub(){ 
        var lig1=n1;
        var lig2=n2;
        var resultado=eval(lig1.value)- eval(lig2.value);
        sms.innerHTML="<h1>"+lig1.value+"-"+lig2.value+"="+resultado+"</h1>";
        lig1.value="";
        lig2.value="";
    }
    function mult(){ 
        var lig1=n1;
        var lig2=n2;
        var resultado=eval(lig1.value)* eval(lig2.value);
        sms.innerHTML="<h1>"+lig1.value+"×"+lig2.value+"="+resultado+"</h1>";
        lig1.value="";
        lig2.value="";
    }
    function div(){ 
        var lig1=n1;
        var lig2=n2;
        var resultado=eval(lig1.value) /(eval(lig2.value));
        sms.innerHTML="<h1>"+lig1.value+"÷"+lig2.value+"="+resultado+"</h1>";
        lig1.value="";
        lig2.value="";
    }

