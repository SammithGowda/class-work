import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import { ProductsPage } from "./Components/ProductPage";
import { ProductsDetailsPage } from "./Components/ProductDetailsPage";
import { Navbar } from "./Components/NavBar";
import { NotFoundPage } from "./Components/PageNotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsDetailsPage />} />
        <Route path="/notfound" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
