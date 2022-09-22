import flatpickr from "flatpickr";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "flatpickr/dist/flatpickr.min.css";

let selectedDate=null;
const dateInp=document.querySelector("#datetime-picker");
let timerId =null;
let start=document.querySelector("[data-start]");




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onOpen(){},
    onClose(selectedDates) {
        clearInterval(timerId);
        selectedDate=selectedDates[0];
        
        if(dateInp.value==""){
            start.setAttribute("disabled","");
            Notify.warning("date cant be empty");
        }
    },
};

start.addEventListener("click",()=>{
    isInTheFuture(selectedDate);
    
});

function isInTheFuture(selectedDate) {
    const today = Date.now();
    if(selectedDate.getTime() < today){
        Notify.failure("please choose a date from the future");
        clearInterval(timerId);
        
    }
    else{
        timeLeft(selectedDate,today);
        start.removeAttribute("disabled","");
        start.setAttribute("disabled","");
        dateInp.setAttribute("disabled","");
    };
}
// alert.classList.remove("hide")



const timeLeft=(date1,date2)=>{
    var day = 1000*60*60*24;
    var second=1000;
    
    timerId = setInterval(() => {
        let diff=date1.getTime()-Date.now();
        let up10=(number)=>number<10?"0"+number.toString():number;

        var years,months,days,hours,minutes,seconds=0
        years = Math.floor(diff/(365*day));
        diff-=(day*365)*years;
        

        months = Math.floor(diff/(30*day));
        diff-=(day*30)*months;
        

        days = Math.floor(diff/day);
        diff-=(day)*days;
        

        hours=Math.floor(diff/(second*3600));
        diff-=(second*3600)*hours;
        

        minutes=Math.floor(diff/(second*60))
        diff-=(second*60)*minutes;
        

        seconds=Math.floor(diff/second);
        diff-=second*seconds

        document.querySelector("[data-year]").innerHTML=up10(years);
        document.querySelector("[data-month]").innerHTML=up10(months);
        document.querySelector("[data-days]").innerHTML=up10(days);
        document.querySelector("[data-hours]").innerHTML=up10(hours);
        document.querySelector("[data-minutes]").innerHTML=up10(minutes);
        document.querySelector("[data-seconds]").innerHTML=up10(seconds);


        if(years>0)document.querySelector(".year").classList.remove("remove");
        if(months>0)document.querySelector(".month").classList.remove("remove");

    }, 1000);
}


flatpickr('#datetime-picker', options);