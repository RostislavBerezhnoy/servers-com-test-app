import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DefaultLayout } from 'components/Layout'
import { Feed } from 'views/Feed'
import { Author } from 'views/Author'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Navigate to='/feed' />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/author/:id' element={<Author />} />
        </Route>
        <Route path='*' element={<h3>Not Found</h3>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
