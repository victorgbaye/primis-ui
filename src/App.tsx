import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import ButtonComponent from './pages/ButtonComponent';
import IconComponent from './pages/IconComponent';
import Home from './pages/Home';
import ModalComponent from './pages/ModalComponent';
import CheckboxComponent from './pages/CheckboxComponent';
import { SelectComponent } from './pages/SelectComponent';
import SwitchComponent from './pages/SwitchComponent';
import TabsComponent from './pages/TabsComponent';
import InputComponent from './pages/InputComponent';
import SkeletonComponent from './pages/SkeletonComponent';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/components">
            <Route index element={<Overview />} />
            <Route path="overview" element={<Overview />} />
            <Route path="button" element={<ButtonComponent />} />
            <Route path="icon" element={<IconComponent />} />
            <Route path="modal" element={<ModalComponent />} />
            <Route path="checkbox" element={<CheckboxComponent />} />
            <Route path="select" element={<SelectComponent />} />
            <Route path="switch" element={<SwitchComponent />} />
            <Route path="tabs" element={<TabsComponent />} />
            <Route path="input" element={<InputComponent />} />
            <Route path="skeleton" element={<SkeletonComponent />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
