import Pagina from "../templates/Pagina";
import { useState } from "react";
import FormCadProduto from "./formularios/FormCadProduto";
import TabelaProdutos from "./tabelas/TabelaProdutos";

export default function TelaProdutos(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);

    const [prodEdit, setProdEdit] = useState({
        nome: '',
        marca: '',
        codigo: '',
        validade: '',
        fabricacao: '',
        preco: '',
        descricao: ''
    });

    const [edicao, setEdicao] = useState(false);

    return (
        <Pagina>
            {
                exibirFormulario ?
                    <FormCadProduto
                        estado={setExibirFormulario}
                        prodEdit={prodEdit}
                        edicao={edicao}
                        setProdEdit={setProdEdit}
                        setEdicao={setEdicao} />
                    : <TabelaProdutos
                        estado={setExibirFormulario}
                        prodEdit={prodEdit}
                        edicao={edicao}
                        setProdEdit={setProdEdit}
                        setEdicao={setEdicao} />
            }
        </Pagina>
    );
}