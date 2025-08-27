import { useState } from 'react'


const Button = ({handlClick,text})=>{
    return (<button onClick={handlClick}>{text}</button>)
}
const Display = ({text,value})=>{
  return (<p>{text} {value}</p>)
}
const Statistics = ({good,neutral,bad})=>{
  if(good ==0 && neutral == 0 && bad == 0 ){
    return(
      <div>
         <h3>Statistics</h3>
         <p>no feddback given</p>
      </div>
    )
  }

  return (<div>
    <h3>Statistics</h3>
      <Display text='Good' value={good}/>
      <Display text='Neutral' value={neutral}/>
      <Display text='Bad' value={bad}/>
      <Display text='All' value={good+neutral+bad}/>
      <Display text='Averge' value={(good*1+neutral*0+bad*-1)/(good+neutral+bad)}/>
      <Display text='positive' value={good*100/(good+neutral+bad)}/>
     
  </div>)
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = (newValue)=> setGood(newValue)
  const setToNeutral = (newValue)=> setNeutral(newValue)
  const setToBad = (newValue)=> setBad(newValue)

  return (
    <div>
      <Button handlClick={()=>setToGood(good+1)} text='Good'/>
      <Button handlClick={()=>setToNeutral(neutral+1)} text='Neutral'/>
      <Button handlClick={()=>setToBad(bad+1)} text='Bad'/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
      
    </div>
  )
}

export default App