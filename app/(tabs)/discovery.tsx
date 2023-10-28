import { StyleSheet, View, Text } from 'react-native';

export default function DiscoveryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>发现</Text>
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
