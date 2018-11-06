import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actionAddProductRequest, actionGetProductRequest, actionUpdateProductRequest } from './../../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            id : '',
            code : '',
            name : '',
            price : -1,
            status : false
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.productEditing){
            var {productEditing} = nextProps;
            this.setState ({
                id : productEditing.id,
                code : productEditing.code,
                name : productEditing.name,
                price : productEditing.price,
                status : productEditing.status
            })
        }
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            this.props.onEdit(id)
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name] : value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        var {id, code, name, price, status} = this.state;
        var {history} = this.props;
        var product = {
            id : id,
            code : code,
            name : name,
            price : price,
            status : status
        }

        if(id){
            this.props.onUpdate(product);
        }else {
            this.props.onAdd(product);
        }
        history.goBack();
    }

    render() {
        var {code, name, price, status} = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Code</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="code"
                            value={code}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name"
                            value={name}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            name="price"
                            value={price}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="checkbox">
                        Status
                        <br/>
                        <label>
                            <input 
                                type="checkbox" 
                                name="status"
                                value={status}
                                onChange={this.onChange}
                                checked={status}
                            />
                            Available
                        </label>
                    </div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={this.onSubmit}
                    >
                        Submit
                    </button>
                    &nbsp;
                    <Link to="/products-list" className="btn btn-danger">
                        Back
                    </Link>
                </form>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        productEditing : state.productEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAdd : (product) => {
            dispatch(actionAddProductRequest(product))
        },
        onEdit : (id) => {
            dispatch(actionGetProductRequest(id))
        },
        onUpdate : (product) => {
            dispatch(actionUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductActionPage);
