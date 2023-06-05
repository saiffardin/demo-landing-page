/* eslint-disable react/prop-types */
import './CustomButton.css';

const CustomButton = ({text,cssClass}) => {
  return (
    <button className={cssClass}>{text}</button>
  );
};

export default CustomButton;