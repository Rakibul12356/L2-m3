class Counter {
    constructor(count){
        this.count=count
    }
    add(amount){
    this.count = this.count + amount
    }
    print(){
        console.log(this.count)
    }
}
const Counter1= new Counter(0)
Counter1.add(2)
Counter1.add(2)
Counter1.print()