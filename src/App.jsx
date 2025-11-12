import { Route, Routes } from "react-router-dom"
import Layout from "./pages/Layout"
import Products from "./pages/Products"
import Create from "./pages/Create"
import Update from "./pages/Update"
import Products2 from "./pages/Products2"
import Create2 from "./pages/Create2"
import Update2 from "./pages/Update2"


const App = () => {
  return (
    <div className="bg-blue-gray-900">
      <Routes>
        <Route path="/" element={< Layout/>}>
        <Route path="products" element = {<Products />} />
        <Route path="create" element={<Create />} />
        <Route path="update/:id" element={<Update/>}/>
        <Route path="products2" element = {<Products2 />} />
        <Route path="create2" element={<Create2 />} />
        <Route path="update2/:id" element={<Update2/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App