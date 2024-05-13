import React, {useState, useEffect} from 'react'
import jojo from './assets/Jojo-removebg-preview.png'
import Node from './assets/img/NodeJs.png'
import react from './assets/img/react.png'
import WartyF from './assets/img/Warty2-removebg-preview.png'
import wartyContactos from './assets/img/Warty1-removebg-preview.png'
import lol from './assets/img/LolNivel.png'
import arrow from './assets/img/corner-left-up.png'
import './App.css'

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='Body'>
      <div className='contenedor'>
        <header className="encabezado">
          <p id='principio'>Pensastes que era un portafolio pero en realidad era yo!</p>
          <h1>Sebastian Ramirez <img className='jojo' src={jojo} alt="jojo" /></h1>
        </header>
        <nav className="menu">
            <ul>
                <li><a href="#aboutme"><button className='button'>Acerca de mi</button></a></li>
                <li><a href="#Proyectos"><button className='button'>Proyectos</button></a></li>
                <li><a href="#comentarios"><button className='button'>Comentarios</button></a></li>
            </ul>
            <br />
            <br />
            <br />
        </nav>
    </div>
    <div className='contenedor-titulo'>
      <h1 id='aboutme'>SOBRE MI</h1>
    </div>
      <div className='ContenedorForm'>
        <form action="" className='Cuadrado'>
          <form action="" className='Cuadrado-mini'>
          <p className="pie-de-pagina">
            <p>Hola, soy Sebastian Ramirez Giron (Mis amigos me conocen como Warty) y soy un desarrollador web principiante que aspira a siempre mejorar en todos los aspectos posibles.</p>
          </p> 
          </form>
          <img className='WartyF' src={WartyF} alt="" />
        </form>
        <form action="" className='Cuadrado'>
          <form action="" className='Cuadrado-mini'>
          <p className='pie-de-pagina'>
            <p>Los idiomas informaticos que mejor manejo son NodeJs, JavaScript, MongoDB, HTML5, CSS, REACT, MySql etc, sin embargo no dejo la posibilidad de aprender otro idioma informatico en un futuro.</p>
          </p>
          </form>
          <img className='img-idiomas' src={react} alt="react" />
          <img className='img-idiomas' src={Node} alt="nodejs" />
        </form>
      </div>
      <div className='ContenedorForm'>
      <form className='Cuadrado' action="">
          <form  className='Cuadrado-mini' action="">
            <p className="pie-de-pagina">
              <p>Mi hobby es el arte de los videojuegos, me gustan diferentes tipos de videojuegos, sin embargo creo que mis favoritos son los juegos en los que se tiene que competir contra otra persona, el mayor ejemplo el Lol.</p>
            </p>
          </form>
          <img className="lolN" src={lol} alt="" />
        </form>
        <form className='Cuadrado' action="">
          <form  className='Cuadrado-mini' action="">
            <p class="pie-de-pagina">
              <p>Aqui estan algunas de mis redes sociales por si deseas contactarme o comunicarte conmigo</p>
            </p>
          </form>
          <ul class="wrapper">
  <a href="https://www.facebook.com/profile.php?id=100010020378075">
  <li className="icon facebook">
    <span className="tooltip">Facebook</span>
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
  </a>
  <a href="https://github.com/sramirez2022506">
  <li className="icon github">
    <span className="tooltip">Github</span>
    <svg
          viewBox="0 0 16 16"
          className="bi bi-github"
          height="23"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          ></path>
        </svg>
  </li>
  </a>
  <a href="https://www.instagram.com/wartyot/">
  <li className="icon instagram">
    <span className="tooltip">Instagram</span>
    <svg
          viewBox="0 0 16 16"
          className="bi bi-instagram"
          height="23"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
          ></path>
        </svg>
  </li>
  </a>
  <a href="https://www.linkedin.com/">
  <li className="icon linkedin">
    <span className="tooltip">linkedin</span>
    <svg
          viewBox="0 0 16 16"
          className="bi bi-linkedin"
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
  <a href="https://discord.com/channels/@me">
  <li className="icon discord">
    <span className="tooltip">Discord</span>
    <svg
          viewBox="0 0 16 16"
          className="bi bi-discord"
          height="23"
          width="23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
          ></path>
        </svg>
  </li>
  </a>
