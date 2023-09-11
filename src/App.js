import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaMenu from "./telasCadastro/TelaMenu";
import Tela404 from "./telasCadastro/Tela404";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/clientes" element={<TelaCadastroCliente/>}/>
          <Route path="/" element={<TelaMenu/>}/>
          <Route path="*" element={<Tela404/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
