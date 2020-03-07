function execute(command){
    let data = command.split(/\s(.+)/)[0];
    let index = command.split(/\s(.+)/)[1];
    switch(data.toLowerCase()){
        case "about":
            about();
            break;
        case "applog":
            apploglist();
            break;
        case "calc":
            calc(index);
            break;
        case "clr":
        case "cls":
        case "clear":
            clear();
            break;
        case "date":
            displayDate(index);
            break;
        case "echo":
            echo(index);
            break;
        case "head":
        case "header":
            header(index);
            break;
        case "help":
        case "?":
            help();
            break;
        case "msg":
            msg(index);
            break;
        case "tips":
            tipscommand(index);
            break;
        case "ver":
            typeset(systemInfo.description+" "+systemInfo.version);
            break;
        case "time":
            displayTime(index);
            break;
        default:
            typeset(data+" is not a vaild command.");
    }
    last = command;
}

//

function about(){
    typeset(systemInfo.summary);
    typeset(systemInfo.description+" "+systemInfo.version);
    typeset(systemInfo.copyright);
}

function alteval(obj){
    return Function('"use strict";return (' + obj + ')')();
}

function apploglist(){
    $.each(applog, function(ver, content){
        typeset("<b>"+ver+"</b>");
        typeset(content);
    });
}

function calc(index){
    try {
        if (isNaN(parseFloat(index))) {
            typeset("0");
        } else {
            // typeset(eval(index));
            typeset(alteval(index));
        }
    } catch (error) {
        errordisp("Error");
        // errordisp("Error: Unexpected error when calculating by string");
        // errordisp('Error: Unexpected error when calculating by string, this may because your browser not supported or disabled eval function due to some security issues');
    }
}

function clear(){
    $('#content').empty();
}

function displayDate(){
    typeset(new Date().toLocaleDateString());
}

function displayTime(index){
    switch (index) {
        case "12":
            systemProp.twentyFourHoursDisplay = false
            break;
        case "24":
            systemProp.twentyFourHoursDisplay = true            
            break;
        case undefined:
        default:
            var date = new Date;
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var strTime
            if (!systemProp.twentyFourHoursDisplay) {
                var ampm = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
            }
            minutes = minutes < 10 ? '0'+minutes : minutes;
            seconds = seconds < 10 ? '0'+seconds : seconds;
            if (!systemProp.twentyFourHoursDisplay) {
                strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
            } else {
                strTime = hours + ':' + minutes + ':' + seconds
            }
            typeset(strTime);
            console.log(index)
            break;
    }
}

function echo(index){
    try {
        let echotimes = index.split(/\s(.+)/)[0];
        let echotxt = index.split(/\s(.+)/)[1];
        if (!isNaN(echotimes)){
            if (echotxt == undefined) {
                typeset(index);
            } else {
                for(var i=0;i<echotimes;i++){
                    typeset(echotxt);
                }
            }
        }else{
            typeset(index);
        }
    } catch (error) {
        errordisp('Error: Unexpected error when echoing');
    }
}

function header(index){
    switch (index) {
        case "default":
        case "reset":
            $("#header").html(systemInfo.header);
            break;
        case "clear":
        case "empty":
        case "null":
            $("#header").html("");
            break;
        case undefined:
        case null:
            errordisp("Error: Invalid message value");
            break;
        default:
            systemProp.header = index
            $("#header").html(systemProp.header);
            break;
    }
}

function help(){
    typeset('<table class="help">',false);    
    $.each(commands, function(command, content){
        $('.help').last().append(`<tr>
        <td class="help-command">`+command+`</td>
        <td class="help-content">`+content+`</td>
        </tr>`);
    });
    typeset('</table>',false);
}

function msg(index){
    if($("#msg").length == 0) {
        $('#header').after('<div id="msg"></div>');
    }
    switch (index) {
        case "clear":
        case "empty":
        case "null":
            $("#msg").html("");
            break;
        case undefined:
        case null:
            errordisp("Error: Invalid message value");
            break;
        default:
            $("#msg").html(index);
            break;
    }
    
}

function tipscommand(index){
    if (index){
        //operations
        switch (index) {
            case "hide":
                $("#tipsmain").css("display", "none");
                break;
            case "show":
                $("#tipsmain").css("display", "block");
                break;
            default:
                break;
        }
    }else{
        typeset(tips[tips.length*Math.random()<<0]);
    }
}

function typeset(content, newline = true){
    if (newline){
        $('#content').append(content+br);
    }else{
        $('#content').append(content);
    }
}

function errordisp(content){
    try {
        $('#content').append(content+br);
    } catch (e) {
        console.log(e);
    }
    
}