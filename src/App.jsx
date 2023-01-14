import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AddProject, Header, Home, UpdateCV } from "./components";

const Combine = () => {
  return(
    <>
      <Header />
      <Home />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Combine /> } />
        <Route path="/addproject" element={<AddProject />} />
        <Route path="/updatecv" element={<UpdateCV />} />
      </Routes>
    </Router>
  );
}

export default App;
