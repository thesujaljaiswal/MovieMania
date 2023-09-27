import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.scss"

const colors = {
  orange: "#ffd700",
  grey: "#082a5e",
};

function StarRating() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [size, setSize] = useState(34);
  const stars = Array(10).fill(0);
  const zero = () => {
    setCurrentValue(0)
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
      <button className="ratingButton" onClick={zero} style={styles.button}>Submit</button>
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
