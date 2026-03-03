import { useEffect, useState } from "react";

function App(){
  
let nu = 1

let [ count, setCount] = useState(nu)
useEffect( ()=>{
  if (count == 5)
  {alert("Hello this is useEffect")}
},
 [count])
 

  return(

    <div>
    <h1> Hello Now the no is {count}</h1>
    
    <button onClick={()=> setCount(pre => pre+1) }>setState</button>
    </div>
  )
}
export default App;