import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastroCliente from "./telas/TelaCliente";
import TelaProdutos from "./telas/TelaProdutos";
import TelaMenu from "./telas/TelaMenu";
import Tela404 from "./telas/Tela404";
import { Provider } from "react-redux";
import store from "./redux/store";
import TelaFornecedores from "./telas/TelaFornecedores";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/clientes" element={<TelaCadastroCliente />} />
            <Route path="/produtos" element={<TelaProdutos />} />
            <Route path="/fornecedores" element={<TelaFornecedores />} />
            <Route path="/" element={<TelaMenu />} />
            <Route path="*" element={<Tela404 />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
