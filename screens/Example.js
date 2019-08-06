import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  Alert,
} from "react-native";

import bgImage from "../images/view.jpg";
import logo from "../images/logo.png";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import { tsConstructorType } from "@babel/types";

const { width: WIDTH } = Dimensions.get('window');
export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showpass: true,
      press: false,
      email: "",
      password: ""
    };
    this.showpass = this.showpass.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setPass = this.setPass.bind(this);
    this.verify = this.verify.bind(this);
  }
  showpass = () => {
    if (this.state.press == false) {
      this.setState({ showpass: false, press: true });
    } else {
      this.setState({ showpass: true, press: false });
    }
  };

  setEmail(event) {
    this.setState({ email: event.nativeEvent.text });
  }

  setPass(event) {
   // Alert.alert('setNumber', event.nativeEvent.text)
    this.setState({ password: event.nativeEvent.text });
  }
  verify() {
    const { email, password } = this.state;
    Alert.alert('Login Details', email);
  }
 
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>Fly Over The Earth </Text>
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-person"}
            size={28}
            color={'rgba(255,255,255,0.7)'}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
            onChange={this.setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={'ios-lock'}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={'Password'}
            secureTextEntry={this.state.showpass}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underlineColorAndroid="transparent"
            onChange={this.setPass}
          />
          <TouchableOpacity style={styles.btnEye} onPress={this.showpass}>
            <Icon
              name={this.state.press === false ? "ios-eye" : "ios-eye-off"}
              size={26}
              color={"rgba(255, 255, 255, 0.7)"}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.btnForget}>
            <Text style={styles.txtForget}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnLogin} onPress={this.verify}>
            <Text style={styles.txtLogin}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.txtSignup}>DON'T HAVE AN ACCOUNT? </Text>
          <TouchableOpacity>
            <Text style={styles.touchSignup}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 80,
    height: 80
  },
  logoText: {
    color: "#900C3F",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 48,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 15,
    left: 48
  },
  inputContainer: {
    padding: 5,
  },
  btnEye: {
    position: "absolute",
    top: 13,
    right: 40,
  },
  btnLogin: {
    width: WIDTH - 150,
    height: 40,
    borderRadius: 25,
    backgroundColor: '#900C3F',
    color: 'rgba(255,255,255,0.7)',
    justifyContent: "center"
  },
  txtLogin: {
    color: "#EFF4EE",
    fontSize: 20,
    fontWeight: "500",
    opacity: 1.0,
    textAlign: "center",
  },
  txtForget: {
    width: WIDTH - 200,
    left: 85,
    margin: 15,
    bottom: 8,
    borderRadius: 25,

    color: '#FBF502',
    justifyContent: "center"
  },
  txtSignup: {
    color: "#FBF502",
    fontSize: 16,
    fontWeight: "500",
    opacity: 1.0,
    justifyContent: "center"
  },
  touchSignup: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
    opacity: 1.0,
    justifyContent: "center",
    textAlign: "center",
  },
});
