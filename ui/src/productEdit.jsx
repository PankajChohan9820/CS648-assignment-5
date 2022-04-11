import React from 'react';

import fetchGraphQl from './fetchGraphQl.js';
import NumInp from './NumInp.jsx';
import TextInp from './TextInp.jsx';

export default class ProductEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      isLoading: true,
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { product_id: prevId } } } = prevProps;
    const { match: { params: { product_id } } } = this.props;
    if (product_id !== prevId) {
      this.loadData();
    }
  }

  onChange(event, naturalValue) {
    const { name, value: textValue } = event.target;
    const value = naturalValue === undefined ? textValue : naturalValue;

    this.setState(prevState => ({
      product: { ...prevState.product, [name]: value },
    }));
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { product } = this.state;
    console.log("Submitting form :: ",this.state)
    const query = `mutation updateProduct(
      $product_id: Int!
      $changes: ProductUpdateInputs!
    ) {
      updateProduct(
        product_id: $product_id
        changes: $changes
      ) {
        product_id product_name product_category product_price product_image
      }
    }`;

    const { product_id, ...changes } = product;
    console.log("Changes :: ", changes);
    const data = await fetchGraphQl(query, { product_id, changes });
    if (data) {
      this.setState({ product: data.updateProduct });
      alert('Updated product successfully'); // eslint-disable-line no-alert
    }
  }

  async loadData() {
    const query = `query product($product_id: Int!) {
      product(product_id: $product_id) {
        product_id product_name product_category product_price product_image
      }
    }`;

    const { match: { params: { product_id } } } = this.props;
    const data = await fetchGraphQl(query, { product_id: parseInt(product_id, 10) });
    if (data) {
      const { product } = data;
      product.product_name = product.product_name != null ? product.product_name : '';
      product.product_category = product.product_category != null ? product.product_category : '';
      product.product_price = product.product_price != null ? product.product_price : '';
      product.product_image = product.product_image != null ? product.product_image : '';
      this.setState({ product, isLoading: false });
    } else {
      this.setState({ product: {}, isLoading: false });
    }
  }

  render() {
    const { product: { product_id }, isLoading } = this.state;
    const { match: { params: { product_id: propsId } } } = this.props;
    if (product_id == null) {
      if (isLoading) {
        return <h3>Loading Product details...</h3>;
      }

      if (propsId != null) {
        return <h3>{`Product with ID ${propsId} not found.`}</h3>;
      }

      return null;
    }

    const {
      product: {
        product_name, product_category, product_price, product_image,
      },
    } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="edit-form">
        <h3>{`Editing product: ${product_id}`}</h3>
        <table>
          <tbody>
            <tr>
              <td className="padding-right-20">Name</td>
              <td>
                <TextInp
                  name="product_name"
                  value={product_name}
                  onChange={this.onChange}
                  key={product_id}
                />
              </td>
            </tr>
            <tr>
              <td className="padding-right-20">Category</td>
              <td>
                <select product_name="product_category" value={product_category} className="add-product-form-select" onChange={this.onChange}>
                  <option value="Shirts">Shirts</option>
                  <option value="Jeans">Jeans</option>
                  <option value="Jackets">Jackets</option>
                  <option value="Sweaters">Sweaters</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="padding-right-20">Price</td>
              <td>
                <NumInp
                  name="product_price"
                  value={product_price}
                  onChange={this.onChange}
                  key={product_id}
                  isDecimal
                />
              </td>
            </tr>
            <tr>
              <td className="padding-right-20">Image Url</td>
              <td>
                <TextInp
                  name="product_image"
                  value={product_image}
                  onChange={this.onChange}
                  key={product_id}
                />
              </td>
            </tr>
            <tr>
              <td />
              <td><button type="submit" className="submit-button submit-button-dark">Submit</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}
