import './App.css';
import { ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';//npm install react-router-dom@6




const App = () => {
  return (

      <div className="App">
        <Navbar></Navbar>
    
        <Outlet/>
        <Footer />
        {/* <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/indonesia" element={<IndonesiaList />}/>
          <Route path='/price' element={<Price />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/subs/:type' element={<Subscribe />}/>
          <Route path='/detail/:data' element={<DetailMovie />}/>
          <Route path='/*' element={<Box sx={{mt:10,textAlign:"center"}}><h2>Halaman Tidak Ada</h2></Box>}/>
        </Routes> */}
      </div>
   
  );
}

export default App;
