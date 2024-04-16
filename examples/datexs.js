/**
 * Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
 * Show it using alert.
 */

/*let date = new Date("2012-02-20T03:12");
alert(date);
*/

/**
 * Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
 */

function getWeekDay(date){
    let arr = [];
    let tmp = date.toString();
    let index = 0;
    for(let word of tmp) {
        arr[index] = word;
        index++;
    }
    tmp = arr.slice(0, 2).join("").toUpperCase();
    return tmp;
}

function betterGetWeekDay(date){
    let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
    return days[date.getDay()];
}


/**
 * Create a function getDateAgo(date, days) to return the day of month days ago from the date.
 * For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
 * Should work reliably for days=365 or more
 * P.S. The function should not modify the given date.
 */


function getDateAgo(date, days){
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate() - days);
    return dateCopy;
}



/**
 * Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
 * Parameters:
 * year – four-digits year, for instance 2012.
 * month – month, from 0 to 11.
 * For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
 */

function getLastDayOfMonth(year, month){
    let day = 28;
    let date = new Date(year, month, day);
    while(true){
        if(date.getMonth() != month){
            return day-1;
        }
        else date.setDate(++day);
    }
}

function betterGetLastDayOfMonth(year, month){
    let date = new Date(year, month +1, 0);
    return date.getDate
}



/**
 * Write a function getSecondsToday() that returns the number of seconds from the beginning of today.
 * For instance, if now were 10:00 am, and there was no daylight savings shift, then:
 * The function should work in any day. That is, it should not have a hard-coded value of “today”.
 */

function getSecondsToday(){
    let now = new Date();
    let beginningOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let num = beginningOfDay.getTime();
    //let diff = now-beginningOfDay  -> same thing because they're converted automatically
    let res = (now-num)/1000;
    return res;
}


/**
 * Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
 * P.S. The function should work at any day, the “today” is not hardcoded.
 */

function getSecondsToTomorrow(){
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = Math.round((tomorrow - now)/1000);
    return diff;
}

/**
 *  Write a function formatDate(date) that should format date as follows:

 *  If since date passed less than 1 second, then "right now".
 *  Otherwise, if since date passed less than 1 minute, then "n sec. ago".
 *  Otherwise, if less than an hour, then "m min. ago".
 *  Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

 */



function formatDate(date){
    let now = new Date();
    let rs;
    let diff = now - date;
    if(diff < 1000){
        rs = "Right now";
        return rs;
    }
    if(diff < 60*1000){
        rs = "Less than a minute ago";
        return rs;
    }
    if(diff < 3600*1000){
        rs = `${Math.round(diff/60/1000)} minutes ago`;
        return rs;
    }
    rs = `${date.getDate()}.${date.getMonth() +1 }.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    return rs;
}

alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );