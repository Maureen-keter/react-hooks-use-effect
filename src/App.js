import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount]=useState(0);
  const [text ,setText]=useState("");

useEffect(()=>{
  document.title=text;
}, [text]);

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);

  console.log("Component rendering");

   <div> <button onClick={()=>setCount((count)=>count+ 1)}>I have been clicked {count} times</button>
  <input type ="text" placeholder="type away..." value={text} onChange={(e)=> setText(e.target.value)} />
  </div>
}

export default App;
