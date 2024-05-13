import jojo from './assets/Jojo-removebg-preview.png'
import logo from './assets/img/Recurso 2-8.png'
import WartyF from './assets/img/Warty2-removebg-preview.png'
import wartyContactos from './assets/img/Warty1-removebg-preview.png'
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
          <img className='WartyF' src={WartyF} alt="" />
        </form>
        <form action="" className='Cuadrado'>
          <form action="" className='Cuadrado-mini'>
          <p className='pie-de-pagina'>
            <p>Los idiomas informaticos que mejor manejo son JavaScript, MongoDB, HTML5, CSS, REACT, MySql etc, sin embargo no dejo la posibilidad de aprender otro idioma informatico en un futuro.</p>
          </p>
          </form>
        </form>
      </div>
      <div className='ContenedorForm'>
      <form className='Cuadrado' action="">
          <form  className='Cuadrado-mini' action="">
            <p class="pie-de-pagina">
              <p>Hola</p>
            </p>
          </form>
        </form>
        <form className='Cuadrado' action="">
          <form  className='Cuadrado-mini' action="">
            <p class="pie-de-pagina">
              <p>Algunas de mis redes sociales para contactarme</p>
            </p>
          </form>
          <ul class="wrapper">
  <li class="icon facebook">
    <span class="tooltip">Facebook</span>
    <svg
      viewBox="0 0 320 512"
      height="1.2em"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      ></path>
    </svg>
  </li>
  <li class="icon github">
    <span class="tooltip">Github</span>
    <svg
          viewBox="0 0 16 16"
          class="bi bi-github"
          height="23"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          ></path>
        </svg>
  </li>
  <li class="icon email">
    <span class="tooltip">Discord</span>
    <svg
          viewBox="0 0 16 16"
          class="bi bi-email"
          height="23"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
          ></path>
        </svg>
  </li>
  <a href="https://www.linkedin.com/">
  <li class="icon linkedin">
    <span class="tooltip">linkedin</span>
    <svg
          viewBox="0 0 16 16"
          class="bi bi-linkedin"
          height="23"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
           d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
          ></path>
        </svg>
  </li>
  </a>
  <li class="icon discord">
    <span class="tooltip">Discord</span>
    <svg
          viewBox="0 0 16 16"
          class="bi bi-discord"
          height="23"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
          ></path>
        </svg>
  </li>
</ul>
    <img className='Warty' src={wartyContactos} alt="" />
        </form>
      </div>
      <div className='contenedor-titulo'> 
        <h1>PROJECTOS</h1>
      </div>
      <div className='contenedor-titulo'>
        <h1>CONTACTAME</h1>
        
      </div>
    </div>
  )
}

export default App
