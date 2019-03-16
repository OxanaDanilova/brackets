module.exports = function check(str, bracketsConfig) {
   /*  make arrays for str and bracketsConfig */
  let string=str.split('');
  let config=bracketsConfig.reduce(
  (result, element) => result.concat(element)
  , []
);

/* create arrays for left and right elements */
let left=[];
let right=[];
for (i=0;i<config.length;i+=2) {
  left.push(config[i]);
}

for (i=1;i<config.length;i+=2) {
   right.push(config[i]);
}


  
 /*  main algorithm */
      

    for (i=0; i<string.length;) {
      let x=string[i];
      /*   if x - left element */  
      if (left.indexOf(x)!==-1) {

        /*   if string[i+1] is right element for x */  
        if (string[i+1]===config[config.indexOf(x)+1]) {
          string.splice(i,2);   /*   cut left and right element from string */  
          i=0;     /*   to start loop from begin */  
        } else {
        
        i++;}
    
      } else {
        break;
      
      } 
  }

 
  if (string.length===0) {
    return true;
  } else {
    return false;
  }
 

 }
