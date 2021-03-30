/*function off(){
    document.getElementById("demo").style.display= "none";
}

function on(){
    document.getElementById("demo").style.display= "block";
}


bon.addEventListener ('click', on, true)
boff.addEventListener ('click', off, true) */

function hide(){
    document.getElementById("demo").style.display = 'none';
}
function show(){
    document.getElementById("demo").style.display = 'block';
}

bon.addEventListener ('click',show(1),true)

boff.addEventListener ('click',hide,true)