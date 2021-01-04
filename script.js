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
    // Test target time in ms, will become next top of hour after current time is determined.
    //let TargetTime10pm = (11.5 + 12) * 3600000;
    //DateTime.local().toLocaleString(DateTime.DATE_FULL);
    // setTimeout(() => {use this for triggering next chack from where we are...
    //     CurDate = moment().format('dddd, MMMM, Do, sssss');
    //     $("#currentDay").text(CurDate);
    //     console.log(CurDate);
    // },500);
    //

    //test loop setinterval, updates the title 
    setInterval(function () {
        // CurDate = moment().format('dddd, MMMM Do');
        CurDate = moment().format('dddd, MMMM, Do, hh:mm:ss a');
        $("#currentDay").text(CurDate);
    }, 500);




    //test loop setinterval, updates the title 
    // setInterval(function () {
    //     // CurDate = moment().format('dddd, MMMM Do');
    //     CurDate = moment().format('dddd, MMMM, Do, hh:mm:ss a');
    //     // CurDate = moment().startOf('day').fromNow();
    //     // CurDate = moment().endOf('hour').fromNow();
    //     let CurLocDate = Date();
    //     // let CurHr = CurDate.getHours();
    //     // let CurSec = CurDate.getSeconds();
    //     let CurMSec = Date.parse(CurLocDate);
    //     // let CurTimeOfDayMS = Date.parse(CurDate);

    //     CurMSTimeOfDay = moment().millisecond();
    //     CurSecTimeOfDay = moment().seconds();
    //     CurMinTimeOfDay = moment().minutes();
    //     CurHrTimeofDay = moment().hours();

    //     CurHMSmSTimeofDay = CurMSTimeOfDay + (CurSecTimeOfDay * 1000) + (CurMinTimeOfDay * 60000) + (CurHrTimeofDay * 3600000);

    //     let IntCurHMSmSTimeofDay = Math.floor(CurHMSmSTimeofDay);
    //     let NextInterval = TargetTime10pm - IntCurHMSmSTimeofDay - 500;

    //     //If less than 1 hour
    //     // let NextIntervalMins = Math.floor(NextInterval / (60000));
    //     let NextIntervalMins = (NextInterval / (60000));
    //     NextIntervalMins = NextIntervalMins.toFixed(2);


    //     // $("#currentDay").text("MomCurDate->{" + CurDate + "} MomCurMillSec->{" + CurMSTimeOfDay + "} Date->{" + CurLocDate + "} DateParse->{" + CurMSec + "}");
    //     $("#currentDay").text(CurDate);

    //     // console.log(CurDate);
    //     // console.log("CurHr " + CurHr);
    //     // console.log("CurSec " + CurSec);


    //     // console.log("CurMSTimeOfDay " + CurMSTimeOfDay);
    //     // console.log("CurSecTimeOfDay" + CurSecTimeOfDay);
    //     // console.log("CurMinTimeOfDay " + CurMinTimeOfDay);
    //     // console.log("CurHrTimeofDay " + CurHrTimeofDay);
    //     // console.log("CurHMSmSTimeofDay " + CurHMSmSTimeofDay);
    //     // console.log("IntCurHMSmSTimeofDay " + IntCurHMSmSTimeofDay);
    //     // console.log("Target 11pm " + TargetTime10pm);
    //     // console.log("Next Interval " + NextInterval);
    //     // console.log("NextIntervalMins " + NextIntervalMins);
    //     // console.log("StartTimeSlot " + StartTimeSlot);


    // }, 500);

    //Variables--------------------------------------------------------------------------------


    //Array of objects for
    let WorkHours = [// basic start up content--------------------------------------------------------------------------------
        {
            Label: "9am",
            EventText: "",
            TimeClass: "",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "10am",
            EventText: "",
            TimeClass: "",
            StartTimeThresh: "",
            SaveDate: ""

        },
        {
            Label: "11am",
            EventText: "",
            TimeClass: "",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "12am",
            EventText: "",
            TimeClass: "",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "1pm",
            EventText: "",
            TimeClass: "",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "2pm",
            EventText: "",
            TimeClass: "",
            StartTimeThresh: "",
            SaveDate: ""
        }
        , {
            Label: "3pm",
            EventText: "",
            TimeClass: "",
            StartTimeThresh: "",
            SaveDate: ""
        }
        , {
            Label: "4pm",
            EventText: "",
            TimeClass: "",
            StartTimeThresh: "",
            SaveDate: ""
        }
        , {
            Label: "5pm",
            EventText: "",
            TimeClass: "",
            StartTimeThresh: "",
            SaveDate: ""
        }
    ];


    //TimeStartInterval - the starting time of the Scheduled List
    // variable defined in Milliseconds from 0;
    // 8 am = 8 hrs x 3600 seconds x 1000 milliseconds = 28800000
    // 1 hr = 3600000 ms
    //9am = 32400000
    //Start time of the first time slot in the planner. Defined as Milliseconds
    let StartTimeSlot = ((11 + 12) * 3600000 + (54*60000)   );//.0165 hrs = 1 min
    //TimeSlotQty - the number of allowed time slots in the day planner
    let TimeSlotQty = WorkHours.length;
    //Time Slot Interval - variable is used to adjust the size the time slot, can be a small as 1 second, defined in milliseconds
    let TimeSlotInterval = 1000 * 3;//1000 = 1 second, 3600 seconds = 1 hour, this affects the rate at which the background css class changes



    // console.log( WorkHours);

    //START LIST OF FUNCTIONS--------------------------------------FUNCTIONS START

    //Reset Test Array Classes
    function RTAC() {
        for (let i = 0; i < WorkHours.length; i++) {
            WorkHours[i].TimeClass = "";
        }


    };
