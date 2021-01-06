$(document).ready(function () {//START JS Script after document load and ready----START 

    setInterval(function () {//test loop setinterval, updates the title 
        // CurDate = moment().format('dddd, MMMM Do');
        let CurDate = moment().format('dddd, MMMM, Do, hh:mm:ss a');
        $("#currentDay").text(CurDate);
    }, 500);

    let StartTimeSlot = (((10 + 12) * 3600000) + (40 * 60000));//Start time of the first time slot in the planner. Defined as Milliseconds .0165 hrs = 1 min, 1 hr = 3600000 ms, 9am = 32400000, 8 am = 8 hrs x 3600 seconds x 1000 milliseconds = 28800000
    let TimeSlotInterval = (0 * 60000) + (1000 * 20);//Time Slot Interval - variable is used to adjust the size the time slot, can be a small as 1 second, defined in milliseconds 1000 = 1 second, 3600 seconds = 1 hour, this affects the rate at which the background css class changes
    let NextInterval = (0 * 60000) + (1000 * 30);// next time out interval in ms
    
    let WorkHours = [// Array of objects for basic start up content--------------------------------------------------------------------------------
        {
            Label: "9am",
            EventText: "",
            TimeClass: "Default Time Class",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "10am",
            EventText: "",
            TimeClass: "Default Time Class",
            StartTimeThresh: "",
            SaveDate: ""

        },
        {
            Label: "11am",
            EventText: "",
            TimeClass: "Default Time Class",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "12pm",
            EventText: "",
            TimeClass: "Default Time Class",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "1pm",
            EventText: "",
            TimeClass: "Default Time Class",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "2pm",
            EventText: "",
            TimeClass: "Default Time Class",
            StartTimeThresh: "",
            SaveDate: ""
        }
        , {
            Label: "3pm",
            EventText: "",
            TimeClass: "Default Time Class",
            StartTimeThresh: "",
            SaveDate: ""
        }
        , {
            Label: "4pm",
            EventText: "",
            TimeClass: "Default Time Class",
            StartTimeThresh: "",
            SaveDate: ""
        }
        , {
            Label: "5pm",
            EventText: "",
            TimeClass: "Default Time Class",
            StartTimeThresh: "",
            SaveDate: ""
        }
    ];

    function BTASTT() {//Build Test Array Start Time Thresh Holds
        let TempStartTimeThresh = StartTimeSlot - TimeSlotInterval;//Sets the temp to 1 interval before start time.
        for (let i = 0; i < WorkHours.length; i++) {
            TempStartTimeThresh += TimeSlotInterval;//increments temp to start time on first iteration and next on all others
            WorkHours[i].StartTimeThresh = TempStartTimeThresh;//sets the StartTimeThreshold for each array object
        }
    };
    BTASTT();//Build Test Array Start Time Thresh Holds


    function BCTIM() {// Build Current Time In MilliSeconds, returns milliseconds
        let CurHMSmSTimeofDay = 0;
        let CurHrTimeofDay = moment().hours();
        CurHMSmSTimeofDay = CurHMSmSTimeofDay + (CurHrTimeofDay * 3600000);
        let CurMinTimeOfDay = moment().minutes();
        CurHMSmSTimeofDay = CurHMSmSTimeofDay + (CurMinTimeOfDay * 60000);
        let CurSecTimeOfDay = moment().seconds();
        CurHMSmSTimeofDay = CurHMSmSTimeofDay + (CurSecTimeOfDay * 1000);
        let CurMSTimeOfDay = moment().millisecond();
        CurHMSmSTimeofDay = CurHMSmSTimeofDay + CurMSTimeOfDay;
        return CurHMSmSTimeofDay;
    }

    function CCC() {//Clear Container Content
        $("").html(".container")
    }


    function RAC() { //RenderArrayContent
        // $("").html(".container")
        for (let i = 0; i < WorkHours.length; i++) {
            $("<div class='row'><div class='col-1 hour time-block' id='" +
                WorkHours[i].Label + "'>" + WorkHours[i].Label + "</div><textarea class='col-10 " +
                WorkHours[i].TimeClass + "' placeholder= 'test text'> html text area " + WorkHours[i].TimeClass + " </textarea><div class = 'col-1 saveBtn'><i class='fas fa-save'></i>"
            ).appendTo(".container");
        }
    }
    RAC(); //RenderArrayContent

    function CNI(MsCurTime) {//Calculate Next Interval
    }

    //START LIST OF FUNCTIONS--------------------------------------FUNCTIONS START

    function RTAC() {//Reset Test Arrayy Classes
        for (let i = 0; i < WorkHours.length; i++) {
            WorkHours[i].TimeClass = "";
        }
    };
    //RTAC();//Reset Test Array Classes


    function UTCPPF() { //Update Time Class Past Present Future
        for (i = 0; i < WorkHours.length; i++) {
            let TempMsTime = BCTIM();// Build Current Time In MilliSeconds, returns milliseconds
            if (TempMsTime <= (WorkHours[i].StartTimeThresh - 100)) {//past condition
                WorkHours[i].TimeClass = "future";
                WorkHours[i].EventText = TempMsTime;
                // RAC(); //RenderArrayContent
                CCC();
                break;
            } else if ((TempMsTime >= (WorkHours[i].StartTimeThresh - 100)) && (TempMsTime < (WorkHours[i].StartTimeThresh + TimeSlotInterval - 100))) {//Present
                WorkHours[i].TimeClass = "present";
                WorkHours[i].EventText = TempMsTime;
                // RAC(); //RenderArrayContent
                CCC();
                break;
            } else if (TempMsTime > (WorkHours[i].StartTimeThresh - 100)) {
                WorkHours[i].TimeClass = "past";
                WorkHours[i].EventText = TempMsTime;
                // RAC(); //RenderArrayContent
                CCC();
                break;
            } else {
                WorkHours[i].TimeClass = "error";
                WorkHours[i].EventText = TempMsTime;
                // RAC(); //RenderArrayContent
                CCC();
                break;
            }
        }
        RAC(); //RenderArrayContent

    }
    // UTCPPF();//Update Time Class Past Present Future

    setTimeout(function () {//Consol log test loop that shows past present future logic works.
        UTCPPF();//Update Time Class Past Present Future
        for (let i = 0; i < WorkHours.length; i++) {
            console.log(WorkHours[i]);
        }
        console.log(BCTIM());// Build Current Time In MilliSeconds, returns milliseconds
    }, NextInterval);//this variable is the time index later.

    // setInterval(function () {//Consol log test loop that shows past present future logic works.
    //     UTCPPF();//Update Time Class Past Present Future
    //     for (let i = 0; i < WorkHours.length; i++) {
    //         console.log(WorkHours[i]);
    //     }
    //     console.log(BCTIM());// Build Current Time In MilliSeconds, returns milliseconds
    // }, 500);

    //END LIST OF FUNCTIONS----------------------------------------FUNCTIONS END

});//END JS Script after document load and ready----------------------------------END 