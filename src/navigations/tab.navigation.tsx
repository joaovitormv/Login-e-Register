import {createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Mensagem} from "../SCREENS/mensagem"
import { Perfil } from '../SCREENS/perfil';
import {AntDesign, Ionicons} from '@expo/vector-icons';

type TabParamList = {
    Perfil: undefined
    Mensagem: undefined
}

type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>

export type TabTypes = {
    navigation: TabScreenNavigationProp
}

export function TabNavigation(){
    const Tab = createBottomTabNavigator<TabParamList>()
    return(
        <Tab.Navigator 
            screenOptions={{
                tabBarActiveBackgroundColor: "green",
                tabBarActiveTintColor: "blue",
                headerShown: false,
                tabBarInactiveBackgroundColor: "green",
                tabBarInactiveTintColor: "blue",
            }}
        >
            <Tab.Screen name='Perfil' component={Perfil}
                options={{
                    tabBarIcon: ()=>(
                        <Ionicons name="person" size={24} color={"blue"}/>
                    ),
                }}
            />
            <Tab.Screen name='Mensagem' component={Mensagem}
                options={{
                    tabBarIcon: ()=>(
                        <AntDesign name="message1" size={24} color={"blue"}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}