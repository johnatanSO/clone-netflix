const API_key = "38c007f28d5b66f36b9c3cf8d8452a4b"
const API_BASE = "https://api.themoviedb.org/3"

/* 
- originais netflix
- recomendados (trending)
- em alta (top rated)
- ação
- comédia
- romance
- documentários

35 minutos de vídeo
https://www.youtube.com/watch?v=tBweoUiMsDg
*/

const basicFetch = async (endpoint)=>{
  const req = await fetch(`${API_BASE}${endpoint}`)
  const json = await req.json()
  console.log(json)
  return json
}

export default {
  getHomeList: async ()=>{
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      { 
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      { 
        slug: 'topRated',
        title: 'Em alta',
        items: await basicFetch(`/movie/top_rated?language=pt=BR&api_key=${API_KEY}`)
      },
      { 
        slug: 'action',
        title: 'Ação',
        items: []
      },
      { 
        slug: 'comedy',
        title: 'Comédia',
        items: []
      },
      { 
        slug: 'horror',
        title: 'Terror',
        items: []
      },
      { 
        slug: 'romance',
        title: 'Romance',
        items: []
      },
      { 
        slug: 'documentary',
        title: 'Documentários',
        items: []
      },
    ]
  }
}