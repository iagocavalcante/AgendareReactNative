import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Container, Content, Body} from 'native-base';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const backgroundDrawer = require('./../assets/images/background-drawer.png');
    const profilePic = require('./../assets/images/profile-pic.png');
    const iconFaceActive = require('./../assets/images/baseline-face-24px.png');
    const openBook = require('./../assets/images/open-book.png');
    const loupe = require('./../assets/images/loupe.png');
    const statistics = require('./../assets/images/statistics.png');
    const test = require('./../assets/images/test.png');
    const university = require('./../assets/images/university.png');
    const chat = require('./../assets/images/chat.png');
    const calendar = require('./../assets/images/calendar.png');
    const alarmClock = require('./../assets/images/alarm-clock.png');
    const iconFace = require('./../assets/images/icon-face-24.png');

    return (
      <Container>
        <ImageBackground
          style={{height: 160, width: 280}}
          source={backgroundDrawer}>
          <Body>
            <Image style={styles.drawerImage} source={profilePic} />
            <View style={styles.profileHeaderContainer}>
              <TouchableOpacity style={styles.buttonStyleLeft}>
                <Text
                  style={styles.buttonText}
                  onPress={() => this.props.navigation.navigate('Profile')}>
                  Editar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonStyleRight}>
                <Text
                  style={styles.buttonText}
                  onPress={() => this.props.navigation.navigate('App')}>
                  {' '}
                  Sair{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Body>
        </ImageBackground>
        <Content style={{flex: 1, flexDirection: 'column'}}>
          <View style={styles.containerStudent}>
            <Text
              style={{
                alignItems: 'center',
                marginTop: 20,
                fontSize: 20,
                fontWeight: 'normal',
                fontStyle: 'normal',
                textAlign: 'center',
                color: '#707070',
              }}>
              Iago Angelim Cavalcante
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 10,
                borderRadius: 13,
                backgroundColor: 'rgb(19, 147, 209)',
              }}>
              <Text
                style={{
                  paddingTop: 3,
                  paddingBottom: 3,
                  paddingLeft: 15,
                  paddingRight: 15,
                  fontSize: 10,
                  fontWeight: 'bold',
                  fontStyle: 'normal',
                  color: '#ffffff',
                }}>
                iagoangelim@gmaile.com
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerStudentBar}>
            <View
              style={{
                marginTop: 10,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: 'rgb(3, 73, 107)',
                width: 13,
                height: 20,
              }}
            />
            <Text
              style={{
                alignItems: 'center',
                marginLeft: 5,
                marginTop: 8,
                marginRight: 5,
                fontSize: 22,
                fontWeight: 'normal',
                fontStyle: 'normal',
                textAlign: 'center',
                color: 'rgb(3, 73, 107)',
              }}>
              Alunos
            </Text>
            <View
              style={{
                marginTop: 10,
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
                backgroundColor: 'rgb(3, 73, 107)',
                width: 245,
                height: 20,
              }}
            />
          </View>
          <View style={styles.alunos}>
            <Image style={{marginRight: 5}} source={iconFaceActive} />
            <TouchableOpacity
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderRadius: 15,
                width: 225,
                backgroundColor: 'rgb(169, 35, 0)',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 16,
                  fontWeight: '300',
                  fontStyle: 'normal',
                  color: '#ffffff',
                }}>
                Iago Angelim Cavalcante
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alunos}>
            <Image style={{marginRight: 5}} source={iconFace} />
            <TouchableOpacity
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderRadius: 15,
                width: 225,
                backgroundColor: 'rgb(251, 52, 0)',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 16,
                  fontWeight: '300',
                  fontStyle: 'normal',
                  color: '#ffffff',
                }}>
                Victor Martins Lesk
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alunos}>
            <Image style={{marginRight: 5}} source={iconFace} />
            <TouchableOpacity
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderRadius: 15,
                width: 225,
                backgroundColor: 'rgb(251, 52, 0)',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 16,
                  fontWeight: '300',
                  fontStyle: 'normal',
                  color: '#ffffff',
                }}>
                Francisco José Jonathan
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.alunos}>
            <Image style={{marginRight: 5}} source={iconFace} />
            <TouchableOpacity
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                borderRadius: 15,
                width: 225,
                backgroundColor: 'rgb(251, 52, 0)',
              }}>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 16,
                  fontWeight: '300',
                  fontStyle: 'normal',
                  color: '#ffffff',
                }}>
                Frachesco Robervaldo
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerMenuBar}>
            <View
              style={{
                marginTop: 10,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                backgroundColor: 'rgb(3, 73, 107)',
                width: 13,
                height: 20,
              }}
            />
            <Text
              style={{
                alignItems: 'center',
                marginLeft: 5,
                marginTop: 8,
                marginRight: 5,
                fontSize: 22,
                fontWeight: 'normal',
                fontStyle: 'normal',
                textAlign: 'center',
                color: 'rgb(3, 73, 107)',
              }}>
              Menu
            </Text>
            <View
              style={{
                marginTop: 10,
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
                backgroundColor: 'rgb(3, 73, 107)',
                width: 245,
                height: 20,
              }}
            />
          </View>
          <ScrollView contentContainerStyle={{flex: 1}}>
            <View style={styles.menus}>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  borderRadius: 15,
                  height: 30,
                  width: 235,
                  backgroundColor: '#EFEFEF',
                }}>
                <Image style={{left: -15, zIndex: 2}} source={openBook} />
                <Text
                  style={{
                    marginLeft: 5,
                    paddingTop: 5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#03496B',
                  }}>
                  Diário
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menus}>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  borderRadius: 15,
                  height: 30,
                  width: 235,
                  backgroundColor: '#EFEFEF',
                }}>
                <Image style={{left: -15, zIndex: 2}} source={chat} />
                <Text
                  style={{
                    marginLeft: 5,
                    paddingTop: 5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#03496B',
                  }}>
                  Mural
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menus}>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  borderRadius: 15,
                  height: 30,
                  width: 235,
                  backgroundColor: '#EFEFEF',
                }}>
                <Image style={{left: -15, zIndex: 2}} source={calendar} />
                <Text
                  style={{
                    marginLeft: 5,
                    paddingTop: 5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#03496B',
                  }}>
                  Calendário
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menus}>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  borderRadius: 15,
                  height: 30,
                  width: 235,
                  backgroundColor: '#EFEFEF',
                }}>
                <Image style={{left: -15, zIndex: 2}} source={test} />
                <Text
                  style={{
                    marginLeft: 5,
                    paddingTop: 5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#03496B',
                  }}>
                  Enquetes
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menus}>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  borderRadius: 15,
                  height: 30,
                  width: 235,
                  backgroundColor: '#EFEFEF',
                }}>
                <Image style={{left: -15, zIndex: 2}} source={statistics} />
                <Text
                  style={{
                    marginLeft: 5,
                    paddingTop: 5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#03496B',
                  }}>
                  Desempenho
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menus}>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  borderRadius: 15,
                  height: 30,
                  width: 235,
                  backgroundColor: '#EFEFEF',
                }}>
                <Image style={{left: -15, zIndex: 2}} source={alarmClock} />
                <Text
                  style={{
                    marginLeft: 5,
                    paddingTop: 5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#03496B',
                  }}>
                  Entradas e Saídas
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menus}>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  borderRadius: 15,
                  height: 30,
                  width: 235,
                  backgroundColor: '#EFEFEF',
                }}>
                <Image style={{left: -15, zIndex: 2}} source={loupe} />
                <Text
                  style={{
                    marginLeft: 5,
                    paddingTop: 5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#03496B',
                  }}>
                  Achados e Perdidos
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menus}>
              <TouchableOpacity
                style={{
                  marginLeft: 30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  borderRadius: 15,
                  height: 30,
                  width: 235,
                  backgroundColor: '#EFEFEF',
                }}>
                <Image style={{left: -15, zIndex: 2}} source={university} />
                <Text
                  style={{
                    marginLeft: 5,
                    paddingTop: 5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    color: '#03496B',
                  }}>
                  Normas
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 200,
    backgroundColor: 'white',
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
    backgroundColor: 'white',
  },
  buttonStyleLeft: {
    marginTop: 7,
    marginLeft: 10,
    alignItems: 'center',
    width: 64,
    height: 20,
    alignSelf: 'flex-start',
    borderRadius: 24,
    backgroundColor: '#03496B',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
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
    backgroundColor: '#FB3400',
    shadowColor: 'rgba(0, 0, 0, 0.16)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 1,
  },
  buttonText: {
    padding: 3,
    fontSize: 12,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 15,
    color: 'white'
  },
  containerStudent: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 40,
  },
  containerStudentBar: {
    flexDirection: 'row',
    flex: 3,
    alignItems: 'flex-start',
    paddingBottom: 15,
  },
  containerMenuBar: {
    flexDirection: 'row',
    flex: 3,
    alignItems: 'flex-start',
    paddingBottom: 15,
  },
  alunos: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 10,
    marginBottom: 10,
  },
  menus: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 10,
    marginBottom: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Drawer;
