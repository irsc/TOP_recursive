function fibs(num){
    let arrFibonacci = [];
    for (let index = 0; index < num; index++) {
        if(index == 0){
            arrFibonacci.push(0);
        }else if(index == 1){
            arrFibonacci.push(1);
        }else{
            arrFibonacci.push(arrFibonacci[index-1] + arrFibonacci[index-2]);
        }
    }

    return arrFibonacci;
}

function fibsRec(num){
    let arr = [];
    if(num <= 1) return [0];
    if(num == 2) return [0,1];
    arr.push(Number(fibsRec(num-1).slice(-1))+Number(fibsRec(num-2).slice(-1)));

    return fibsRec(num-1).concat(arr);
}

console.log("These Fibonacci series below were printed iteratively");
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(4));
console.log(fibs(5));
console.log(fibs(6));
console.log(fibs(7));
console.log(fibs(8));

console.log("These Fibonacci series below were printed recursively");
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(4));
console.log(fibsRec(5));
console.log(fibsRec(6));
console.log(fibsRec(7));
console.log(fibsRec(8));

// 0 1 1 2 3 5 8 13 21