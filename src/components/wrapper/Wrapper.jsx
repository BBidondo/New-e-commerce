import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Delivery",
      decs: "Hacemos envíos a todo el país. Envíos gratis en Montevideo.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Débito y Crédito",
      decs: "Aceptamos tarjetas de Débito y Crédito en Tienda, además de Meracdo Pago.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Página segura",
      decs: "Sus datos permanecen cifrados y seguros al ingresar su cuenta.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Asistencia por reclamos",
      decs: "Nuestra misión es ofrecer la mejor calidad de servicios como de productos.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
