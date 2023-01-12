import React from 'react';
import MobXTest from '../components/MobXTest/MobXTest';

const MobXPage: React.FC = () => {
  const info: string =
    'Redux представляет собой старейшее решение от компании Facebook в сфере управления состояниями в компонентах. Основная его идея заключается в создании для веб-приложения одного централизованного хранилища (SingleStore), в котором хранятся все состояния компонентов. Благодаря этому, каждый компонент может получить доступ к нужному состоянию, не передавая его из родительского к дочернему, как это реализовано в React Context.';

  const test: string =
    'Качество документации напрямую влияет на то, как быстро разработчик сможет освоить ПО и использовать полученные знания в реальной разработке. Документация должна быть не перегружена лишней информацией, полностью пояснять функционал, коротко и понятно раскрывать механизм работы ПО, чтобы потенциальный разработчик мог с легкостью начать использовать его.';
  return (
    <div>
      {test}
      <h2 style={{ paddingTop: '80px' }} id='description'>
        Описание
      </h2>
      Документация
      {info}
      {test}
      <MobXTest />
    </div>
  );
};

export default MobXPage;
