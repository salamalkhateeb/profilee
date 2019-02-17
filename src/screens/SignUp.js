import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../_actions";

import Signin from "../symbols/Signin";
import UntitledSymbol from "../symbols/UntitledSymbol";
import Icon from "@builderx/icons";

import { Center } from "@builderx/utils";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      submitted: false,
      usenameError: "",
      emailError: "",
      passwordError: "",
      inValid: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, name) {
    this.setState({ [name]: e });
  }

  validateValues(e, name) {
    switch (name) {
      case "usename":
        let usename = !/^[A-Za-z0-9 ]{2,20}$/.test(e);
        this.setState({ usenameError: usename });
        break;
      case "email":
        let email = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e);
        this.setState({ emailError: email });
        break;
      case "password":
        let password = !/^[a-zA-Z0-9._%+-~`@!? ]{4,20}$/.test(e);
        this.setState({ passwordError: password });
        break;
      default:
        break;
    }
    if (
      !this.state.usenameError &&
      !this.state.emailError &&
      !this.state.passwordError
    ) {
      this.setState({ inValid: false });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const {
      username,
      password,
      email,
      usenameError,
      emailError,
      passwordError
    } = this.state;
    const { dispatch } = this.props;
    if (
      username &&
      password &&
      !usenameError &&
      !emailError &&
      !passwordError
    ) {
      dispatch(
        userActions.signUp(username, password, email, this.props.navigation)
      );
    }
  }
  render() {
    const { username, password, submitted } = this.state;
    let usenameError = this.state.usenameError ? "Invalid Username" : "";
    let emailError = this.state.emailError ? "Invalid Email" : "";
    let passwordError = this.state.passwordError ? "Invalid Password" : "";
    return (
      <View style={styles.root}>
        <View style={styles.bg} />
        <Center horizontal>
          <Icon style={styles.icon2} name="md-person-add" type="Ionicons" />
        </Center>
        <View style={styles.rect7}>
          <UntitledSymbol
            iconName="account"
            textInput="Username"
            style={styles.username}
            iconType="MaterialCommunityIcons"
            errorText={usenameError}
            onChangeText={e => this.handleChange(e, "username")}
            onBlur={() => this.validateValues(this.state.username, "usename")}
          />
          <UntitledSymbol
            style={styles.email}
            iconName="email-outline"
            textInput="Email"
            iconType="MaterialCommunityIcons"
            errorText={emailError}
            onChangeText={e => this.handleChange(e, "email")}
            onBlur={() => this.validateValues(this.state.email, "email")}
          />
          <UntitledSymbol
            style={styles.password}
            iconName="lock-outline"
            textInput="Password"
            secureTextEntry={true}
            errorText={passwordError}
            onChangeText={e => this.handleChange(e, "password")}
            onBlur={() => this.validateValues(this.state.password, "password")}
          />
        </View>
        <Signin
          style={styles.signin}
          disabled={this.state.inValid}
          root={this.handleSubmit}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.push("Login");
          }}
        >
          <Text style={styles.text}>Go To Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state
});
export default connect(mapStateToProps)(SignUp);

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1
  },
  bg: {
    position: "absolute",
    top: "0%",

    height: "37.44%",
    width: 372,
    backgroundColor: "#31A6DE",
    left: "1.06%"
  },

  statusBar: {},

  signin: {
    position: "absolute",

    left: 54.01,
    right: 54.04,
    backgroundColor: "#31A6DE",
    opacity: 1,
    borderRadius: 50,
    bottom: "10%"
  },

  rect7: {
    height: 200,
    left: 4,
    position: "absolute",
    right: -4,
    top: "43.84%"
  },
  username: {
    top: "0%",
    left: 0,
    right: 0,
    height: "27.32%",
    position: "absolute"
  },
  icon2: {
    top: "20%",
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 83
  },
  icon4: {
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    top: 20,
    right: 16.99
  },
  icon3: {
    top: 20,
    left: 14,
    width: 39,
    height: 38,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  password: {
    left: 0,
    right: 0,
    height: 51,
    position: "absolute",
    top: "74.13%"
  },
  email: {
    top: "37%",
    left: 0,
    right: 0,
    height: 51,
    position: "absolute"
  },
  button: {
    height: 31,

    left: 0,
    position: "absolute",
    right: 0,
    justifyContent: "center",
    padding: 0,
    alignItems: "center",
    bottom: "3%"
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 0,
    margin: 0,
    fontWeight: "bold",
    color: "#999"
  }
});
