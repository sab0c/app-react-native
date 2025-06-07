import {Box} from '@gluestack-ui/themed';
import React,{useEffect,useRef} from 'react';
import {Animated,Easing} from 'react-native';
import {Circle,Ellipse,Svg} from 'react-native-svg';

const REACT_BLUE = '#61DAFB';

const ReactLogo = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Box alignItems="center" justifyContent="center">
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Svg height="120" width="120" viewBox="-170 -170 340 340">
          <Ellipse rx="150" ry="60" stroke={REACT_BLUE} strokeWidth="15" fill="none" />
          <Ellipse rx="150" ry="60" stroke={REACT_BLUE} strokeWidth="15" fill="none" transform="rotate(60)" />
          <Ellipse rx="150" ry="60" stroke={REACT_BLUE} strokeWidth="15" fill="none" transform="rotate(-60)" />
          <Circle r="30" fill={REACT_BLUE} />
        </Svg>
      </Animated.View>
    </Box>
  );
};

export default ReactLogo; 