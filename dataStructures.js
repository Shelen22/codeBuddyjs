// level {1/2/3}
 
//  level  1

// 1. Convert [1, 2, 3] to [2, 3, 4] using one line of code.
// Output should be [2, 3, 4]
 
  let newarr =  [1,2,3].map((e) =>{
       return e+1;
   })

  console.log(newarr)

//   ===== End of the 1st code=================


// 2. Calculate total of all the numbers in array [1, 2, 3] using one line of code.
// Output should be a number: 6
   
let sum = [1, 2, 3].reduce((a,b)=>{
     return a + b;
})
console.log(sum)
   

//   ===== End of the 2st code=================


// 3. Print all the properties of the object along with value {name: 'Elie', rank: 'Pro'}.
// Output should be a string: "name: Elie, rank: Pro"

  let object = {
      name: 'Elie',
      rank: 'Pro'
  }
   for(let k in object) {
       console.log(k + ":" + object[k])
   }

   