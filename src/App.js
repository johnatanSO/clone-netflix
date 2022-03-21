import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React, { useEffect, useState } from "react";
import tmdb from './Tmdb'
import MovieRow from './components/MovieRow/MovieRow'
import './App.css'
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default () =>{

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')


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


  function handleChange(e){
    let nameInput = e.target.value
    setName(nameInput)
  }
  function submitName(){
    if(name == ''){
      alert('error')
    }else{
      setUserName(name)
    }
  }

 
  return (

    <div className="page">
      {/* <input onChange={handleChange} type='text'/> */}
      {/* <button onClick={submitName}>Set name</button> */}
      <Header userName={userName} black={blackHeader} />
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

      <Footer />


        {movieList.length <= 0 && 
          <div className="loading">
            <img src="/assets/loading.svg" />
          </div>
      }
      
    </div>
  )
}