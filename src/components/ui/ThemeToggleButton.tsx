import {Box,Icon,MoonIcon,Pressable,SunIcon} from '@gluestack-ui/themed';
import React,{useRef} from 'react';
import {Animated,StyleSheet} from 'react-native';
import {useThemeStore} from '../../stores/theme.store';
import {useAppTheme} from '../../themes';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default function ThemeToggleButton() {
  const {theme} = useAppTheme();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const slideAnim = useRef(new Animated.Value(isDarkMode ? 1 : 0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.parallel([
      Animated.spring(slideAnim, {
        toValue: isDarkMode ? 0 : 1,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 0.8,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    toggleTheme();
  };

  const translateX = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 28],
  });

  return (
    <Box position="absolute" bottom={100} right={24} zIndex={999}>
      <Pressable onPress={handlePress}>
        <Box
          width={60}
          height={32}
          borderRadius={16}
          backgroundColor={isDarkMode ? theme.colors.gray : theme.colors.white}
          justifyContent="center"
          style={styles.container}>
          <AnimatedBox
            width={24}
            height={24}
            borderRadius={12}
            backgroundColor={'transparent'}
            position="absolute"
            style={[
              {
                transform: [{translateX}, {scale: scaleAnim}],
              },
            ]}>
            <Icon
              as={isDarkMode ? MoonIcon : SunIcon}
              color={isDarkMode ? theme.colors.gray : theme.colors.gray}
            />
          </AnimatedBox>
        </Box>
      </Pressable>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
