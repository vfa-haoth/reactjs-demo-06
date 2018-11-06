import * as types from './../constants/ActionTypes';
import callAPI from './../utils/apiCaller';

//Get all
export const actionFetchProducts = (products) => {
    return {
        type : types.FETCH_PRODUCTS,
        products
    }
}

export const actionFetchProductsRequest = () => {
    return (dispatch) => {
        return callAPI('products', 'GET', null).then(response => {
            dispatch(actionFetchProducts(response.data))
        })
    }
}

//Delete
export const actionDeleteProduct = (id) => {
    return {
        type : types.DELETE_PRODUCT,
        id
    }
}

export const actionDeleteProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'DELETE', null).then(response =>{
            dispatch(actionDeleteProduct(id))
        })
    }
}

//Add
export const actionAddProduct = (product) => {
    return {
        type : types.ADD_PRODUCT,
        product
    }
}

export const actionAddProductRequest = (product) => {
    return (dispatch) => {
        return callAPI('products', 'POST', product).then(response => {
            dispatch(actionAddProduct(response.data))
        })
    }
}

//Update
export const actionUpdateProduct = (product) => {
    return {
        type : types.UPDATE_PRODUCT,
        product
    }
}

export const actionUpdateProductRequest = (product) => {
    return (dispatch) => {
        return callAPI(`products/${product.id}`, 'PUT', product).then(response => {
            dispatch(actionUpdateProduct(response.data))
        })
    }
}

//Get item
export const actionGetProduct = (product) => {
    return {
        type : types.EDIT_PRODUCT,
        product
    }
}

export const actionGetProductRequest = (id) => {
    return (dispatch) => {
        return callAPI(`products/${id}`, 'GET', null).then(response => {
            dispatch(actionGetProduct(response.data))
        })
    }
}