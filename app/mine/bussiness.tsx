import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Constants from '@/constants/Constants';
import { Button } from '@rneui/base';
import RNPickerSelect from 'react-native-picker-select';

const bussinessScreen = () => {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(null);

  const pickerItems = [
    { value: 0, label: '线上兼职' },
    { value: 1, label: '线下兼职' },
    { value: 2, label: '课程培训' },
    { value: 3, label: '主播直播' },
    { value: 4, label: '其他' },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '商务合作',
      headerTitleAlign: 'center',
    });
  });
  return (
    <>
      <View style={styles.tipsBox}>
        <Text style={styles.tipsText}>您的反馈和意见都是我们进步的动力</Text>
      </View>
      <View style={styles.inputBox}>
        <View style={styles.inputLine}>
          <Text style={styles.inputTitle}>合作类型</Text>
          <RNPickerSelect
            placeholder={{ label: '请选择合作类型', value: null }}
            onValueChange={(value) => setSelectedValue(value)}
            items={pickerItems}
            value={selectedValue}
          />
        </View>
        <View style={styles.inputLine}>
          <Text style={styles.inputTitle}>联系方式</Text>
          <TextInput placeholder='请输入微信或手机号' />
        </View>
        <View style={[styles.inputLine, styles.contentLine]}>
          <Text style={styles.inputTitle}>合作内容</Text>
          <TextInput
            style={styles.contentInput}
            multiline={true}
            numberOfLines={4}
            placeholder='请输入合作内容'
          />
        </View>
      </View>
      <View style={styles.buttonBox}>
        <Button>提交</Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  tipsBox: {
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
  },
  tipsText: {
    color: Constants.colorTextGrey,
  },
  inputBox: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  inputLine: {
    marginTop: 20,
  },
  contentInput: {},
  contentLine: {
    height: 120,
  },
  inputTitle: {
    marginBottom: 5,
  },
  buttonBox: {
    margin: 15,
    marginTop: 40,
  },
});

export default bussinessScreen;
