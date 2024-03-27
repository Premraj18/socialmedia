import React from 'react'
import './App.css'
import { Button, Container } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'

//pages
import UserPage from './pages/UserPage'
import PostPage from './pages/PostPage'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'

const App = () => {
  return (
    <Container maxWidth='620px'>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/authPage' element={<AuthPage/>}/>
        <Route path='/:username' element={<UserPage/>}/>
        <Route path='/:username/post/:pid' element={<PostPage/>}/>
      </Routes>
     </Container>
  )
}

export default App
