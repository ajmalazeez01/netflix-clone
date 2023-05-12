import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPosts from './Components/RowPosts/RowPosts';
import {originals,action,romance, documentary} from './Components/urls'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPosts url={originals} title='netflixoriginals' />
      <RowPosts url={action} title='action' isSmall />
      <RowPosts url={romance} title='romance' isSmall />
      <RowPosts url={documentary} title='documentary' isSmall />

    </div>
  );
}

export default App;
