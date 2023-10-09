/* eslint-disable no-dupe-keys */
import Background from "../../assets/header.png";

const styles = {
  header: {
    backgroundImage: `url(${Background})`,
    width: "100%",
    height: "360px",
    backgroundRepeat: "round",
    display: "flex", // Display as flex container
    justifyContent: "space-between", // Space between children (inner boxes)
  },
  innerBox: {
    backgroundColor: "black",
    width: "309px", // Adjust width as needed
    height: "72px",
    borderTopRightRadius: "40px",
    borderEndStartRadius: "40px",
    borderEndEndRadius: "40px",
    marginLeft: "5px",
    display: "flex",
    alignItems: "center",
  },
  innerBox2: {
    backgroundColor: "black",
    width: "309px",
    height: "72px",
    borderTopLeftRadius: "40px", // Rounded top left corner
    borderEndStartRadius: "40px",
    borderEndEndRadius: "40px",
    marginLeft: "57%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonContainer: {
    backgroundColor: "transparent",
  },
  button: {
    color: "white",
  },
};

export default styles;
