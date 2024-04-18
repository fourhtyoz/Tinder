import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/hooks/useAuth';
import Stacks from './Stacks';


export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </AuthProvider>
  );
}