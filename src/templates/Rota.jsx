import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaCadastroCliente from "../telasCadastro/TelaCadastroCliente";
import TabelaClientes from "../telasCadastro/tabelas/TabelaClientes";
import FormCadCliente from "../telasCadastro/formularios/FormCadCliente";

export default function Rotas() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TelaCadastroCliente/>}/>
                    <Route path="/clientes" element={<TabelaClientes/>}/>
                    <Route path="/cadcliente" element={<FormCadCliente/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}