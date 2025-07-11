let data = [1,2,3,4,5,6,7,8,9]


console.log(data);

let juft = [2,4,6,8]

let toq = [1,3,5,7,9]


for(i=0; i<data.length; i++){
    if(data[i] % 2 == 0){
        juft.push(data[i])
    }else{
        toq.push(data[i])
        console.log(toq);
        

    }
}


console.log(juft);
console.log(toq);
