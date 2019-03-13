import React from 'react';
import {AppBar, Toolbar, Typography, Hidden, IconButton, List, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderListItem from "./HeaderListItem";
import HeaderToolbarButton from "./HeaderToolbarButton";

export default class Header extends React.Component {
    //state gets changed by toggle drawer
    state = {
        left: false,
    };

    // needed for mobile devices
    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        // in order to add new menu items add them to header Items
        const header={
            title: "Maschinen und Werkzeugwand",
            headerItems:[
                {
                    "name": "string1",
                    "link": "string1",
                    "icon": "string1",
                },
                {
                    "name": "string2",
                    "link": "string2",
                    "icon": "string2",
                },
                {
                    "name": "string3",
                    "link": "string3",
                    "icon": "string3",
                },
                {
                    "name": "string4",
                    "link": "string4",
                    "icon": "string4",
                },
            ]
        };

        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" style={{marginRight: 20}}>
                        {header.title}
                    </Typography>

                    {/*visible only for Devices bigger than a smartphone*/}
                    <Hidden xsDown>
                        {
                            Object.keys(header.headerItems).map(function (entry) {
                                const item = header.headerItems(entry);
                                if ("name" in item) {
                                    return (
                                        <HeaderToolbarButton link={item.link} name={item.name}/>
                                    )
                                }
                            }, this)
                        }
                    </Hidden>

                    {/*visible only for smartphones*/}
                    <Hidden smUp>
                        {/*Menu Button for smartphones*/}
                        <IconButton
                            className={"menubutton"}
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.toggleDrawer('left', true)}>
                            <MenuIcon/>
                        </IconButton>

                        {/*Drawer that is visible if button is pressed*/}
                        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                            <div
                                tabIndex={0}
                                role="button"
                                onClick={this.toggleDrawer('left', false)}
                                onKeyDown={this.toggleDrawer('left', false)}
                            >
                                <List>
                                    {
                                        Object.keys(header.headerItems).map(function (entry) {
                                            const item = header.headerItems(entry);
                                            if ("name" in item) {
                                                return (
                                                    <HeaderListItem link={item.link} name={item.name} icon={item.icon}/>
                                                )
                                            }
                                        }, this)
                                    }
                                </List>
                            </div>
                        </Drawer>
                    </Hidden>
                </Toolbar>
            </AppBar>
        );
    }
}