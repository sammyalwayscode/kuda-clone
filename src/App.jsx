import Personal from "./pages/Personal";
import Header from "./static/Header";
import Footer from "./static/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Business from "./pages/Business";
import Companies from "./pages/Companies";


const App = () => {
  const d = 2+3
  return(
    <div>
      <BrowserRouter>
         <Header />
          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/business" element={<Business />} />
            <Route path="/companies" element={<Companies/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App





