
function stringToArray(value)
{
   return value.replace(/[\[\]]/g, '').split(',').map(Number);
}

// alogorythm modified and taken from:
// https://www.geeksforgeeks.org/print-sums-subsets-given-set/
function subsetSums(arr, n) 
{ 
    // There are totoal 2^n subsets 
    let total = 1<<n; 
    let finals = [];
  
    // Consider all numbers from 0 to 2^n - 1 
    for (i=0; i<total; i++) 
    { 
        let sum = 0; 
        let sumList = '';
  
        // Consider binary reprsentation of 
        // current i to decide which elements 
        // to pick. 
        for (j=0; j<n; j++) {
            if (i & (1<<j)) {
                sum += arr[j];
                sumList += arr[j].toString() + ' + ';
            } 
        }
            
        // Print sum of picked elements. 
        // cout << sum << " ";
        if(sum > 0) {
           let obj = new Object();
           obj.sum = sum;
           obj.sumList = sumList.slice(0,sumList.length-2);
           finals.push(obj);
        }
    }
    
    finals.sort((a, b) => (a.sum > b.sum) ? 1 : -1);
    
    finals.forEach((obj)=>{
        console.log(obj.sum.toString() + ' = ' + obj.sumList);
    });
} 

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Input array [1,n] = ', (answer) => {
  // TODO: Log the answer in a database
  // console.log(`Thank you for your valuable feedback: ${answer}`);
  var testArray = stringToArray(answer); 
  subsetSums(testArray, testArray.length);
  rl.close();
});