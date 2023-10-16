import { Container } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import FormCadCliente from "./formularios/FormCadCliente";
import TabelaClientes from "./tabelas/TabelaClientes";
import { useState } from "react";
import TelaMsg from "./TelaMsg";

export default function TelaCadastroCliente(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);
    //const [listaCliente, setListaCliente] = useState([]);
    const [mostrarMensagem, setMostrarMensagem] = useState(false);
    const [mensagem, setMensagem] = useState("");
    const [tipoMensagem, setTipoMensagem] = useState("");
    
    const [clienteEdit, setClienteEdit] = useState({
        cpf: '',
        nome: '',
        endereco: '',
        numero: '',
        bairro: '',
        cidade: '',
        uf: 'SP',
        cep: ''
    });

    const [edicao, setEdicao] = useState(false);

    if (mostrarMensagem) {
        return (
            <TelaMsg mensagem={mensagem} tipo={tipoMensagem} setMensagem={setMostrarMensagem}/>
        )
    }
    else {

        return (
            <Container>
                <Pagina>
                    {
                        //dinâmica em que o usuário irá alternar entre o formulário de cadastro
                        //e a visualização do registros já cadastrados.
                        exibirFormulario ?
                            <FormCadCliente
                                exibirFormulario={setExibirFormulario}
                                clienteEdit={clienteEdit}
                                edicao={edicao}
                                setClienteEdit={setClienteEdit}
                                setEdicao={setEdicao}
                                />
                            : <TabelaClientes
                                exibirFormulario={setExibirFormulario}
                                clienteEdit={clienteEdit}
                                setEdicao={setEdicao}
                                setClienteEdit={setClienteEdit}
                                edicao={edicao} />
                    }
                </Pagina>
            </Container>
        )
    }
}