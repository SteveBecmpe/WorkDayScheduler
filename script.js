$(document).ready(function(){//START JS Script after document load and ready----START 
    let CurDate = moment().format('dddd, MMMM Do');
    //DateTime.local().toLocaleString(DateTime.DATE_FULL);
    $("#currentDay").text(CurDate);
    console.log(CurDate);




});//END JS Script after document load and ready----------------------------------END 