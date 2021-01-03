$(document).ready(function(){//START JS Script after document load and ready----START 
    let CurDate = moment().format('dddd, MMMM Do');
    //DateTime.local().toLocaleString(DateTime.DATE_FULL);
    $("#currentDay").text(CurDate);
    console.log(CurDate);

    //Variables
    let WorkHours = [// basic start up content
        {Hr1 : "9am",
        EventText : ""
        },
        {Hr2 : "10am",
        EventText : ""
        },
        {Hr3 : "11am",
        EventText : ""
        },
        {Hr4 : "12am",
        EventText : ""
        },
        {Hr5 : "1pm",
        EventText : ""
        },
        {Hr6 : "2pm",
        EventText : ""
        }
        ,{Hr7 : "3pm",
        EventText : ""
        }
        ,{Hr8 : "4pm",
        EventText : ""
        }
        ,{Hr9 : "5pm",
        EventText : ""
        }
    ];




});//END JS Script after document load and ready----------------------------------END 