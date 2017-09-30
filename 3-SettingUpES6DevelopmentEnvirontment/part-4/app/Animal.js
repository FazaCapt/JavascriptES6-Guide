class Animals{
    constructor(name, height){
        this.name = name,
        this.height = height
    }

    hello(){
        console.log(`Hello My name is ${this.name}, from animal kingdom.`)
    }
}

export { Animals };