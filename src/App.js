import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portafolio from "./Pages/Portafolio/Portafolio";
import NotFound from "./Pages/notFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portafolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
