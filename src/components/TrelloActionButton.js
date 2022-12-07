// * LOOK FOR GREEN MARKERS FOR ERRORS

import React from 'react';
import Icon from '@mui/material/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import { connect } from 'react-redux';
import { addList, addCard } from '../actions';


class TrelloActionButton extends React.Component {

    state = {
        formOpen: false, //by default its false so it wont show the form upon render
        text: '',
    }

    openForm = () => {
        this.setState({
            formOpen: true,
        });
    };

    closeForm = (event) => {
        this.setState({
            formOpen: false,
        });
    };

    handleInputChange = (event) => {
        this.setState({
            text: event.target.value,
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({ 
                text: ''
            });
            dispatch(addList(text));
        }

        return;
    };

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if(text) {
            this.setState({ 
                text: ''
            });
            dispatch(addCard(listID, text));
        }
    };

    renderForm = () => {

        const { list } = this.props;
        const placeHolder = list 
            ? 'Enter list title...' 
            : 'Enter a tile for this card...';

            const buttonTitle = list ? 'Add List' : 'Add Card';

        return (
            <div>
                <Card 
                    style={
                        {
                            minHeight: 85,
                            minWidth: 272,
                            padding: '6px 8px 2px',
                        }
                    }>
                    <TextareaAutosize 
                        placeholder={placeHolder} 
                        autoFocus 
                        onBlur={this.closeForm} 
                        value={this.state.text}
                        onChange={this.handleInputChange} //by making this a class method it wont recreate instances of this method
                        style={
                            {
                                resize: 'none',
                                width: '100%',
                                overflow: 'hidden',
                                outline: 'none',
                                border: 'none',
                            }
                        }
                    />
                </Card>
                <div style={styles.formButtonGroup}>
                    <Button 
                        onMouseDown={list ? this.handleAddList : this.handleAddCard} //TRICKY IF ITS ONLICK THEN ONBLUR FIRES FIRST AND THIS WONT WORK...SO USE ONMOUSEDOWN
                        variant='contained' 
                        style={{color: 'while', backgroundColor: '#5aac44'}}
                    >
                        {buttonTitle}{' '}
                    </Button>
                    <Icon 
                        style={{ marginLeft: 8, cursor: 'pointer' }}
                    >
                        close
                    </Icon>
                </div>
            </div>
        )
    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? 'add another list' : 'add another card';
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? 'white' : 'inherit';
        const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';

        return (
            <div 
                onClick={this.openForm}
                style={{
                    ...styles.openForButtonGroup,
                    opacity: buttonTextOpacity, 
                    color: buttonTextColor, 
                    backgroundColor: buttonTextBackground
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    render () {
        return (
            this.state.formOpen ? this.renderForm() : this.renderAddButton()
        );
    }
}

const styles = {
    openForButtonGroup: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10,
    },
    formButtonGroup: {
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
    }
}

// export default TrelloActionButton;
export default connect()(TrelloActionButton);