import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "./page/header/Header";
import {Grid, Typography} from "@material-ui/core";
import MachineOverview from './page/machines/OverviewMachine';
import UsersOverview from './page/users/OverviewUsers';
import AddNewUser from './page/users/AddNewUser';
import EditUser from './page/users/EditUser';
import testData from './testData.json';
import SmartSwitchOverview from './page/smartswitch/OverviewSmartSwitch';
import CardReaderOverview from './page/cardreader/OverviewCardReader';

export default class App extends Component {
    render() {
        const data = testData;
        /*
            In the object pageItems, new Pages can be added by declaring 
            * the displayName (which is visible on the top of each page),
            * the identificationName (which is used to identify the component in other components),
            * the iconName (which sets the Icon for the mobile page)
            * the flag visibleInToolbar (which is not wanted for the Edit pages - too many Toolbar items)
            * the componentFile (wh)
        */
        const settingsForSubpages={
            title: "Maschinen und Werkzeugwand",
            pageItems:[
                //Overviews
                {
                    displayName: "Benutzer",
                    identificationName : "showAllUsers",
                    pageLink: "/users",
                    iconName: "account",
                    visibleInToolbar: true,
                    componentFile: UsersOverview,
                },
                {
                    displayName: "Maschinen",
                    identificationName : "viewAllMachinesAndTools",
                    pageLink: "/machineview",
                    iconName: "settings_power",
                    visibleInToolbar: true,
                    componentFile: MachineOverview,
                },
                {
                    displayName: "Smart-Switches",
                    identificationName : "viewAllSmartSwitches",
                    pageLink: "/smartswitches",
                    iconName: "tune",
                    visibleInToolbar: true,
                    componentFile: SmartSwitchOverview,
                },
                {
                    displayName: "Card-Reader",
                    identificationName : "viewAllCardReaders",
                    pageLink: "/cardreaders",
                    iconName: "credit_card",
                    visibleInToolbar: true,
                    componentFile: CardReaderOverview,
                },
                //Edit
                {
                    displayName: "Benutzer bearbeiten",
                    identificationName : "editSpecificUser",
                    pageLink: "/edituser",
                    iconName: "edit",
                    visibleInToolbar: false,
                    componentFile: EditUser,
                },
                {
                    displayName: "Maschinen bearbeiten",
                    identificationName : "editSpecificMachine",
                    pageLink: "/editmachine",
                    iconName: "edit",
                    visibleInToolbar: false,
                    componentFile: EditUser,
                },
                {
                    displayName: "Smart-Switch bearbeiten",
                    identificationName : "editSpecificSmartSwitch",
                    pageLink: "/editsmartswitch",
                    iconName: "edit",
                    visibleInToolbar: false,
                    componentFile: EditUser,
                },
                {
                    displayName: "Card-Reader bearbeiten",
                    identificationName : "editSpecificCardReader",
                    pageLink: "/editcardreader",
                    iconName: "edit",
                    visibleInToolbar: false,
                    componentFile: EditUser,
                },
                //Add
                {
                    displayName: "Neuen Benutzer hinzufügen",
                    identificationName : "addNewUser",
                    pageLink: "/adduser",
                    iconName: "add_circle",
                    visibleInToolbar: false,
                    componentFile: AddNewUser,
                },
                {
                    displayName: "Neue Maschine hinzufügen",
                    identificationName : "addNewMachine",
                    pageLink: "/addmachine",
                    iconName: "add_circle",
                    visibleInToolbar: false,
                    componentFile: AddNewUser,
                },
                {
                    displayName: "Neuen Smart-Switch hinzufügen",
                    identificationName : "addNewSmartSwitch",
                    pageLink: "/addsmartswitch",
                    iconName: "add_circle",
                    visibleInToolbar: false,
                    componentFile: AddNewUser,
                },
                {
                    displayName: "Neuen Card-Reader hinzufügen",
                    identificationName : "addNewCardReader",
                    pageLink: "/addcardreader",
                    iconName: "add_circle",
                    visibleInToolbar: false,
                    componentFile: AddNewUser,
                },
            ],
            rootPage:
                {
                    displayName: "Maschinen",
                    pageLink: "/",
                    componentFile: MachineOverview,
                },

        };

        const RootPage = settingsForSubpages.rootPage.componentFile;
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

                                if ("componentFile" in item) {
                                    const ComponentFile = item.componentFile;
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
                                                       <ComponentFile data={data} settingsForSubpages={settingsForSubpages}/>
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

