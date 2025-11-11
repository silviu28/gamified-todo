import { FC, useEffect } from "react";
import { BackHandler } from "react-native";
import { useLocation, useNavigate } from "react-router-native";

const BackButtonHandler: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // return true if default behavior is overriden
  // navigate(-1) has the behavior of pressing the back button on the browser
  const onBackPress = () => {
    if (location.pathname === "/") {
      return false;
    }
    navigate(-1);
    return true;
  };

  // we use an effect to persist the behavior of the back button between renders
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", onBackPress);

    // effects can return a callback to do something on component dispose
    return () => {
      backHandler.remove();
    };
  }, [navigate, location]);

  return null;
};

export default BackButtonHandler;