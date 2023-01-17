import React from 'react';
import RecoilTest from '../components/RecoilTest/RecoilTest';

import { Typography, Box, Link } from '@mui/material';

const RecoilPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}
        id='description'>
        <Typography variant='h1'>О Recoil</Typography>
        <Typography variant='body1'>
          Recoil представляет собой новый взгляд компании FaceBook на управление
          состояниями в компонентах. Recoil – это попытка FaceBook упростить
          синтаксис Redux, поменяв логику хранения и уменьшив размер
          необходимого кода. В связи с чем, Recoil имеет некоторые сходства с
          Redux в плане использования чистых функций и общего хранилища
          состояний. Несмотря на то, что данная библиотека относительно новая,
          она быстро набирает популярность, в виду того, что сами разработчики
          React все чаще рекомендуют его в качестве решения в управлении
          состояний компонентов.
        </Typography>
        <Typography variant='body1'>
          Методология библиотеки Recoil заключается в том, чтобы обозначить
          логику взаимодействия с состояниями компонентов через атомы и
          селекторы. Атом представляет собой часть состояния. Атомы обновляемы и
          на них можно подписывать компоненты. При обновлении атома, все
          компоненты, подписанные на него, также будут обновлены в соответствии
          с изменениями. Атомы могут использоваться сразу несколькими
          компонентами. Селекторы являются чистыми функциями, которые могут
          принимать в себя как атомы, так и другие селекторы (редьюсеры в Redux
          реализуют нечто похожее). Они используются для того, чтобы вычислять
          производные данные на основе состояния компонента. Это помогает
          избавиться от избыточности состояния, так как в атомах хранится лишь
          минимальная часть состояния. Остальное, все что можно вычислить,
          вычисляется отдельно внутри селекторов. Так как селекторы отслеживают
          подписанные на них компоненты, данный подход получается очень
          эффективным. В Recoil, как и в Redux имеется одно хранилище называемое
          RecoilStore, именно в нем располагаются атомы и селекторы.
        </Typography>
        <Typography variant='body1'>
          В целом Recoil позволяет пересмотреть логику работы Redux и перейти от
          сложного к простому, уменьшив количество кода и сохранив
          иммутабельность и единое хранилище от Redux.
        </Typography>
        <Typography variant='body1'>
          <Link href='https://recoiljs.org/'>
            Ссылка на официальный сайт Recoil
          </Link>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='documentation'>
          Документация
        </Typography>
        <Typography variant='body1'>
          Recoil, в настоящее время, только начинает набирать обороты в мире
          веб-разработки. Как и MobX, Recoil разработан в первую очередь для
          управления состоянием, поэтому размер его документации не сильно
          отличается от размера документации MobX. Тем ни менее, на момент
          написания данного текста полноценного релиза Recoil еще не было{' '}
          <Link href='https://recoiljs.org/blog/2022/10/11/recoil-0.7.6-release/'>
            (актуальная на текущий момент версия Recoil – 0.7.6)
          </Link>
          , поэтому документацию Recoil в текущем ее виде нельзя назвать
          полноценной несмотря на то, как активно продвигает данную библиотеку
          компания-создатель React.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='h1' id='popularity'>
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
        <Typography variant='h1' id='size'>
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
        <Typography variant='h1' id='scalability'>
          Масштабируемость
        </Typography>
        <Typography variant='body1'>
          В Recoil хранение состояния основано на атомах и селекторах. Это
          напоминает упрощенный механизм работы экшенов и редюсеров в Redux.
          Подобно редюсерам, селекторы являются чистыми функциями. Благодаря
          этому состояние в Recoil, как и в Redux неизменно (немутабельно). Это
          дает recoil те же преимущества в плане масштабирования что и у Redux.
          Кроме того, Recoil поддерживает параллельную обработку запросов к
          изменению состояний, что безусловно положительно складывается при
          масштабировании веб-приложения.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexFlow: 'column nowrap',
          marginBottom: '3rem',
        }}>
        <Typography variant='subtitle1' id='experiment'>
          Эксперимент (Пример многократного рендеринга компонента с помощью
          Recoil)
        </Typography>
        <RecoilTest />
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

export default RecoilPage;
