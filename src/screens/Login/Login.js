import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ImageBackground,
} from 'react-native';
import DismissKeyboard from '../../widgets/DismissKeyboard';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {login: '', password: ''};
  }
  render() {
    const loginBackground = require('./../../assets/images/login-background.png');
    const logoApp = require('./../../assets/images/logo-app.png');
    const iconFace = require('./../../assets/images/icon-face.png');
    const iconPuzzle = require('./../../assets/images/icon-puzzle.png');

    return (
      <View style={styles.container}>
        <View
          style={{
            padding: 110,
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
          }}>
          <Image source={logoApp} />
        </View>
        <ImageBackground
          style={{
            height: '100%',
            alignItems: 'center',
          }}
          source={loginBackground}>
          <DismissKeyboard>
            <View
              style={{
                paddingTop: 50,
                marginBottom: 84,
              }}>
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={login => this.setState({login})}
                  value={this.state.login}
                  placeholder={'Digite o login'}
                />
                <Image
                  source={iconFace}
                  style={{
                    top: -35,
                    left: 10,
                  }}
                />
              </View>
              <View>
                <TextInput
                  style={styles.input}
                  onChangeText={password => this.setState({password})}
                  value={this.state.password}
                  textContentType={'password'}
                  placeholder={'Digite a senha'}
                />
                <Image
                  source={iconPuzzle}
                  style={{
                    top: -35,
                    left: 10,
                  }}
                />
              </View>
            </View>
          </DismissKeyboard>
          <View
            style={{
              flex: 1,
            }}>
            <TouchableOpacity style={styles.buttonStyle}>
              <Text
                style={styles.buttonText}
                onPress={() => this.props.navigation.navigate('App')}>
                {' '}
                Entrar{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  buttonStyle: {
    alignItems: 'center',
    padding: 15,
    width: 344,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1393d1',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  buttonText: {
    height: 16,
    fontSize: 16,
    fontWeight: '900',
    fontStyle: 'normal',
    lineHeight: 19,
    letterSpacing: 0,
    color: '#03496b',
  },
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
});

export default Login;
