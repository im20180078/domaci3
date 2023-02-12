import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import Cart from './components/Cart';
import { useState } from 'react';
import Kontakt from './components/Kontakt';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Forma from './components/Forma';
import Utisci from './components/Utisci';



function App() {

  const [movieNumber, setMovieNumber] = useState(0);
  const [cartFilms, setCartFilms] = useState([]);
  const [films] = useState([
    {
      id: 1,
      title: "Jurassic Park",
      synopsys:"A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      actors: "Jeff Goldblum",
      amount: 0
    },
    {
      id: 2,
      title: "Kill Bill",
      synopsys:"After awakening from a four-year coma, a former assassin wreaks vengeance on the team of assassins who betrayed her.",
      actors: "Uma Thurman",
      amount: 0
    },
    {
      id: 3,
      title: "Parasite",
      synopsys:"Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      actors: "Song Kang-ho",
      amount: 0
    },
    {
      id: 4,
      title: "Avengers",
      synopsys:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      actors: "Robert Downey Jr",
      amount: 0
    },
    {
      id: 5,
      title: "Avatar",
      synopsys:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      actors: "Sam Worthington",
      amount: 0
    },
    {
      id: 6,
      title: "Joker",
      synopsys:"A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
      actors: "Joaqin Phoenix",
      amount: 0
    },
    { 
      id: 8,
      title: "300",
      synopsys: "King Leonidas of Sparta and a force of 300 men fight the Persians at Thermopylae in 480 B.C.",
      actors: "Gerard Butler",
      amount: 0
    } 

  ]); 


  function refreshList(id) {
    let newFilms = films.filter((f)=>f.amount>0);
    setMovieNumber(newFilms.length);
    setCartFilms(newFilms);
  }


function addMovie(id){

  films.forEach((f)=>{
    if(f.id===id){
      f.amount=1;
    }
  });
  refreshList(id);
}


function removeMovie(id){
  setMovieNumber(movieNumber-1);
  films.forEach((f)=>{
    if(f.id===id && f.amount>0){
      f.amount=0;
    }
  });
  refreshList(id);
}



  return (
    <BrowserRouter className="App">
      <NavBar movieNumber={movieNumber}></NavBar>
      <Routes>
        <Route path="/" element = {[<Movies films={films} addToCart={addMovie} />,<Forma/>]}/>
        <Route path="/iznajmi" element = {<Cart films={cartFilms} removeFromCart={removeMovie}/>}/>
        <Route path="/kontakt" element = {<Utisci/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
