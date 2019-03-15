import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from "./page/header/Header";
import {Grid} from "@material-ui/core";
import MachineView from './page/machines/MachineView';
import UsersOverView from './page/users/UsersOverView';
import RouterSwitchCase from './page/RouterSwitchCase';
import UserEditor from './page/users/UserForm';

export default class App extends Component {
    render() {
        const header={
            title: "Maschinen und Werkzeugwand",
            headerItems:[
                {
                    name: "Benutzer bearbeiten",
                    link: "userform",
                    icon: "add_circle",
                    visible: false,
                    layoutName: UserEditor,
                },
                {
                name: "Benutzerübersicht",
                link: "users",
                icon: "add_circle",
                visible: true,
                layoutName: UsersOverView,
                },
                {
                    name: "Maschinenübersicht",
                    link: "machineview",
                    icon: "add_circle",
                    visible: true,
                    layoutName: MachineView,
                },
            ]
        };
        const data = {
            machines : [
                {
                    name: "test1",
                    state: "on",
                    id: "asdf1"
                },
                {
                    name: "test2",
                    state: "on",
                    id: "asdf2"
                },
                {
                    name: "test3",
                    state: "off",
                    id: "asdf3"
                },
                {
                    name: "test4",
                    state: "on",
                    id: "asdf4"
                },
                {
                    name: "test5",
                    state: "on",
                    id: "asdf5"
                },
                {
                    name: "test6",
                    state: "on",
                    id: "asdf6"
                },
                {
                    name: "test7",
                    state: "off",
                    id: "asdf7"
                },
                {
                    name: "test8",
                    state: "on",
                    id: "asdf8"
                },
            ],
            users: [
                {
                    first_name: "test1",
                    last_name: "test1",
                    email: "test@test.de",
                    id: "test1",
                    password: "test1",
                    role: "supervisor",
                },
                {
                    firstname: "test2",
                    lastname: "test2",
                    email: "test@test.de",
                    id: "test2",
                    password: "test2",
                    role: "admin",
                },
                {
                    firstname: "test3",
                    lastname: "test3",
                    email: "test@test.de",
                    id: "test3",
                    password: "test3",
                    role: "supervisor",
                },
                {
                    firstname: "test4",
                    lastname: "test4",
                    email: "test@test.de",
                    id: "test4",
                    password: "test4",
                    role: "supervisor",
                }
            ],
        };
        return (
            <div className="App">
                <Grid container>
                    <Header header={header}/>
                    <Switch>
                        {/*Add default page to router*/}
                        <Route exact path={"/"} render={(props) =>
                            <React.Fragment>
                                <Grid item xs={12}>
                                    <MachineView data={data}/>
                                </Grid>
                            </React.Fragment>
                        }/>

                        {
                            Object.keys(header.headerItems).map(function (entry) {
                                const item = header.headerItems[entry];

                                if ("layoutName" in item) {
                                    console.log("link: " + item.link + " layoutName: " + item.layoutName);
                                    return (
                                        <RouterSwitchCase
                                            key={item.link}
                                            layoutName={item.layoutName}
                                            link={item.link}
                                            data={data}
                                            module_title={item.name}
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

