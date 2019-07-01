import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { CustomHeader } from './../../ui/index';
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const iconAlarmClock = require('./../../assets/images/icon-alarm-clock.png');
    const iconCalendar = require('./../../assets/images/icon-calendar.png');
    const iconChat = require('./../../assets/images/icon-chat.png');
    const iconLoupe = require('./../../assets/images/icon-loupe.png');
    const iconOpenBook = require('./../../assets/images/icon-open-book.png');
    const iconTest = require('./../../assets/images/icon-test.png');
    const iconStatistics = require('./../../assets/images/icon-statistics.png');
    const iconUniversity = require('./../../assets/images/icon-university.png');
    const iconFace = require('./../../assets/images/icon-face.png');
    const escolaLogo = require('./../../assets/images/escola-logo.png');

    return (
      <View style={{
        flex: 1
      }}>
        <View style={styles.containerLogos}>
          <Image source={escolaLogo} />
        </View>
        <View style={{
          height: 10,
          backgroundColor: '#ffffff'
        }}>
          <Image
            source={iconFace}
            style={{
              top: -10,
              left: 180
            }}
          />

        </View>
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
            backgroundColor: "#fb3400"
          }}>
            <Text style={{
              paddingTop: 3,
              paddingBottom: 3,
              paddingLeft: 15,
              paddingRight: 15,
              fontSize: 12,
              fontWeight: "bold",
              fontStyle: "normal",
              color: "#ffffff"
            }}>
              TURMA 5B
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <TouchableOpacity style={styles.cardMenu}>
            <Image
              source={iconOpenBook}
              style={{
                top: -35,
              }}
            />
            <Text style={styles.textMenu}> Diário </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardMenu}>
            <Image
              source={iconChat}
              style={{
                top: -35,
              }}
            />
            <Text style={styles.textMenu}> Mural </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardMenu}>
            <Image
              source={iconCalendar}
              style={{
                top: -35,
              }}
            />
            <Text style={styles.textMenu}> Calendário </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardMenu}>
            <Image
              source={iconTest}
              style={{
                top: -35,
              }}
            />
            <Text style={styles.textMenu}> Enquetes </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardMenu}>
            <Image
              source={iconStatistics}
              style={{
                top: -35,
              }}
            />
            <Text style={styles.textMenu}> Desempenho </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardMenu}>
            <Image
              source={iconAlarmClock}
              style={{
                top: -35,
              }}
            />
            <Text style={styles.textMenu}> Entradas e Saídas </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardMenu}>
            <Image
              source={iconLoupe}
              style={{
                top: -35,
              }}
            />
            <Text style={styles.textMenu}> Achados e Perdidos </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardMenu}>
            <Image
              source={iconUniversity}
              style={{
                top: -35,
              }}
            />
            <Text style={styles.textMenu}> Normas </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardMenu: {
    width: 150,
    height: 82,
    borderRadius: 10,
    backgroundColor: "#efefef",
    alignItems: 'center',
    marginTop: 45,
    marginLeft: 25,
    justifyContent: 'space-between',
  },
  textMenu: {
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    textAlign: "left",
    color: "#03496b",
    textAlign: 'center',
    position: 'absolute',
    bottom: 5
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  containerStudent: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 40
  },
  containerLogos: {
    height: 102,
    backgroundColor: "#f4f4f4",
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;
