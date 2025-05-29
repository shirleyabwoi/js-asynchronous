// //QST1
// //You are building a system that sends email reminders to users 5 seconds after they register. 
// //Create an async function sendReminder(email) that waits 5 seconds using setTimeout and then logs "Reminder sent to [email]". 
// // Simulate sending a reminder to 3 users.
// //PSEUDOCODE:
//1. Create an async function called sendReminder that takes in a list of emails
//2. Create a setTimeout that goes through the list of emails after 5 seconds to send the reminder to all emails
 async function sendReminder(email){
        setTimeout(()=>{
            email.forEach(element => {
                 console.log(`Reminder send to ${element}`)
            });

        },1000)     
}
const email=["shirleybilha@gmail.com","shirleyabwoi@gmail.com","abwoibilha@gmail.com"];
sendReminder(email);


// //QST2
// //You want to simulate a login system that tries to log in a user.
// //  The first two attempts fail, but the third succeeds. Write a function tryLogin() that uses a counter and Promises. 
// // Use setTimeout to simulate a 1-second delay between attempts. Log "Login successful" or "Login failed after 3 attempts" based on whether login succeeds.
// //PSEUDOCODE:
// // 1. Initialize a variable called attempt
// // 2. Create a variable promise
// // 3. Create set interval that logs login failed until the attempt is 3 
// // 4. If the attempt is 3 log "Login failed after three attempts" 
let attempt=1
function tryLogin(){
    const promise=new Promise(resolve => setTimeout(resolve))
    return promise
}
async function try_login(){
    const interval = setInterval(()=>{
        console.log("Login failed")
        attempt++
        if(attempt ===3){
            clearInterval(interval)
            console.log("Login failed after three attempts")
        }
    },1000)
}
try_login()


// //QST3
// //Build a countdown timer that counts down from 5 to 0, displaying one number per second using setInterval. 
// // When the countdown reaches 0, stop the interval and log "Time's up!".
// //PSEUDOCODE:1. Initialize a variable count that is 5 
// // 2. Create a variable function for setinterval that will decrement 
// // 3. When the count is 0, clearinterval and log "Time's up"
let count=5
const interval = setInterval(()=>{
    console.log(`${count}`);
    count --
    if (count < 0){
    clearInterval(interval);
    console.log("Time's up!")
}
},1000);


// //QST4
// //You are simulating a page that loads data in stages. 
// // Create an async function called loadPage() that: logs "Loading header...", waits 1 second; logs "Loading content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and finally logs "Page fully loaded".
// //  Use setTimeout inside Promises and await them in sequence.
// //PSEUDOCODE:1. Create a function called load_Page 
// 2. Create a variable promise 
// 3. Create an async function called loadPage that awaits for 1 second for the load_page, then another for 2 seconds and finally 1 second.
function load_Page(){
    const promise=new Promise (resolve => setTimeout(resolve))
return promise
}
async function loadPage(){
    console.log("Loading header...")
    await load_Page(1000)
    console.log("Loading content...")
    await load_Page(2000)
    console.log("Loading footer...")
    await load_Page(1000)
    console.log("Page fully loaded")
}
loadPage()


// //QST5
// //You are simulating fetching stock prices with delays. 
// // Write a function fetchPrice(symbol) that returns a Promise which resolves after 2 seconds with the message "Price for [symbol] retrieved". 
// // Use async/await to call it for two different stocks ("AAPL" and "GOOG") and log the messages in order.
// //PSEUDOCODE:1.Create a function called fetchPrice that takes in symbol 
// 2. Create a promise to resolve and return the promise 
// 3. Create an async function called prices 
// 4. Await fetchPrice until the promise is resolved
 function fetchPrice (symbol){
    const promise=new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`Price for ${symbol} retrieved`)
        }, 1000)
    })
    return promise
}

async function prices(){
    let aapl=await fetchPrice("AAPL")
    console.log(aapl)
    let goog=await fetchPrice("GOOG")
    console.log(goog)
}
prices()





