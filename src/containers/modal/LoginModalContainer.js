import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as baseActions from '../../store/modules/base';
import LoginModal from "../../components/modal/Modal/LoginModal/LoginModal";

class LoginModalContainer extends Component{
    handleLogin= async ()=>{
        const {BaseActions ,password}= this.props;
        try{
            await BaseActions.login(password);
            BaseActions.hideModal('login');
            localStorage.logged ="true";
        }catch (e) {
            console.log(e);
        }
    };
    handleCancel=()=>{
        const{ BaseActions} = this.props;
        BaseActions.hideModal('login');
    }
    handleChange=(e)=>{
        const {value}= e.target;
        const {BaseActions} = this.props;
        BaseActions.changePasswordInput(value);
    };
    handleKeyPress=(e)=>{
        if(e.key ==='Enter'){
            this.handleLogin();
        }
    }
    render() {
        const{
            handleLogin,handleCancel,handleChange,handleKeyPress
        }=this;
        const {visible ,error, password}= this.props;

        return(
            <LoginModal
                error={error}
                password={password}
                onLogin={handleLogin} onCancel={handleCancel}
                onChange={handleChange} onKeyPress={handleKeyPress}
                visible={visible}
            />
        )
    }

}

export default connect(
    (state,action)=>({
        password:state.base.getIn(['loginModal','password']),
        error:state.base.getIn(['loginModal','error']),
        visible:state.base.getIn(['modal','login'])
    }),
    (dispatch)=>({
        BaseActions:bindActionCreators(baseActions,dispatch)
    })
)(LoginModalContainer);
