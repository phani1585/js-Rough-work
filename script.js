class Stack{
	constructor(){
  	this.items = [];
    this.size = 0;
    this.push = function(val){
    	this.items.push(val)
      this.size++
    }
    this.pop = function(){
    	if(this.size!==0){
      	this.items.pop()
        this.size--
      }
      this.peak = function(){
      	if(this.size!==0){
        	return this.items.pop()
        }
      }
    }
  }
}

let myStack = new Stack();
let number = '6300129384'
let splitedNumber = number.split('')
let num = [];
splitedNumber.forEach((item)=>{num.push(Number(item))})
num.forEach()
