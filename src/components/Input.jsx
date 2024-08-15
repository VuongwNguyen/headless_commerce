import {
  View,
  TextField,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native-ui-lib';
import {useState} from 'react';
require('../rnulib/Colors');
require('../rnulib/Typography');
require('../rnulib/Assets');

export default function Input({...props}) {
  const {
    placeholder = '',
    isPassword = false,
    value = '',
    setValue = () => {},
    error = '',
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View flexG-1>
      <View
        paddingH-10
        paddingV-10
        br100
        style={{
          borderWidth: 1,
          borderColor: 'white',
        }}>
        <TextField
          placeholder={placeholder}
          placeholderTextColor={'white'}
          value={value}
          onChangeText={t => setValue(t)}
          secureTextEntry={showPassword}
          white
        />
        {isPassword && (
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 15,
              top: 13,
            }}
            onPress={() => setShowPassword(!showPassword)}>
            <Image assetName={!showPassword ? 'closeEye' : 'openEye'} />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text red20 marginH-10>
          {error}
        </Text>
      )}
    </View>
  );
}
