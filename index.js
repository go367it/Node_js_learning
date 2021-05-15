const rect = require('./rectangle')

// function to claculate the recatngle length and breadth
const calculateValues = (l, b) =>{
    console.log(`computing for the value of length ${l} and breadth ${b}`)

    rect(l, b, (err, rectangle) => {

        // if error is caught
        if(err){
            console.log("Error: ", err.message)
        }
        else{
            console.log("Area: ", rectangle.area())
            console.log("Perimeter: ", rectangle.perimeter())
        }

    })

    console.log("After calling the rect function")

}

calculateValues(-1, 5)