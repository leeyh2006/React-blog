import React ,{Component} from 'react';
//Editor pane
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import * as editorActions from '../../store/modules/editor';
import EditorPane from "../../components/editor/EditorPane/EditorPane";


class EditorPaneContainer extends Component{
    handleChangeInput=({name,value})=>{
        const {EditorAction} = this.props;
        EditorAction.changeInput({name,value});
    };
    render() {
        const {title,tags,markdown} =this.props;
        const {handleChangeInput} =this;

        return (
            <EditorPane
                title={title}
                tags={tags}
                markdown={markdown}
                onChangeInput={handleChangeInput}
            />);
    }
}

export default connect(
    (state)=>({
        title :state.editor.get('title'),
        markdown :state.editor.get('markdown'),
        tags : state.editor.get('tags')
    }),
    (dispatch)=>({
        EditorAction :bindActionCreators(editorActions,dispatch)
    })
)(EditorPaneContainer);

