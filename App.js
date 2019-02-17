import React from "react";
import { YellowBox, AsyncStorage } from "react-native";
import { Provider } from "react-redux";

import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";

import { Font } from "expo";

import { store } from "./src/_helpers";

import Home from "./src/screens/Home";
import Untitled from "./src/screens/Untitled";
import { StackNavigator, DrawerNavigator } from "react-navigation";
let user = [
  {
    id: 1,
    username: "Test",
    password: "test",
    email: "Test"
  }
];
const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: Home
  },
  Login: {
    screen: Login
  },
  SignUp: {
    screen: SignUp
  },
  Untitled: {
    screen: Untitled
  }
});
const StackNavigation = StackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Home: {
      screen: Home
    },
    Login: {
      screen: Login
    },
    SignUp: {
      screen: SignUp
    },
    Untitled: {
      screen: Untitled
    }
  },
  {
    headerMode: "none"
  }
);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
    YellowBox.ignoreWarnings([
      "Warning: componentWillMount is deprecated",
      "Warning: componentWillReceiveProps is deprecated",
      "Warning: componentWillUpdate is deprecated"
    ]);
  }
  storeData = async user => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
  };
  async componentDidMount() {
    this.storeData(user);
    // AsyncStorage.setItem("user", JSON.stringify(users));
    await Font.loadAsync({
      "Avenir-Medium": require("./src/assets/fonts/Arial.ttf"),
      Roboto: require("./src/assets/fonts/Arial.ttf") /*Fallback Font*/
    });

    this.setState({ fontLoaded: true });
    console.warn("Fallback font is being used. Please check App.js file.");
  }
  render() {
    return this.state.fontLoaded ? (
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    ) : (
      <Expo.AppLoading />
    );
  }
}
