import { useState } from "react";
import PropTypes from 'prop-types';

export const useForm = ( initialForm = {} ) => {
    
    const [ formState, setFormState ] = useState( initialForm );

    const handleInputChange = ( { target } ) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetValues = () => {
        setFormState( initialForm );
    }

    return {
        formState,
        handleInputChange,
        onResetValues,
    }
}

useForm.propTypes = {
    initialForm: PropTypes.object.isRequired
}
