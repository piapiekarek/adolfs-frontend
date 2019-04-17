import React from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export default class CardReaderOverViewTableRow extends React.Component {
    render() {
        const {cardreader_name, cardreader_id, cardreader_interval, cardreader_role, settingsForSubpages} = this.props;

        let LinkToEditSmartSwitch = null;

        if(settingsForSubpages){

            let URIToEditPage = null;

            Object.keys(settingsForSubpages.pageItems).forEach(entry=>{
                //get link from settings definition in App.js
                if("editSpecificCardReader" === settingsForSubpages.pageItems[entry].identificationName){
                    URIToEditPage = settingsForSubpages.pageItems[entry].pageLink;
                }
            });

            if(URIToEditPage){
                LinkToEditSmartSwitch = props => <Link to={{pathname: URIToEditPage+ "/:"+cardreader_id, state: { user_id: cardreader_id} }}  {...props} />
            }

        }

        return (

            <TableRow>
                <TableCell>
                    {cardreader_name}
                </TableCell>
                <TableCell>
                    {cardreader_interval}
                </TableCell>
                <TableCell>
                    {cardreader_role}
                </TableCell>
                <TableCell>
                    {cardreader_id}
                </TableCell>
                <TableCell>
                    {LinkToEditSmartSwitch ?
                        <Button component={LinkToEditSmartSwitch}>
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