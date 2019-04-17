import React from 'react';
import { TableCell, TableRow, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

export default class SmartSwitchOverViewTableRow extends React.Component {
    render() {
        const {smartswitch_name, smartswitch_id, connected_cardreader_id, settingsForSubpages} = this.props;
        let LinkToEditSmartSwitch = null;

        if(settingsForSubpages){

            let URIToEditPage = null;

            Object.keys(settingsForSubpages.pageItems).forEach(entry=>{
                //get link from settings definition in App.js
                if("editSpecificSmartSwitch" === settingsForSubpages.pageItems[entry].identificationName){
                    URIToEditPage = settingsForSubpages.pageItems[entry].pageLink;
                }
            });

            if(URIToEditPage){
                LinkToEditSmartSwitch = props => <Link to={{pathname: URIToEditPage+ "/:"+smartswitch_id, state: { user_id: smartswitch_id} }}  {...props} />
            }

        }

        return (

            <TableRow>
                <TableCell>
                    {smartswitch_name}
                </TableCell>
                <TableCell>
                    {smartswitch_id}
                </TableCell>
                <TableCell>
                    {connected_cardreader_id.join(", ")}
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