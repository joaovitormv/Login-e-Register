import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import {styles} from './style'

export interface Binterface extends TouchableOpacityProps{
    onPressI: () => void
}

export function ButtonInterface({ onPressI, ...rest}: Binterface){
    return(
        <TouchableOpacity style={styles.bPrimary}
        onPress={onPressI}
        {...rest}
        >
            <Text style={styles.text}></Text>
        </TouchableOpacity>
    )
}

