import jojo from './assets/Jojo-removebg-preview.png'
import logo from './assets/img/Recurso 2-8.png'
import './App.css'

function App() {

  return (
    <div className='Body'>
      <div class="contenedor">
        <header class="encabezado">
          <p>Este portafolio no era tuyo! ¡Era mio!</p>
          <h1>Sebastian Ramirez <img className='jojo' src={jojo} alt="jojo" /></h1>
        </header>
        <nav class="menu">
            <ul>
                <li><button className='button' href="#projects">Projects</button></li>
                <li><button className='button' href="#info">Info</button></li>
                <li><button className='button' href="#contact">Contact</button></li>
            </ul>
            <br />
            <br />
            <br />
        </nav>
    </div>
    <div className='contenedor-titulo'>
      <h1>SOBRE MI</h1>
    </div>
      <div className='ContenedorForm'>
        <form action="" className='Cuadrado'>
          <form action="" className='Cuadrado-mini'>
          <p class="pie-de-pagina">
            <p>Hola, soy Sebastian Ramirez Giron (Mis amigos me conocen como Warty) y soy un desarrollador web principiante que aspira a siempre mejorar en todos los aspectos posibles.</p>
          </p> 
          </form>
          <img className='img-block' src={logo} alt="" />
        </form>
        <form action="" className='Cuadrado'>
          <form action="" className='Cuadrado-mini'>
          <p className='pie-de-pagina'>
            <p>Los idiomas informaticos que mejor manejo son JavaScript, MongoDB, HTML5, CSS, REACT, MySql etc, sin embargo no dejo la posibilidad de aprender otro idioma informatico en un futuro.</p>
          </p>
          </form>
        </form>
      </div>
      <div>
        <form action=""></form>
      </div>
    </div>
  )
}

export default App
