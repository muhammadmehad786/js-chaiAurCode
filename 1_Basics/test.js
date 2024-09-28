let promise = new Promise((res, rej) => {
    let num = Math.floor(Math.random() * 10);

    if(num < 5){
        res();
    }else{
        rej();
    }
})

promise.then(() => {
    console.log("Promise Resolved");
}).catch(() => {
    console.log("Promise Rejected!");
})