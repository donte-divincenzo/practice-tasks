import css from './Header.module.scss'

const Header = () => {
  return (
    <header>
        <nav className={css.nav}>
            <ul>
                <li><a href="#"></a></li>
                <li><a href="#"></a></li>
                <li><a href="https://www.donationalerts.com/r/mantik48">Поддержать</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header