import React, { Component } from 'react';
import './App.css';
import HeaderToolbarButton from "./page/header/HeaderToolbarButton";

class App extends Component {
    render() {
        const header={
            title: "Maschinen und Werkzeugwand",
            headerItems:[
                {
                    name: "string1",
                    link: "string1",
                    icon: "string1",
                    layoutName: "string1",
                },
                {
                    name: "string2",
                    link: "string2",
                    icon: "string2",
                    layoutName: "string2",
                },
                {
                    name: "string3",
                    link: "string3",
                    icon: "string3",
                    layoutName: "string3",
                },
                {
                    name: "string4",
                    link: "string4",
                    icon: "string4",
                    layoutName: "string4",
                },
            ]
        };

        return (
            <div className="App">
                <MuiThemeProvider theme={theme}>
                    <Grid container spacing={0} style={{ margin: 0, width: '100%' }}>
                        <Switch>
                            {
                                Object.keys(header.headerItems).map(function (entry) {
                                    const item = header.headerItems(entry);
                                    if (("layoutName" in item) &&("name" in item)&&("link" in item)&&("icon" in item)){
                                        return (
                                            <RouterSwitchCase header={header} />
                                        )
                                    }
                                }, this)
                            }
                            <Route exact path="/" render={(props) =>
                                <React.Fragment>
                                    <Header current={current} logs={logs} />
                                    <Grid item xs={12}>
                                        <Main current={current} logs={logs} />
                                    </Grid>
                                </React.Fragment>
                            } />
                            <Route exact path="/raspberrypi" render={(props) =>
                                <RaspberryPiLayout current={current} logs={logs} />
                            } />
                            <Route exact path="/statistics" render={(props) =>
                                <React.Fragment>
                                    <Header current={current} logs={logs} />
                                    <Grid item xs={12}>
                                        <Statistics current={current} logs={logs} />
                                    </Grid>
                                </React.Fragment>
                            } />
                            <Route exact path="/logs" render={(props) =>
                                <React.Fragment>
                                    <Header current={current} logs={logs} />
                                    <Grid item xs={12}>
                                        <Logs current={current} logs={logs} />
                                    </Grid>
                                </React.Fragment>
                            } />
                            <Route exact path="/messaging" render={(props) =>
                                <React.Fragment>
                                    <Header current={current} logs={logs} />
                                    <Grid item xs={12}>
                                        <Messaging current={current} logs={logs} token={this.state.token} message={this.state.message} />
                                    </Grid>
                                </React.Fragment>
                            } />
                        </Switch>
                    </Grid>
                </MuiThemeProvider>
            </div>
        );
    }
}

export default App;
