import React from 'react'

const App = () => {
const name = 'Jennifer';
const x = 5;
const y = 20;
const names = ['Joshua', 'Jennifer', 'Maurice', 'Bean'];
const loggedIn = false;
const styles = {
color: 'red',
fontSize: '55px',
};

// if (loggedIn){
//   return <h1>Hello Member!</h1>
// }

  // you can only return a single element, ex. wrap in a single div
  // Alternatives for below {loggedIn ? <h1>Hello Member</h1> : ''}
  //  {loggedIn && <h1>Hello Member</h1>}

  return (
    <div>
    <div className='text-5xl'>App</div>
    <p style={{color: 'red', fontSize: '24px'}}>Hello {name}</p>
    <p style={styles}>Hello too!</p>
    <p>The sum of {x} and {y} is {x+y}</p>
    <ul>
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>}
    
    </div>
  )
}
export default App