import { useState } from 'react'

const Button = ({handelClick,text})=>{
  return(<button onClick={handelClick} >{text}</button> )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [maxIdVote, setmaxIdVote] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const changeSelectedId = ()=>{
    let id = Math.floor(Math.random() * anecdotes.length);
    setSelected(id)
  }

  const changeMaxVote = (copy)=>{
    let max = 0
    let selectidMax =0
    console.log(copy )
    for(let i=0;i<copy.length;i++){
      
      if(copy[i] > max){
        max = copy[i];
        selectidMax = i
      } 
    }
    console.log(selectidMax,max )
    setmaxIdVote(selectidMax)
  }
  const changeVote = (id)=>{
    let copy = [...votes]
    copy[id] =  copy[id] +1
   
    setVotes(copy)
 
    changeMaxVote(copy)
  }
  return (
    <div>
    <h3>anecdote of  the day</h3>
      {anecdotes[selected]}
      <p>has {votes[selected]} vote </p>
      <div>  
        <Button handelClick={changeSelectedId}  text='next'/>
        <Button handelClick={()=>changeVote(selected)}  text='vote'/>
      </div>

      <div>
        <h3>anecdote with most vote</h3>
        <p>{anecdotes[maxIdVote]}</p>
        <p> has {votes[maxIdVote]} votes </p>
      </div>
    
    </div>
  )
}

export default App