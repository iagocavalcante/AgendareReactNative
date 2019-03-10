import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { CustomHeader } from './../../ui/index';
class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerTitle: <CustomHeader/>,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

export default Home;
