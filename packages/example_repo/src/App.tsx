import './App.css'
import 'reactissimo/styles'

import { Button } from 'reactissimo'




function App() {

  return (
    <div>
      <h1 style={{ fontSize: '2rem', }}>example_repo</h1>
      <p>You can see that Button from reactissimo is being importanted along with the tailwind css styles</p>
      <div style={{ display: 'flex', gap: 4 }}>
        <Button color="red" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>Red</Button>
        <Button color="blue">Blue</Button>
        <Button color="lime">Lime</Button>
        <Button color="purple">Purple</Button>
      </div>
    </div>
  )
}

export default App
