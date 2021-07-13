import React from 'react'

import s from './ContentBlock.module.scss'

type ContentBlockType = {
    title: string
    text: string
}


function ContentBlock(props: ContentBlockType) {
    return <div className={s.cover}>
        <div className={s.wrap}>
            <div className={s.content}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    </div>
}

export default ContentBlock