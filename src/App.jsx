import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/Home";

function App() {

  return (
    <div className="font-Inter">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          {/* Uncomment or add routes */}
          {/* <Route path="cart" element={<Cart />} />
          <Route path="item/:id" element={<Item />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App


function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

function NoMatch() {
  return (
    <>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}




function Loading() {
  return <h1 className="font-bold text-3xl font-Inter fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    Loading App...
  </h1>
}