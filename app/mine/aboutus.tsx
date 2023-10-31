import { View, Text, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Constants from '@/constants/Constants';
import Toast from 'react-native-root-toast';

const AboutUsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '关于我们',
      headerTitleAlign: 'center',
    });
  });

  const toUpdate = () => {
    console.info('toUpdate');
    Toast.show('已经是最新版本了', {
      duration: Toast.durations.LONG,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
    });
  };

  return (
    <View style={styles.menuBox}>
      <TouchableOpacity onPress={toUpdate}>
        <View style={styles.menuItem}>
          <Text style={styles.menuItemText}>版本信息</Text>
          <View style={styles.menuItemRight}>
            <Text style={styles.menuItemRightText}>1.2.0</Text>
            <AntDesign
              name='arrowright'
              size={20}
              color={Constants.colorTextGrey}
            />
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.menuItem}>
        <Text style={styles.menuItemText}>用户协议</Text>
        <AntDesign
          name='arrowright'
          size={20}
          color={Constants.colorTextGrey}
        />
      </View>
      <View style={[styles.menuItem, styles.menuItemLast]}>
        <Text style={styles.menuItemText}>隐私政策</Text>
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
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemRightText: {
    marginRight: 5,
    color: Constants.colorTextGrey,
  },
});

export default AboutUsScreen;
