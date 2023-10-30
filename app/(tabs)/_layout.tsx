import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import Constants from '@/constants/Constants';
import CustomHeader from '@/components/CustomHeader';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Constants.colorPrimary,
      }}>
      <Tabs.Screen
        name='home'
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          header: () => <CustomHeader />,
        }}
      />
      <Tabs.Screen
        name='discovery'
        options={{
          title: '发现',
          tabBarIcon: ({ color }) => <TabBarIcon name='th-large' color={color} />,
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen
        name='message'
        options={{
          title: '消息',
          tabBarIcon: ({ color }) => <TabBarIcon name='comments' color={color} />,
          headerTitleAlign: 'center',
        }}
      />
      <Tabs.Screen
        name='mine'
        options={{
          title: '我的',
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
