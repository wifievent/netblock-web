import { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import DownloadPage from "./pages/DownloadPage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import AdModal from "./components/AdModal";
import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        {console.log(show)}
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/download" component={DownloadPage} />
          <Route exact path="/help" component={HelpPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
