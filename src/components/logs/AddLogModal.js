import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLog} from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

import useOnSubmit from "../../hooks/use-on-submit";

const AddLogModal = ({addLog}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setSelectedTech] = useState('');
    const {handleOnSubmit, setFetch} = useOnSubmit({
        onSubmit: () => {
            const newLog = {
                message, attention, tech, date: new Date(),
            };
            addLog(newLog);
            clearUserInputs();
        }
    })
    const clearUserInputs = () => {
        setMessage('');
        setAttention(false);
        setSelectedTech('');
        setFetch({
            isSubmitted: false, isComplete: false, isFetching: false,
        })
    }

    return (<div id='add-log-modal' data-testid="add-log-modal" className='modal' style={modalStyle}>
        <div className='modal-content'>
            <h4>Enter System Log</h4>
            <div className='row'>
                <div className='input-field'>
                    <input
                        type='text'
                        aria-label='Log Message'
                        data-testid='add-log-input-field'
                        name='message'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <label htmlFor='message' className='active'>
                        Log Message
                    </label>
                </div>
            </div>

            <div className='row'>
                <div className='input-field' data-testid="tech-selection-dropdown">
                    <TechSelectOptions onChange={(e) => setSelectedTech(e.target.value)} selected={tech}/>
                </div>
            </div>


            <div className='row'>
                <div className='input-field'>
                    <p>
                        <label>
                            <input
                                data-testid='add-log-check'
                                type='checkbox'
                                className='filled-in'
                                checked={attention}
                                value={attention}
                                onChange={e => setAttention(!attention)}
                            />
                            <span>Needs Attention</span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
        <div className='modal-footer'>
            <a
                href='#!'
                data-testid='add-log-button'
                onClick={() => handleOnSubmit({
                    message, attention, tech
                })}
                className='modal-close waves-effect blue waves-light btn'
            >
                Enter
            </a>
        </div>
    </div>);
};

AddLogModal.propTypes = {
    addLog: PropTypes.func.isRequired,
};

const modalStyle = {
    width: '75%', height: '75%',
};

export default connect(null, {addLog})(AddLogModal);
