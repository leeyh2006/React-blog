import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as baseActions from '../../store/modules/base';
import LoginModal from "../../components/modal/Modal/LoginModal/LoginModal";

class LoginModalContainer extends Component{
    handleLogin=()=>{

    }
    handleCancel=()=>{
        const{ BaseActions} = this.props;
        BaseActions.hideModal('login');
    }
    handleChange=(e)=>{

    }
    handleKeyPress=(e)=>{

    }
    render() {
        const{
            handleLogin,handleCancel,handleChange,handleKeyPress
        }=this;
        const {visible}= this.props;

        return(
            <LoginModal
                onLogin={handleLogin} onCancel={handleCancel}
                onChange={handleChange} onKeyPress={handleKeyPress}
                visible={visible}
            />
        )
    }

}

export default connect(
    (state,action)=>({
        visible:state.base.getIn(['modal','login'])
    }),
    (dispatch)=>({
        BaseActions:bindActionCreators(baseActions,dispatch)
    })
)(LoginModalContainer);