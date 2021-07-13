import React from 'react';
import s from './Card.module.scss';

type CardType = {
   eng: string
   rus: string
}

class Card extends React.Component<CardType> {

   render() {
      const { eng, rus } = this.props;
      return (
         <div className={s.card}>
            <div className={s.cardInner}>
               <div className={s.cardFront}>
                  {eng}
               </div>
               <div className={s.cardBack}>
                  {rus}
               </div>
            </div>

         </div>
      )
   }
}

export {
   Card
}