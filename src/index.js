import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';//tambah BrowserRouter setelah install react-route
import MovieList from './container/MovieList.js'
import Indo from './container/IndonesiaList.js'
import { Box } from '@mui/system';
import Price from './components/Price.js';
import Subscribe from './container/Subcribe.js';
import About from './components/About.js';
import DetailMovie from './components/DetailMovie';
import Login from './container/Login.js'
import Register from './container/Register';
import UserLogin from './Config/UserLogin'
import Notfound from './container/Notfound';
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { MovieApi } from './Features/MoviApi';
import SearchMovie from './container/SearchMovie';



const store = configureStore({
  reducer:{
    [MovieApi.reducerPath]:MovieApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(MovieApi.middleware),
})


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>

    <Route path="/" element={
      <App />
    }>
      <Route path="/" element={<MovieList />} />
      <Route path="/indonesia" element={<Indo/>}/>
      <Route path="/price" element={<Box><Price /></Box>}/>
      <Route path='/subs/:type' element={<Subscribe />}/>
      <Route path="/about" element={<Box><About/></Box>}/>
      {/* <Route path='/movie/:name' element ={<Box><MovieList /></Box>}/> */}
      <Route path='/search/:movie' element = {<SearchMovie/>} />
      <Route path='/detail/:data' element={<DetailMovie />}/>
      <Route path='/login' element={<UserLogin><Login/></UserLogin>}/>
      <Route path='/register' element={<UserLogin><Register/></UserLogin>}/>
      <Route path='/*' element={<Notfound />}/>

    </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
