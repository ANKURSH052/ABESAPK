function calculateage(){
    let dob=document.getElementById('dob').value;
    let today=new Date();
    let birthDate = new Date(dob);
    let birthms=new Date(today-birthDate);

    let year= birthms.getUTCFullYear()-1970;
    let month= birthms.getUTCMonth();
    let day= birthms.getUTCDay();


    let display=document.querySelector('p');
    display.innerHTML="YEAR IS :"+year;
    display.innerHTML+="<br>MONTH IS:"+month;
    display.innerHTML+="<br>DAY IS:"+day;




}