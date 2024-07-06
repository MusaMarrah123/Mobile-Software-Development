import React from 'react';
import { View, StyleSheet } from 'react-native';
import TButton from '../components/TButton';
import Board from '../components/Board';
import Title from '../components/Title';
import Message from '../components/Message';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title text="Tic Tac Toe" />
      <Board />
      <Message text="Welcome to Tic Tac Toe!" />
      <View style={styles.buttonContainer}>
        <TButton title="Rules" onPress={() => navigation.navigate('Rules')} />
        <TButton title="Credit" onPress={() => navigation.navigate('Credit')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
});

export default Home;
