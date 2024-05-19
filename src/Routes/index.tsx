import { NavigationContainer } from "@react-navigation/native";

// contexto
import { StackRoutes } from './stack.routes'

// Caixa de contextos
export function Routes() {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}