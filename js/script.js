function genarateRandomNum(){
    let usedNum =[];
    return function (){
        if(usedNum.length === 100){
            usedNum=[];
        }
        const randomNum = Math.floor(Math.random()*100+1);
        for(let i=0;i<usedNum;i++){
            if(usedNum[i]===randomNum){
                return genarateRandomNum();
            }
            if(usedNum[i]!=randomNum){
                return randomNum
            }
        }
        return randomNum
    }
}
const output1 = genarateRandomNum();
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log('--------');
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log('-------');
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log(output1());
console.log('-------');

