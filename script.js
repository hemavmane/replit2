function quo_rem(a,b){
    // Write your code here
    if (a!==0 && b!==0){
      let z = a%b;
    let y = Math.floor (a/b);
  return (y+","+z);
    }else{
      return (-1+","+-1);
    }
  
    //make sure you return the output string
  
  }
  
  console.log( quo_rem(10,2));
  
  
  exports.quo_rem = quo_rem;
  