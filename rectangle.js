// exporting the main function
module.exports = (l, b, callback) =>{

    // checking if the entered values is correct or not
    if(l <= 0 || b <= 0 ){
        setTimeout(()=>{
            callback(new Error("Please enter correct value"), 
            null)
        }, 3000)
    }
    else{
        setTimeout(()=>{
            callback(null,
                {
                    area : () => (l*b),
                    perimeter : () => (2*(l+b))
                })
        }, 3000)
    }

}


