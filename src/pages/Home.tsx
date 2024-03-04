import { Link } from "react-router-dom"
import Sidebar from "../documentation/components/Sidebar"
import  {Button}  from 'primis-ui/src/components/Button';

const Home = () => {
  return (
    <div>
        <Sidebar/>
        <Link to='/components/button'>Button</Link>
        <Button variant="outline">sample</Button>
    </div>
  )
}

export default Home