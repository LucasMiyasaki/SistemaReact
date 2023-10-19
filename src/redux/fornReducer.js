import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

//name, initialState e reducers são atributos obrigatórios
//de um objeto que cria uma 'fatia/slice' da store, resultando em um redutor. 
const fornecedorSlice = createSlice({
    name:'fornecedor',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaFornecedores:[]
    },
    reducers:{
        //ação ou action adicionar
        adicionarForn:(state, action)=>{
            state.listaFornecedores.push(action.payload);
        },
        removerForn:(state,action)=>{
            state.listaFornecedores = state.listaFornecedores.filter(fornecedor => fornecedor.cod !== action.payload.cod);
        },
        atualizarForn:(state,action)=>{
            //Atualizar implicará em excluir o fornecedor da lista e adicioná-lo novamente com seus dados alterados
            //remover -> adicionar novamente com dados atualizados
            const listaTemporariafornecedors = state.listaFornecedores.filter(fornecedor => fornecedor.cod !== action.payload.cod);
            state.listaFornecedores = [...listaTemporariafornecedors, action.payload];
        }

    }
});
//exportando as actions que alteram o estado 'fornecedor'
export const {adicionarForn,removerForn,atualizarForn} = fornecedorSlice.actions; 
//exportando o redutor para ser utilizado na store
export default fornecedorSlice.reducer;