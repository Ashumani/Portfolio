import {Routes,Route} from "react-router-dom"
import BlogsView from './components/BlogsView'


const AllRoutes = () => {
  return (
    <Routes>
     <Route exact path='/blogsview' Component={BlogsView}/>
        
    </Routes>
    
  )
}

export default AllRoutes