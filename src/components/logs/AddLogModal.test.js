import {fireEvent, screen} from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import AddLogModal from './AddLogModal';
import {renderWithWrapper} from "../../test-resources/utils";


describe('AddLogModal', () => {
    const initialState = {
        tech: {
            techs: [
                {id: '1', firstName: 'John', lastName: 'Smith'},
                {id: '2', firstName: 'Jane', lastName: 'Lovingly'},
            ],
            loading: false,
        },
    };

    it('should show the AddLogModal component', () => {
        // Setup
        const addModalTestId = 'add-log-modal';
        const textInputFieldTestid = 'add-log-input-field';
        const techSelectionDropdownTestId = 'tech-selection-dropdown';
        const modalEnterButtonTestId = 'add-log-button';

        renderWithWrapper(<AddLogModal/>, {initialState});

        // Selection
        const addLogModal = screen.queryByTestId(addModalTestId);
        const messageInput = screen.queryByTestId(textInputFieldTestid);
        const techSelecttionDropdown = screen.queryByTestId(techSelectionDropdownTestId);
        const enterButton = screen.queryByTestId(modalEnterButtonTestId);

        // Assertion
        expect(addLogModal).toBeInTheDocument();
        expect(messageInput).toBeInTheDocument();
        expect(techSelecttionDropdown).toBeInTheDocument();
        expect(enterButton).toBeInTheDocument();
    });


    it('should update message input value', () => {
        renderWithWrapper(<AddLogModal/>, {initialState});
        const messageInput = screen.getByTestId('add-log-input-field');
        fireEvent.change(messageInput, {target: {value: 'Test message'}});
        expect(messageInput.value).toBe('Test message');
    });

    it('should update attention checkbox value', () => {
        renderWithWrapper(<AddLogModal/>, {initialState});
        const attentionCheckbox = screen.getByTestId('add-log-check');
        fireEvent.click(attentionCheckbox);
        expect(attentionCheckbox.checked).toBe(true);
    });

});
