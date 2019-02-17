import React, { Component } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import axios from "axios";

const ROOT_URL = "https://us-central1-fbcloudfunctions.cloudfunctions.net";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: ""
    };
  }

  handleSubmit = async () => {
    if (this.state.phone.length > 0) {
      try {
        await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });

        await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
          phone: this.state.phone
        });
      } catch (e) {
        console.log(`Error: `, e);
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
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}
export default SignUpForm;
