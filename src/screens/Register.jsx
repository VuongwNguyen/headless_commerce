import {Text, View, Button, TouchableOpacity} from 'react-native-ui-lib';
import Container from '../rnulib/Container';
import Input from '../components/Input';
import {useFormilHook} from '../hooks/useFormilHook';
import {registerValidation} from '../validations/registerValidation';
require('../rnulib/Colors');
require('../rnulib/Typography');
export default function Register() {
  const {values, errors, handleChange, handleSubmit} = useFormilHook(
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    registerValidation,
    (val, {resetForm}) => {
      console.log(val);
    },
  );

  return (
    <Container>
      <Text white title>
        Welcome to headless
      </Text>
      <Text white marginV-30 center>
        Register to your account
      </Text>
      <View style={{gap: 16}}>
        <View row spread style={{gap: 8}}>
          <Input
            placeholder="First Name"
            value={values.firstName}
            setValue={handleChange('firstName')}
            error={errors.firstName}
          />
          <Input
            placeholder="Last Name"
            value={values.lastName}
            setValue={handleChange('lastName')}
            error={errors.lastName}
          />
        </View>
        <Input
          placeholder="Email"
          value={values.email}
          setValue={handleChange('email')}
          error={errors.email}
        />
        <Input
          placeholder="Password"
          isPassword
          value={values.password}
          setValue={handleChange('password')}
          error={errors.password}
        />
        <Input
          placeholder="Confirm Password"
          isPassword
          value={values.confirmPassword}
          setValue={handleChange('confirmPassword')}
          error={errors.confirmPassword}
        />
      </View>
      <Button
        label="Register"
        bg-white
        primaryColor
        marginV-20
        onPress={handleSubmit}
      />
      <TouchableOpacity center row>
        <Text white>Already have an account? </Text>
        <Text white linkRef>
          Sign In
        </Text>
      </TouchableOpacity>
    </Container>
  );
}
