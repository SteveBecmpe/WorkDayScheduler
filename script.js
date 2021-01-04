$(document).ready(function () {//START JS Script after document load and ready----START 
    // let CurTimeOfDay = moment().format('hh:mm:ss a');
    let CurMSTimeOfDay = moment().millisecond();
    let CurSecTimeOfDay = moment().seconds();
    let CurMinTimeOfDay = moment().minutes();
    let CurHrTimeofDay = moment().hours();
    let CurHMSmSTimeofDay = 0;
    // let CurDate = moment().format('dddd, MMMM, Do, hh:mm:ss a');
    // let CurDate = moment().startOf('day').fromNow();
    // let CurDate = moment().endOf('hour').fromNow();
    let CurDate = moment().format('dddd, MMMM Do');
    //86400 seconds in 24 hours
    let TargetTime10pm = (10+12)*3600000;
    //DateTime.local().toLocaleString(DateTime.DATE_FULL);
    // setTimeout(() => {use this for triggering next chack from where we are...
    //     CurDate = moment().format('dddd, MMMM, Do, sssss');
    //     $("#currentDay").text(CurDate);
    //     console.log(CurDate);
    // },500);

    setInterval(function () {
        // CurDate = moment().format('dddd, MMMM, Do, hh:mm:ss a');
        // CurDate = moment().startOf('day').fromNow();
        // CurDate = moment().endOf('hour').fromNow();
        let CurLocDate = Date();
        // let CurHr = CurDate.getHours();
        // let CurSec = CurDate.getSeconds();
        let CurMSec = Date.parse(CurLocDate);
        // let CurTimeOfDayMS = Date.parse(CurDate);

        CurMSTimeOfDay = moment().millisecond();
        CurSecTimeOfDay = moment().seconds();
        CurMinTimeOfDay = moment().minutes();
        CurHrTimeofDay = moment().hours();

        CurHMSmSTimeofDay = CurMSTimeOfDay + (CurSecTimeOfDay*1000) + (CurMinTimeOfDay*60000) + (CurHrTimeofDay*3600000);

        let IntCurHMSmSTimeofDay = Math.floor(CurHMSmSTimeofDay);
        let NextInterval = TargetTime10pm - IntCurHMSmSTimeofDay - 500;


        $("#currentDay").text("MomCurDate->{" + CurDate + "} MomCurMillSec->{" + CurMSTimeOfDay + "} Date->{" + CurLocDate + "} DateParse->{" + CurMSec + "}");
        // console.log(CurDate);
        // console.log("CurHr " + CurHr);
        // console.log("CurSec " + CurSec);
        console.log("CurMSTimeOfDay " + CurMSTimeOfDay);
        console.log("CurSecTimeOfDay" + CurSecTimeOfDay);
        console.log("CurMinTimeOfDay " + CurMinTimeOfDay);
        console.log("CurHrTimeofDay " + CurHrTimeofDay);
        console.log("CurHMSmSTimeofDay " + CurHMSmSTimeofDay);
        console.log("IntCurHMSmSTimeofDay " + IntCurHMSmSTimeofDay);
        console.log("Target 10pm "+ TargetTime10pm);
        console.log("Next Interval " + NextInterval);
    }, 500);








    //OLD Static code for header load date and time.
    // CurDate = moment().format('dddd, MMMM, Do, sssss');
    // $("#currentDay").text(CurDate);
    // console.log(CurDate);



    //Variables

    //TimeStartInterval - the starting time of the Scheduled List
    // variable defined in Milliseconds from 0;
    // 8 am = 8 hrs x 3600 seconds x 1000 milliseconds = 28800000
    // 1 hr = 3600000 ms
    //9am = 32400000
    let TimeStartInterval = 0;

    //TimeSlotQty - the number of allowed time slots in the day planner
    let TimeSlotQty = 9;



    //Time Slot Interval - variable is used to adjust the size the time slot, can be a small as 1 second, defined in milliseconds
    let TimeSlotInterval = 1000;//1000 = 1 second, 3600 seconds = 1 hour, this affects the rate at which the background css class changes

    //temp test function to update header



    //Maybe this array needs to contain the amount of time for each
    let WorkHours = [// basic start up content
        {
            Hr1: "9am",
            EventText: "",
            TimeClass: "",
        },
        {
            Hr2: "10am",
            EventText: "",
            TimeClass: "",
        },
        {
            Hr3: "11am",
            EventText: "",
            TimeClass: "",
        },
        {
            Hr4: "12am",
            EventText: "",
            TimeClass: "",
        },
        {
            Hr5: "1pm",
            EventText: "",
            TimeClass: "",
        },
        {
            Hr6: "2pm",
            EventText: "",
            TimeClass: "",
        }
        , {
            Hr7: "3pm",
            EventText: "",
            TimeClass: "",
        }
        , {
            Hr8: "4pm",
            EventText: "",
            TimeClass: "",
        }
        , {
            Hr9: "5pm",
            EventText: "",
            TimeClass: "",
        }
    ];


    //START LIST OF FUNCTIONS--------------------------------------FUNCTIONS START

    // not needed //Find current time - finds the current point in time on spectrum. on transistions or in between
    // 
    //




    //Start or initialize function
    //create temp array variable.
    //set variable equal to json.parse(localstorage.getitem("name of storage item"));
    //if ONLY if that array is no tempty !==null set working array = to retreived array, overwriting default array structure
    //Call TimeKeeper - Starts time keeper - which has TimeClassUpdate Call inside it.
    //Call TimeClassUpdate - Which has Render Array call inside it.
    //Call render array
    //Render Array data into div list format, adds classes, data-index, etc
    //turns array data in to the div/li html... Does NOT change the array only renders it.
    //For Loop ( .map is another option but maybe later) i=0; i<array.length; i++
    //tempVar = array[i] object (containing time text, event text, time class (past, Present, Future))
    //TimeClassUpdate - Cycle through array data and update TimeClass
    //TimeKeeper, monitors the time and triggers TimeClassUpdate when each hour has passed
    //Array text data update. - cycles through the array data and updates the text data.
    //Array Data Save local - saves the array data in local storage
    //Array Data Local Retrieve - retreives data from local storage
    //







    //END LIST OF FUNCTIONS----------------------------------------FUNCTIONS END

    //functional order of calls
    //Call Init





});//END JS Script after document load and ready----------------------------------END 