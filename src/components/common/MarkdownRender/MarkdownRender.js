import React ,{Component} from 'react';
import styles from './MarkdownRender.scss';
import classNames from 'classnames/bind';

import marked from 'marked';
// prism 관련 코드 불러오기


const cx =classNames.bind(styles);

class MarkdownRender  extends Component{
    state ={
        html : ''
    };


    renderMarkdown= ()=>{
        const {markdown} = this.props;
        if (!markdown){
            this.setState({html :' '});
            return;
        }
        this.setState({
            html:marked(markdown,{
                breaks:true, // 일반 에디터로 새줄 입력
                sanitize: true // 마크다운 내부 html 무시
            })
        });
    }
    constructor(pros){
        super(pros);
        const {markdown}= pros;
        //서버 사이드 렌더링에서도 마크다운 처리가 되도록 constructor 족에서도 구현 합니다.
        this.state={
            html:markdown ? marked(pros.markdown,{breaks:true,sanitize: true} ): ''
        }
    }

    //마크다운 값이 변경되면 renderMarkdown을 호출
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.markdown !== this.props.markdown){
            this.renderMarkdown();
        }
    }

    render() {
        const {html} =this.state;
        const markup={
            __html:html
        }
        return (
            <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup}>

            </div>
        );
    }

}

export default MarkdownRender;
