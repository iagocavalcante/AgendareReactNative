import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Header, Body } from 'native-base'

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const backgroundDrawer = require('./../assets/images/background-drawer.png');
    const profilePic = require('./../assets/images/profile-pic.png');

    return (
      <Container>
        <ImageBackground
          style={{height: 160, width: 280}}
          source={backgroundDrawer}
        >
          <Body>
            <Image style={styles.drawerImage} source={profilePic} />
            <View style={styles.profileHeaderContainer}>
              <TouchableOpacity style={styles.buttonStyleLeft}>
                <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('App')}> Editar </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonStyleRight}>
                <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('App')}> Sair </Text>
              </TouchableOpacity>
            </View>
            
          </Body>
        </ImageBackground>
        <Content>
          <View style={styles.containerStudent}>
            <Text style={{
              alignItems: 'center',
              marginTop: 20,
              fontSize: 20,
              fontWeight: "normal",
              fontStyle: "normal",
              textAlign: "center",
              color: "#707070"
            }}>
              Iago Angelim Cavalcante
            </Text>
            <TouchableOpacity style={{
              marginTop: 10,
              borderRadius: 13,
              backgroundColor: "rgb(19, 147, 209)"
            }}>
              <Text style={{
                paddingTop: 3,
                paddingBottom: 3,
                paddingLeft: 15,
                paddingRight: 15,
                fontSize: 10,
                fontWeight: "bold",
                fontStyle: "normal",
                color: "#ffffff"
              }}>
                iagoangelim@gmaile.com
              </Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    zIndex: 4,
    top: 60,
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  profileHeaderContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 60,
    width: 260,
    backgroundColor: 'white'
  },
  buttonStyleLeft: {
    marginTop: 7,
    marginLeft: 10,
    alignItems: 'center',
    width: 64,
    height: 20,
    alignSelf: 'flex-start',
    borderRadius: 24,
    backgroundColor: "#03496B",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 1
  },
  buttonStyleRight: {
    marginTop: 7,
    right: 10,
    position: 'absolute',
    alignItems: 'center',
    width: 64,
    height: 20,
    alignSelf: 'flex-end',
    borderRadius: 24,
    backgroundColor: "#FB3400",
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    shadowOpacity: 1
  },
  buttonText: {
    padding: 3,
    fontSize: 12,
    fontWeight: "500",
    fontStyle: "normal",
    lineHeight: 15,
    color: "white"
  },
  containerStudent: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 40
  },
});

export default Drawer;
