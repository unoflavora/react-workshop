/* eslint-disable react/jsx-props-no-spreading */
import { useId } from "react";

const withId = (Component) => {
  return (props) => {
    const id = useId();
    return <Component {...props} uniqueID={id} />;
  };
};

const App = ({ uniqueID }) => {
  return <p>{uniqueID}</p>;
};

export default withId(App);
