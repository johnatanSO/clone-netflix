import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import tmdb from './Tmdb'
import MovieRow from './components/MovieRow/MovieRow'
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";


export default () =>{

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)





  useEffect(()=>{
    const loadAll = async () => {
      let list = await tmdb.getHomeList()
      setMovieList(list)


      let originals = list.filter((item) => {return item.slug == 'originals'})
      setFeaturedData(originals)
    }
    loadAll()
  },[])
  

  console.log(movieList)
  movieList.map((item,key)=>{
    console.log(item)
  })
  console.log(featuredData)


  return (

    <div className="page">

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <FeaturedMovie/>
      <section className="lists">
        {movieList.map((item,key) => {
          return(
            <MovieRow items={item.items} title={item.title} key={key}></MovieRow>
          )
        })}
      </section>
    </div>

  )
}