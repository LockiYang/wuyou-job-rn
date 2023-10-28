import { StyleSheet, View, Text } from 'react-native';

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>消息</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
