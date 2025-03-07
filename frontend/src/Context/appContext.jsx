import combineContext from "@/Helpers/combineContext";
import { MenuContextProvider } from "./menuContext";
import { SocketContextProvider } from "./socketContext";
import { UserContextProvidere } from "./userContext";
import { CreatePollContextProvider } from "./createPollContext";
import { HomepageContextProvider } from "./homepageContext";
export const AppContextProvider = combineContext(MenuContextProvider, SocketContextProvider, UserContextProvidere, CreatePollContextProvider, HomepageContextProvider)