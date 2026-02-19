import {Routes,Route} from "react-router-dom"
import BlogsPage from './pages/Blogs'


const AllRoutes = () => {
  return (
    <Routes>
     <Route exact path='/blogsview' Component={BlogsPage}/>
        
    </Routes>
    
  )
}

export default AllRoutes