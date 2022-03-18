import React from 'react'
import './MovieRow.css'

export default (props) => {
  return (
    <div className="movieRow">
      <h2>{props.title}</h2>

      <div className='movieRow--listArea'>

        <div className="movieRow--list">
          {props.items.results.length > 0 && props.items.results.map((item, key) => {
            return (
              <div key={key} className="movieRow--item">
                <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
              </div>
            ) 
          })}
        </div>

        
      </div>
    </div>
  )
}