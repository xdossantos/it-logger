import React, {useEffect, useState} from 'react';
import Toast from "../components/layout/Toast";

/**
 * Checks if any of the values in the object are falsy.
 *
 * @param obj The object to check.
 * @returns True if any of the values are falsy, false otherwise.
 */
const areFormValuesInvalid = (obj) => {
    for (const key of Object.keys(obj)) {
        if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
            return false;
        }
    }

    return true;
};

// TODO: Generalise this and use for DELETE, other https transaction in other components.

const useOnSubmit = ({onSubmit}) => {
    const initialState = {
        isSubmitted: false, isComplete: false, isFetching: false,
    }

    const [fetch, setFetch] = useState(initialState);

    const handleOnSubmit = (formData) => {

        const {
            tech
        } = formData;

        setFetch({
            isSubmitted: true, isComplete: false, isFetching: true,
        })

        if (!areFormValuesInvalid(formData)) {
            Toast('Please enter a message and select a technician', "error");
        } else {
            onSubmit();
            Toast(`log changes saved by ${tech}`);
            setFetch({
                isSubmitted: true, isComplete: true, isFetching: false,
            })
        }
    };

    return {
        fetch, handleOnSubmit, onSubmit, setFetch,
    };
};

export default useOnSubmit;
