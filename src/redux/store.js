import {configureStore} from '@reduxjs/toolkit';
import clienteSlice from './clienteReducer';
import produtoSlice from './produtoReducer';
import fornecedorSlice from './fornReducer';

const store = configureStore({
    reducer:{
        cliente: clienteSlice,
        produto: produtoSlice,
        fornecedor: fornecedorSlice
    }
});

export default store;