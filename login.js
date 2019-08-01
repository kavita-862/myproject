import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView
} from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePicker from 'react-native-modal-datetime-picker';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      isLowSalary: false,
      isMediumSalary: false,
      isHighSAlary: false
    };
  }
  static navigationOptions = {
    header: null
  }
  //function to open datepicker
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  //function to hide datepicker
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  //function on selection of date 
  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  //function on click of radio button
  onClick(type) {
    if (type == "first") {
      this.setState({ isLowSalary: !this.state.isLowSalary, isMediumSalary:false, isHighSAlary:false })
    }
    else if (type == "second") {
      this.setState({ isMediumSalary: !this.state.isMediumSalary,isLowSalary:false,isHighSAlary:false })
    }
    else if (type == "third") {
      this.setState({ isHighSAlary: !this.state.isHighSAlary, isLowSalary:false,isMediumSalary:false})
    }
  }
 
  render() {
    return (
      <ScrollView style={styles.container}>
        <SafeAreaView>
          <View style={styles.selection}>

            <Text style={styles.appText}>Are you building for ?  </Text>
            <View style={styles.subContainer}>
              <TouchableOpacity style={styles.opacity}><Text> iOS
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.opacity, { backgroundColor: "#6961EC" }]}><Text>Android app
              </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.opacity}><Text>Both
              </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mobileAppContainer}>
            <Text style={styles.textMobile}>{'When do you need your mobile app(s) completed?'}</Text>
            <TouchableOpacity onPress={this._showDateTimePicker}><Entypo name="select-arrows" size={25} color="black" /></TouchableOpacity>
            <DateTimePicker
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
            />
          </View>
          <View style={styles.textarea}>
            <View>
              <Text style={styles.innerSubContainerText}>What is your monthly budget for your mobile app project?</Text>
              <View style={{ flexDirection: 'row', paddingTop: deviceHeight / 100 * 1 }}>
                <TouchableOpacity onPress={() => this.onClick("first")}>
                  <Image
                    style={styles.images}
                    source={this.state.isLowSalary ? require('./img/radiocheck.png') : require('./img/radiouncheck.png')}
                  />
                </TouchableOpacity>
                <Text style={{ textAlign: 'center' }}>$500 / month</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.onClick("second")}>
                  <Image
                   style={styles.images}
                    source={this.state.isMediumSalary ? require('./img/radiocheck.png') : require('./img/radiouncheck.png')}
                  />
                </TouchableOpacity>
                <Text>$500 - $1000  / month</Text>
              </View>

              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.onClick("third")}>
                  <Image
                   style={styles.images}
                    source={this.state.isHighSAlary ? require('./img/radiocheck.png') : require('./img/radiouncheck.png')}
                  />
                </TouchableOpacity>
                <Text>$1000 - $2000 / month</Text>
              </View>
            </View>

            <View>
              <Text style={styles.mobiletext}>Describe your mobile app:</Text>
              <TextInput style={styles.inputTextarea}
                multiline={true}></TextInput>
            </View>
          </View>
          <View style={styles.information}>
            <View style={styles.contactmain}>
              <Text style={styles.contacttext}>Contact Information</Text>

            </View>
            <View>
              <View style={styles.infotext} >
                <Text style={styles.text}>Phone: </Text>
                <TextInput style={styles.input} placeholder="Phone" />
              </View>

              <View style={styles.infotext}>
                <Text style={styles.text}>Email:   </Text>
                <TextInput style={styles.input} placeholder="Email" /></View>

              <View style={styles.infotext}>
                <Text style={styles.text}>Skype: </Text>
                <TextInput style={styles.input} placeholder="Skype" />
              </View>

              <TouchableOpacity style={styles.submit} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.submittext}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  appText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: deviceHeight / 100 * 2,
    textAlign: 'center',
    alignSelf: 'center',
    color: 'purple'
  },
  selection: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    // marginTop: deviceHeight / 100 * 1,
    width: deviceWidth / 100 * 88,

    paddingVertical: deviceHeight / 100 * 2
  },
  opacity: {
    paddingHorizontal: deviceWidth / 100 * 4,
    paddingVertical: deviceHeight / 100 * 2,
  },
  subContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: deviceWidth / 100 * 1.2
  },
  mobileAppContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: deviceWidth / 100 * 1.2,
    marginBottom: deviceHeight / 100 * 2,
    paddingHorizontal: deviceWidth / 100 * 5,
    paddingVertical: deviceHeight / 100 * 3,
    justifyContent: 'space-between'
  },
  textMobile: {
    fontSize: 16,
    color: '#6961EC'
  },
  input: {
    height: deviceHeight / 100 * 6,
    width: deviceWidth / 100 * 70,
    marginRight: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    alignSelf: 'center',
    borderColor: '#6961EC'
  },
  mobiletext:{
     fontSize: 17,
      fontWeight: 'bold', 
      paddingVertical: deviceHeight / 100 * 1.5,
     color: '#6961EC' 
  },
  inputTextarea: {
    marginLeft: 60,
    height: deviceHeight / 100 * 6,
    width: deviceWidth / 100 * 70,
    marginRight: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    alignSelf: 'center',
    borderColor: '#6961EC'
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: 8,
 },
 infotext:{ 
   flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 10
 },
 contacttext:{
    fontWeight: 'bold',
     alignSelf: 'center', 
     fontSize: 17, 
     color: '#6961EC'
 },
 contactmain:{ 
   marginBottom: 10, 
  marginTop: 10 
},
  information: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: deviceWidth / 100 * 3,
    alignSelf: 'center',
    marginTop: deviceHeight / 100 * 2,
    marginHorizontal: deviceHeight / 100 * 3,
    paddingVertical: deviceHeight / 100 * 1.5

    // height: deviceHeight / 100 * 40
  },
  submit: {
    borderRadius: 28,
    //borderColor:'black',
    alignSelf: "center",
    fontSize: 16,
    marginLeft: 10,
    backgroundColor: "#6961EC",
    paddingVertical: 12,
    width: deviceWidth / 100 * 40,
    marginTop: 10
  },
  submittext: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff"
  },
  images:{ 
     //marginLeft: 30,
     height: deviceWidth/100*6,
     width: deviceWidth/100*6
    },
  textarea: {
    borderWidth: 1,
    borderColor: 'purple',
    width: deviceWidth / 100 * 90,
    borderRadius: deviceWidth / 100 * 2,
    alignSelf: 'center',
    paddingHorizontal: deviceWidth / 100 * 5,
    paddingVertical: deviceHeight / 100 * 2
  },
  innerSubContainerText: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: deviceHeight / 100 * 1,
    color: "#6961EC"
  },
  textareainput: {
    borderWidth: 1,
    borderColor: "#6961EC",
    width: deviceWidth / 100 * 60,
    marginBottom: 10,
    marginLeft: 10

  }
});

