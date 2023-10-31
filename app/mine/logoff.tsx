import { View, Text, StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Constants from '@/constants/Constants';

const logoffScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '注销账号',
      headerTitleAlign: 'center',
    });
  });
  return (
    <View style={styles.menuBox}>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>注销账号</Text>
        <AntDesign
          name='arrowright'
          size={20}
          color={Constants.colorTextGrey}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuBox: {
    backgroundColor: '#ffffff',
    marginTop: 15,
    paddingLeft: 15,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: Constants.colorBorder,
    paddingRight: 15,
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuItemText: {
    fontSize: 16,
  },
});

export default logoffScreen;
