/* eslint-disable react/prop-types */
import './CustomButton.css';

const CustomButton = ({text,cssStyle}) => {
  return (
    <button style={cssStyle}>{text}</button>
  );
};

export default CustomButton;