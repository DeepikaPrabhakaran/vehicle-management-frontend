import VehicleApp from './components/VehicleApp';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<BrowserRouter>
      <VehicleApp />
</BrowserRouter>
    </div>
  )
}
export default App;
