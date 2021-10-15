import React, { useState } from 'react'
import Underline from './Underline'
import Categories from './Categories'
import { works } from '../data'
import Works from './Works'

const Ourworks = () => {
  const allCategories = ['All', ...new Set(works.map((item) => item.category))]
  const [categories, setCategories] = useState(allCategories)
  const [loadMore, setLoadMore] = useState(12)
  const [worksItems, setWorksItems] = useState(works)
  const [activeBtn, setActiveBtn] = useState('All')

  const filterItems = (category) => {
    setActiveBtn(category)
    if (category === 'All') {
      setWorksItems(works)
    } else {
      const newItems = works.filter((item) => item.category === category)
      setWorksItems(newItems)
    }
  }

  const showMore = () => {
    setLoadMore(24)
  }
  return (
    <section className='ourworks-section'>
      <div className='title'>
        <h2>Our Amazing Work</h2>
        <Underline />
      </div>
      <Categories
        categories={categories}
        filterItems={filterItems}
        activeBtn={activeBtn}
      />
      <Works worksItems={worksItems} loadMore={loadMore} />
      <button
        onClick={() => showMore()}
        className={`${
          loadMore > 12 || activeBtn !== 'All'
            ? 'hide-load-more'
            : 'show-load-more'
        }`}
      >
        <p>Load More</p>
      </button>
    </section>
  )
}

export default Ourworks
