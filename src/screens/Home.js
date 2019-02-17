import React, { Component } from "react";

import Icon from "@builderx/icons";
import Card1 from "../symbols/card1";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Center } from "@builderx/utils";
import { Constants } from "expo";
import { NavigationActions } from "react-navigation";

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "SignUp" })]
});
export default class Untitled3 extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.rect} />
        <View
          style={[
            styles.rect14,
            {
              left: Constants.deviceName === "iPhone X" ? 0 : 0,
              right: Constants.deviceName === "iPhone X" ? 0 : 0,
              top: Constants.deviceName === "iPhone X" ? 32 : 0,
              height: 64
            }
          ]}
        >
          <View style={styles.rect15}>
            <View style={styles.rect16} />
            <Center vertical>
              <Icon
                style={styles.icon}
                name="power"
                type="MaterialCommunityIcons"
                onPress={() => {
                  this.props.navigation.dispatch(resetAction);
                }}
              />
            </Center>
          </View>
          <Center>
            <Text style={styles.text2}>Home</Text>
          </Center>
        </View>
        <ScrollView
          style={[
            styles.scrollArea,
            {
              left: Constants.deviceName === "iPhone X" ? 0 : 0,
              right: Constants.deviceName === "iPhone X" ? 0 : 0,
              top: Constants.deviceName === "iPhone X" ? 98 : 64,
              height: 714
            }
          ]}
          horizontal={false}
          contentContainerStyle={styles.ScrollView1}
        >
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
          <Card1 style={styles.card1} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  rect: {
    top: 0,
    left: "0%",
    bottom: 0,
    width: "100%",
    position: "absolute",
    backgroundColor: "#31A6DE"
  },

  rect14: {
    position: "absolute",
    shadowColor: "#31A6DE",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  rect15: {
    top: "-1.3%",
    left: "0%",
    width: "100%",
    height: "101.3%",
    position: "absolute"
  },
  rect16: {
    top: "0.00%",
    left: "0.00%",
    width: "100.00%",
    height: "100.00%",
    position: "absolute",
    backgroundColor: "transparent"
  },

  text2: {
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 18,
    letterSpacing: 0.15,
    color: "rgba(255,255,255,1)"
  },
  icon: {
    left: 17.87,
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  scrollArea: {
    position: "absolute",

    padding: 10
  },
  card1: {
    width: "100%"
  },
  ScrollView1: {
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
