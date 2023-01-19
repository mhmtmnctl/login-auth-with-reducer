import { useContext, useReducer } from "react";
import { createContext } from "react";
import { counterInitialState } from "./counter/counter-initial-state";
import { counterReducer } from "./counter/counter-reducer";

//boş bir merkezi state oluşturuldu
const storeContext = createContext();
export const useStore = () => useContext(storeContext);

export const StoreProvider = ({ children }) => {
        //useReducer hookuna reducer ve initials state parametre olarak verilir,
        //useReducer fonksiyonu ise geriye setter ve getterları döner.

//        getter        setter
const [counterState,dispatchCounter] = useReducer(counterReducer,counterInitialState);


  return(
   <storeContext.Provider value={{}}>
    {children}
    </storeContext.Provider>)
};
