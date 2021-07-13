import React from 'react'
import ReactFooter from '../../logo.svg'

import s from './FooterBlock.module.scss'

type FooterBlockType = {
    text: string
}


function FooterBlock(props: FooterBlockType) {
    return <div className={s.cover}>
        <div className={s.wrap}></div>
        <img src={ReactFooter} alt="footer"/>
        <div>{props.text}</div>
    </div>
}

export default FooterBlock
