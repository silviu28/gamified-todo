import { useEffect, useRef } from "react";
import { Animated } from "react-native";

// unfortunately, because we do not have CSS in React Native,
// we need to use the Animated API in combination with an effect
// to render animations.
const FadeInWrapper = ({ children }) => {
  // initiate refs for the starting values of the animation
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(-20)).current;

  // use an effect to play the animation after the component renders
  useEffect(() => {
    // 'parallel' allows for playing multiple animations at once
    // the 'useNativeDriver' flag optimizes the animation.
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  // wrap whatever we may want to animate this way in the component.
  return (
    <Animated.View style={{ flex: 1, opacity, transform: [{ translateY }]}}>
      {children}
    </Animated.View>);
};

export default FadeInWrapper;