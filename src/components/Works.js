import React from 'react'
import { FaLink, FaSearch } from 'react-icons/fa'
const Works = ({ worksItems, loadMore }) => {
  return (
    <div className='works-container'>
      {worksItems.slice(0, loadMore).map((work) => {
        const { id, title, img } = work
        return (
          <div key={id} className='works-items'>
            <div className='works-content'>
              <div className='circles'>
                <div className='circle1'>
                  <p>
                    <FaLink />
                  </p>
                </div>
                <div className='circle2'>
                  <p>
                    <FaSearch />
                  </p>
                </div>
              </div>
              <h2>CREATIVE DESIGN</h2>
              <h3>{title}</h3>
            </div>

            <img src={img} alt={title} />
          </div>
        )
      })}
    </div>
  )
}

export default Works
