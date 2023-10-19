import Pagina from "../templates/Pagina";
import { useState } from "react";
import FormCadFornecedor from "./formularios/FormCadFornecedor";
import TabelaFornecedor from "./tabelas/TabelaFornecedores";

export default function TelaFornecedores(props) {
    const [exibirFormulario, setExibirFormulario] = useState(false);

    const [fornEdit, setFornEdit] = useState({
        cod: '',
        nome: '',
        cidade: ''
    });

    const [edicao, setEdicao] = useState(false);

    return (
        <Pagina>
            {
                exibirFormulario ?
                    <FormCadFornecedor
                        exibirFormulario={setExibirFormulario}
                        fornEdit={fornEdit}
                        edicao={edicao}
                        setFornEdit={setFornEdit}
                        setEdicao={setEdicao} />
                    : <TabelaFornecedor
                        exibirFormulario={setExibirFormulario}
                        fornEdit={fornEdit}
                        edicao={edicao}
                        setFornEdit={setFornEdit}
                        setEdicao={setEdicao} />
            }
        </Pagina>
    );
}