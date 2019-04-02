document.title = "The Clock";

var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: '',
        greeting: '',
    }
});

clock.greeting = "";

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    setGradient();
    setGreeting();
    
    var TimeFormat = ["12","00","00","AM"]
    var DateFormat = ["MON","01","01","1969"]

    //| Time Settings |//
    TimeFormat[0] = zeroPadding(cd.getHours(), 2);
    TimeFormat[1] = zeroPadding(cd.getMinutes(), 2);
    TimeFormat[2] = zeroPadding(cd.getSeconds(), 2);
    // US AM/PM Format
    if(TimeFormat[0]<12){TimeFormat[3] = "AM";}else{TimeFormat[3] = "PM";}
    // Edit Hours For AM/PM Format
    if(TimeFormat[0]>12){TimeFormat[0]=TimeFormat[0]-12;}

    //| Date Settings |//    
    DateFormat[0] = zeroPadding(week[cd.getDay()]);
    DateFormat[1] = zeroPadding(cd.getMonth()+1, 2);
    DateFormat[2] = zeroPadding(cd.getDate(), 2);
    DateFormat[3] = zeroPadding(cd.getFullYear(), 4);

    //| Set Time and Date |//
    clock.time = TimeFormat[0]+":"+TimeFormat[1]+":"+TimeFormat[2]+" "+TimeFormat[3];
    clock.date = DateFormat[0]+" "+DateFormat[1]+" "+DateFormat[2]+" "+DateFormat[3];

    $("#Time").text(clock.time);
    $("#Date").text(clock.date);
    $("#Greeting").text(clock.greeting);

};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

function setGreeting(){
    var cd = (new Date().getHours());
    if(cd>0&&cd<11){
        clock.greeting = "Good Morning";
    }else if(cd>=11&&cd<=17){
        clock.greeting = "Good Afernoon";
    }else if(cd>=18&&cd<=24){
        clock.greeting = "Good Evening";
    }
}

function setGradient(){
    var cd = (new Date().getHours());
    switch(cd){
        case 1:
            $("body").addClass("sky-gradient-01");
            $("#clock").css("color","white");
            break;
        case 2:
            $("body").addClass("sky-gradient-02");
            $("#clock").css("color","white");
            break;
        case 3:
            $("body").addClass("sky-gradient-03");
            $("#clock").css("color","white");
            break;
        case 4:
            $("body").addClass("sky-gradient-04");
            $("#clock").css("color","white");
            break;
        case 5:
            $("body").addClass("sky-gradient-05");
            $("#clock").css("color","white");
            break;
        case 6:
            $("body").addClass("sky-gradient-06");
            $("#clock").css("color","white");
            break;
        case 7:
            $("body").addClass("sky-gradient-07");
            break;
        case 8:
            $("body").addClass("sky-gradient-08");
            break;
        case 9:
            $("body").addClass("sky-gradient-09");
            break;
        case 10:
            $("body").addClass("sky-gradient-10");
            break;
        case 11:
            $("body").addClass("sky-gradient-11");
            break;
        case 12:
            $("body").addClass("sky-gradient-12");
            break;
        case 13:
            $("body").addClass("sky-gradient-13");
            break;
        case 14:
            $("body").addClass("sky-gradient-14");
            break;
        case 15:
            $("body").addClass("sky-gradient-15");
            break;
            case 16:
            $("body").addClass("sky-gradient-16");
            break;
        case 17:
            $("body").addClass("sky-gradient-17");
            break;
        case 18:
            $("body").addClass("sky-gradient-18");
            $("#clock").css("color","white");
            break;
        case 19:
            $("body").addClass("sky-gradient-19");
            $("#clock").css("color","white");
            break;
        case 20:
            $("body").addClass("sky-gradient-20");
            $("#clock").css("color","white");
            break;
        case 21:
            $("body").addClass("sky-gradient-21");
            $("#clock").css("color","white");
            break;
        case 22:
            $("body").addClass("sky-gradient-22");
            $("#clock").css("color","white");
            break;
        case 23:
            $("body").addClass("sky-gradient-23");
            $("#clock").css("color","white");
            break;
        case 24:
            $("body").addClass("sky-gradient-24");
            $("#clock").css("color","white");
            break;
    }
}
