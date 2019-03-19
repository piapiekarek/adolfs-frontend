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
            headerItems:[
                {
                    name: "Benutzer bearbeiten",
                    link: "/userform",
                    icon: "add_circle",
                    visible: false,
                    componentName: UserEditor,
                },
                {
                name: "Benutzerübersicht",
                link: "/users",
                icon: "add_circle",
                visible: true,
                componentName: UsersOverView,
                },
                {
                    name: "Maschinenübersicht",
                    link: "/machineview",
                    icon: "add_circle",
                    visible: true,
                    componentName: MachineView,
                },
            ],
            rootPage:
                {
                    name: "Maschinenübersicht",
                    link: "/",
                    icon: "add_circle",
                    visible: true,
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
                        <Route exact path={setPages.rootPage.link} render={(props) =>
                            <React.Fragment>
                                <Grid item xs={12}>
                                    {
                                        setPages.rootPage.name ? (
                                            <Typography variant="h5" gutterBottom>
                                                <br/>
                                                {setPages.rootPage.name}
                                                <br/>
                                            </Typography>
                                        ):(<div> </div>)
                                    }
                                    <RootPage data={data}/>
                                </Grid>
                            </React.Fragment>
                        }/>

                        {
                            Object.keys(setPages.headerItems).map(function (entry) {
                                const item = setPages.headerItems[entry];

                                if ("componentName" in item) {
                                    const ComponentName = item.componentName;
                                    return (
                                        <Route exact
                                               path={item.link}
                                               key={item.link + "5"}
                                               render={ (props)=>
                                                   <Grid item xs={12}>
                                                       {
                                                           item.name ? (
                                                               <Typography variant="h5" gutterBottom>
                                                                   <br/>
                                                                   {item.name}
                                                                   <br/>
                                                               </Typography>
                                                           ):(<div> </div>)
                                                       }
                                                       <ComponentName data={data} />
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

