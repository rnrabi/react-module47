import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const friends = ['rabi','raton', 'jambu', 'dalim','kodom', 'modon','chodon'];
  return (
    <div className="App">
      <Rabi name="boltu" job="teacher"></Rabi>
      {friends.map(friend => <Rabi name={friend}> </Rabi>)}
      <State></State>


    </div>
  )
}


function Rabi(props){
  console.log(props);
  return ( 
  <div className="rclass">
  <h2>Name: {props.name} </h2>
  <h2>job: {props.job}</h2>
  </div>
  )
}

function State(){
const [count , setCount] = useState(0);
const nbincrise = ()=>{
  const newCount = count +1;
  setCount(newCount);
}
const nbdecrise = ()=>setCount(count - 1);
  return (
    <div>
      <h2>Count :{count} </h2>
      <button onClick={nbincrise}>increase</button>
      <button onClick={nbdecrise}>decrise</button>
    </div>
  )
}

export default App
