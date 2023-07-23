import React from 'react'
import Row from './components/Row';
import Requests from './Requests';
import Banner from './Banner';
import Navbar from './Navbar';
import Login from "./Login"
import Logout from "./Logout"
import Profile from "./Profile"
const App = () => {
  return (
    <div className='app'>
   <Navbar/>
    <Banner/>
    <Row title="NETFIX ORIGINALS" fetchURL={Requests.fetchNetflixOriginals} isLargeRow={true}/>
    <Row title="Trending Now" fetchURL={Requests.fetchTrending}/>
    <Row title="Top Rated" fetchURL={Requests.fetchTopRated}/>
    <Row title="Action Movies" fetchURL={Requests.fetchActionMovies}/>
    <Row title="Horror Movies" fetchURL={Requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchURL={Requests.fetchRomanceMovies}/>
    <Row title="Comedy Movies" fetchURL={Requests.fetchComedyMovies}/>
    <Row title="Documentaries" fetchURL={Requests.fetchDocumentaries}/>
    </div>
  )
}
export default App;
