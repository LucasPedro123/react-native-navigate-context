import { NavigationContainer } from "@react-navigation/native";

// contexto
import { StackRoutes } from './stack.routes'
import BottomTabsRoutes from './bottom-tabs.routes'

// Caixa de contextos
export function Routes() {
    return (
        <NavigationContainer>
            <BottomTabsRoutes/>
        </NavigationContainer>
    )
}