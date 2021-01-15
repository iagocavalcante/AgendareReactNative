import React from 'react';
import {TextInput} from 'react-native';

const Input = () => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={password => this.setState({password})}
      value={this.state.password}
      textContentType={'password'}
      placeholder={'Digite a senha'}
    />
  );
};

const styles = {
  input: {
    width: 344,
    paddingLeft: 50,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fafafa',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#707070',
    shadowRadius: 2,
    shadowOpacity: 1,
  },
};

export default Input;
