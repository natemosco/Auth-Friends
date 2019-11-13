import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addUser } from "../actions";

function AddUserForm(props) {
    const [formValues, setFormValues] = useState({
        name: "",
        age: "",
        email: "",
        id: ""
    })
    const formUpdater = (e) => {
        let target = e.target
        setFormValues((formValues) => (
            {
                ...formValues,
                [target.id]: target.value
            }
        ))
    };
    const onSubmit = e => {
        e.preventDefault();
        console.log(formValues);
        props.addUser(formValues)
        setFormValues({
            name: "",
            age: "",
            email: "",
            id: ""
        });
    };
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={formValues.name} onChange={formUpdater} placeholder="ex: Johnny Test" />

            <label htmlFor="age">Age:</label>
            <input type="text" id="age" value={formValues.age} onChange={formUpdater} placeholder="ex: 30yrs" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={formValues.email} onChange={formUpdater} placeholder="student@lambdaschool.com" />

            <label htmlFor="id">ID:</label>
            <input type="text" id="id" value={formValues.id} onChange={formUpdater} placeholder="ex: 32" />

            <button onClick={onSubmit}>Click Here To Add  </button>

        </form>
    )
}
export default connect(null, { addUser })(AddUserForm)