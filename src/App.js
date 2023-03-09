import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Component/Cart/Cart";
import Main from "./Component/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;