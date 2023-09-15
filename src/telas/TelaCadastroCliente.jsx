import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaCliente, setListaCliente] = useState([]);

    return (
        <Container>
            <Pagina>
                {
                    //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                    //e a visualização do registros já cadastrados.
                    exibirFormulario ? 
                    <FormCadCliente
                        lista={listaCliente}
                        setLista={setListaCliente}
                        exibirFormulario={setExibirFormulario}/> 
                    : <TabelaClientes 
                        lista={listaCliente}
                        exibirFormulario={setExibirFormulario}/>
                }
            </Pagina>
        </Container>
    )
}