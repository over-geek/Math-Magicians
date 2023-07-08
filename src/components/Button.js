import PropTypes from 'prop-types';

const Button = ({ title, className, interactivity }) => (<button type="button" onClick={() => interactivity(title)} className={className}>{title}</button>);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.arrayOf(PropTypes.string).isRequired,
  interactivity: PropTypes.func.isRequired,
};

export default Button;
