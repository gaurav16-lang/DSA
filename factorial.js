const factorial  = (N) =>{
let facl = 1;    
    if(N==0 || N==1){
        return 1
    }

facl = N*factorial(N-1);

return facl

}

const ans  = factorial(4)
console.log('ans',ans)