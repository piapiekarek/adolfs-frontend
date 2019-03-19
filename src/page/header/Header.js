import React from 'react';
import {AppBar, Toolbar, Typography, Hidden, IconButton, List, Drawer} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
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
        const {header} = this.props;

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
                                const item = header.headerItems[entry];
                                if (("name" in item) && (true === item.visibleInToolbar)){
                                    return (
                                        <HeaderToolbarButton key={item.link + "1"} link={item.link} name={item.name}/>
                                    )
                                }
                                return(null)
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
                            <Icon>
                                menu
                            </Icon>
                            {/*<MenuIcon/>*/}
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
                                            const item = header.headerItems[entry];
                                            if ("name" in item) {
                                                return (
                                                    <HeaderListItem key={item.link + "2"} link={item.link} name={item.name} icon={item.icon}/>
                                                )
                                            }
                                            return(null)
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