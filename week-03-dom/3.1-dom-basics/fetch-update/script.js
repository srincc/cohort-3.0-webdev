let ctr = 0;
function callback(){
    console.log(ctr);
    document.querySelectorAll("h4")[1].innerHTML=ctr;
    ctr = ctr + 1;
}

setInterval(callback, 1000);