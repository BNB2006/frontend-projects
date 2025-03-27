function updateClock(){
    let now = new Date();

    //day
    let dayIndex = now.getDay().toString();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"];
    let day = dayNames[dayIndex]

    document.getElementById("day").textContent = `${day}`;


    //date
    let date = now.getDate().toString().padStart(2, "0");
    let month = (now.getMonth()+1).toString().padStart(2, "0");
    let year = now.getFullYear().toString().padStart(2, "0");

    document.getElementById("date").textContent = `${date}-${month}-${year}`;

    

    //Time
    let hours = now.getHours().toString().padStart(2,"0");
    let minutes = now.getMinutes().toString().padStart(2,"0");
    let seconds = now.getSeconds().toString().padStart(2,"0");

    let timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("digital-clock").textContent = timeString

}

setInterval(updateClock, 1000)

updateClock();

