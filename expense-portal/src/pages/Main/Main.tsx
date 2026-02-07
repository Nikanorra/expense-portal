import styles from './Main.module.scss'
import RadioButton from '../../components/RadioButton/RadioButton'
import Dropdown from '../../components/Dropdown/Dropdown'
import Calendar from '../../components/Calendar/Calendar'
import { pots } from '../../constants/data/pots'
import { useState } from 'react'

type Pot = {
  label: string;
  value: string | Pot[];
}

export default function Main() {

  const [path, setPath] = useState<Pot[]>([]);



  function getOption(level: number): Pot[] {
    if (level === 0) return pots;

    const parentPot = path[level-1];
    return Array.isArray(parentPot.value) ? parentPot.value : [];
  }

  return (
    <main className={styles.main}>
      <section className={styles.claim}>
        <form action="">
          <RadioButton></RadioButton>


          <fieldset className='claim__date'>
            <input type="text" placeholder='19.02.2026' />
            <button>choose</button>
          </fieldset>

          {Array(path.length + 1).fill(null).map((_, level) => {
            const options = getOption(level);
            if (options.length === 0) return null;
            return (
              <Dropdown
                key={level}
                options={options}
                value={path[level] ?? null}
                onSelect={(option) => {
                  setPath(prev => [
                    ...prev.slice(0, level), option
                  ])
                }}
              ></Dropdown>
            )
          })}

          <Calendar/>



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