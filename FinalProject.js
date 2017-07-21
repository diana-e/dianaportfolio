$(".happyapple").hide();
$("#link").hide();
$("#limes").hide();
$("#lemons").hide();
$("#orangez").hide();

$("#oranges").click(function(){
    $(".happyapple").show();
    $("#lowermiddle").css("background-color","#F4B4B4");
    $("#footer").css("background-color","#F4D7B4");
    $("#header").css("background-color","#F4D7B4");
    $("#link").show();
    });

$("#link").click(function(){
    $("#applez").append("APPLES! ");
    $("#limes").show();
    });

$("#limes").click(function(){
    $("#applez").append("LIMES!! ");
    $("#lemons").show();
    });

$("#lemons").click(function(){
    $("#applez").append("LEMONS!! ");
    $("#orangez").show();
    });

$("#orangez").click(function(){
    $("#applez").append("ORANGES!!! ");
    });
