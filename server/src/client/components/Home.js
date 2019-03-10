import React from 'react'


const Home = () => {
  return (
    <div>
      <div>I'm the Home Component!</div>
      <button onClick={() => console.log("hello, world!")}>Click Me!!</button>
    </div>
  )
}

export default Home;