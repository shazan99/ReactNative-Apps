import React, { JSXElementConstructor } from "react";

import {
  View,
  Text,
  StyleSheet,
  useColorScheme
} from 'react-native'

function AppPro(): JSX.Element{
  const isDarkMode = useColorScheme() === 'dark'

  console.log('Is Dark Mode?', isDarkMode);
  return(
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText: styles.darkText}>
        Hello World !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', //this moves element from left to right
    justifyContent: 'center' //this moves element from top to bottom
  },
  whiteText: {
    color: '#FFFFFF'
  },
  darkText: {
    color: '#000000'
  }
})
export default AppPro