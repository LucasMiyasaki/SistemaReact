import { Alert } from "react-bootstrap";
import Pagina from "../templates/Pagina";
import { useEffect } from "react";

export default function TelaMsg(props) {
    useEffect(()=> {
        setTimeout(() => {
            props.setMensagem(false);
        }, 1000);
    },[])

    return(
        <Pagina>
            <Alert variant={props.tipo}>
                <p>{props.mensagem}</p>
            </Alert>
        </Pagina>
    );
}