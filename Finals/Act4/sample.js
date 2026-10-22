const form = document.getElementById("studentForm")
const studentlist = document.getElementById("studentList")
const message = document.getElementById("message")

form.addEventListener("submit", function(event){
    event.preventDefault();
    const number  = document.getElementById("studentNumber").value
    const first = document.getElementById("firstName").value

    const last = document.getElementById("lastName").value

    const course = document.getElementById("course").value

    const row = document.createElement("tr")

    const numberCell = document.createElement("td")
    const firstCell = document.createElement("td")
    const lastCell = document.createElement("td")
    const courseCell = document.createElement("td")

    numberCell.textContent = number
    firstCell.textContent = first
    lastCell.textContent = last
    courseCell.textContent = course

    row.appendChild(numberCell)
    row.appendChild(firstCell)
    row.appendChild(lastCell)
    row.appendChild(courseCell)

    studentlist.appendChild(row)

    message.textContent = "Student Added Successfully!"

    form.reset()
})

//Dark mode script
$(document).ready(function(){
   $("#dark").click(function(){
    $("body").addClass("dark-mode")
    $(".card").css("box-shadow","rgb(241, 170, 206)")
    $("h1").css("color","white")
    $("h2").css("color","white")
    $("p").css("color","white")
   })

   $("#light").click(function(){
    $("body").removeClass("dark-mode")
    $("h1").css("color","black")
    $("h2").css("color","black")
    $("p").css("color","black")
   })
})


$("th").css("background","rgb(211, 132, 211)")

$("#oddbtn").click(function(){
        $("tr:odd").css("background","lightgreen")
        $("tr:even").css("background","white")

    })

$("#evenbtn").click(function(){
        $("tr:even").css("background","lightblue")
        $("tr:odd").css("background","white")
})

$("#hidebtn").click(function(){
        $("#studentTable").hide("slow")

    })

$("#showbtn").click(function(){
        $("#studentTable").show("slow")

})


