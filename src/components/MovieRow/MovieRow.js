import React, {useState} from 'react'
import './MovieRow.css'


export default (props) => {
  
  const [marginList, setMarginList] = useState(0)

  function handleLeftArrow(){
    let x  = marginList + Math.round(window.innerWidth / 2)

        if(x > 0){
          x = 0
        }
        setMarginList(x)
        
  }

  function handleRightArrow(){
    let x  = marginList - Math.round(window.innerWidth / 2)
    let listW = props.items.results.length * 150

    if((window.innerWidth - listW) > x){
      x = (window.innerWidth - listW) - 60 
    }

    setMarginList(x)
  }

  return (
    <div className="movieRow">
      <h2>{props.title}</h2>

      <div onClick={handleLeftArrow} className="movieRow--left">voltar</div>

      <div onClick={handleRightArrow} className="movieRow--right">avançar</div>

      <div className='movieRow--listArea'>

        <div className="movieRow--list" style={{marginLeft:marginList, width: props.items.results.length * 150}}>
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