import { useTranslation } from 'react-i18next'
import './App.css'
import './i18n.js'

function App() {
 const {t,i18n}=useTranslation()
  function myFunction() {
    document.body.classList.add("darkMode")
  }
  function myFunction2() {
    document.body.classList.remove("darkMode")
  }
  return (
    <div>
      
  <header>
    <div className="container">
      <nav>
        <div className="logo">
          <h2>LOGO</h2>
        </div>

        <div className="ota-button">
          <ul>
            <li>
              <a href="#">{t("menu1")}</a>
            </li>
            <li>
              <a href="#">{t("menu2")}</a>
            </li>
            <li>
              <a href="#">{t("menu3")}</a>
            </li>
            <select name="" id="" onChange={(e)=>i18n.changeLanguage(e.target.value)} value={i18n.language}>
              <option value="ru">Rus</option>
              <option value="uz">O'zb</option>
              <option value="en">Eng</option>
            </select>
          </ul>


          <button className="btn-1" id="LightMode" onClick={myFunction2}>
            LightMode
          </button>

          <button className="btn-2" id="DarkMode" onClick={myFunction}>
            DarkMode
          </button>
        </div>
      </nav>
    </div>


    <div className="container">
      <div className="boss-kfc">
        <div className="left">
          <h1 className="chil-1">{t("title")}</h1>

          <p className="chil-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the
            industry's standard.</p>

          <button className="btn-3">{t("btn")}</button>
        </div>

        <div className="right">
          <img src="./public/Rectangle24.png" alt="" />
        </div>
      </div>
    </div>
  </header>

    </div>
  )
}

export default App
