function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    
        //Write your code here:
      if (n === 1) {
        return [0];
      }
      else if (n === 2) {
        return [0, 1];
      }
      else {
        var seq = [0, 1];
      
          for (var i = 1; i < n-1; i++) {
              seq.push(seq[i] + seq[i-1]);
          }
      }
      return seq
    
    
    
    
        //Return an array of fibonacci numbers starting from 0.
    
    //Do NOT change any of the code below 👇
    }
    
    console.log(fibonacciGenerator(3));
    