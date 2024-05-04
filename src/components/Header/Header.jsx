import css from './Header.module.scss'

const Header = () => {
  return (
    <header>
        <nav className={css.nav}>
            <ul>
                {/* <li><a href="#">d</a></li>
                <li><a href="#">d</a></li> */}
                <li><a target='_blank' className={css.ashka} href="https://www.donationalerts.com/r/mantik48">Поддержать разработчика любовью</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header