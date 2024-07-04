import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import {styles} from './style'

export interface Binterface extends TouchableOpacityProps{
    onPressI: () => void
}