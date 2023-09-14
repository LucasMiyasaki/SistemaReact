import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastroCliente from "./telas/TelaCadastroCliente";
import TelaProdutos from "./telas/TelaProdutos";
import TelaMenu from "./telas/TelaMenu";
import Tela404 from "./telas/Tela404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/clientes" element={<TelaCadastroCliente/>}/>
          <Route path="/produtos" element={<TelaProdutos/>}/>
          <Route path="/" element={<TelaMenu/>}/>
          <Route path="*" element={<Tela404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
