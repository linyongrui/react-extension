import { BrowserRouter } from 'react-router-dom'
import Router from './component/lazy_load/router'

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
