import React, { Component } from 'react';
import * as Message from '../constants/Message'

class CartItem extends Component {

  onUpdateQuantity = (product,quantity) => {
    console.log(this.props.item)
    var {onChangeMessage} = this.props;
    if (this.props.item.product.inventory > quantity > 0){
      this.props.onUpdateProductInCart(product,quantity);
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }else if (quantity === 0){
      this.props.onDeleteProductInCart(product);
      onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
    }
    else if (this.props.item.product.inventory === quantity){
      alert('Bạn không thể thêm sản phẩm vì sản phẩm đã bị giới hạn mua');
    }
  }

  onDelete = (product) => {
    var { onDeleteProductInCart, onChangeMessage } = this.props;
    onDeleteProductInCart(product);
    onChangeMessage(Message.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)
  }
  render() {
    var item = this.props.item;
    var {quantity} = item;

    return (
      <tr>
        <th scope="row">
          <img src={item.product.image}
            alt="" className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantity(item.product, item.quantity - 1)}
            >
              <span>—</span>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantity(item.product, item.quantity + 1)}>
              <span>+</span>
            </label>
          </div>
        </td>
        <td>{item.product.price * item.quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => { this.onDelete(item.product) }}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
}

export default CartItem;
