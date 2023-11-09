import { createContext } from 'react';
import useFirebase from '../components/hooks/useFirebase';


//@ Creating auth context
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
   const authMethods = useFirebase();
   
   return (
      <AuthContext.Provider value={authMethods}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContextProvider;