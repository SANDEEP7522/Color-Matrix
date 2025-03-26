import "./App.css";

import { Header } from "./components/Header/Header";
import { MatrixColorChange } from "./components/matrix/Matrix";

function App() {
  return (
    <div className="bg-yellow-100">
      <Header />
      <MatrixColorChange />
    </div>
  );
}

export default App;
