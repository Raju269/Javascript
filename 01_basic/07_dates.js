// // Dates 
// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)
// new Date()
// const information = new Date();
// console.log(information);
// // new Date(date string )
// const time = new Date("2025-03-19");
// console.log(time);

// // new Date(year,month)
// const t = new Date(2025,3,19,11,30,33,0);
// console.log(t);

let myDates = new Date();
// console.log(myDates.toDateString());
// console.log(myDates.toString());
// console.log(myDates.toISOString());
// console.log(myDates.getDate());
// console.log(myDates.getDay());
// console.log(myDates.getFullYear());
// console.log(myDates.getHours());
// console.log(myDates.getMilliseconds());
// // console.log(myDates.getMinute());
// console.log(myDates.getSeconds());
// console.log(myDates.getTime());
// console.log(myDates.getTimezoneOffset());
// // console.log(myDates.getVarDate());
// console.log(myDates.getUTCHours());
// console.log(myDates.getUTCMonth());
// console.log(myDates.toLocaleDateString());
// // console.log(typeof myDates);

// const mycreateDates = new Date(2025,0,19);
// const mycreateDates = new Date(2025,0,19,11,55);
// const mycreateDates = new Date('10-03-2025');
// console.log(mycreateDates.toLocaleDateString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// // console.log(myCreatedDate.getTime());
// // console.log(Math.floor(Date.now()/1000));

const newDate = new Date()
console.log(newDate);
// console.log(newDate.getMonth()+1);

// `${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate);
