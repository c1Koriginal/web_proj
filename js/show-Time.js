"use strict";

function showClock() {
    var curT = new Date(),

        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],

        curH = curT.getHours(),
        curM = curT.getMinutes(),
        curS = curT.getSeconds();

    curM = (curM < 10 ? "0" : "") + curM;
    curS = (curS < 10 ? "0" : "") + curS;

    var timeOfDay = (curH < 12) ? "AM" : "PM";

    curH = (curH > 12) ? curH - 12 : curH;

    curH = (curH == 0) ? 12 : curH;

    var curTString = "Today is: " + days[curT.getDay()] + " " + months[curT.getMonth()] + " " + curT.getFullYear()+ " " + curH + ":" + curM + ":" + curS + " " + timeOfDay;

    document.getElementById("clock").firstChild.nodeValue = curTString;
}
