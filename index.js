// stateless vs state full

//stateless
// const counter =(amount)=>{
//     let count =0;
//     count = amount + count;
//     return count
// }
// console.log(counter(4))
// console.log(counter(4))

//statefull
 const counter ={
    count:0,
    add(amount){
       this.count = this.count + amount
    },
    print(){
        console.log(this.count)
    }
 }
counter.add(2)
counter.add(2)
 counter.print()