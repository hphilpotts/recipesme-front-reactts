
import { Box, Toolbar } from '@mui/material'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.js'
import { NotFound } from './pages/NotFound.js'
import { Navbar } from './components/Navbar.js'
import { Recipe } from './pages/Recipe.js'
import './App.css'

function App() {

  return (
    // JSX ELEMENTS
    <div>
      <BrowserRouter>
        <Navbar />
        {/* Empty toolbar to space navbar */}
        <Toolbar></Toolbar>

        <Box>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id/view" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
