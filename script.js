var festDate = new Date();
  
// function changeColor(id){
//     document.getElementById("id").style.color="#fff";
// }

document.getElementById("festSelector").addEventListener("change",(event)=>{
   
    if (event.target.value== "newyear") {
        festDate= ("13 Apr 2023");
        document.getElementById("festNaam").innerHTML = "Happy New Year";
    } else if(event.target.value== "teej"){
        festDate= ("30 Aug 2022");
        document.getElementById("festNaam").innerHTML = "Haritalika Teej";
        // changeColor(festNaam);
    } else if(event.target.value== "dashain"){
        festDate= ("5 Oct 2022");
        document.getElementById("festNaam").innerHTML = "Vijaya Dashami";
    } else if(event.target.value== "tihar"){
        festDate= ("27 Oct 2022");
        document.getElementById("festNaam").innerHTML = "Bhai Tika";
        // document.getElementById("heading1").style.color="#fff";
    } else if(event.target.value== "chhath"){
        festDate= ("30 Oct 2022");
        document.getElementById("festNaam").innerHTML = "Chhath Parva";
    } else if(event.target.value== "maghi"){
        festDate= ("15 Jan 2023");
        document.getElementById("festNaam").innerHTML = "Maghe Sakranti";
    } else if(event.target.value== "shivaratri"){
        festDate= ("18 Feb 2023");
        document.getElementById("festNaam").innerHTML = "Maha Shivaratri";
    }else if(event.target.value== "chaite"){
        festDate= ("31 Mar 2023");
        document.getElementById("festNaam").innerHTML = "Chaite Dasahin";
    }else if(event.target.value== "holi1"){
        festDate= ("6 Mar 2023");
        document.getElementById("festNaam").innerHTML = "Pahad Holi";
        // document.getElementById("heading1").style.color="#fff";

    }else if(event.target.value== "holi2"){
        festDate= ("7 Mar 2023");
        document.getElementById("festNaam").innerHTML = "Terai Holi";
    }
    else{
        console.log("Please select a festival");
    }
    console.log(festDate);

    document.getElementById('jyan').style.backgroundImage= "url(images/"+event.target.value+".jpg)";
    

});

  



const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

//festDate = ("5 Oct 2022");


function countdown(){
    const dashainDate =new Date(festDate).getTime();
    const currentDate= new Date();
    const timeLeft= Math.abs(dashainDate-currentDate);

    const totalSeconds = timeLeft/1000;

    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const hours = Math.floor(totalSeconds/3600) % 24;
    const days = Math.floor(totalSeconds/3600/24);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML=formatTime(hours);
    minutesEl.innerHTML=formatTime(minutes);
    secondsEl.innerHTML=formatTime(seconds);

}

function formatTime(time){
    return (time < 10) ? "0"+time :time;
}




countdown();

setInterval(countdown,1000);


