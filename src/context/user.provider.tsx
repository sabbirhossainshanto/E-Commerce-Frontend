import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { IUser } from "../types/global";
import { getCurrentUser } from "../services/Auth";

export const UserContext = createContext<IUserContext | undefined>(undefined);

interface IUserContext {
  isUserLoading: boolean;
  setIsUserLoading: Dispatch<SetStateAction<boolean>>;
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isUserLoading, setIsUserLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  const handleUser = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsUserLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isUserLoading]);

  return (
    <UserContext.Provider
      value={{
        isUserLoading,
        setIsUserLoading,
        setUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within the userProvider context");
  }
  return context;
};

export default UserProvider;
