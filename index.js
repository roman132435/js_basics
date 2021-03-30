function hide(){
    document.getElementById("demo").style.display = 'none';
}

function show(){
    document.getElementById("demo").style.display = 'block';
}


myFunction();

document.getElementById("demo").innerHTML = "I can display " + carName;

function myFunction() {
  carName = "Volvo";
}


change1();

document.getElementById("demo").innerHTML = word;

function change1(){
    word = "elefant";
}



function change2(){
    document.getElementById("demo").innerHTML = "ich bin ein";
}

function write(){
    
    document.write("ich iwll auch");
}



function read(){
    let input = getvalue();
    let arr = input.split("");
    let text = "";
    for ( i = 0; i < arr.length; i++ ){
        text += arr[i];
        console.log(text);
    }
    console.log("wir fahren auf der " + text);
}

function getvalue(){
    return(document.getElementById("userinput").value);
}



function alert(){
    
}

bread.addEventListener ('click',read,true);
barray.addEventListener ('click',combine,true);
balert.addEventListener ('click',alert,true);

bon.addEventListener ('click',show,true);
boff.addEventListener ('click',hide,true);
bchange1.addEventListener('click',change1,true);
bchange2.addEventListener('click',change2,true);
bwrite.addEventListener('click',write,true);


let person = {
    firstName: "Roman",
    lastName: "Scheffner",
    id: "132",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

function uhrzeit(){
    this.innerHTML = Date();
}

btime.addEventListener('mouseover',uhrzeit,true);

