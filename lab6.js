//Using constructor functions
function person (fullName, money, sleepPeriod, meals){
this.fullName = fullName
this.money = money
this.sleepPeriod = sleepPeriod
this.meals = meals
this.sleep=function(){
    if(sleepPeriod === 7){
        return ("you're Happy")
    }else if(sleepperiod > 7){
        return("you're lazy")
    }else if(sleepPeriod < 7){
        return("you're tired")
    }
}
this.health=function(){
    if(this.meals === 3){
        return ("100% Health rate")   
    }else if(this.meals === 2){
        return ("75% Health rate")   
    }else if(this.meals === 1){
        return ("50% Health rate")   
    }
}
this.buy=function(items){
    return (money-(items*10));
}
}
const mahmoud =new person ('mahmoud elsayed', 20, 7, 2 )
 console.log(mahmoud)
 console.log(mahmoud.health())
//---------------------------------------------------------------------------------------


// //using classes
// class person{
//     constructor(fullName, money, sleepPeriod, meals){
//     this.fullName = fullName
//     this.money = money
//     this.sleepPeriod = sleepPeriod
//     this.meals = meals
// }
// sleep(){
//     if(this.sleepPeriod=7){
//         return ("you're Happy")
//     }else if(this.sleepPeriod=7>7){
//         return("you're lazy")
//     }else if(this.sleepPeriod=7<7){
//         return("you're tired")
//     }
// }
// health(){
//     if(this.meals === 3){
//         return ("100% Health rate")   
//     }else if(this.meals === 2){
//         return ("75% Health rate")   
//     }if(this.meals === 1){
//         return ("50% Health rate")   
//     }
// }
// buy(items){
//     return (money-(items*10));
// }
// }
// const mahmoud =new person ('mahmoud elsayed', 70 , 5 , 3 )
// console.log(mahmoud)
// console.log(mahmoud.sleep())
//-------------------------------------------------------------------------------------

//  //using OLOO
// const person={
//     init(fullName, money, sleepPeriod, meals){
//         this.fullName = fullName
//         this.money = money
//         this.sleepPeriod = sleepPeriod
//         this.meals = meals 
//     this.sleep=function(){
//         if(this.sleepPeriod === 7){
//             return ("you're happy")
//         }else if (this.sleepPeriod > 7){
//             return("you're lazy")
//         }else if (this.sleepPeriod < 7){
//             return("you're tired")
//         }
//     }
//     this.health=function(){
//         if(this.meals === 3){
//             return ("100% Health rate")   
//         }else if(this.meals === 2){
//             return ("75% Health rate")   
//         }if(this.meals === 1){
//             return ("50% Health rate")   
//         }
//     }
//     this.buy=function(items){
//         return (money-(items*10));
//     }
//     return this;
// }
// }
// const mahmoud =person.init('mahmoud elsayed',40,8,2)
// console.log(mahmoud )
// console.log(mahmoud.sleep())
// -------------------------------------------------------------------------------------

// //using factory functions
// function Person(fullName, money, sleepPeriod,meals) {
//       return {
//         fullName,
//         money,
//         sleepPeriod,
//         meals,
    
//         sleep(){
//                 if(this.sleepPeriod === 7){
//                     return ("you're Happy")
//                 }else if(this.sleepPeriod > 7){
//                     return("you're lazy")
//                 }else if(this.sleepPeriod < 7){
//                     return("you're tired")
//                 }
//             },
    
//         health() {
//           if (this.meals === 3) {
//             return "100% Health rate";
//           } else if (this.meals === 2) {
//             return "75% Health rate";
//           } else if (this.meals === 1) {
//             return "50% Health rate";
//           }
//         },
    
//         buy(items) {
//           return (money-(items*10));
//         },
//       };
//     }
// const mahmoud= Person("mahmoud elsayed", 90, 8, 1)
// console.log(mahmoud)
// console.log(mahmoud.buy(4))