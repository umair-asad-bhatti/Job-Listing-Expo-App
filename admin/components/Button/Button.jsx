
import { TouchableOpacity, Text } from "react-native";

export const Button = ({ onClickHandler, disabled, children }) => {
    return <TouchableOpacity disabled={disabled} onPress={onClickHandler} className={'bg-blue-500 shadow-lg  px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'}>
        {children}
    </TouchableOpacity>
}