import React from 'react';
import ReduxTest from '../components/ReduxTest/ReduxTest';
import { Typography, Box, Link } from '@mui/material';

const ReduxPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
      }}
      id='redux'>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}
        id='redux-description'>
        <Typography variant='h1'>О Redux</Typography>
        <Typography variant='body1'>
          Redux представляет собой старейшее решение от компании Facebook в
          сфере управления состояниями в компонентах. Основная его идея
          заключается в создании для веб-приложения одного централизованного
          хранилища (SingleStore), в котором хранятся все состояния компонентов.
          Благодаря этому, каждый компонент может получить доступ к нужному
          состоянию, не передавая его из родительского к дочернему, как это
          реализовано в React Context.
        </Typography>
        <Typography variant='body1'>
          Redux является иммутабельной библиотекой (immutable), что означает,
          что состояния внутри нее, представляются как неизменяемые объекты
          («снимки замороженных во времени объектов»). Вместо того, чтобы
          изменять текущее состояние, Redux сравнивает текущее, а также
          находящиеся внутри него состояния между собой, после чего в случае,
          если находит нужное выбирает его, иначе создает новое состояние. Новые
          состояния образуются путем передачи текущего состояния через чистые
          функции, называемые редьюсерами. Таким образом, если входное внутрь
          редьюсера состояние равно выходному, то состояние не меняется, если же
          есть хоть какая-то разница, генерируется новое. Именно благодаря тому,
          что редьюсеры являются чистыми функциями, сравнение входных и выходных
          состояний обходится без побочных эффектов. Данное свойство библиотеки
          может быть полезно в случае, когда, к примеру, есть какая-то таблица с
          множеством значений, и в одной из ячеек было изменено значение. В
          таком случае повторная визуализация (ререндеринг) таблицы, в ответ на
          ее изменение быстрее чем искать обход всего состояния с целью найти и
          изменить в нем ту самую ячейку.
        </Typography>
        <Typography variant='body1'>
          Стоит также отметить, что Redux позволяет создавать более чем одно
          хранилище, однако, как говорят сами разработчики данной библиотеки,
          это не рекомендуется, поскольку это расходится с лучшими практиками
          использования Redux.
        </Typography>
        <Typography variant='body1'>
          <Link href='https://redux.js.org/'>
            Ссылка на официальный сайт Redux
          </Link>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='redux-documentation'>
          Документация
        </Typography>
        <Typography variant='body1'>
          Redux, в современном своем представлении, является не просто одной
          библиотекой, это целая экосистема, состоящая из нескольких библиотек,
          не только для управления состоянием. В связи с чем документация Redux
          очень расширена, она состоит из нескольких частей, и для полноценного
          использования всей экосистемы Redux необходимо освоить их все хотя бы
          в базовом понимании. Это усложняет обучение для начинающего
          разработчика.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='redux-popularity'>
          Популярность
        </Typography>
        <Typography variant='body1'>
          Согласно общемировому ресурсу{' '}
          <Link href='https://npmtrends.com/mobx-vs-recoil-vs-redux'>
            npm trends
          </Link>{' '}
          на первом месте по популярности, на правах одного из первейших
          менеджеров управления состояний находится Redux. Следом за ним с
          существенно низкой по сравнению с Redux популярностью располагается
          библиотека MobX, после которой с довольно низкими показателями
          находится Recoil.
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
        <Typography variant='h1' id='redux-size'>
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
        <Typography variant='h1' id='redux-scalability'>
          Масштабируемость
        </Typography>
        <Typography variant='body1'>
          В плане масштабирования Redux отлично подходит. Это обуславливается
          тем, что основной механизм работы с состояниями в данной библиотеке –
          это чистые функции. Чистая функция всегда возвращает одинаковый
          результат при том же наборе аргументов в ней. Это делает состояние в
          Redux неизменным (немутабельным) и предсказуемым. Таким образом,
          вместо изменения состояния (мутации состояния), Redux возвращает новое
          состояние. Всякий раз, когда необходимо обновить хранилище состояний,
          отправляется экшен (action), который передается редюсеру (reducer) и в
          зависимости от типа этого экшена редюсер обновляет состояние
          неизменным образом. Это упрощает добавление нового функционала и
          вносит ясность при разработке. Кроме того, Redux хранит все состояния
          в одном глобальном хранилище, что позволяет в случае необходимости
          быстро обращаться к состояниям независимо от размера проекта.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='redux-experiment'>
          Эксперимент
        </Typography>
        <ReduxTest />
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

export default ReduxPage;
