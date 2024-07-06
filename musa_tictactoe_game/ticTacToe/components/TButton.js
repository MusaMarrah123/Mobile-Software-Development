import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const TButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'maroon',
    borderRadius: 5,
    margin: 10,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
});

export default TButton;
