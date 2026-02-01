import './Header.scss'


export default function Header() {
  return (
    <header>
      <div>
        <img src="../src/assets/SIM-logo-white.png" alt="" />
      </div>
      <div className='user'>
        <span className='user__name'>Olga Nikanorova</span>
        <span className='user__currency'>GBP</span>
        <span className='user__edit'>Edit</span>
      </div>
    </header>
  )
}