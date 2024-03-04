import { Link } from "react-router-dom"
import Sidebar from "../documentation/components/Sidebar"

const Home = () => {
  return (
    <div>
        <Sidebar/>
        <Link to='/components/button'>Button</Link>
    </div>
  )
}

export default Home