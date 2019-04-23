import React from 'react';
import { TableCell, TableRow, Button, Tooltip } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export default class OverViewTableRowUsers extends React.Component {
    render() {
        const {user_firstname, user_lastname, user_email, user_role, user_id, settingsForSubpages} = this.props;

        let LinkToEditUser = null;
        let PageLink = null;
        let ComponentFile = null;

        if(settingsForSubpages){
            Object.keys(settingsForSubpages.pageItems).forEach(entry=>{
                //get name from settings definition in App.js
                if("editSpecificUser" === settingsForSubpages.pageItems[entry].identificationName){
                    PageLink = settingsForSubpages.pageItems[entry].pageLink;
                    ComponentFile = settingsForSubpages.pageItems[entry].componentFile;
                }
            });
            

        }

        return (

            <TableRow>
                <TableCell>
                    {user_firstname}
                </TableCell>
                <TableCell>
                    {user_lastname}
                </TableCell>
                <TableCell>
                    {user_email}
                </TableCell>
                <TableCell>
                    {user_role}
                </TableCell>
                <TableCell>
                    {user_id}
                </TableCell>
                <TableCell>
                    {PageLink ?
                        <Link className={"icon-link"} component={ComponentFile} to={
                            {
                                pathname: PageLink + "?" + user_id, 
                                state: { 
                                    user_id: user_id,
                                },
                            } 
                          }>
                            <Tooltip title="Benutzerdaten editieren">
                                <Button>
                                    <Icon color="primary">
                                        edit
                                    </Icon>
                                </Button>
                            </Tooltip>

                        </Link>
                        :
                        ""
                    }
                </TableCell>
            </TableRow>
        );

    }
}