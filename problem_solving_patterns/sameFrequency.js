function sameFrequency(num1, num2){
    if (num1.toString().length !== num2.toString().length) return false; 
    
    const obj1 = {};
    const obj2 = {};
   
    
    for (let i of num1.toString()) {
        obj1[i] ? obj1[i]++ : obj1[i] = 1;
    }
    
    for (let i of num2.toString()) {
        obj2[i] ? obj2[i]++ : obj2[i] = 1;
    }
    
    for (let i in obj1) {
        if (obj1[i] !== obj2[i]) return false;
    }
    
    return true;
  }