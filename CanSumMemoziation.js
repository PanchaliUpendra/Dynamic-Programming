
/*
The function should return a boolean indicating whether or not it 
is possible to generate the targetsum using numbers from the array.
*/

const cansum=(target,ary,memo={}) => {
    if(target in memo)  return memo[target];
    if(target===0) return true;
    if(target<0) return false;
    for(let num of ary)
    {
        const remainder= target-num;
        if(cansum(remainder,ary,memo)===true){
            memo[target]=true;
            return true;
        }
    }
    memo[target]=false;
    return false; 
}

console.log(cansum(7,[2,3])); //true
console.log(cansum(7,[5,3,4,7]));//true
console.log(cansum(7,[2,4]));//false
console.log(cansum(8,[2,3,5]));//true
console.log(cansum(300,[7,14])); //false