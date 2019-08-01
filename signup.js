import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TextInput } from 'react-native';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { isAgree: false };
  }

  //function to make naviogator header null
  static navigationOptions = {
    header: null
  }

  // function on click the check box
  onClick() {
    this.setState({ isAgree: !this.state.isAgree })
  }

  // render function
  render() {
    console.log(this.props,'fs')
    return (
      <View style={styles.container}>
        <Text style={styles.ion3}>Kav</Text>
        <Text style={styles.genix}>by kav Tech.</Text>
        <TextInput
          style={styles.input}
          placeholder="UserName"

        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={Password1 => this.setState({ Password: Password1 })}
          placeholder="Password"
        />
        <View
          style={styles.checkBoxContainer}
        >
          <TouchableOpacity onPress={() => this.onClick()}>
            <Image
              style={styles.imageCheckBox}
              source={this.state.isAgree ? require('./img/check.png') : require('./img/uncheck.png')}
            />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.ftext}>Keep me loged in</Text>
            <Text style={[styles.ftext, { marginLeft: deviceWidth / 100 * 10 }]}>forget password ?</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buttonContainer}
        >
          <Text style={styles.text} >Sign In </Text>
        </TouchableOpacity>
        <Text style={[styles.ftext, { marginTop: deviceHeight / 100 * 3 }]} >OR</Text>
        <View
          style={styles.faceBookContainer}
        >
          <Image
            style={styles.faceBookImage}
            source={require('./img/fb.png')}
          />
          <Text style={[styles.ftext, { color: 'black', fontWeight: '500', fontSize: 18 }]}>Continue with Facebook</Text>
        </View>
        <View style={styles.footerblackContainer}>
          <TouchableOpacity
           onPress={()=>this.props.navigation.navigate('Login')}
            style={styles.footerblack}
            activeOpacity={0.9}
          ><Text style={styles.text}>Signup as buyer
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.footerblack, { backgroundColor: "#71C85F", marginLeft: deviceHeight / 100 * 2 }]}
          ><Text style={styles.text}>Signup as seller
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'

  },
  ion3: {
    fontSize: 50,
    textAlign: "center",
    marginTop: deviceHeight / 100 * 6,
    fontWeight: "bold",
  },
  genix: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: deviceHeight / 100 * 2.3,
  },

  buttonContainer: {
    height: deviceHeight / 100 * 7,
    width: deviceWidth / 100 * 90,
    alignSelf: 'center',
    backgroundColor: '#6961EC',
    justifyContent: "center",
    marginTop: deviceHeight / 100 * 4,
    borderStyle: "solid",
    borderRadius: deviceHeight / 100 * 9
  },

  text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  ftext: {
    marginLeft: deviceWidth / 100 * 2,
    alignSelf: "center",
    fontSize: 16,
    color: 'grey'
  },
  faceBookContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: deviceHeight / 100 * 2
  },
  faceBookImage: {
    marginLeft: deviceWidth / 100 * 3,
    height: deviceWidth / 100 * 9,
    width: deviceWidth / 100 * 9
  },
  textContainer: {
    flexDirection: 'row',
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginHorizontal: deviceWidth / 100 * 4.5,
    marginTop: deviceHeight / 100 * 2,
    marginBottom: deviceHeight / 100 * 2
  },
  imageCheckBox: {
    height: deviceWidth / 100 * 6,
    width: deviceWidth / 100 * 6
  },
  input: {
    height: deviceHeight / 100 * 6,
    width: deviceWidth / 100 * 90,
    marginBottom: deviceHeight / 100 * 2,
    alignSelf: 'center',
    padding: deviceHeight / 100 * 2,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    fontSize: 20,
    opacity: 0.5
  },
  textinput: {
    marginLeft: 80,
    marginTop: 10
  },


  footerblackContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: deviceHeight / 100 * 9
  },
  footerblack: {
    color: "white",
    borderRadius: 27,
    justifyContent: "center",
    textAlign: "center",
    fontSize: 16,
    width: deviceWidth / 100 * 45,
    height: deviceHeight / 100 * 7.5,
    backgroundColor: "#353737",
    paddingVertical: deviceHeight / 100 * 2
  }
});

