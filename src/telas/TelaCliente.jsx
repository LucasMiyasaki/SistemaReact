import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    const [listaCliente, setListaCliente] = useState([]);
    const [clienteEdit, setClienteEdit] = useState({
        cpf:'',
        nome:'',
        endereco:'',
        numero:'',
        bairro:'',
        cidade:'',
        uf:'SP',
        cep:''
    });

    const [edicao, setEdicao] = useState(false);

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
                        exibirFormulario={setExibirFormulario}
                        clienteEdit={clienteEdit}
                        edicao={edicao}
                        setClienteEdit={setClienteEdit}
                        setEdicao={setEdicao}/> 
                    : <TabelaClientes 
                        lista={listaCliente}
                        setLista={setListaCliente}
                        exibirFormulario={setExibirFormulario}
                        clienteEdit={clienteEdit}
                        setEdicao={setEdicao}
                        setClienteEdit={setClienteEdit}
                        edicao={edicao}/>
                }
            </Pagina>
        </Container>
    )
}