import { useContext } from "react";
import { createContext } from "react";

//boş bir merkezi state oluşturuldu
const storeContext = createContext();
export const useStore = () => useContext(storeContext);
