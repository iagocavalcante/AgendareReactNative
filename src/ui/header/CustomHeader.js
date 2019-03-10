import React, { Component } from 'react';
import { View, Text } from 'react-native';

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  renderLogo() {
    const logoApp = require('./../../assets/images/logo-app.png');
    return (
      <View>
        <Image
          source={logoApp}
        />
      </View>
    );
  }

  renderText() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    )
  }

  render() {
    if (this.props.title) {
      return this.renderText();
    }

    return this.renderLogo();
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "#03496b"
  }
});

export default componentName;
