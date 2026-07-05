setTimeout(() => {
    console.log("Hello after 2 seconds")
}, 2000) //setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds 

setInterval(() => {
    console.log("Hello every 2 seconds")
}, 2000) //setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds)    

setTimeout(() => {
    console.log("Hello after 5 seconds")
}, 5000) //setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds  

setInterval(() => {
    console.log("Hello every 5 seconds")
}   , 5000) //setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds)

n = 5
setTimeout(() => {
    console.log("Hello after " + n + " seconds")
}, n * 1000) //setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds
