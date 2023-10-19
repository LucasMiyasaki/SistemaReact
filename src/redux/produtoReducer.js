import { createSlice } from "@reduxjs/toolkit";
import ESTADO from "../recursos/estado";

//name, initialState e reducers são atributos obrigatórios
//de um objeto que cria uma 'fatia/slice' da store, resultando em um redutor. 
const produtoSlice = createSlice({
    name:'produto',
    initialState:{
        status: ESTADO.OCIOSO,
        mensagem:'',
        listaProdutos:[]
    },
    reducers:{
        //ação ou action adicionar
        adicionarProd:(state, action)=>{
            state.listaProdutos.push(action.payload);
        },
        removerProd:(state,action)=>{
            state.listaProdutos = state.listaProdutos.filter(produto => produto.codigo !== action.payload.codigo);
        },
        atualizarProd:(state,action)=>{
            //Atualizar implicará em excluir o produto da lista e adicioná-lo novamente com seus dados alterados
            //remover -> adicionar novamente com dados atualizados
            const listaTemporariaProdutos = state.listaProdutos.filter(produto => produto.codigo !== action.payload.codigo);
            state.listaProdutos = [...listaTemporariaProdutos, action.payload];
        }

    }
});
//exportando as actions que alteram o estado 'produto'
export const {adicionarProd,removerProd,atualizarProd} = produtoSlice.actions; 
//exportando o redutor para ser utilizado na store
export default produtoSlice.reducer;