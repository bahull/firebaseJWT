import React from "react";
import { StyleSheet, View } from "react-native";
import firebase from "firebase";

import firebaseConfig from "./config/firebase";

import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

export default class App extends React.Component {
  componentDidMount() {
    console.log(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});
