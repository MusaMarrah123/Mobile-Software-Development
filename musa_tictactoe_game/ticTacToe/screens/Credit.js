import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TButton from '../components/TButton';

const Credit = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TButton title="← Credit" onPress={() => navigation.goBack()} />
      </View>
      <Text style={styles.title}>Credit</Text>
      <Text style={styles.text}>
      In the realm of X's and O's upon the grid they go,
        Where two contenders face off, in tic-tac-toe.
        A pencil mark, a battle stark, lines cross like ancient runes,
        Each player seeks, with tactic sleek, to align their threes and twos. {"\n\n"}
        First goes X, with hopes to vex, in the corner she resides,
        Then O's response, a parry, a taunt, beside the X she slides
        The square becomes a battleground where silent worriors clash,
        With every mark, they leave their spark, in this timeless match.
        A diagonal attempt, an intercept, the X's mark their claim, 
        But O is Shrewd, not easily subdued, and block the path to fame.


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
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default Credit;
