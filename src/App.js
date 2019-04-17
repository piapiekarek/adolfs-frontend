import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "./page/header/Header";
import {Grid, Typography} from "@material-ui/core";
import MachineOverview from './page/machines/MachineOverview';
import UsersOverview from './page/users/UsersOverview';
import UserEditor from './page/users/UserForm';
import testData from './testData.json';
import SmartSwitchOverview from './page/smartswitch/SmartSwitchOverview';
import CardReaderOverview from './page/cardreader/CardReaderOverview';

export default class App extends Component {
    render() {
        const data = testData;
        const settingsForSubpages={
            title: "Maschinen und Werkzeugwand",
            pageItems:[
                {
                    displayName: "Benutzer bearbeiten",
                    identificationName : "editSpecificUser",
                    pageLink: "/userform",
                    iconName: "add_circle",
                    visibleInToolbar: false,
                    componentName: UserEditor,
                },
                {
                    displayName: "Benutzer",
                    identificationName : "showAllUsers",
                    pageLink: "/users",
                    iconName: "add_circle",
                    visibleInToolbar: true,
                    componentName: UsersOverview,
                },
                {
                    displayName: "Maschinen",
                    identificationName : "viewAllMachinesAndTools",
                    pageLink: "/machineview",
                    iconName: "add_circle",
                    visibleInToolbar: true,
                    componentName: MachineOverview,
                },
                {
                    displayName: "Smart-Switches",
                    identificationName : "viewAllSmartSwitches",
                    pageLink: "/smartswitches",
                    iconName: "add_circle",
                    visibleInToolbar: true,
                    componentName: SmartSwitchOverview,
                },
                {
                    displayName: "Card-Reader",
                    identificationName : "viewAllCardReaders",
                    pageLink: "/cardreaders",
                    iconName: "add_circle",
                    visibleInToolbar: true,
                    componentName: CardReaderOverview,
                },
            ],
            rootPage:
                {
                    displayName: "Maschinen",
                    pageLink: "/",
                    componentName: MachineOverview,
                },

        };

        const RootPage = settingsForSubpages.rootPage.componentName;
        return (
            <div className="App">
                <Grid container>
                    <Header header={settingsForSubpages}/>
                    <Switch>
                        {/*Add default page to router*/}
                        <Route exact path={settingsForSubpages.rootPage.pageLink} render={(props) =>
                            <React.Fragment>
                                <Grid item xs={12}>
                                    {
                                        settingsForSubpages.rootPage.displayName ? (
                                            <Typography variant="h5" gutterBottom>
                                                <br/>
                                                {settingsForSubpages.rootPage.displayName}
                                                <br/>
                                            </Typography>
                                        ):(<div> </div>)
                                    }
                                    <RootPage data={data}/>
                                </Grid>
                            </React.Fragment>
                        }/>

                        {
                            Object.keys(settingsForSubpages.pageItems).map(function (entry) {
                                const item = settingsForSubpages.pageItems[entry];

                                if ("componentName" in item) {
                                    const ComponentName = item.componentName;
                                    return (
                                        <Route exact
                                               path={item.pageLink}
                                               key={item.pageLink + "5"}
                                               render={ (props)=>
                                                   <Grid item xs={12}>
                                                       {
                                                           item.displayName ? (
                                                               <Typography variant="h5" gutterBottom>
                                                                   <br/>
                                                                   {item.displayName}
                                                                   <br/>
                                                               </Typography>
                                                           ):(<div> </div>)
                                                       }
                                                       <ComponentName data={data} settingsForSubpages={settingsForSubpages}/>
                                                   </Grid>
                                               }
                                            />
                                    )
                                }
                                return (null)
                            }, this)
                        }
                    </Switch>
                </Grid>
            </div>
        );

    }
}

