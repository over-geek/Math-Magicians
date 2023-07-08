import PropTypes from 'prop-types';

const Button = ({ title, className }) => (<button type="button" className={className}>{title}</button>);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Button;
