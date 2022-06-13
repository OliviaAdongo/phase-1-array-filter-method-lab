// // Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
// const result = drivers.filter(findMatching);
// function findMatching(){
    
// }
// function fuzzyMatch(){}
// function matchName(){}
function matchName(drivers, string){
    return drivers.filter(driver =>
        driver.name === string
    )
}

function findMatching(drivers, string){
    return drivers.filter(driver => 
          driver.toLowerCase() === string.toLowerCase()
      )
}
  
function fuzzyMatch(drivers, string){
      return drivers.filter(driver =>
          driver[0] === string[0]
      )
}