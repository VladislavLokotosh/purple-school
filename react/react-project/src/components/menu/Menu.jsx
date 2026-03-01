import "./Menu.css";

function Menu() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <img src="../../src/assets/svg/logo.svg" alt="logo" />
        </div>

        <nav className="header__nav nav">
          <a href="#" className="nav__link">
            Поиск фильмов
          </a>
          <a href="#" className="nav__link">
            Мои фильмы <span className="nav__badge">2</span>
          </a>
          <a href="#" className="nav__link">
            Войти <img src="../../src/assets/svg/Login.svg" alt="enter" />
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Menu;
