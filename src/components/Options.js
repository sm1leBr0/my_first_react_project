import React from 'react'
import { options } from '../data'

const Options = () => {
  return (
    <section className='options'>
      {options.map((option) => {
        const { id, img, text } = option
        return (
          <div
            key={id}
            className={`${id % 2 !== 0 ? 'option odd' : 'option even'}`}
          >
            <img src={img} alt={id} />
            <p>{text}</p>
          </div>
        )
      })}
    </section>
  )
}

export default Options
