import React from 'react'

const Categories = ({ categories, filterItems, activeBtn }) => {
  return (
    <div className='category-btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className={`category-btn ${
              category === activeBtn && 'category-btn-active'
            }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
