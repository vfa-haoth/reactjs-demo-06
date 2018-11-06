import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {

    onDelete = (id) => {
        if(confirm('Are you sure you want to delete this product?')){ //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    onUpdate = (id) => {
        
    }

    render() {
        var {product, index} = this.props;
        var status = product.status ? "Available" : "Unavailable";
        var statusClass = product.status ? "primary" : "warning";
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>
                        {status}
                </span>
                </td>
                <td>
                    <Link 
                        to={`/products/${product.id}/edit`} 
                        className="btn btn-primary"
                    >
                        Edit
                    </Link>
                    &nbsp;
                <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={() => this.onDelete(product.id)}
                >
                    Delete
                </button>
                </td>
            </tr>
        );
    }
}

export default Product;
