import { useRouter } from 'next/router';
import BoardWrite from '../../../../src/components/units/board/write/BoardWrite.container';
import { gql, useQuery } from '@apollo/client';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      createdAt
      updatedAt
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <div>
      <BoardWrite isEdit={true} data={data} />
    </div>
  );
}
