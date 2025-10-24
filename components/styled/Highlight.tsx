import { Text } from "@react-navigation/elements";
import { FunctionComponent } from "react";

const Highlight: FunctionComponent = ({ children, style = {}, ...props }) => {
  return (
    <Text style={[{ color: 'lime' }, style]} { ... props }>
      { children }
    </Text>
  );
};

export default Highlight;