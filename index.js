function clock(){
    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("ampm");

    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm="AM";

    if (hrs == 0) {
        hrs = 12;
    }
    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }


    hours.innerText=hrs;
    minutes.innerHTML=mins;
    seconds.innerHTML=secs;
    am.innerHTML=am_pm;

}
setInterval(clock,1000);

function setDisplay(){

    var wakeup_value = document.getElementById('wakeup-time').value;
    var lunch_value = document.getElementById("lunch-time").value;
    var nap_value = document.getElementById("nap-time").value;
    var night_value = document.getElementById("night-time").value;
    var current_hours = new Date().getHours();


    if(wakeup_value == current_hours){
        document.getElementById('view-image').style.backgroundImage="url(Wakeup.jpg)"
        document.getElementById('view-plan').innerHTML='Grab Some Healthy Breakfast !!';
        document.getElementById("view-wish").innerHTML="Good Morning !! ";
    }

    if(lunch_value == current_hours){
        document.getElementById("view-image").style.backgroundImage="url(lunch.jpg)"
        document.getElementById("view-plan").innerHTML="Let's Have Some Lunch !!";
        document.getElementById("view-wish").innerHTML="Good Afternoon !!";
    }

    if(nap_value == current_hours){
        document.getElementById("view-image").style.backgroundImage="url(nap.jpg)"
        document.getElementById("view-plan").innerHTML="Stop Yawing And Get Some Tea !!";
        document.getElementById("view-wish").innerHTML="Good Evening !!";
    }
    
    if(night_value == current_hours){
        document.getElementById("view-image").style.backgroundImage="url(night.jpg)"
        document.getElementById("view-plan").innerHTML="Close Your Eyes And Go To Sleep !!";
        document.getElementById("view-wish").innerHTML="Good Night !!";
    }


    var morning_time_value = document.getElementById('wakeup-time');
    var afternoon_time_value = document.getElementById("lunch-time");
    var evening_time_value = document.getElementById("nap-time");
    var sleeping_time_value = document.getElementById("night-time");

    var value = morning_time_value.options[morning_time_value.selectedIndex].text;
    document.getElementById("morning-time").innerHTML="Wake Up Time : " + value;
    var value = afternoon_time_value.options[afternoon_time_value.selectedIndex].text;
    document.getElementById("afternoon-time").innerHTML="Lunch Time : " + value;
    var value = evening_time_value.options[evening_time_value.selectedIndex].text;
    document.getElementById("evening-time").innerHTML="Nap Time : " + value;
    var value = sleeping_time_value.options[sleeping_time_value.selectedIndex].text;
    document.getElementById("sleeping-time").innerHTML="Night Time : " + value;

    
}