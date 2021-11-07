import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdModal from "./components/AdModal";
import PageRoute from "./routes/PageRoute";
import "./App.css";
import "./components/style.css";

function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.sessionStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function App() {
  const [show, setShow] = useStickyState(true, "show");
  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  useEffect(() => {
    window.sessionStorage.setItem(show, JSON.stringify(show));
  }, [show]);

  return (
    <BrowserRouter>
      <div className="myflex">
        {show && <AdModal show={show} handleClose={handleClose}></AdModal>}
        <Header />
        <PageRoute />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
