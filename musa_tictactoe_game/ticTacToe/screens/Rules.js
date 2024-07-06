import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TButton from '../components/TButton';

const Rules = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TButton title="← Rules" onPress={() => navigation.goBack()} />
      </View>
      <Text style={styles.title}>Rules</Text>
      <Text style={styles.text}>You probably already know how to pay Tic-Tac-Toe. 
        It is really simple game, right? That's what most people think. {"\n\n"}
        *****Rules for Tic-Tac-Toe*****
        1. The game is played on a grid that is 3 squares by 3 Squares{"\n\n"}
        2. You are X, and Your friend (or the computer in this case)is O.
        players take turns putting their marks in empty square. {"\n\n"}
        3. The First player to get 3 of her marks in row(up, down, across, or diagonally)
        is the winner. {"\n\n"}
        4. When all 9 squares are full, the is over! If no player has 3 marks in a row, the game ends in a tie.
</Text>
      
      <View style={styles.footer}>
        <TButton title="Back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
    borderBlockColor:1
  

  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Rules;
