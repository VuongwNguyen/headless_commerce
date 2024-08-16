import {Button, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import Container from '../rnulib/Container';
import {useFormilHook} from '../hooks/useFormilHook';
import Input from '../components/Input';
import {loginValidation} from '../validations/loginValiadation';
import React from 'react';
require('../rnulib/Colors');
require('../rnulib/Typography');

function Login(): React.ReactElement {
  const {values, errors, handleChange, handleSubmit} = useFormilHook(
    {email: '', password: ''},
    loginValidation,
    function (val: any, {resetForm}: any) {
      console.log(val);
      resetForm();
    },
  );

  return (
    <Container>
      <Text white title>
        Welcome to headless
      </Text>
      <Text white marginV-30 center>
        Login to your account
      </Text>

      <View style={{gap: 16}}>
        <Input
          placeholder="Email"
          setValue={handleChange('email')}
          value={values.email}
          error={errors.email}
        />
        <Input
          placeholder="Password"
          setValue={handleChange('password')}
          isPassword
          value={values.password}
          error={errors.password}
        />
      </View>

      <Button
        label="Login"
        bg-white
        primaryColor
        marginV-20
        onPress={handleSubmit}
      />
      <Text white marginV-30 center>
        Forgot Password?
      </Text>
      <TouchableOpacity center row>
        <Text white>Don't have an account?</Text>
        <Text white linkRef>
          Sign Up
        </Text>
      </TouchableOpacity>
    </Container>
  );
}

export default Login;
