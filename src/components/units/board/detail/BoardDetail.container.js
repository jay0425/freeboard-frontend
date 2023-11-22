import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries'; // export는 골라서 가져오기 가능
import BoardDetailUI from './BoardDetail.presenter'; // export deault로 한개만 가져오기

export default function BoardWrite() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log(data);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (event) => {
    deleteBoard({
      variables: {
        boardId: event.target.id,
      },
    });
    alert('삭제되었습니다.');
    router.push(`/boards`);
  };

  const onClickBoards = () => {
    router.push('/boards/');
  };

  return (
    <div>
      <BoardDetailUI data={data} onClickBoards={onClickBoards} onClickDelete={onClickDelete} />
    </div>
  );
}
