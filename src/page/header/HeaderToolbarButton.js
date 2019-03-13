import React from 'react';
import {Button} from '@material-ui/core';

export default class Header extends React.Component {



    render() {
        const {link, name} = this.props;
        return(
            <Button color="primary" href={link}>
                {name}
            </Button>
        )
    }
}