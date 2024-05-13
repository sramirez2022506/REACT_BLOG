import jojo from './assets/Jojo-removebg-preview.png'
import './App.css'

function App() {

  return (
    <div className='Body'>
      <div>
          <nav class="menu">
            <ul>
                <li><button className='button' href="#projects">Projects</button></li>
                <li><button className='button' href="#info">Info</button></li>
                <li><button className='button' href="#contact">Contact</button></li>
            </ul>
        </nav>
        <br />
        <br />
    </div>
      <div class="contenedor">
        <header class="encabezado">
          <p>Este portafolio no era tuyo! ¡Era mio!</p>
          <h1>Sebastian Ramirez <img className='jojo' src={jojo} alt="jojo" /></h1>
        </header>
    </div>
      <div className='ContenedorForm'>
        <form action="" className='Cuadrado'>
          <p class="pie-de-pagina">
            <p>Hola, soy Sebastian Ramirez Giron (Mis amigos me conocen como Warty) y soy un desarrollador web principiante que aspira a siempre mejorar en todos los aspectos posibles <img src="5" alt="" /></p>
          </p>
        </form>
        <form action="" className='Cuadrado'>
          <p className='pie-de-pagina'>
            <p>Los idiomas de programacion que suelo manejar son </p>
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
