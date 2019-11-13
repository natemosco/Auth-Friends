import React from 'react'
import { connect } from "react-redux";

function Friends(props) {
    return (
        <div>
            <h2>Friends:</h2>
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
export default connect(mapStateToProps, {})(Friends);