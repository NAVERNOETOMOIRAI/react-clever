import { Component } from "react";
import { appStore } from "../store/appStore";
import { Provider } from 'react-redux'

const withRedux = (component: any) => () => (
    <Provider store={appStore}>
        {component()}
    </Provider>
);

export default withRedux;
