import PropTypes from "prop-types";

function CheckoutItem({ title, count, price }) {
  return (
    <div className="checkout-item">
      <span>{title}</span>
      <span>x{count}</span>
      <span style={{ color: "#1abc9c" }}>
        ${(price * count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      </span>
    </div>
  );
}

CheckoutItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

export default CheckoutItem;
