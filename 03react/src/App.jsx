import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hey, Shekhar Kumar</h1>
     <Card username="Shek" btnText="Click Me"/>
     <Card username="shekhar" btnText="Visit Me"/>

    </>
  )
}

export default App