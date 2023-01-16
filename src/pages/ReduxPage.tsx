import React from 'react';
import ReduxTest from '../components/ReduxTest/ReduxTest';

const ReduxPage: React.FC = () => {
  const info: string =
    'Redux представляет собой старейшее решение от компании Facebook в сфере управления состояниями в компонентах. Основная его идея заключается в создании для веб-приложения одного централизованного хранилища (SingleStore), в котором хранятся все состояния компонентов. Благодаря этому, каждый компонент может получить доступ к нужному состоянию, не передавая его из родительского к дочернему, как это реализовано в React Context.';

  const test: string =
    'LoremOfficia ad eu eiusmod incididunt in nisi nisi consequat consequat pariatur officia cillum dolore cupidatat. Id ut non nisi exercitation. Pariatur enim nulla pariatur ipsum cillum minim ad adipisicing incididunt reprehenderit culpa sunt incididunt. Duis voluptate aute cillum dolor proident do deserunt ex. Ad adipisicing voluptate esse quis nulla.' +
    'Quis incididunt eu sit ut fugiat. Veniam duis ullamco reprehenderit magna exercitation culpa pariatur.' +
    'Lorem id amet ut commodo nulla laborum sunt ut minim esse ut non dolore. Et occaecat mollit laboris quis velit do Lorem ea elit labore anim consequat excepteur. Eiusmod culpa velit voluptate ex qui occaecat est minim duis qui duis aliquip amet aliqua. Excepteur in do dolor mollit adipisicing. Aliqua reprehenderit et consectetur qui velit exercitation proident aliquip pariatur. Magna dolore in ullamco eiusmod sunt esse Lorem officia id adipisicing sit ullamco irure ex. Ad ea qui tempor elit ut culpa culpa.' +
    'Deserunt ea esse eiusmod ad dolore. Cupidatat occaecat et id eiusmod eu est incididunt sunt eiusmod mollit mollit. Reprehenderit id id consequat aute mollit id laborum ut Lorem fugiat qui.' +
    'Duis reprehenderit duis esse esse magna aliqua culpa veniam non cupidatat ad. Reprehenderit laboris et quis voluptate sint velit consequat ipsum sunt excepteur. Mollit culpa aliqua officia id commodo cillum sint fugiat. Quis in ipsum qui enim aliqua mollit. Mollit dolore cillum exercitation exercitation pariatur deserunt id sit est sit qui ea quis. Non elit veniam deserunt commodo ex reprehenderit mollit aliquip cupidatat esse amet sint deserunt consequat.' +
    'Adipisicing dolor adipisicing non anim sint anim cupidatat ad nostrud sunt do excepteur qui incididunt. Aute fugiat dolore exercitation velit nisi est fugiat. Sit culpa sunt elit labore commodo amet adipisicing culpa aliqua tempor. Culpa minim Lorem tempor nisi in. Ad ad duis voluptate eu quis sint officia qui nisi exercitation nisi et. Aute enim qui commodo nisi minim labore magna aliqua cillum aute. Cillum tempor voluptate sit ea culpa aute anim.' +
    'Quis cillum labore incididunt nulla voluptate officia sunt sint. Minim ullamco cupidatat et reprehenderit et ipsum aliquip ad est adipisicing cillum. Sint deserunt veniam eu incididunt eiusmod sint fugiat duis aliquip. Nostrud nostrud aliquip pariatur ut adipisicing consectetur officia occaecat. Ut sunt ullamco cillum eiusmod sunt anim tempor irure nulla dolore pariatur veniam. Aliqua dolor qui et pariatur dolor aliquip et est fugiat qui qui. Ullamco laboris qui aliquip duis Lorem.' +
    'Consequat do irure ipsum mollit sunt tempor cupidatat. Laborum culpa deserunt qui amet aliquip. Ipsum laboris pariatur nisi cupidatat laboris duis occaecat anim reprehenderit qui ullamco et eiusmod.' +
    'Aliqua incididunt ut nisi eu consequat. Nostrud cillum occaecat amet aute amet Lorem do consectetur veniam cillum. Enim laboris consequat adipisicing non deserunt consequat cillum reprehenderit cupidatat esse quis duis dolore proident. Consequat amet nisi magna velit. Cillum enim nostrud anim consequat fugiat ipsum sit in tempor adipisicing aliqua. Nostrud irure est nisi reprehenderit et officia reprehenderit sit eu fugiat consectetur nostrud. Pariatur sit anim culpa eu minim deserunt magna enim cillum dolor.' +
    'Pariatur eu non consectetur id ipsum culpa irure fugiat ipsum. Tempor enim occaecat sit ullamco adipisicing pariatur. Sit in consequat sint esse duis incididunt voluptate aliquip eiusmod est anim occaecat. Est aliqua laborum veniam cupidatat nostrud aliqua aute ullamco sunt aliquip magna ut est. Eu ipsum do dolor dolore magna quis mollit veniam exercitation ex consectetur. Occaecat id dolore occaecat ut ea adipisicing ad do Lorem eiusmod magna.' +
    'Eu officia ullamco consequat commodo eiusmod culpa eu Lorem ullamco dolore minim quis. Consectetur adipisicing ipsum mollit duis quis excepteur adipisicing tempor sint voluptate labore. Proident laborum deserunt labore do pariatur. Exercitation ea nostrud velit aliquip do sunt. Duis non duis tempor velit minim nulla est eu esse laborum.' +
    'Deserunt exercitation cupidatat reprehenderit aute irure. Sunt laborum reprehenderit cillum laborum fugiat mollit. Laboris nulla reprehenderit esse eiusmod nostrud velit labore. Nisi ipsum dolore eiusmod aliqua ea voluptate nisi proident consequat proident deserunt ea esse. In irure labore esse esse enim irure excepteur aute nulla quis. Ipsum proident do magna irure officia eu anim occaecat.';
  return (
    <div>
<<<<<<< Updated upstream
      {test}
      <h2 style={{ paddingTop: '80px' }} id='description'>
        Описание
      </h2>
=======
      <Typography variant='h1' id='description'>
        О Redux
      </Typography>
>>>>>>> Stashed changes
      {info}
      {test}
      <ReduxTest />
    </div>
  );
};

export default ReduxPage;
