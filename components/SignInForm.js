import React, { Component } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import axios from "axios";
import firebase from "firebase";

const ROOT_URL = "https://us-central1-fbcloudfunctions.cloudfunctions.net";

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: "",
      code: ""
    };
  }

  handleSubmit = async () => {
    if (this.state.phone.length > 0) {
      try {
        let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
          phone: this.state.phone,
          code: this.state.code
        });

        firebase.auth().signInWithCustomToken(data.token);
      } catch (e) {
        console.log(`Here is the error: ${e}`);
      }
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 30 }}>
          <Input
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
            placeholder=""
            label="Enter Phone Number"
          />
          <Input
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
            placeholder=""
            label="Enter Your Code"
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
export default SignInForm;
