import React, { Component } from "react";
import { Center } from "@builderx/utils";
import UntitledSymbol from "../symbols/UntitledSymbol";
import Icon from "@builderx/icons";
import Button131 from "../symbols/button131";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <Center vertical>
          <View style={styles.rect2}>
            <UntitledSymbol
              style={styles.untitledSymbol2}
              iconType="MaterialCommunityIcons"
              iconName="account"
              textInput="Username"
            />
            <UntitledSymbol
              style={styles.untitledSymbol3}
              iconType="MaterialCommunityIcons"
              iconName="email-outline"
              textInput="Email"
            />
            <UntitledSymbol
              style={styles.untitledSymbol4}
              iconType=""
              iconName="lock-outline"
              textInput="Password"
            />
          </View>
        </Center>
        <View style={styles.rect3} />
        <Center horizontal>
          <Icon
            name="account-circle"
            style={styles.icon}
            type="MaterialCommunityIcons"
          />
        </Center>
        <Center horizontal>
          <Button131 style={styles.button131} />
        </Center>
        <Text style={styles.text}>Bio</Text>
        <TextInput
          placeholder="Enter whatever you want"
          style={styles.textInput}
        />
        <Icon
          name="apple-mobileme"
          style={styles.icon2}
          type="MaterialCommunityIcons"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white ",
    flex: 1
  },
  rect: {
    top: 0,
    left: -2,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1,
    right: 2,
    bottom: 0
  },
  rect2: {
    left: 0,
    right: 0,
    height: 200,
    position: "absolute"
  },
  untitledSymbol2: {
    top: "0%",
    left: 0,
    right: 0,
    height: "27.32%",
    position: "absolute"
  },
  untitledSymbol3: {
    top: "37%",
    left: 0,
    right: 0,
    height: 51,
    position: "absolute"
  },
  untitledSymbol4: {
    top: "74.13%",
    left: 0,
    right: 0,
    height: 51,
    position: "absolute"
  },
  rect3: {
    height: 62,
    width: 374,
    top: 458,
    left: 2,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1
  },
  icon: {
    top: 100,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 165
  },
  button131: {
    position: "absolute",
    height: 68,
    borderColor: "#000000",
    borderWidth: 3,
    borderRadius: 32,
    top: "80.42%"
  },
  text: {
    height: 96,
    width: 226,
    top: 441,
    left: 44,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(234,217,217,1)",
    lineHeight: 60,
    letterSpacing: 0,
    opacity: 1
  },
  textInput: {
    height: 164,
    width: 376,
    position: "absolute",
    left: "0.53%",
    top: "60.22%"
  },
  icon2: {
    top: 449,
    left: 2,
    position: "absolute",
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 40
  }
});
