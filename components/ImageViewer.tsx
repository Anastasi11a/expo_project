import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
    imgSourse: ImageSourcePropType;
};

export default function ImageViewer({ imgSourse }: Props) {
    return <Image source={imgSourse} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});