RTAC();

    //Build Test Array Start Time Thresh Holds
    function BTASTT() {
        let TempStartTimeThresh = StartTimeSlot - TimeSlotInterval;//Sets the temp to 1 interval before start time.

        for (let i = 0; i < WorkHours.length; i++) {
            TempStartTimeThresh += TimeSlotInterval;//increments temp to start time on first iteration and next on all others
            WorkHours[i].StartTimeThresh = TempStartTimeThresh;//sets the StartTimeThreshold for each array object
        }


    };
    BTASTT();
    // console.log(WorkHours);
    // console.log(CurHMSmSTimeofDay);

    //Update Time Class Past Present Future
    function UTCPPF() {
        for (i = 0; i < WorkHours.length; i++) {
            CurHMSmSTimeofDay = 0;
            CurHrTimeofDay = moment().hours();
            CurHMSmSTimeofDay = CurHMSmSTimeofDay + (CurHrTimeofDay * 3600000);
            CurMinTimeOfDay = moment().minutes();
            CurHMSmSTimeofDay = CurHMSmSTimeofDay + (CurMinTimeOfDay * 60000);
            CurSecTimeOfDay = moment().seconds();
            CurHMSmSTimeofDay = CurHMSmSTimeofDay + (CurSecTimeOfDay * 1000);
            CurMSTimeOfDay = moment().millisecond();
            CurHMSmSTimeofDay = CurHMSmSTimeofDay + CurMSTimeOfDay;


            // CurHMSmSTimeofDay = CurMSTimeOfDay + (CurSecTimeOfDay * 1000) + (CurMinTimeOfDay * 60000) + (CurHrTimeofDay * 3600000);

            if (CurHMSmSTimeofDay <= (WorkHours[i].StartTimeThresh - 100)) {//past condition
                WorkHours[i].TimeClass = "future";
                WorkHours[i].EventText = CurHMSmSTimeofDay;
            } else if ((CurHMSmSTimeofDay >= (WorkHours[i].StartTimeThresh - 100)) && (CurHMSmSTimeofDay < (WorkHours[i].StartTimeThresh + TimeSlotInterval - 100))) {//Present
                WorkHours[i].TimeClass = "present";
                WorkHours[i].EventText = CurHMSmSTimeofDay;
            } else if (CurHMSmSTimeofDay > (WorkHours[i].StartTimeThresh - 100)) {
                WorkHours[i].TimeClass = "past";
                WorkHours[i].EventText = CurHMSmSTimeofDay;
            } else {
                WorkHours[i].TimeClass = "error";
                WorkHours[i].EventText = CurHMSmSTimeofDay;
            }
        }

    }
    UTCPPF();
    // console.log(WorkHours);
    // console.log(CurHMSmSTimeofDay);
    setInterval(function () {//-------------------------------Consol log test loop that shows past present future logic works.
        UTCPPF();
        for (let i = 0; i < WorkHours.length; i++) {
            console.log(WorkHours[i]);
            
        }
        console.log(CurHMSmSTimeofDay);
    }, 500);






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