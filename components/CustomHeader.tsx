import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import React from 'react';
import Constants from '@/constants/Constants';
import { FontAwesome } from '@expo/vector-icons';

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headLeft}>
          <Image style={styles.logo} source={require('@/assets/images/logo.png')} />
          <Image style={styles.brand} source={require('@/assets/images/brand.png')} />
        </View>
        <View style={styles.headRight}>
          <Text style={styles.headRightText}>深圳</Text>
          <FontAwesome name='angle-down' size={18} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    backgroundColor: '#ffffff',
    paddingHorizontal: Constants.spacingLg,
  },
  headLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  logo: {
    height: 28,
    width: 28,
    borderRadius: Constants.borderRadiusSm,
    marginRight: Constants.spacingSm,
  },
  brand: {
    height: 30,
    width: 100,
  },
  headRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headRightText: {
    marginRight: Constants.spacingSm,
  },
});

export default CustomHeader;
