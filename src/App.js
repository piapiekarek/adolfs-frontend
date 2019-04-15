import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "./page/header/Header";
import {Grid, Typography} from "@material-ui/core";
import MachineView from './page/machines/MachineView';
import UsersOverView from './page/users/UsersOverView';
import UserEditor from './page/users/UserForm';
import testData from './testData.json';
import SmartSwitchOverView from './page/smartswitch/SmartSwitchOverView';
import CardReaderOverView from './page/cardreader/CardReaderOverView';

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
                    displayName: "Benutzer Übersicht",
                    identificationName : "showAllUsers",
                    pageLink: "/users",
                    iconName: "add_circle",
                    visibleInToolbar: true,
                    componentName: UsersOverView,
                },
                {
                    displayName: "Maschinen Übersicht",
                    identificationName : "viewAllMachinesAndTools",
                    pageLink: "/machineview",
                    iconName: "add_circle",
                    visibleInToolbar: true,
                    componentName: MachineView,
                },
                {
                    displayName: "Smart-Switch Übersicht",
                    identificationName : "viewAllSmartSwitches",
                    pageLink: "/smartswitches",
                    iconName: "add_circle",
                    visibleInToolbar: true,
                    componentName: SmartSwitchOverView,
                },
                {
                    displayName: "Card-Reader Übersicht",
                    identificationName : "viewAllCardReaders",
                    pageLink: "/cardreaders",
                    iconName: "add_circle",
                    visibleInToolbar: true,
                    componentName: CardReaderOverView,
                },
            ],
            rootPage:
                {
                    displayName: "Maschinenübersicht",
                    pageLink: "/",
                    componentName: MachineView,
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

