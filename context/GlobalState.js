import { createContext } from "react";

const StateContext = createContext();

const StateProvider = ({ children, value }) => {
  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export function withComponentFactory(Component) {
  return function WithComponentFactory(props) {
    return (
      <StateContext.Consumer>
        {(context) => <Component {...props} context={context} />}
      </StateContext.Consumer>
    );
  };
}

export { StateProvider, StateContext };
