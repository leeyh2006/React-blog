import React from 'react';
import PageTemplate from "../components/common/PageTemplate";
import Post from "../containers/post/Post";
import AskRemoveModalConatiner from "../containers/modal/AskRemoveModalContainer";

const PostPage =({match}) =>{

    const {id} =match.params;

    return(
        <div>
            <PageTemplate>
                <Post id={id}/>
                <AskRemoveModalConatiner/>
            </PageTemplate>
        </div>
    )
}

export default PostPage;