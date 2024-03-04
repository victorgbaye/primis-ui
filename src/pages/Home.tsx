import { Link } from "react-router-dom"
import Sidebar from "../documentation/components/Sidebar"
// import  Button  from 'primis-ui';

const Home = () => {
  return (
    <div>
        <Sidebar/>
        <Link to='/components/button'>Button</Link>
        {/* <Button>sample</Button> */}
    </div>
  )
}

export default Home