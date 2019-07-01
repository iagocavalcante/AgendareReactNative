import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CustomHeader extends Component {
  constructor(props) {
    super(props);
  }

  
  renderLogo() {
    const logoApp = require('./../../assets/images/logo-app.png');
    return (
      <View style={styles.headerBackground}>
        <Image
          source={logoApp}
        />
      </View>
    );
  }

  renderText() {
    return (
      <View style={styles.headerBackground}>
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

export default CustomHeader;
