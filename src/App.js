import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const h1Style = {
    backgroundColor: 'lightblue',
    border: '3px solid salmon',
    padding: '20px',
    borderRadius: '10px',
    margin: '20px'
  }

  /* const nayoks = [
    {nayok: 'Joshim', nayika:'Moushumi'},
    {nayok: 'Koober', nayika:'Kopila'},
    {nayok: 'Shuvo', nayika:'Eva rahman'},
]
  console.log(nayoks.nayok)
  console.log(nayoks[0].nayika) */
  
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}

function Todo(){
  const [users, setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return(
    <div>
      <h2>Hello users</h2>
      {
        users.map(user => <User title={user.title}></User>)
      }
    </div>
  );
}

function User(props){
  return(
    <div>
      <h2>Todo title: {props.title}</h2>
    </div>
  )
}

function Reactmama(props){
  return (
    <div>
      <h1>Yo yo react mama!!</h1>
      <p>Hayhay react nayok: {props.name} </p>
      <p>Hayhay react nayika: {props.naykas} </p>
    </div>
  );
}

/* 
<h1 style={{backgroundColor: 'lightblue', border: '3px solid salmon', padding: '20px', borderRadius: '10px', margin: '20px'}}>Yo yo react mama!!</h1>
*/

/* 
<Reactmama name={nayoks[0].nayok} naykas={nayoks[0].nayika}></Reactmama>
      <Reactmama name={nayoks[1].nayok} naykas={nayoks[1].nayika}></Reactmama>
      <Reactmama name={nayoks[2].nayok} naykas={nayoks[2].nayika}></Reactmama>
*/

export default App;
