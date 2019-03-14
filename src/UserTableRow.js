import React from 'react';
import { TableCell, TableRow } from '@material-ui/core';

import Icon from '@material-ui/core/Icon';

export default class UserView extends React.Component {
    render() {
        const {user_firstname, user_lastname, user_email, user_role, user_id} = this.props;
 
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
                    <Icon color="primary">
                    add_circle
                    </Icon>
                </TableCell>
            </TableRow>
        );

    }
}