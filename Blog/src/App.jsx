import jojo from './assets/Jojo-removebg-preview.png'
import './App.css'

function App() {

  return (
    <div className='Container'>
      <div>
          <nav class="menu">
            <ul>
                <li><button className='button' href="#projects">Projects</button></li>
                <li><button className='button' href="#info">Info</button></li>
                <li><button className='button' href="#contact">Contact</button></li>
            </ul>
        </nav>
        
    </div>
      <div class="contenedor">
        <header class="encabezado">
          <p>Tu primer portafolio no era tuyo! ¡Era mio!</p>
          <h1>Sebastian Ramirez <img className='jojo' src={jojo} alt="jojo" /></h1>
        </header>
    </div>
      <div>
        <form action="" className='Cuadrado'>
          <p class="pie-de-pagina">
            <p>Hola, soy Sebastian Ramirez Giron (Mis amigos me conocen como Warty) y soy un desarrollador web principiante que aspira a siempre mejorar en todos los aspectos</p>
          </p>
        </form>
      </div>
      <div>
        <form action=""></form>
      </div>
    </div>
  )
}

export default App
