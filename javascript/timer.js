/**
 * Demonstrate Async nature of JavaScript
    - Note: It is similar to Main thread invoking another Activity which are processed by child Thread.
    - Run the JS code using Node Compiler

 * @author : SAYANI KOLEY
 * @since : 02/08/2021
 */

function showTime() {
    const date = new Date();
    return date.getHours() + " Hrs: " +date.getMinutes() + " Mins: " +date.getSeconds() + " Secs";
}

function showSessionExpire() {
    console.log("Activity-B: Your session expired at " +showTime());
}

console.log("Activity-A: Triggering Activity-B at " +showTime());
setTimeout(showSessionExpire, 5000);
console.log("Activity-A: Triggered Activity-B at " +showTime()+ " will execute after 5 seconds.");

//Execution statement : node timer.js