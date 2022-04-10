import React from 'react';
import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';
import fetchGraphQl from './fetchGraphQl.js';

const productTableHeadings = ['Product Name', 'Price', 'Category', 'Image'];

export default class productList extends React.Component {
  constructor() {
    super();
    this.state = { products: [], initialLoading: true };
    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const query = `
            query {
                productList {
                    product_id
                    product_name
                    product_category
                    product_price
                    product_img
                }
            }
        `;

    const data = await fetchGraphQl(query);

    if (data) {
      this.setState({ products: data.productList, initialLoading: false });
    }
  }

  async addProduct(product) {
    const query = `
            mutation addProduct($product: ProductInputs!) {
                addProduct(product: $product) {
                    product_id
                }
            }
        `;

    const data = await fetchGraphQl(query, { product });
    if (data) {
      this.loadData();
    }
  }

  async deleteProduct(index) {
    const query = `mutation deleteProduct($product_id: Int!) {
      deleteProduct(product_id: $product_id)
    }`;
    const { products } = this.state;
    const { location: { pathname, search }, history } = this.props;
    const { product_id } = products[index];

    const data = await fetchGraphQl(query, { product_id });
    if (data && data.deleteProduct) {
      this.setState((prevState) => {
        const newList = [...prevState.products];
        if (pathname === `/products/${product_id}`) {
          history.push({ pathname: '/products', search });
        }
        newList.splice(index, 1);
        return { products: newList };
      });
    } else {
      this.loadData();
    }
  }

  render() {
    const { products, initialLoading } = this.state;
    return (
      <React.Fragment>
        <div className="root-container">
          <h2>My Company Inventory</h2>
          <div>Showing all available products</div>
          <hr />
          <ProductTable
            headings={productTableHeadings}
            products={products}
            loading={initialLoading}
            deleteProduct={this.deleteProduct}
          />
          <div>Add a new Product</div>
          <hr />
          <ProductAdd addProduct={this.addProduct} />
        </div>
      </React.Fragment>
    );
  }
}
