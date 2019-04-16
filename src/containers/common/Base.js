import React, {Component} from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as baseActions from '../../store/modules/base';
import LoginModalContainer from "../modal/LoginModalContainer";

class Base extends Component{
    initialize =async ()=>{
        //로그인 상태 확인
    }
    componentDidMount() {
        this.initialize();
    }
    render() {
        return(
            <div>
                <LoginModalContainer/>
                {
                    /* 전역적으로 사용하는 컴포넌트들이 있따면 여기서 렌더링 */
                }
            </div>
        )
    }

}

export default connect(
    null,
    (dispatch)=>({
        BaseActions :bindActionCreators(baseActions,dispatch)
    })
)(Base);
