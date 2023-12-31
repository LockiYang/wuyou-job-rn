import { View, Text, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from '@/constants/Constants';
import { Switch } from '@rneui/base';
import { router } from 'expo-router';

const SettingScreen = () => {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '设置',
      headerTitleAlign: 'center',
    });
  });

  const toSettingPage = () => {
    router.push('/mine/logoff');
  };

  return (
    <View style={styles.menuBox}>
      <TouchableOpacity onPress={toSettingPage}>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>账号与安全</Text>
          <AntDesign
            name='arrowright'
            size={20}
            color={Constants.colorTextGrey}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>个性化推荐</Text>
        <Switch value={checked} onValueChange={(value) => setChecked(value)} />
      </View>
      <View style={[styles.menuItem, styles.menuItemLast]}>
        <Text style={styles.menuItemText}>退出登录</Text>
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

export default SettingScreen;
