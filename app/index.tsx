import { StyleSheet, Text, View } from "react-native";
import ProductItem from "./components/ProductItem";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coffee Shop ☕</Text>

      <ProductItem
        image={require("../assets/images/coffe.png")}
        name="Latte"
        price={3.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
});