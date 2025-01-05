import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

let post = "강남 우동 맛집";
let [글제목,b] = useState(["엑스플라","신세틱스","폴리곤"])


  return (
      <div className="App">
        <div className="black-nav">
          <h4>블로그임</h4>
        </div>

          <div className="list">
            <h4>{글제목[0]}</h4>
            <p>1월5일 발행</p>
          </div>
          <div className="list">
            <h4>{글제목[1]}</h4>
            <p>1월5일 발행</p>
          </div>
          <div className="list">
            <h4>{글제목[2]}</h4>
            <p>1월5일 발행</p>
          </div>

        <h4>{ post }</h4>
      </div>

  )
}

export default App
