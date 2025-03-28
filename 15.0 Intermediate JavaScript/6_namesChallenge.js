function whosPaying(names) {

    /******Don't change the code above*******/
    
      //Write your code here.
    var count = names.length;
    var randomNumber = Math.floor(Math.random() * count);
    return names[randomNumber] + " is going to buy lunch today!";

    /******Don't change the code below*******/    
    }
    
    console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));