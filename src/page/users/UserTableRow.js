import React from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export default class UserView extends React.Component {
    render() {
        const {user_firstname, user_lastname, user_email, user_role, user_id, setPages} = this.props;

        let LinkToEditUser = null;

        if(setPages){

            let URIToEditPage = null;

            Object.keys(setPages.pageItems).forEach(entry=>{
                if("editSpecificUser" === setPages.pageItems[entry].identificationName){
                    URIToEditPage = setPages.pageItems[entry].pageLink;
                }
            });

            if(URIToEditPage){
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