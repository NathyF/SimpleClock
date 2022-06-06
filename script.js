const clock = function () {
    let getDate = new Date();

    document.getElementById('clock').innerHTML = getDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
}


function dayOfWeek() {

    let day = new Date();

    document.getElementById('today').innerHTML = day.toLocaleDateString('en-US', { weekday: 'long' });
}


function calender() {
    let dayMonth = new Date();
    document.getElementById('dayofMonth').innerHTML = dayMonth.getDate();
    document.getElementById('month').innerHTML = dayMonth.toLocaleDateString('en-US', { month: 'short' });

}

setInterval(function () { clock(); dayOfWeek(); calender() }, 1000);

console.log("ola");
