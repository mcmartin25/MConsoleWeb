// MConsole Web Under Construction - NoBootStrap
// let unstableMessage = {notstable: "Required system component not installed.", notusable: "System is not ready. <br> Access denied."};

let gt = "&gt;";
let br = "<br>";

var last = "";

$(document).ready(function() {
    // ableToRun();
    // unstableMsg();

    $("#mconsoleweb").html(`<div id="header">`+(systemProp.header?systemProp.header:systemInfo.header)+`</div>
    <div id="tipsmain"><b>Do you know?</b> <span id="tips">`+tips[tips.length*Math.random()<<0]+`</span></div>
    <div id="content">
    </div>
    <div id="command">
        <span class="gt">&gt;</span><input type="text" id="input">
    </div>`);

});

$(document).keydown(function(e){
    if(e.which == 13){
        enterval($('#input').val());
    }
    if(e.which == 38){
        $('#input').val(!last==""?last:"");
    }
});

// function ableToRun(){
//     $('#header').css('display','block');
//     $('#command').css('display','flex');
// }

// function unstableMsg(){
//     if (systemInfo.stable && systemInfo.usable){
//         $('#unstable').remove();
//     }else if(!systemInfo.stable && systemInfo.usable){
//         $('#message').html(unstableMessage.notstable);
//     }else{
//         $('#message').html(unstableMessage.notusable);
//         $('#content').remove();
//         $('#command').remove();
//     }
// }

function enterval(index){
    $('#content').append(gt+index+br);
    if (!(index == "") && !(index == " ")) {
        execute(index);
    } else {
        console.log("Space error")
    }
    $('#input').val("")
    $("html, body").animate({ scrollTop: $(document).height() }, 100);
}