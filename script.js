$(document).ready(function () {//START JS Script after document load and ready----START 

   
    setInterval(function () {//test loop setinterval, updates the title 
        // CurDate = moment().format('dddd, MMMM Do');
        let CurDate = moment().format('dddd, MMMM, Do, hh:mm:ss a');
        $("#currentDay").text(CurDate);
    }, 500);

    let StartTimeSlot = (9 * 3600000); // (((11 + 12) * 3600000) + (25 * 60000));//  Start time of the first time slot in the planner. Defined as Milliseconds .0165 hrs = 1 min, 1 hr = 3600000 ms, 9am = 32400000, 8 am = 8 hrs x 3600 seconds x 1000 milliseconds = 28800000
    let TimeSlotInterval = (60 * 60000) + (1000 * 0);//Time Slot Interval - variable is used to adjust the size the time slot, can be a small as 1 second, defined in milliseconds 1000 = 1 second, 3600 seconds = 1 hour, this affects the rate at which the background css class changes
    let NextInterval = (0 * 60000) + (1000 * 3);// next time out interval in ms
    let ThresholdSwag = 500;//ms window for slop at threshold
    let CurThreshold = StartTimeSlot;

    let WorkHours = [// Array of objects for basic start up content--------------------------------------------------------------------------------
        {
            Label: "9am",
            EventText: "",
            TimeClass: "DefaultTimeClass",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "10am",
            EventText: "",
            TimeClass: "DefaultTimeClass",
            StartTimeThresh: "",
            SaveDate: ""

        },
        {
            Label: "11am",
            EventText: "",
            TimeClass: "DefaultTimeClass",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "12pm",
            EventText: "",
            TimeClass: "DefaultTimeClass",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "1pm",
            EventText: "",
            TimeClass: "DefaultTimeClass",
            StartTimeThresh: "",
            SaveDate: ""
        },
        {
            Label: "2pm",
            EventText: "",
            TimeClass: "DefaultTimeClass",
            StartTimeThresh: "",
            SaveDate: ""
        }
        , {
            Label: "3pm",
            EventText: "",
            TimeClass: "DefaultTimeClass",
            StartTimeThresh: "",
            SaveDate: ""
        }
        , {
            Label: "4pm",
            EventText: "",
            TimeClass: "DefaultTimeClass",
            StartTimeThresh: "",
            SaveDate: ""
        }
        , {
            Label: "5pm",
            EventText: "",
            TimeClass: "DefaultTimeClass",
            StartTimeThresh: "",
            SaveDate: ""
        }
    ];

    function BCTIM() {// Build Current Time In MilliSeconds, returns milliseconds
        // there is another way to do this.
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
    };

    function SADL() {//Save Array Data Locally
        for (let i = 0; i < WorkHours.length; i++) {
            WorkHours[i].SaveDate = moment().format('dddd, MMMM, Do');
        }
        localStorage.setItem("SavedWorkArray", JSON.stringify(WorkHours));
    }

    function LSAD() {//Load Saved Array Data
        let SavedArrayData = JSON.parse(localStorage.getItem("SavedWorkArray"));
        if ((SavedArrayData !== null) && (SavedArrayData[0].SaveDate === moment().format('dddd, MMMM, Do'))) {//&& (SavedArrayData[0].SaveDate === moment().format('dddd, MMMM, Do'))
            //only loads saved data if it was saved on the same day... will NOT load old data.
            WorkHours = SavedArrayData;
            // console.log("JSON Saved data LOADED");
        } else {
            // console.log("JSON Saved data set empty");
        }

    };
    LSAD();//Load Saved Array Data

    function BASTT() {//Build Array Start Time Thresh Holds
        let TempStartTimeThresh = StartTimeSlot - TimeSlotInterval;//Sets the temp to 1 interval before start time.
        for (let i = 0; i < WorkHours.length; i++) {
            TempStartTimeThresh += TimeSlotInterval;//increments temp to start time on first iteration and next on all others
            WorkHours[i].StartTimeThresh = TempStartTimeThresh;//sets the StartTimeThreshold for each array object
        }
    };
    BASTT();////Build Array Start Time Thresh Holds

    function RAC() { //RenderArrayContent
        $(".container").html("")//.empty, should not need this because render will only be called once.
        for (let i = 0; i < WorkHours.length; i++) {
            $(".container").append(
                "<div class='row'><div class='col-1 hour time-block'>" + WorkHours[i].Label + "</div><textarea class='col-10 " +
                WorkHours[i].TimeClass + "' id=" + WorkHours[i].Label + ">" + WorkHours[i].EventText + " </textarea><div class = 'col-1 saveBtn'><i class='fas fa-save'></i>"
            )
        }
    }
    RAC(); //RenderArrayContent

    $('.saveBtn').on('click', function () {
        // console.log(this.getItem());
        // alert(".saveBtn clicked " + this);
        for (let i = 0; i < WorkHours.length; i++) {// log of array data
            let temp = '#'
            temp = temp + WorkHours[i].Label;
            // console.log(temp);

            let temptemp = $(temp).val();
            // console.log(temptemp);
            WorkHours[i].EventText = temptemp;
        }
        SADL();//Save Array Data Local
    });

    setInterval(function () {//test loop setinterval, updates the title 
        for (let i = 0; i < WorkHours.length; i++) {// log of array data
            let temp = '#'
            let tempTime = BCTIM();
            temp = temp + WorkHours[i].Label;
            console.log(temp);
            // console.log("BCTIM: "+ BCTIMStart " + WorkHours[i].StartTimeThresh);
            if (tempTime < WorkHours[i].StartTimeThresh) {
                console.log("1 if");
                if ($(temp).hasClass("DefaultTimeClass")) {
                    $(temp).removeClass("DefaultTimeClass").addClass("future")
                }//add else if condition if needed
            } else if ((tempTime > WorkHours[i].StartTimeThresh) && (tempTime < (WorkHours[i].StartTimeThresh + TimeSlotInterval))) {
                console.log("2 if");
                if ($(temp).hasClass("DefaultTimeClass")) {
                    $(temp).removeClass("DefaultTimeClass").addClass("present")
                } else if ($(temp).hasClass("future")) {
                    $(temp).removeClass("future").addClass("present")
                }
            } else if ((tempTime > WorkHours[i].StartTimeThresh) && (tempTime > (WorkHours[i].StartTimeThresh + TimeSlotInterval))) {
                console.log("3 if");
                if ($(temp).hasClass("DefaultTimeClass")) {
                    $(temp).removeClass("DefaultTimeClass").addClass("past")
                } else if ($(temp).hasClass("future")) {
                    $(temp).removeClass("future").addClass("past")
                }else if ($(temp).hasClass("present")) {
                    $(temp).removeClass("present").addClass("past")
                }
            }

        };

    }, 1000);


});//END JS Script after document load and ready----------------------------------END 
