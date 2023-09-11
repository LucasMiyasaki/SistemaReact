import Rodape from "./Rodape";
import Menu from "./Menu";

export default function Pagina(props) {
    return (
        <>
            <Menu />
            <div>
                {
                    // filhos da página
                }
                {props.children}
            </div>
            <Rodape conteudo="Rua X, 100 - Vila Tal - Presidente Prudente/SP - CNPJ 00.000.000/0001-00"/>
        </>
    )
}

