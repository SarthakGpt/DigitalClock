function updateClock() {
    // let now = new Date();
    // let hours = now.getHours().toString().padStart(2, '0');
    // let minutes = now.getMinutes().toString().padStart(2, '0');
    // let seconds = now.getSeconds().toString().padStart(2, '0');

    // document.getElementById("hours").textContent = hours;
    // document.getElementById("minutes").textContent = minutes;
    // document.getElementById("seconds").textContent = seconds;

    let hrs = document.getElementById("hours");
    let min = document.getElementById("minutes");
    let sec = document .getElementById("seconds");
    
        // console.log(currentTime.getHours())
        // console.log(currentTime.getMinutes())
        // console.log(currentTime.getSeconds())

        setInterval(()=>{

            let currentTime = new Date();

            hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours() ;
            min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes(); 
            sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

        },1000)



    
}

// // Update clock every second
// setInterval(updateClock, 1000);
updateClock(); // Call initially to prevent delay
