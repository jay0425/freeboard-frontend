import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { FETCH_BOARD } from './BoardDetail.queries'; // export는 골라서 가져오기 가능
import BoardDetailUI from './BoardDetail.presenter'; // export deault로 한개만 가져오기

export default function BoardWrite() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log(data);

  return (
    <div>
      <BoardDetailUI data={data} />
    </div>
  );
}
