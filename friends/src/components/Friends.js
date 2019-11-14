import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { axiosGet } from "../actions";

import AddUserForm from "./AddUserForm";

function Friends(props) {

    useEffect(() => {
        props.axiosGet()
    }, [])

    return (
        <div>
            <h2>Friends:</h2>
            <AddUserForm></AddUserForm>
            {props.friends.map(friendObj => {
                return (

                    <div>
                        <h4>{friendObj.name}</h4>
                        <p>{friendObj.id}</p>
                        <p>{friendObj.age}</p>
                        <i>{friendObj.email}</i>
                    </div>
                )
            })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        friends: state.friends
    }
};
export default connect(mapStateToProps, { axiosGet })(Friends);