import React from "react"
import "./style.css"
import logo from "../../components/assets/images/logo.png"
import PDD from "../../components/assets/PDD.pdf"


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
              <a  href="https://www.instagram.com/coquitos.petshop/" style={{ color: "#fff8", display: "flex", marginBottom:"0.5rem" }}>Quienes somos</a>
              <a  href="https://www.google.com/maps/place/Coquitos+PetShop/@-34.8817045,-56.1920233,16.52z/data=!4m6!3m5!1s0x959f81b85c6d6d9b:0x9c84a4f21be4ec0d!8m2!3d-34.8811115!4d-56.1920056!16s%2Fg%2F11tk12bcr9?entry=ttu" style={{ color: "#fff8", display: "flex", marginBottom:"0.5rem" }}>Nuestra tienda</a>
              <a style={{ color: "#fff8", display: "flex", marginBottom:"0.5rem" }}>Nuestros Productos</a>
              
              <a download="" href={PDD}style={{ color: "#fff8", display: "flex", marginBottom:"0.5rem" }}>Politicas de Privacidad</a>
            </ul>
          </div>
          <div className='box'>
            <h2>Servicio al Cliente</h2>
            <ul>
            <a  href="" style={{ color: "#fff8", display: "flex", marginBottom:"0.5rem" }}>Consultas </a>
              {/* En "como comprar" que lo lleve a Mercado pago donde ellos expliquen como pagar */}
              <a  href="https://www.mercadopago.com.mx/beneficios-pagos-con-mercado-pago#:~:text=No%20te%20quedes%20con%20las%20ganas%2C%20paga%20en,paga%20despu%C3%A9s%20desde%20Mercado%20Pago%20o%20Mercado%20Libre.  " style={{ color: "#fff8", display: "flex", marginBottom:"0.5rem" }}>Cómo comprar </a> 
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
