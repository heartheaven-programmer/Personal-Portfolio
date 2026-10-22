const Message = document.getElementById("message")
const Button1 = document.getElementById("loadBtn")
const Profile = document.getElementById("profile")
const Grade = document.getElementById("grade")
const Schedule = document.getElementById("schedule")

Button1.addEventListener("click", function(){
    Message.innerHTML = "Loading Dashboard..."

    Profile.innerHTML = " Profile: Waiting..."
    Grade.innerHTML = " Grade: Waiting..."
    Schedule.innerHTML = "Schedule: Waiting..."

    const profilePromise = new Promise(function(resolve){
        setTimeout(function(){
            Profile.innerHTML = "Profile: Loaded"
            resolve()
        },1000)
    })

    const gradePromise = new Promise(function(resolve){
        setTimeout(function(){
            Grade.innerHTML = "Grade: Loaded"
            resolve()
        },2000)
    })

    const schedulePromise = new Promise(function(resolve){
        setTimeout(function(){
            Schedule.innerHTML = "Schedule: Loaded"
            resolve()
        },3000)
    })

    Promise.all([profilePromise, gradePromise, schedulePromise])

    .then(function(){
        Message.innerHTML = "Dashboard Ready!"
    })
})

