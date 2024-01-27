import { EyeSlash, Eye } from 'iconsax-react-native';
import { useState } from "react";
import { TextInput, View, Text, Pressable, Touchable, TouchableOpacity } from "react-native";

// eslint-disable-next-line react/prop-types
export default function InputField({ type, value, setValue, children }) {


    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
        <View className="mb-4 border-gray-500  border-2 rounded-xl  flex flex-row justify-between py-2 px-2">
            <View className={'flex-row '}>
                <Text>{children}</Text>
                <TextInput value={value} onChangeText={setValue} secureTextEntry={type.includes('password') ? !isPasswordVisible : false} placeholder={type} selectionColor={'black'} className="px-2" />
            </View>
            <View>
                {type?.includes('password') && (
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        {isPasswordVisible ? <EyeSlash color="grey" size={25} /> : <Eye color="grey" size={25} />}
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
