import { BrowserRouter as Router } from "react-router-dom";
import "./app.sass";
import Layout from "./components/layout";
import Pages from "./pages";

function App() {
  return (
    <div className="app">
      <Layout>
        <Router>
          <Pages />
        </Router>
      </Layout>
    </div>
  );
}

export default App;
