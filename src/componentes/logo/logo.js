import React from "react";
import { View , Image} from "react-native";

const Logo = () => {
    return(
        <View>
            <Image source={require('./senai.jpg')}/>
        </View>
    )
}

export default Logo;