// level {1/2/3}
  
//   level 1

// Re-write the below code to better code quality standards.

// ```
// async function GET_daTA() {
//   let r = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let DATA = await r.json();
//   return DATA;
// }
// ```

//  I can do with axios using need import
  
import axios from 'axios';
const GET_daTA = async () => {
     const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
      
     return data
}


