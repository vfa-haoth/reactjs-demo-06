import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import Product from './../../components/Product/Product';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionFetchProductsRequest, actionDeleteProductRequest } from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAll();
    }

    onDelete = (id) => {
        this.props.onDelete(id);
    }

    render() {
        var { products } = this.props;
        return (
            <div className="container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <Link to="/products/add" className="btn btn-info">
                        Add product
                    </Link>
                    <br/><br/>
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList>
                </div>
            </div>
        );
    }

    showProducts = (products) => {
        var result = null;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                )
            })
        }

        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAll : () => {
            dispatch(actionFetchProductsRequest())
        },
        onDelete : (id) => {
            dispatch(actionDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
