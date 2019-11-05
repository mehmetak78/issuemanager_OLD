import React from 'react';
import {Provider} from "react-redux"
import reduxStore from "./redux/store"
import './App.css';
import TopMenu from "./components/layout/TopMenu";

import MiddlePage from "./components/layout/MiddlePage";

import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';

import {BrowserRouter} from "react-router-dom";
import ContainerMAK from "./components/components/ContainerMAK";


function App() {
    const theme = createMuiTheme({

                                     palette: {
                                         type: "light",
                                         primary: {
                                             main: '#2e7d32',
                                             light: "#2e7d32",
                                             dark: "#2ead32",
                                             contrastText: "#fff"
                                         },
                                         secondary: {
                                             main: '#388e3c',
                                             light: "#ff4081",
                                             dark: "#38be3c",
                                             contrastText: "#fff"
                                         },
                                         text: {
                                             primary: '#2e7d32',
                                             secondary: "#388e3c",
                                             disabled: "rgba(0, 0, 0, 0.38)",
                                             hint: "rgba(0, 0, 0, 0.38)"
                                         },
                                     },
                                     typography: {
                                         useNextVariants: true,
                                         fontSize: 12,

                                         button: {
                                             fontSize: 14,
                                             fontWeight: 700,
                                             textTransform: "none"
                                         },
                                         h1: {
                                             fontFamily: 'Roboto", "Helvetica", "Arial", sans-serif"',
                                             fontWeight: 600,
                                             fontSize: "2rem",
                                             lineHeight: 1,
                                             letterSpacing: "-0.01562em"
                                         }
                                     }
                                 });

    return (
        <ThemeProvider theme={theme}>
            <Provider store={reduxStore}>
                <BrowserRouter>
                    <div className="App">
                        <div className="TopMenu">
                            <TopMenu/>
                        </div>
                        <div className="MiddlePage">
                            <ContainerMAK>
                            <MiddlePage/>
                            </ContainerMAK>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
