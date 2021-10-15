import React, { useState } from 'react'
import Underline from './Underline'
import { servicesData } from '../data'

const Services = () => {
  const [services, setServices] = useState(servicesData)
  const [value, setValue] = useState(0)

  const { title, img, text } = services[value]
  return (
    <section className='section-services'>
      <div className='title'>
        <h2>Our Services</h2>
        <Underline />
      </div>
      <div className='services-center'>
        <div className='tab'>
          {services.map((service, index) => {
            return (
              <button
                key={service.id}
                className={`btn-container ${index === value && 'active-btn'}`}
                onClick={() => setValue(index)}
              >
                {service.title}
              </button>
            )
          })}
        </div>
        <article className='service-content'>
          <img src={img} alt={title} />
          {text}
        </article>
      </div>
    </section>
  )
}

export default Services
