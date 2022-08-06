import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './FloatingButton.style';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Button({icon, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} color="white" size={30} />
    </TouchableOpacity>
  );
}

export default Button;
