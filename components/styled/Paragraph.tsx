import { Text } from "@react-navigation/elements";
import { FunctionComponent } from "react";

const Paragraph: FunctionComponent = ({ children, style = {}, ...props }) => {
  return (
    <Text style={[{ color: 'white' }, style]} { ... props }>
      { children }
    </Text>
  );
};

export default Paragraph;