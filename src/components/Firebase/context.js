import React from "react";

const FirebaseContext = React.createContext(null);

export const withFirebase = Component => props => (
  <FirebaseContext.Component>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Component>
);

export default FirebaseContext;
