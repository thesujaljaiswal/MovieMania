import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.scss"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRatings,removeAlert } from "../../store/ratingSlice";

const colors = {
  orange: "#ffd700",
  grey: "#082a5e",
};

function StarRating({id}) {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [size, setSize] = useState(34);
  const {rating,changing}=useSelector(state=>state.rating)
  const dispatch=useDispatch();
  const stars = Array(10).fill(0);


  const submitRating = () => {
    var temp={...rating,[id]:currentValue};
    dispatch(setRatings(temp))
  }  

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  useEffect(()=>{
    if(changing){
      setTimeout(() => {
        dispatch(removeAlert())
      }, 1500);
    }
  },[changing])
  useEffect(()=>{
    if(rating[id])
    setCurrentValue(rating[id])   
  },[rating])
  return (
    <div style={styles.container}>
        <div className="ratingsHeader">
      <h2 style={styles.text} > Rate Now </h2>
      </div>
      <div style={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
            className="starElement"
              key={index}
            //   size={size}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index
                  ? colors.orange
                  : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}

      </div>
      <button className="ratingButton" onClick={submitRating} style={styles.button}>
        {changing?'Submitted':'Submit'}</button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 10,
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontfamily: "Inter",
    marginBottom: 15
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    marginBottom: 45,
  },
};

export default StarRating;
