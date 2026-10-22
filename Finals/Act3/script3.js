$(document).ready(function(){
    $("#title").text("Welcome, Students!")

    $("p").css("color","white")

    $("h1").css("color","rgb(92, 79, 207)")


})


 $("#btnclick").mousedown(function(){
        $("#message").text("Your mouse enter the button!")
        $(this).css("background", "blue")

    })

$("#btnclick").mouseup(function(){
        $("#message").text("Your mouse left the button!")
        $(this).css("background", "rgb(189, 36, 87)")
        $("#title").text("Hello BSCS31A")
    })

$("#course").change(function(){
        $("#output").text("You Select " + $(this).val())
        $("#program").text($(this).val())
    })

    $("th").css("background","rgb(211, 132, 211)")
    $("tr").css("background","white")

    $("#evenbtn").click(function(){
        $("tr:even").css("background","lightblue")
        $("tr:odd").css("background","white")

    })

    $("#oddbtn").click(function(){
        $("tr:odd").css("background","lightgreen")
        $("tr:even").css("background","white")

    })

    $("#btntable").click(function(){
        $("table").hide("3000")
    })

    $("#btntable").dblclick(function(){
        $("table").show("3000")
    })

$("#btnhide").click(function(){
    $("#profile").hide("slow")
    $(".content").hide("slow")
})

$("#btnshow").click(function(){
    $("#profile").show("3000")
    $(".content").show("3000")
})

$("#clearbtn").click(function(){
   $("tr").css("background","white")
})