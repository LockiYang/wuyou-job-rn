import { StyleSheet, View, Text, SafeAreaView, Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>首页</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: Platform.OS === 'ios' ? 60 : 0,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
