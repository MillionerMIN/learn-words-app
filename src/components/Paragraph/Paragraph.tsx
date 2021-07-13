import React from 'react';
import s from './Paragraph.module.scss';

type ParagraphType = {
   children: string
}

const Paragraph = ({ children }: ParagraphType) => {
   return (
      <>
         <p className={s.paragraph}>
            {children}
         </p>
      </>
   )
}

export {
   Paragraph
}