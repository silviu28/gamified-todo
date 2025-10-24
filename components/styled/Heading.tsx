import { Text } from "@react-navigation/elements";
import { FunctionComponent } from "react";

const Heading: FunctionComponent = ({ children, style = {}, ...props }) => {
  return (
    <Text style={[{ color: 'white', fontSize: 20 }, style]} { ... props }>
      { children }
    </Text>
  );
};

export default Heading;