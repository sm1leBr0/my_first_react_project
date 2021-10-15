import React from 'react'
import { useGlobalContext } from '../context'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import Underline from './Underline'

const Slider = () => {
  const { people, index, setIndex } = useGlobalContext()
  return (
    <section className='slider-section'>
      <div className='title'>
        <h2>What People Say About theHam</h2>
        <Underline />
      </div>

      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { id, name, photo, title, text } = person
          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={`${position}`} key={id}>
              <FaQuoteRight className='icon' />
              <p className='slide-text'>{text}</p>
              <h3 className='slide-name'>{name}</h3>
              <h4 className='slide-title'>{title}</h4>
              <img src={photo} alt={name} className='person-img' />
            </article>
          )
        })}
        <div className='slide-bullets'>
          {people.map((bullet, personIndex) => {
            const { id, photo, name } = bullet
            return (
              <img
                src={photo}
                alt={name}
                key={id}
                onClick={() => setIndex(id - 1)}
                className={`bullet-img ${
                  index === personIndex && ' bullet-img bullet-img-active'
                }`}
              />
            )
          })}
        </div>
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default Slider
