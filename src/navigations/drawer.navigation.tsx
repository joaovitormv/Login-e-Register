import {createDrawerNavigator, DrawerNavigationProp} from '@react-navigation/drawer'
import {Ionicons} from "@expo/vector-icons";
import { TabNavigation } from './tab.navigation';

type DrawerParamList = {
    Tab: undefined
}

type DrawerScreenNavigationProp = DrawerNavigationProp<DrawerParamList, 'Tab'>
export type DrawerTypes = {
    navigation : DrawerScreenNavigationProp
}

export function DrawerNavigation(){
    const Drawer = createDrawerNavigator<DrawerParamList>()
    return(
        <Drawer.Navigator screenOptions={{
            headerStyle: {backgroundColor: "green"},
            headerTintColor: "blue",
            drawerStyle:{
                backgroundColor: "green",
            },
            drawerActiveTintColor: "blue",
            drawerInactiveTintColor: "blue"
        }}>
            <Drawer.Screen name='Tab' component={TabNavigation}
                options={{
                    drawerLabel: 'Perfil',
                    headerTitle: "Perfil",
                    drawerIcon:()=>(
                        <Ionicons name="person" size={24} color="blue"/>
                    ),  
                }}

            />

        </Drawer.Navigator>
    )
}