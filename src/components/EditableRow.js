import React from 'react';


const EditableRow = ({
    editFormData,
    handleEditFormChange,
    handleCancelClick
}) => {
    return ( <
        tr >
        <
        td >
        <
        input type = "text"
        required = "required"
        placeholder = "Enter a name..."
        name = "fullName"
        value = { editFormData.fullName }
        onChange = { handleEditFormChange } >
        <
        /input> </td >

        <
        td >
        <
        input type = "number"
        placeholder = "Enter a mobile..."
        name = "mobile"
        required = "required"
        value = { editFormData.mobile }
        onChange = { handleEditFormChange } >
        <
        /input> </td > <
        td >
        <
        input type = "email"
        name = "email"
        required = "required"
        placeholder = "Enter an Email."
        value = { editFormData.email }
        onChange = { handleEditFormChange }
        /> </td > <
        td >
        <
        input type = "text"
        name = "address"
        placeholder = "Enter an Address."
        value = { editFormData.address }
        onChange = { handleEditFormChange }
        /> </td > <
        td >
        <
        input type = "text"
        name = "comments"
        required = "required"
        placeholder = "Enter Grade ex-Good"
        value = { editFormData.comments }
        onChange = { handleEditFormChange }
        /> </td > <
        td >
        <
        button type = "submit" > Save < /button> <
        button type = "button"
        onClick = { handleCancelClick } >
        Cancel < /button>  </td > < /tr>

    );
};
export default EditableRow;