import React from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export default class UsersOverViewTableRow extends React.Component {
    render() {
        const {user_firstname, user_lastname, user_email, user_role, user_id, settingsForSubpages} = this.props;

        let LinkToEditUser = null;

        if(settingsForSubpages){

            let URIToEditPage = null;

            Object.keys(settingsForSubpages.pageItems).forEach(entry=>{
                //get name from settings definition in App.js
                if("editSpecificUser" === settingsForSubpages.pageItems[entry].identificationName){
                    URIToEditPage = settingsForSubpages.pageItems[entry].pageLink;
                }
            });

            if(URIToEditPage){
                console.log(URIToEditPage);
                LinkToEditUser = props => <Link to={{pathname: URIToEditPage+ "/:"+user_id, state: { user_id: user_id} }}  {...props} />
            }

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
                    {LinkToEditUser ?
                        <Button component={LinkToEditUser}>
                            <Icon color="primary">
                                add_circle
                            </Icon>
                        </Button>
                        :
                        ""
                    }
                </TableCell>
            </TableRow>
        );

    }
}