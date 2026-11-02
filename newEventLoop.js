console.log("This is the strating point of my code");

setTimeout(()=>{
    console.log("This is first Timeout function");
},5000);
setTimeout(()=>{
    console.log("This is second Timeout function");
},2000);
setTimeout(()=>{
    console.log("This statement will run after 0 delay");
},0);
process.nextTick(()=>{
    console.log("This is process.nextTick code");
});
console.log("This is the end point of my code");