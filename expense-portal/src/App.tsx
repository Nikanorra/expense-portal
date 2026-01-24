import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

        <header>
          <span>Olga Nikanorova</span>
          <span>GBP</span>
          <span>Edit</span>
        </header>

        <main>
          <section className='claim'>
            <div>
              <span>Expenses</span>
              <span>Income</span>
            </div>

            <div>19.02.2026</div>

            <div>
              <span>Support</span>
              <span>Children's education</span>
            </div>

            <div>Description</div>

            <div className='numbers'>
              <div><span>69.00</span><span>USD</span></div>
              <div>exchange rate</div>
              <div><span>63.00</span><span>GBP</span></div>
            </div>

            <div>add files</div>

            <div><button>Save</button><button>Cancel</button></div>

          </section>

          <section className='total'>
            <div>
              <div>
                <h2>Total:</h2>
                <div>£63.00</div>
              </div>
              <div>Graph</div>
            </div>
          </section>

          <section className='review'>
            <div>
              <ul>
                <li>
                  <div>1</div>
                </li>
                <li>
                  <div>2</div>
                </li>
                <li>
                  <div>3</div>
                </li>
                <li>
                  <div>4</div>
                </li>
                <li>
                  <div>5</div>
                </li>
                <li>
                  <div>6</div>
                </li>
                <li>
                  <div>7</div>
                </li>
                <li>
                  <div>8</div>
                </li>
                <li>
                  <div>9</div>
                </li>
                <li>
                  <div>10</div>
                </li>
              </ul>
            </div>
          </section>

        </main>


    </>
  )
}

export default App
