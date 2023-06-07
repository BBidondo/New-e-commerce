import React from "react"
import "./style.css"
import logo from "../../components/assets/images/logo.png"


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
          <div className='logo width '>
            <img src={logo} alt='' style={{ borderRadius: "5px", marginRight: "2rem" }} />
          </div>
            <h4 style={{marginTop: "1rem", marginLeft: "1.7rem"}}>"Un paraíso para las patitas peludas."</h4>
            <div className='icon d_flex'>
             
            </div>
          </div>

          <div className='box'>
            <h2>Sobre Nosotros</h2>
            <ul>
              <li>Quienes somos</li>
              <li>Nuestra tienda</li>
              <li>Nuestros Productos</li>
              
              <li>Politicas de Privacidad</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Servicio al Cliente</h2>
            <ul>
              <li>Consultas </li>
              {/* En "como comprar" que lo lleve a Mercado pago donde ellos expliquen como pagar */}
              <li>Cómo comprar </li> 
              <li>Rastrea tu órden </li>
            
              <li>Devoluciones </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contactanos</h2>
            <ul>
              <li>Coquitos PetShop, Zapicán 2558, 11800 Montevideo, Departamento de Montevideo </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Celular: +598 092870822</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
