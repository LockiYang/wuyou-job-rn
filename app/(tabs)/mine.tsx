import Constants from '@/constants/Constants';
import { AntDesign } from '@expo/vector-icons';
import { Avatar } from '@rneui/base';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';

export default function MineScreen() {
  // 设置状态栏样式为白色
  StatusBar.setBarStyle('light-content');

  const toSettingPage = () => {
    router.push('/mine/setting');
  };

  const toAboutUsPage = () => {
    router.push('/mine/aboutus');
  };

  const toFeedbackPage = () => {
    router.push('/mine/feedback');
  };

  const toBussinessPage = () => {
    router.push('/mine/bussiness');
  };

  const toUserProtocal = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.baidu.com');
    if (result.type === 'cancel') {
      console.log('用户取消了操作');
    }
  };

  const toHelpCenter = async () => {
    let result = await WebBrowser.openBrowserAsync('https://www.baidu.com');
    if (result.type === 'cancel') {
      console.log('用户取消了操作');
    }
  };

  return (
    <>
      <View style={styles.header}>
        <View style={styles.titleLine}>
          <View style={styles.title}>
            <Avatar
              size={44}
              rounded
              source={require('@/assets/images/logo.png')}
            />
            <Text style={styles.titleText}>15999606012</Text>
          </View>
          <TouchableOpacity onPress={toSettingPage}>
            <AntDesign name='setting' size={20} color='white' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.orderBox}>
        <View style={styles.orderItem}>
          <Text style={styles.orderItemNum}>1</Text>
          <Text style={styles.orderItemText}>全部</Text>
        </View>
        <View style={styles.orderItem}>
          <Text style={styles.orderItemNum}>1</Text>
          <Text style={styles.orderItemText}>已报名</Text>
        </View>
        <View style={styles.orderItem}>
          <Text style={styles.orderItemNum}>1</Text>
          <Text style={styles.orderItemText}>已录取</Text>
        </View>
        <View style={styles.orderItem}>
          <Text style={styles.orderItemNum}>1</Text>
          <Text style={styles.orderItemText}>已结束</Text>
        </View>
      </View>

      <View style={styles.menuBox}>
        <View style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <AntDesign name='hearto' size={20} color={Constants.colorPrimary} />
            <Text style={styles.menuItemText}>我的收藏</Text>
          </View>
          <AntDesign
            name='arrowright'
            size={20}
            color={Constants.colorTextGrey}
          />
        </View>
        <TouchableOpacity onPress={toFeedbackPage}>
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <AntDesign
                name='hearto'
                size={20}
                color={Constants.colorPrimary}
              />
              <Text style={styles.menuItemText}>意见反馈</Text>
            </View>
            <AntDesign
              name='arrowright'
              size={20}
              color={Constants.colorTextGrey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toHelpCenter}>
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <AntDesign
                name='hearto'
                size={20}
                color={Constants.colorPrimary}
              />
              <Text style={styles.menuItemText}>帮助中心</Text>
            </View>
            <AntDesign
              name='arrowright'
              size={20}
              color={Constants.colorTextGrey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toBussinessPage}>
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <AntDesign
                name='hearto'
                size={20}
                color={Constants.colorPrimary}
              />
              <Text style={styles.menuItemText}>商务合作</Text>
            </View>
            <AntDesign
              name='arrowright'
              size={20}
              color={Constants.colorTextGrey}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={toUserProtocal}>
          <View style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <AntDesign
                name='hearto'
                size={20}
                color={Constants.colorPrimary}
              />
              <Text style={styles.menuItemText}>用户协议</Text>
            </View>
            <AntDesign
              name='arrowright'
              size={20}
              color={Constants.colorTextGrey}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={toAboutUsPage}>
          <View style={[styles.menuItem, styles.menuItemLast]}>
            <View style={styles.menuItemLeft}>
              <AntDesign
                name='hearto'
                size={20}
                color={Constants.colorPrimary}
              />
              <Text style={styles.menuItemText}>关于我们</Text>
            </View>
            <AntDesign
              name='arrowright'
              size={20}
              color={Constants.colorTextGrey}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 160,
    backgroundColor: Constants.colorPrimary,
  },
  titleLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 80,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: '#ffffff',
    fontSize: 18,
    marginLeft: 10,
  },
  orderBox: {
    margin: 20,
    marginBottom: 0,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  orderItem: {
    alignItems: 'center',
  },
  orderItemNum: {
    fontSize: 18,
    color: Constants.colorPrimary,
    marginBottom: 10,
  },
  orderItemText: {
    color: Constants.colorTextGrey,
  },
  menuBox: {
    margin: 20,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: Constants.colorBorder,
  },
  menuItemLast: {
    borderBottomWidth: 0,
  },
  menuItemLeft: { flexDirection: 'row', alignItems: 'center' },
  menuItemText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
