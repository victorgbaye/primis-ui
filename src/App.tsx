import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import ButtonComponent from './pages/ButtonComponent';
import IconComponent from './pages/IconComponent';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/components" element={<div>Components Layout</div>}>
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="button" element={<ButtonComponent />} />
            <Route path="icon" element={<IconComponent />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
