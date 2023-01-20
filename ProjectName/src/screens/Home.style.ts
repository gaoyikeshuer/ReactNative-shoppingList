import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
  },
  container: {
    display: 'flex',
    flex: 1,
    paddingVertical: 14,
    position: 'relative',
  },
  darkContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
});
