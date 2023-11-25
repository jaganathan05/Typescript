const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const Addbtn = document.getElementById('add')!;

const numresults: Array<number> = [];
const stringresults:string[] =[];

type NumOrString = number | string;
type Result = {val : number ; timestamp: Date};

interface ResultObj {
    val:number;
    timestamp: Date
}

function sum(num1: number | string, num2: number | string) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2 + 5;
}

function printResult(resultObj: Result ){
    console.log(resultObj.val)
}

Addbtn.addEventListener('click',function () {
    const num1 = num1Element.value ;
    const num2 = num2Element.value;

    

    const result = sum( +num1 , +num2)
    numresults.push(result as number)
    console.log(result);
    const stringresult = sum( num1, num2)
    console.log(stringresult);
    stringresults.push(stringresult as string)

    printResult({ val:result as number,timestamp: new Date()})
    console.log(numresults,stringresults)
})

const myPromise = new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
        resolve('It Worked!');
    }, 1000);
})

myPromise.then((result)=>{
    console.log(result.split('W'))
})