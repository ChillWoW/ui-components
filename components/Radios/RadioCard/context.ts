import { createContext, useContext } from "react";
import { RadioCardContextValue } from "./types";

export const RadioCardContext = createContext<RadioCardContextValue>({
    onChange: () => {}
});

export const useRadioCardContext = () => useContext(RadioCardContext);
