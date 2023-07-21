function sum(a){
    if(a == 2) return 2;
    else if((a % 2) !=0 ) return sum(a-1);
    else return a *= sum(a-2)
}
console.log(sum(11))
