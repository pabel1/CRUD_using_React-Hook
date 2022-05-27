
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import {DataContextProvider} from './Components/myContext'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Delete from './Components/Delete';
import Read from './Components/Read';
import Edit from './Components/Edit';
import UserCreate from './Components/UserCreate';
function App() {
  return (
    <div className="App" style={{margin:"0 auto",maxWidth:"80%",marginTop:"10px"}}>
      <DataContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/delete/:id" element={<Delete />} />
            <Route path="/read/:id" element={<Read />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/usercreate" element={<UserCreate />} />
          </Routes>
        </BrowserRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;
