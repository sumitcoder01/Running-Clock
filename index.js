function clicked(){
    let a=document.getElementById("Changetime");
    a.classList.add("show");
a.innerHTML=`
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    INDIA
</a>
<div class="dropdown-menu show" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="#">Set Time Zone</a>
    <a class="dropdown-item" href="#">Set Country</a>
    <div class="dropdown-divider"></div>
    <button type="button" class="btn btn-success mx-3 px-3">Save</button>
</div>
    `
}
clr=setInterval(() => {
let a=new Date();   
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let time_date=a.getHours() + ':'+a.getMinutes()+':'+a.getSeconds()+" on "+ month[a.getMonth()]+" "+a.getDay()+", "+a.getFullYear();
document.getElementById("time").innerHTML=" "+time_date;
}, Infinity);

function clicked_time(){
    if(confirm("Do you Want To Stop Watch")){
   clearInterval(clr);
    }
}



