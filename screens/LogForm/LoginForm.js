import React, {useEffect, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {ImageBackground, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import { Input, Item, Picker } from "native-base";
import MyText from "../../component/MyText/MyText";
import {LogFormStyles as styles} from "./logFormStyle";
import {getUserData, LoginUserAndGetUserData, signIn} from '../../redux/actions';
import { bindActionCreators } from "redux";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signIn = async () => {
    // call api
    console.log(email);
    console.log(password);
    dispatch(LoginUserAndGetUserData(email, password))
  }


  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={{
          width: '100%',
          alignItems: 'center',
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        >
        <ImageBackground
          style={{
            ...styles.container,
            justifyContent: "center",
            alignItems: "center"
          }}
          source={require("../../allpngandsvg/backgroundpurplewide.png")}
        >
          <View style={styles.MainContainer}>
            <View>
              <View style={styles.headingMainContainer}>
                <View>
                  <MyText style={styles.Logo}>Logo App</MyText>
                </View>
                <View>
                  <View>
                    <MyText style={styles.AppName}>Name App</MyText>
                  </View>
                  <View>
                    <MyText style={styles.Slogan}>Slogan</MyText>
                  </View>
                </View>
              </View>
              <View>
                <TextInput
                  onChangeText={(ev) => setEmail(ev)}
                  style={styles.input}
                  placeholderTextColor="#fff"
                  placeholder="{user}"
                  keyboardType='email-address'
                />
                <TextInput
                  onChangeText={(ev) => setPassword(ev)}
                  style={styles.input}
                  placeholderTextColor="#fff"
                  placeholder="{password}"
                  secureTextEntry={true}
                />
                <MyText
                  style={styles.forgotPassText}
                >{`{forgot your password}`}</MyText>
                <TouchableOpacity onPress={() => signIn()} style={styles.SignInButton}>
                  <Text style={styles.buttonTxt}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.BottomLogoContainer}>
              <MyText style={styles.LogoBottom}>Logo Company</MyText>
              <MyText style={styles.BottomSlogan}>Slogan</MyText>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView >  
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
  // loader: state.loader
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      LoginUserAndGetUserData,
      signIn,
      getUserData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
