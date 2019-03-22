import React from 'react';
import {ListItem, ListItemText, ListItemIcon, Icon} from '@material-ui/core';


export default class HeaderListItem extends React.Component {


    render() {
        const {link, displayName, icon} = this.props;
        return(
            <ListItem component="a" button href={link}>
                <ListItemIcon>
                    <Icon color="primary">
                        {icon}
                    </Icon>
                </ListItemIcon>
                <ListItemText primary={displayName} />
            </ListItem>
        )
    }
}