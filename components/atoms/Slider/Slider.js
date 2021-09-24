import { useState } from "react";
import styles from './Slider.module.css';
import PropTypes from 'prop-types';

function Slider({ 
  initialState, 
  buttonColor,
  backgroundColor, 
  onSlide, 
}) {
  const [isToggled, setToggle] = useState(initialState||false);

  const handleChange = (evt) => {
    setToggle(!isToggled);
    onSlide(evt)
  };
  
  return (
    <>
      <input 
        className={styles['slider-checkbox']} 
        onChange={handleChange}
        type='checkbox'
        name='slider-checkbox' 
        id="slider-checkbox"
        checked={isToggled}
      ></input>

      <label 
        style={{'background-color': isToggled && backgroundColor}}
        className={styles['slider-label']} 
        htmlFor='slider-checkbox'
      >
        <span 
          className={styles['slider-button']}
          style={{'background-color': buttonColor }} 
        />
      </label>
    </>
  )
}

Slider.propTypes = {
  initialState: PropTypes.bool,
  buttonColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  onSlide: PropTypes.func.isRequired
}

export default Slider;