
var body = document.getElementById('body')




function dark(){
localStorage.setItem("mode","dark")
checkmode()
}
function light() {
    localStorage.setItem("mode","light")
    checkmode()
}

function checkmode(){
    var getmode = localStorage.getItem("mode")
    if (getmode === "dark") {
        body.className = "dark";
                
    }else{
        body.className ="light"
    }
}

function DefaultMode(){
    var bydefault = localStorage.getItem("mode")
    if(bydefault === "null")
    {
        localStorage.setItem("mode","light")
    }
    else
{
    checkmode()
}
}
window.onload = DefaultMode();