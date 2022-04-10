import React from 'react';
import { Link } from 'react-router-dom';

const NO_DATA_AVAILABLE = 'No Data Available';

function productTableRow({ product, deleteProduct, index }) {
  const {
    product_name, product_price, product_category, product_img, product_id,
  } = product;
  return (
    <tr>
      <td>{product_name || NO_DATA_AVAILABLE}</td>
      <td>{product_price ? `$${product_price}` : NO_DATA_AVAILABLE}</td>
      <td>{product_category}</td>
      <td>{product_img ? <Link to={`/img/${product_id}`}>View</Link> : NO_DATA_AVAILABLE}</td>
      <td>
        <Link to={`/edit/${product_id}`}>Edit</Link>
        {' | '}
        <button type="button" className="small submit-button submit-button-dark small" onClick={() => { deleteProduct(index); }}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default function productTable({
  headings, products, loading, deleteProduct,
}) {
  const productTableRows = products.map(
    (product, index) => (
      <productTableRow
        key={product.product_id}
        product={product}
        deleteProduct={deleteProduct}
        index={index}
      />
    ),
  );
  const initialTableMessage = loading ? 'Loading products...' : 'No Products added yet';

  return (
    <table className="table">
      <thead className="text-left bordered-table">
        <tr>
          {headings.map((heading, index) =>
            // using index as keys as Table Headings will not change dynamically
            // eslint-disable-next-line implicit-arrow-linebreak, react/no-array-index-key
            <th key={index}>{heading}</th>)}
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {products.length > 0 ? productTableRows : (
          <tr className="text-center"><td colSpan="5">{initialTableMessage}</td></tr>
        )}
      </tbody>
    </table>
  );
}
