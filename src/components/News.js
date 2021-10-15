import React from 'react'
import { news } from '../data'
import Underline from './Underline'

const News = () => {
  return (
    <section className='news-section'>
      <div className='title'>
        <h2>Breaking News</h2>
        <Underline />
      </div>
      <div className='news-grid'>
        {news.map((item, index) => {
          return (
            <article key={item.id}>
              <a href={item.ulr}>
                <div className='news-date'>
                  <h4> {item.date}</h4>

                  <h4>{item.mounth}</h4>
                </div>
                <img src={item.img} alt={item.title} />
                <div className='news-container'>
                  <h3>{item.title}</h3>
                  <p>
                    by {item.author} | {item.comments} comments
                  </p>
                </div>
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default News
