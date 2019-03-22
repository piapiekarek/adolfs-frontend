import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "./page/header/Header";
import {Grid, Typography} from "@material-ui/core";
import MachineView from './page/machines/MachineView';
import UsersOverView from './page/users/UsersOverView';
import UserEditor from './page/users/UserForm';
import testData from './testData.json';

export default class App extends Component {
    render() {
        const data = testData;
        const setPages={
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
                displayName: "Benutzerübersicht",
                identificationName : "showAllUsers",
                pageLink: "/users",
                iconName: "add_circle",
                visibleInToolbar: true,
                componentName: UsersOverView,
                },
                {
                displayName: "Maschinenübersicht",
                identificationName : "viewAllMachinesAndTools",
                pageLink: "/machineview",
                iconName: "add_circle",
                visibleInToolbar: true,
                componentName: MachineView,
                },
            ],
            rootPage:
                {
                    displayName: "Maschinenübersicht",
                    pageLink: "/",
                    componentName: MachineView,
                },

        };

        const RootPage = setPages.rootPage.componentName;
        return (
            <div className="App">
                <Grid container>
                    <Header header={setPages}/>
                    <Switch>
                        {/*Add default page to router*/}
                        <Route exact path={setPages.rootPage.pageLink} render={(props) =>
                            <React.Fragment>
                                <Grid item xs={12}>
                                    {
                                        setPages.rootPage.displayName ? (
                                            <Typography variant="h5" gutterBottom>
                                                <br/>
                                                {setPages.rootPage.displayName}
                                                <br/>
                                            </Typography>
                                        ):(<div> </div>)
                                    }
                                    <RootPage data={data}/>
                                </Grid>
                            </React.Fragment>
                        }/>

                        {
                            Object.keys(setPages.pageItems).map(function (entry) {
                                const item = setPages.pageItems[entry];

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
                                                       <ComponentName data={data} setPages={setPages}/>
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

