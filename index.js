// var rect={
//     perimeter: (x,y) => (2*(x+y)),
//     area: (x,y)  => (x*y)
// };
var rect = require('./rectangle');
function solveRect(l,b){
    console.log("Solving for rectangle with l="+ l +"and with b= "+ b);
    rect(l,b,(err,rectangle)=>{
        if(err)
        {
            console.log("ERROR:",err.message);
        }
        else{
            console.log("The area of rectangle with dimensions length: "
            +l+" and breadth ="+b+" is "+rectangle.area());
            console.log("The perimeter of rectangle with dimensions length: "
            +l+" and breadth ="+b+" is "+rectangle.perimeter());
        }
    });
    console.log("This statement is after calling the rect()");
}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
