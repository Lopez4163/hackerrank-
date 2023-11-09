// * Complete the 'aVeryBigSum' function below.
//  *
//  * The function is expected to return a LONG_INTEGER.
//  * The function accepts LONG_INTEGER_ARRAY ar as parameter.
//  */

function aVeryBigSum(ar) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += ar[i]
    }

    return sum

}

// * Complete the 'hurdleRace' function below.
// *
// * The function is expected to return an INTEGER.
// * The function accepts following parameters:
// *  1. INTEGER k
// *  2. INTEGER_ARRAY height
// */

function hurdleRace(k, height) {
   //i want to get the highest number in the array and subtracy it by k
    for(let i=0; i < height.length; i++) {
        if(k > Math.max(...height)){
            return 0
        }
        else {
               return Math.max(...height) - Math.min(k)
        }
           
    }

}
