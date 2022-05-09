import {bindActionCreators} from "redux";
import React from 'react';
import {connect} from "react-redux";
import { changeFirstName, changeSecondName} from '../store/actions';


function App(props) {
    const { firstName, secondName, changeFirstName, changeSecondName} = props;
    console.log(props)
    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    value={props.firstName}
                    onChange={(event) => {
                        changeFirstName(event.target.value)
                    }}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Second Name"
                    value={props.secondName}
                    onChange={(event) => {
                        changeSecondName(event.target.value)
                    }}
                />
            </div>
            <div>{`Вы: ${firstName} ${secondName} `}</div>
        </div>
    );
}

const putStateToProps = (state) => {
    return {
        firstName: state.firstName,
        secondName: state.secondName
    };
};

const putActionToProps = (dispatch) => {
    return {
        changeFirstName: bindActionCreators(changeFirstName, dispatch),
        changeSecondName: bindActionCreators(changeSecondName, dispatch)
    };
};

export default connect(putStateToProps, putActionToProps)(App);