</ul>
    <img className='Warty' src={wartyContactos} alt="" />
        </form>
      </div>
      <div className='contenedor-titulo'> 
        <h1 id='Proyectos'>PROYECTOS</h1>
        <form action="" className='form-proyectos'>
          <a className='link-decoration' href="https://github.com/sramirez2022506/REACT_Almacenadora.git">
        <div className="card">
    <div className="icon">
    <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M343.656,451.109C410,411.438,454.422,338.906,454.422,256c0-125.484-101.719-227.219-227.203-227.219 C101.719,28.781,0,130.516,0,256s101.719,227.219,227.219,227.219H512v-32.109H343.656z M318.484,145.875 c23.547-13.594,53.641-5.531,67.234,18.016s5.531,53.656-18.016,67.25c-23.547,13.578-53.641,5.516-67.234-18.016 C286.859,189.563,294.938,159.469,318.484,145.875z M300.453,297.688c13.609-23.547,43.703-31.609,67.25-18.016 c23.547,13.609,31.609,43.703,18.016,67.25s-43.688,31.609-67.25,18.016C294.938,351.344,286.859,321.234,300.453,297.688z M227.219,72.375c27.188,0,49.219,22.031,49.219,49.219s-22.031,49.25-49.219,49.25s-49.25-22.063-49.25-49.25 S200.031,72.375,227.219,72.375z M249.938,256c0,12.563-10.172,22.719-22.719,22.719c-12.563,0-22.719-10.156-22.719-22.719 s10.156-22.719,22.719-22.719C239.766,233.281,249.938,243.438,249.938,256z M68.703,163.891 c13.594-23.547,43.703-31.609,67.25-18.016s31.609,43.688,18.016,67.25c-13.594,23.531-43.703,31.609-67.25,18.016 C63.188,217.547,55.109,187.438,68.703,163.891z M135.969,364.938c-23.563,13.594-53.656,5.531-67.266-18.016 c-13.578-23.547-5.516-53.656,18.016-67.266c23.547-13.594,53.656-5.516,67.25,18.031S159.5,351.344,135.969,364.938z M177.969,389.203c0-27.188,22.063-49.234,49.25-49.234s49.219,22.047,49.219,49.234s-22.031,49.234-49.219,49.234 S177.969,416.391,177.969,389.203z"></path>
    </svg>
    </div>
        <strong> Almacenadora
      </strong>
    <div className="card__body">
        Proyecto hecho en react con el proposito de practica, siendo este estatico.
    </div>
      <span>Mira ahora</span>
    </div>
    </a>

    <a className='link-decoration' href="https://github.com/agonzalez2022198/KinePolis.git">
        <div className="card">
    <div className="icon">
        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M343.656,451.109C410,411.438,454.422,338.906,454.422,256c0-125.484-101.719-227.219-227.203-227.219 C101.719,28.781,0,130.516,0,256s101.719,227.219,227.219,227.219H512v-32.109H343.656z M318.484,145.875 c23.547-13.594,53.641-5.531,67.234,18.016s5.531,53.656-18.016,67.25c-23.547,13.578-53.641,5.516-67.234-18.016 C286.859,189.563,294.938,159.469,318.484,145.875z M300.453,297.688c13.609-23.547,43.703-31.609,67.25-18.016 c23.547,13.609,31.609,43.703,18.016,67.25s-43.688,31.609-67.25,18.016C294.938,351.344,286.859,321.234,300.453,297.688z M227.219,72.375c27.188,0,49.219,22.031,49.219,49.219s-22.031,49.25-49.219,49.25s-49.25-22.063-49.25-49.25 S200.031,72.375,227.219,72.375z M249.938,256c0,12.563-10.172,22.719-22.719,22.719c-12.563,0-22.719-10.156-22.719-22.719 s10.156-22.719,22.719-22.719C239.766,233.281,249.938,243.438,249.938,256z M68.703,163.891 c13.594-23.547,43.703-31.609,67.25-18.016s31.609,43.688,18.016,67.25c-13.594,23.531-43.703,31.609-67.25,18.016 C63.188,217.547,55.109,187.438,68.703,163.891z M135.969,364.938c-23.563,13.594-53.656,5.531-67.266-18.016 c-13.578-23.547-5.516-53.656,18.016-67.266c23.547-13.594,53.656-5.516,67.25,18.031S159.5,351.344,135.969,364.938z M177.969,389.203c0-27.188,22.063-49.234,49.25-49.234s49.219,22.047,49.219,49.234s-22.031,49.234-49.219,49.234 S177.969,416.391,177.969,389.203z"></path>
        </svg>
    </div>
        <strong> KinePolis
      </strong>
    <div className="card__body">
        Programa web en el que se utilizo javascript con el fin de crear una pagina de gestion de cine.
    </div>
      <span>Mira ahora</span>
    </div>
    </a>

    <a className='link-decoration' href="https://github.com/sramirez2022506/HTML_AgendaWeb.git">
        <div className="card">
    <div className="icon">
        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M343.656,451.109C410,411.438,454.422,338.906,454.422,256c0-125.484-101.719-227.219-227.203-227.219 C101.719,28.781,0,130.516,0,256s101.719,227.219,227.219,227.219H512v-32.109H343.656z M318.484,145.875 c23.547-13.594,53.641-5.531,67.234,18.016s5.531,53.656-18.016,67.25c-23.547,13.578-53.641,5.516-67.234-18.016 C286.859,189.563,294.938,159.469,318.484,145.875z M300.453,297.688c13.609-23.547,43.703-31.609,67.25-18.016 c23.547,13.609,31.609,43.703,18.016,67.25s-43.688,31.609-67.25,18.016C294.938,351.344,286.859,321.234,300.453,297.688z M227.219,72.375c27.188,0,49.219,22.031,49.219,49.219s-22.031,49.25-49.219,49.25s-49.25-22.063-49.25-49.25 S200.031,72.375,227.219,72.375z M249.938,256c0,12.563-10.172,22.719-22.719,22.719c-12.563,0-22.719-10.156-22.719-22.719 s10.156-22.719,22.719-22.719C239.766,233.281,249.938,243.438,249.938,256z M68.703,163.891 c13.594-23.547,43.703-31.609,67.25-18.016s31.609,43.688,18.016,67.25c-13.594,23.531-43.703,31.609-67.25,18.016 C63.188,217.547,55.109,187.438,68.703,163.891z M135.969,364.938c-23.563,13.594-53.656,5.531-67.266-18.016 c-13.578-23.547-5.516-53.656,18.016-67.266c23.547-13.594,53.656-5.516,67.25,18.031S159.5,351.344,135.969,364.938z M177.969,389.203c0-27.188,22.063-49.234,49.25-49.234s49.219,22.047,49.219,49.234s-22.031,49.234-49.219,49.234 S177.969,416.391,177.969,389.203z"></path>
        </svg>
    </div>
        <strong> ToDoList
      </strong>
    <div className="card__body">
        Un ToDo List realizado unicamente con HTML y CSS con el fin de practicar mas estos.
    </div>
      <span>Mira ahora</span>
    </div>
    </a>

    <a className='link-decoration' href="https://github.com/sramirez2022506/JS_ControlAcademico.git">
        <div className="card">
    <div className="icon">
        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M343.656,451.109C410,411.438,454.422,338.906,454.422,256c0-125.484-101.719-227.219-227.203-227.219 C101.719,28.781,0,130.516,0,256s101.719,227.219,227.219,227.219H512v-32.109H343.656z M318.484,145.875 c23.547-13.594,53.641-5.531,67.234,18.016s5.531,53.656-18.016,67.25c-23.547,13.578-53.641,5.516-67.234-18.016 C286.859,189.563,294.938,159.469,318.484,145.875z M300.453,297.688c13.609-23.547,43.703-31.609,67.25-18.016 c23.547,13.609,31.609,43.703,18.016,67.25s-43.688,31.609-67.25,18.016C294.938,351.344,286.859,321.234,300.453,297.688z M227.219,72.375c27.188,0,49.219,22.031,49.219,49.219s-22.031,49.25-49.219,49.25s-49.25-22.063-49.25-49.25 S200.031,72.375,227.219,72.375z M249.938,256c0,12.563-10.172,22.719-22.719,22.719c-12.563,0-22.719-10.156-22.719-22.719 s10.156-22.719,22.719-22.719C239.766,233.281,249.938,243.438,249.938,256z M68.703,163.891 c13.594-23.547,43.703-31.609,67.25-18.016s31.609,43.688,18.016,67.25c-13.594,23.531-43.703,31.609-67.25,18.016 C63.188,217.547,55.109,187.438,68.703,163.891z M135.969,364.938c-23.563,13.594-53.656,5.531-67.266-18.016 c-13.578-23.547-5.516-53.656,18.016-67.266c23.547-13.594,53.656-5.516,67.25,18.031S159.5,351.344,135.969,364.938z M177.969,389.203c0-27.188,22.063-49.234,49.25-49.234s49.219,22.047,49.219,49.234s-22.031,49.234-49.219,49.234 S177.969,416.391,177.969,389.203z"></path>
        </svg>
    </div>
        <strong> Gestor Estudiantil
      </strong>
    <div className="card__body">
        Un gestor de estudiantes y maestros utilizando NodeJs y ThunderClient para ejecutarlo y probarlo.
    </div>
      <span>Mira ahora</span>
    </div>
    </a>

    <a className='link-decoration' href="https://github.com/sramirez2022506/HTML_AgendaWeb.git">
        <div className="card">
    <div className="icon">
        <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path className="st0" d="M343.656,451.109C410,411.438,454.422,338.906,454.422,256c0-125.484-101.719-227.219-227.203-227.219 C101.719,28.781,0,130.516,0,256s101.719,227.219,227.219,227.219H512v-32.109H343.656z M318.484,145.875 c23.547-13.594,53.641-5.531,67.234,18.016s5.531,53.656-18.016,67.25c-23.547,13.578-53.641,5.516-67.234-18.016 C286.859,189.563,294.938,159.469,318.484,145.875z M300.453,297.688c13.609-23.547,43.703-31.609,67.25-18.016 c23.547,13.609,31.609,43.703,18.016,67.25s-43.688,31.609-67.25,18.016C294.938,351.344,286.859,321.234,300.453,297.688z M227.219,72.375c27.188,0,49.219,22.031,49.219,49.219s-22.031,49.25-49.219,49.25s-49.25-22.063-49.25-49.25 S200.031,72.375,227.219,72.375z M249.938,256c0,12.563-10.172,22.719-22.719,22.719c-12.563,0-22.719-10.156-22.719-22.719 s10.156-22.719,22.719-22.719C239.766,233.281,249.938,243.438,249.938,256z M68.703,163.891 c13.594-23.547,43.703-31.609,67.25-18.016s31.609,43.688,18.016,67.25c-13.594,23.531-43.703,31.609-67.25,18.016 C63.188,217.547,55.109,187.438,68.703,163.891z M135.969,364.938c-23.563,13.594-53.656,5.531-67.266-18.016 c-13.578-23.547-5.516-53.656,18.016-67.266c23.547-13.594,53.656-5.516,67.25,18.031S159.5,351.344,135.969,364.938z M177.969,389.203c0-27.188,22.063-49.234,49.25-49.234s49.219,22.047,49.219,49.234s-22.031,49.234-49.219,49.234 S177.969,416.391,177.969,389.203z"></path>
        </svg>
    </div>
        <strong> Gestor De Opiniones
      </strong>
    <div className="card__body">
        Gestor de opiniones donde se utilizo Thunder y NodeJs para visualizar y probar el proyecto
    </div>
      <span>Mira ahora</span>
    </div>
    </a>
        </form>
      </div>
      <div className='contenedor-titulo'>
        <h1 id='comentarios'>COMENTARIOS</h1>
      </div>
      {showButton && (
        <a href="#principio">
          <img id='botonArriba' src={arrow} alt="flecha" />
        </a>
        
      )}
    </div>
  )
}

export default App


