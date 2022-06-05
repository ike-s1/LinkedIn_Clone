import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { initializedApp } from "./redux/reducers/app-reduces";




function App() {
  const dispatch = useDispatch();
  const initialized = useSelector(state => state.app.initialized);

  useEffect(() => {
     dispatch(initializedApp());
  }, [])

  if (!initialized) {
    return <div className="loader">
    <img src='/images/loader.gif' alt='#' />
  </div>
  } else {
  return (
    <BrowserRouter>
      <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
