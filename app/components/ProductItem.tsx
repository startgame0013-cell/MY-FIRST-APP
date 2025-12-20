import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  image: any;
  name: string;
  price: number;
};

export default function ProductItem({ image, name, price }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: "#666",
  },
});