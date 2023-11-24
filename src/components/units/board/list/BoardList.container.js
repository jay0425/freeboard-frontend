import { useQuery } from '@apollo/client';
import * as S from './BoardList.styles';
import { useRouter } from 'next/router';
import { FETCH_BOARDS } from './BoardList.queries';
import BoardsUI from './BoardList.presenter';

export default function BoardList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARDS);

  const onClickMoveToBoardNew = () => {
    router.push('/boards/new');
  };

  const onClickMoveToDetail = (event) => {
    router.push(`boards/${event.target.id}`);
  };

  return (
    <BoardsUI
      router={router}
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
