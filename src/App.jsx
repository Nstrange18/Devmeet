import RootLayout from "./Layout/RootLayout";
import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}/>
        <Route path="login" element={<Login />}/>
      </Route>
    )

    
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App