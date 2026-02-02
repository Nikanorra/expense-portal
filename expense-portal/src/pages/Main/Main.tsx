import styles from './Main.module.scss'
import RadioButton from '../../components/RadioButton/RadioButton'

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.claim}>
        <form action="">
          <RadioButton></RadioButton>

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
  )
}