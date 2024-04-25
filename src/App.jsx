import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [mark,setMark] = useState([null,null,null,null,null,null,null,null,null]);
  const [flag,setFlag] = useState(true);
  const [winner, setWinner] = useState("No winner yet!")

  function checkwinner(arr){
    let winpos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let i=0;i<winpos.length;i++){
      let a = winpos[i][0];
      let b = winpos[i][1];
      let c = winpos[i][2];
      if(arr[a] && arr[a] == arr[b] && arr[a] == arr[c]){
        setWinner(arr[a]);
      }
    }
  }
  function markChangeHandler(idx){
    let newMark=[...mark];
    if(flag==true){
    newMark[idx]='X';
    setMark(newMark);
    setFlag(false);
    checkwinner(newMark);
    }
    else{
    newMark[idx]='0';
    setMark(newMark);
    setFlag(true);
    checkwinner(newMark);
    }
    // setMark('X');
  }
  return (
    <>
      <button onClick={()=>markChangeHandler(0)} style = {{border:'1px solid white',width:'50px',height:'50px'}}>{mark[0]}</button>
      <button onClick={()=>markChangeHandler(1)} style = {{border:'1px solid white',width:'50px',height:'50px'}}>{mark[1]}</button>
      <button onClick={()=>markChangeHandler(2)} style = {{border:'1px solid white',width:'50px',height:'50px'}}>{mark[2]}</button>
      <br></br>
      <button onClick={()=>markChangeHandler(3)} style = {{border:'1px solid white',width:'50px',height:'50px'}}>{mark[3]}</button>
      <button onClick={()=>markChangeHandler(4)} style = {{border:'1px solid white',width:'50px',height:'50px'}}>{mark[4]}</button>
      <button onClick={()=>markChangeHandler(5)} style = {{border:'1px solid white',width:'50px',height:'50px'}}>{mark[5]}</button>
      <br></br>
      <button onClick={()=>markChangeHandler(6)} style = {{border:'1px solid white',width:'50px',height:'50px'}}>{mark[6]}</button>
      <button onClick={()=>markChangeHandler(7)} style = {{border:'1px solid white',width:'50px',height:'50px'}}>{mark[7]}</button>
      <button onClick={()=>markChangeHandler(8)} style = {{border:'1px solid white',width:'50px',height:'50px'}}>{mark[8]}</button>
      <h1>winner: {winner}</h1>
    </>
  )
}

export default App

