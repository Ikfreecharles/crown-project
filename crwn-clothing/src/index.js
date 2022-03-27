import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/Store";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { resolvers, typeDefs } from "./graphql/resolvers";

const client = new ApolloClient({
   uri: "http://localhost:4000/graphql",
   cache: new InMemoryCache(),
   typeDefs,
   resolvers,
});

ReactDOM.render(
   <ApolloProvider client={client}>
      <Provider store={store}>
         <React.StrictMode>
            <BrowserRouter>
               <PersistGate persistor={persistor}>
                  <App />
               </PersistGate>
            </BrowserRouter>
         </React.StrictMode>
      </Provider>
   </ApolloProvider>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
