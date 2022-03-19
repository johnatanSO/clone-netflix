import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import tmdb from './Tmdb'
import MovieRow from './components/MovieRow/MovieRow'
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";
import Header from "./components/Header/Header";

export default () =>{

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else(setBlackHeader(false))
    }
    
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll',scrollListener)
    }
    
  },[])





  useEffect(()=>{
    const loadAll = async () => {
      let list = await tmdb.getHomeList()
      setMovieList(list)


      let originals = list.filter((i) => {return i.slug === 'originals'})
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv')
      /* console.log(chosenInfo) */

      setFeaturedData(chosenInfo)
      
    }
    loadAll()
  },[])

 
  return (

    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
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