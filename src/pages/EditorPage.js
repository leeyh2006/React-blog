import React from 'react';
import EditorTemplate from "../components/editor/EditorTemplate/EditorTemplate";
import EditorHeader from "../components/editor/EditorHeader/EditorHeader";
import PreviewPane from "../components/editor/PreviewPane/PreviewPane";
import EditorPaneContainer from "../containers/editor/EditorPaneContainer";
import PreviewPaneContainer from "../containers/editor/PreviewPaneContainer";
import EditorHeaderContainer from "../containers/editor/EditorHeaderContainer";

const EditorPage =() =>{
    return(
        <div>
            <EditorTemplate
                header={<EditorHeaderContainer/>}
                editor={<EditorPaneContainer/>}
                preview={<PreviewPaneContainer/>}
            />
        </div>
    )
}

export default EditorPage;
