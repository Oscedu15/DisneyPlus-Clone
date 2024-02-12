
import './App.css'
import GenreMovieList from './components/GenreMovieList/GenreMovieList'
import Header from './components/Header/Header'
import HrMovieCard from './components/HrMovieCard/HrMovieCard'
import ProductionHouse from './components/ProductionHouse/ProductionHouse'
import Slider from './components/Slider/Slider'

function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </div>
  )
}

export default App
