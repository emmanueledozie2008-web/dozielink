import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Page/Home'
import InterLinkAppPage from "./Page/InterLinkAppPage";
import RecoveryPhrasePage from "./Page/RecoveryPhrasePage";


function App() {
  return (
    <main>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="InterLinkAppPage" element={<InterLinkAppPage/>}/>
      <Route path="Validate" element={<RecoveryPhrasePage/>}/>
    </Routes>
    </BrowserRouter>
    </main>
  );
}

export default App;