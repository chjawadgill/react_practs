import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./component/pages/home.jsx";
import Header from "./component/common/header.jsx";
import Footer from "./component/common/footer.jsx";

let root = document.getElementById("root");
createRoot(root).render(
  <>
    <Header />
    <Home />
    <Footer />
  </>
);

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
