import EditableRow from "./components/EditableRow";
import React, { useState, Fragment } from "react";
import './App.css';
import { nanoid } from 'nanoid';
import data from './mock-data.json';
import ReadOnlyRow from "./components/ReadOnlyRow";


function App() {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        address: "",
        comments: ""
    });

    const [editFormData, setEditFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        address: "",
        comments: ""
    });


    const [editContactId, setEditContactId] = useState(null);


    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };



    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };





    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            mobile: addFormData.mobile,
            email: addFormData.email,
            address: addFormData.address,
            comments: addFormData.comments
        }
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    };



    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            mobile: editFormData.mobile,
            email: editFormData.email,
            address: editFormData.address,
            comments: editFormData.comments
        };

        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[index] = editedContact;
        setContacts(newContacts);
        setEditContactId(null);
    };
    const handleEditClick = (event, contact) => {
        event.preventDefault();
        setEditContactId(contact.id);
        const formValues = {
            fullName: contact.fullName,
            mobile: contact.mobile,
            email: contact.email,
            address: contact.address,
            comments: contact.comments
        }
        setEditFormData(formValues);
    };


    const handleCancelClick = () => {
        setEditContactId(null);
    };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...contacts];

        const index = contacts.findIndex((contact) => contact.id === contactId);

        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return ( <
        div className = "app-container" >

        <
        h1 id = "heading" > Enter Data of Student into Table < /h1>

        <
        form onSubmit = { handleAddFormSubmit } >
        <
        input type = "text"
        name = "fullName"
        required = "required"
        placeholder = "Enter a Name."
        onChange = { handleAddFormChange }
        /> <
        input type = "number"
        name = "mobile"
        required = "required"
        className = "mobile"
        placeholder = "Enter Mobile No."
        onChange = { handleAddFormChange }
        /> <
        input type = "email"
        name = "email"
        required = "required"
        placeholder = "Enter an Email."
        onChange = { handleAddFormChange }
        /> <
        input type = "text"
        name = "address"
        placeholder = "Enter an Address."
        onChange = { handleAddFormChange }
        /> <
        input type = "text"
        name = "comments"
        required = "required"
        placeholder = "Enter Grade ex-Good"
        onChange = { handleAddFormChange }
        /> <button type = "submit" > Add Details </button >


        <
        /form>


        <
        form handleEditFormSubmit = { handleEditFormSubmit } >
        <
        table >
        <
        thead >
        <
        tr >
        <
        th > Name < /th> <th > Mobile No. </th > <
        th > Email < /th> <
        th > Address < /th> <
        th > Comments < /th> <
        th > Actions < /th> </tr > < /thead> <tbody> {
        contacts.map((contact) => ( <
                Fragment > {
                    editContactId === contact.id ?
                    ( < EditableRow editFormData = { editFormData }
                        handleEditFormChange = { handleEditFormChange }
                        handleCancelClick = { handleCancelClick }
                        />):(<ReadOnlyRow 
                        contact = { contact }
                        handleEditClick = { handleEditClick }
                        handleDeleteClick = { handleDeleteClick }

                        />)}


                        <
                        /Fragment>
                    ))

            } < /tbody>


            <
            /table>   <
            /form>   <
            /div>
        );
    }
    export default App;