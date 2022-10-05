import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FilterList from './components/FilterList'
import Location from './components/Location'
import ResidentInfo from './components/ResidentInfo'
import randomNumber from './utils/randomNumber'

function App() {
  const [location, setLocation] = useState()
  const [search, setSearch] = useState('')
  const [list, setList] = useState()
  const [error, setError] = useState(false)
  let id
  useEffect(() => {
    if(search){
      id = parseInt(search) 
    }else{
      id= randomNumber()
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`
    axios.get(URL)
   .then(res=>setLocation(res.data))
   .catch(err=>setError(true))
  }, [search])

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(e.target.idLocation.value)
  }
  const handleChange = e => {
  if (e.target.value==='') {
    return setList()
  }
    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

    axios.get(URL)
    .then(res=>setList(res.data.results))
    .catch(err=>console.log(err))
  }

  return (
    <div className="App">
      <h1 className='title'>Rick and Morty</h1>
      <form className='search' onSubmit={handleSubmit}>
        <div className='space_search'>
        <input id='idLocation' 
        onChange={handleChange}
        type="text" />
        <button>search</button>
        </div>
        {/* <FilterList list={list} setSearch={setSearch}/> */}
     </form>
      <div >
      <Location location={location}/>
      </div>
      <div className='residents'>
        {
          location?.residents.map((url)=>(
            <ResidentInfo key={url}
            url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
