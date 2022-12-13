import MainNavbar from "./components/MainNavbar";
import MainFooter from "./components/MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="body">
      <MainNavbar />

      <MainFooter />
    </div>
  );
}

export default App;
