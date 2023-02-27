import React from 'react'

function CommentBox() {
    return (
        <div className='commentbox-main'>
            <textarea name="" id="" placeholder='Type a new message' ></textarea>
            <div className='commennt-actions d-flex'>
                <div>
                    <button className='btnImg'>
                        <img src={require('../../assets/img/ImageIcon.png')} alt="" />
                    </button>
                    <button className='btnImg'>
                        <img src={require('../../assets/img/attachFile.png')} alt="" />
                    </button>
                    <button className='btnImg'>
                        <img src={require('../../assets/img/LinkIcon.png')} alt="" />
                    </button>
                </div>
                <div>
                    <button className='btnImg'>
                        <img src={require('../../assets/img/sendIcon.png')} alt="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CommentBox