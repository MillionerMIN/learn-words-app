import React from 'react';
import './App.css';

import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import FooterBlock from './components/FooterBlock/FooterBlock'
import { Header } from './components/Header/Header';
import { Paragraph } from './components/Paragraph/Paragraph';
import { ReactComponent as ReactLogo } from './logo.svg'
import { Card } from './components/Card/Card';

export const wordsList = [
  {
    eng: 'between',
    rus: 'между'
  },
  {
    eng: 'high',
    rus: 'высокий'
  },
  {
    eng: 'really',
    rus: 'действительно'
  },
  {
    eng: 'something',
    rus: 'что-нибудь'
  },
  {
    eng: 'most',
    rus: 'большинство'
  },
  {
    eng: 'another',
    rus: 'другой'
  },
  {
    eng: 'much',
    rus: 'много'
  },
  {
    eng: 'family',
    rus: 'семья'
  },
  {
    eng: 'own',
    rus: 'личный'
  },
  {
    eng: 'out',
    rus: 'из/вне'
  },
  {
    eng: 'leave',
    rus: 'покидать'
  },
];

function App() {
  return (
    <div className="App">
      <HeaderBlock>
        <Header>
          Время учить слова
        </Header>
        <Paragraph>
          Воспользуйтесь картачками для запоминания и пополняйте активный словарный запас
        </Paragraph>
      </HeaderBlock>
      <div>
        {
          wordsList.map(({ eng, rus }) => <Card eng={eng} rus={rus}></Card>)
        }
      </div>
      <HeaderBlock hideBackground>
        <Header>
          Еще один загаловок
        </Header>
        <Paragraph>
          Ну здорово же!
        </Paragraph>
        <ReactLogo />
      </HeaderBlock>
      <FooterBlock text={'I am footer'} />
    </div>
  );
}

export default App;
