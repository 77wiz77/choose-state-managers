import React from 'react';
import MobXTest from '../components/MobXTest/MobXTest';
import { Typography, Box, Link } from '@mui/material';

const MobXPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
      }}
      id='mobx'>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}
        id='mobx-description'>
        <Typography variant='h1'>О MobX</Typography>
        <Typography variant='body1'>
          MobX - представляет собой объектно-ориентированный взгляд на
          управление состояниями компонентов. Механизм данного стейт менеджера в
          корне отличается от Redux. Здесь в отличии от одного центрального
          хранилища в Redux, состояния располагаются внутри нескольких хранилищ
          (MultiStore). Это позволяет ускорить работу с состояниями в отдельных
          небольших блоках веб-приложения, однако, замедляет его при обновлении
          всего приложения целиком. Также немаловажным отличием будет то, что
          если Redux делается упор на функциональное программирование и чистые
          функции, то MobX основан на реактивном программировании
          (программировании с асинхронными потоками данных). Поэтому MobX
          является мутабельной библиотекой (mutable). Если в Redux состояния
          компонентов доступны только для чтения и изменить их можно было только
          путем явных действий, то в MobX для состояний компонентов доступны как
          чтение, так и запись. Таким образом, состояние в MobX может как
          самостоятельно мутировать в ответ на действия пользователя, так и
          путем явных принудительных действий. Это говорит о том, что MobX
          ориентирован на точечное обновление компонентов, только в тех местах,
          где это необходимо, вместо полного обновления всего состояния
          веб-приложения, как это реализовано в Redux. Подобное поведение может
          быть полезно при использовании формы обратной связи, когда после
          изменения какого-то поля, разумнее изменить только состояние,
          связанное с ним, вместо полного ре-ререндера формы.
        </Typography>
        <Typography variant='body1'>
          Еще одним немаловажным отличием MobX от Redux является отсутствие
          шаблонности в коде и как следствие меньший объём строк кода. В Redux
          для работы с состоянием необходимо создавать аж четыре файла
          (action.js, actionTypes.js, reducer.js, store.js). В MobX достаточно
          создать всего один файл, в котором описать класс для взаимодействия с
          состояниями компонентов.
        </Typography>
        <Typography variant='body1'>
          <Link href='https://mobx.js.org/README.html '>
            Ссылка на официальный сайт MobX
          </Link>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='mobx-documentation'>
          Документация
        </Typography>
        <Typography variant='body1'>
          MobX не имеет своей экосистемы, подобной Redux. Данная библиотека
          заточена только под управление состоянием компонентов, что делает ее
          документацию намного меньше чем в Redux. Однако это не означает, что
          ее функционал урезан по сравнению с Redux в направлении управления
          состояния, данная библиотека вполне может составить достойную
          конкуренцию с Redux. Документация MobX коротка и понятна, что делает
          ее изучение более быстрым в сравнении с Redux.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='mobx-popularity'>
          Популярность
        </Typography>
        <Typography variant='body1'>
          Информация о популярности за все время использования в виде графика
          согласно ресурсу npm trends представлена на рисунке ниже (по вертикале
          располагается число загрузок через npm-менеджер, а по горизонтали год
          использования, зеленая кривая - Redux, синяя - MobX, оранжевая -
          Recoil).
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'column nowrap',
            marginBottom: '3rem',
            width: '100%',
            height: '100%',
          }}>
          <img
            style={{
              maxWidth: '80%',
              height: 'auto',
              padding: 0,
              margin: 'auto',
            }}
            src={require('../assets/GraphOfPopularityLibraries.jpeg')}
            alt='Graph'
          />
          <Typography variant='body2'>
            Ссылка на источник&nbsp;
            <Link href='https://npmtrends.com/mobx-vs-recoil-vs-redux'>
              https://npmtrends.com/mobx-vs-recoil-vs-redux
            </Link>
          </Typography>
        </Box>

        <Typography variant='body1'>
          Кроме того, на сайте представлена сводка данных по библиотекам
          согласно известному веб-сервису Github.
        </Typography>
        <img
          style={{
            maxWidth: '80%',
            height: 'auto',
            padding: 0,
            margin: 'auto',
          }}
          src={require('../assets/TableOfPopularityLibraries.jpeg')}
          alt='Table'
        />
        <Typography variant='body2'>
          Ссылка на источник&nbsp;
          <Link href='https://npmtrends.com/mobx-vs-recoil-vs-redux'>
            https://npmtrends.com/mobx-vs-recoil-vs-redux
          </Link>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='mobx-size'>
          Размер
        </Typography>
        <Typography variant='body1'>
          Информация о размере минимальных базовых версий библиотек согласно
          ресурсу NPM trends:
        </Typography>
        <ul>
          <li>1.6 кб Redux,</li>
          <li>16.4 кб Mobx,</li>
          <li>23.4 кб Recoil.</li>
        </ul>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='mobx-scalability'>
          Масштабируемость
        </Typography>
        <Typography variant='body1'>
          В MobX состояние изменчиво (мутабельно). Это происходит за счет того,
          что в основе его работы лежит объектно-ориентированное (использование
          классов и объектов) и реактивное программирование (изменение одного
          потока данных влечет автоматическое изменение другого). Все состояния
          находятся внутри наблюдаемых объектов. Компоненты подписываются на эти
          наблюдаемые объекты для доступа к состояниям и вычисляемым значениям.
          Наблюдаемые объекты могут быть построены на основе других
          классов-хранилищ состояний путем объектно-ориентированного
          наследования. Из-за чего возможна огромная вложенность таких классов.
          Возникает риск ошибки, из-за того, что один из таких классов может
          быть изменен. Кроме того, состояние можно менять, напрямую обратившись
          к полю наблюдаемого объекта в любой части проекта. Такое приложение
          сложнее тестировать и поддерживать, поскольку оно не всегда возвращает
          предсказуемый результат. Это значительно усложняет масштабирование
          проекта, особенно, если над проектом работала одна команда, а после
          необходимости дополнить функционал за него взялась другая команда.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='mobx-experiment'>
          Эксперимент
        </Typography>
        <MobXTest />
        <Typography variant='subtitle1'>Средние значения замеров:</Typography>
        <ul>
          <li>Redux: 95,56 мс. </li>
          <li>MobX: 38,9 мс. </li>
          <li>Recoil: 1989,46 мс.</li>
        </ul>
      </Box>
    </Box>
  );
};

export default MobXPage;
