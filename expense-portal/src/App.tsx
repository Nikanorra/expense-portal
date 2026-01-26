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
          <div>Serving In Mission</div>
          <div className='user'>
            <span className='user__name'>Olga Nikanorova</span>
            <span className='user__currency'>GBP</span>
            <span className='user__edit'>Edit</span>
          </div>
        </header>

        <main>
          <section className='claim'>
            <form action="">
              <fieldset className='claim__type'>
                <label htmlFor="">
                  <input type="radio" name="claim" value="Expenses" checked/>
                  <span>Expenses</span>
                </label>
                <label htmlFor="">
                  <input type="radio" name="claim" value="Income"/>
                  <span>Income</span>
                </label>
              </fieldset>

              <fieldset className='claim__date'>
                <input type="text" placeholder='19.02.2026' />
                <button>choose</button>
              </fieldset>

              <div className='dropdown'>
                <button type='button' aria-haspopup='listbox' aria-expanded='false' aria-controls='dropdown-list'>
                choose one
                </button>
                <ul id='dropdown-list' role='listbox' aria-labelledby='dropdown-button'>
                  <li role='option' area-selecte='false' data-value='support'>Support</li>
                  <li role='option' area-selecte='false' data-value='ministry'>Ministry</li>
                  <li role='option' area-selecte='false' data-value='project'>Project</li>
                  <li role='option' area-selecte='false' data-value='staff'>SIM office staff</li>
                </ul>
              </div>

              <div className='dropdown'>
                <button type='button' aria-haspopup='listbox-sub' aria-expanded='false' aria-controls='dropdown-list-sub'>
                choose one
                </button>
                <ul id='dropdown-list-sub' role='listbox-sub' aria-labelledby='dropdown-button'>
                  <li role='option' area-selecte='false'>Children</li>
                  <li role='option' area-selecte='false'>Medical</li>
                  <li role='option' area-selecte='false'>Housing</li>
                  <li role='option' area-selecte='false'>Other</li>
                </ul>
              </div>


              <textarea name="description" id="description">Description</textarea>


              <div className='numbers'>
                <div>
                  <input type="number" placeholder='amount'/>
                  <span>dropdown of currencies</span>
                </div>
                <div>
                  <input type="number" placeholder='exchange rate'/>
                </div>
                <div><span>63.00</span><span>GBP</span></div>
              </div>

              <fieldset>
                <label htmlFor="receipts">+</label>
                <input type="file" id="receipts" name='receipts'/>
              </fieldset>

              <div>
                <button>Save</button>
                <button>Cancel</button>
              </div>
            </form>

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
