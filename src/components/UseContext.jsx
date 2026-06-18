import React from "react";
const UseContext = React.createContext();
const UserProvider = UseContext.Provider;
const UserConsumer = UseContext.Consumer;
export { UserProvider, UserConsumer };
// created context
export default UseContext;
