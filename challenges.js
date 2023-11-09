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

function plusMinus(arr) {
    //make number of neg and pos in array  into variables
    let neg = 0
    let pos = 0
    let zer = 0
    let n = arr.length

    for(let i=0; i < arr.length; i++) {
        if(arr[i] > 0) {
            pos++
        }
        else if(arr[i] < 0) {
            neg++
            
        }
        else{
            zer++
        }
    }
    console.log(pos / n) 
    console.log(neg / n) 
    console.log(zer / n) 

}

// *
//  * Complete the 'bonAppetit' function below.
//  *
//  * The function accepts following parameters:
//  *  1. INTEGER_ARRAY bill
//  *  2. INTEGER k
//  *  3. INTEGER b
//  */

function bonAppetit(bill, k, b) {
    bill.splice(k, 1)
    let tot_bill = 0
    for(let i=0; i < bill.length; i++){
        tot_bill += bill[i]
    }
    let annShare = b - (tot_bill / 2)
    if(annShare === 0) {
        console.log("Bon Appetit")
    }
    else{
        console.log(annShare)
    }
}