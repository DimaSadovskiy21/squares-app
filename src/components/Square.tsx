import { View } from "react-native"
import { styles } from "./Styles"

type SquarePropsType = {
    rgbColor: string
}

export const Square:React.FC<SquarePropsType> = ({rgbColor}) => {
    return <View style={[styles.square, { backgroundColor: rgbColor }]} />
}