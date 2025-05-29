import { ImageSourcePropType, StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
    imgSourse: ImageSourcePropType;
    selectedImage?: string;
};

export default function ImageViewer({ imgSourse, selectedImage }: Props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSourse;

    return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});