import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import {
  AvatarWrapper,
  Avatar,
  Body,
  CardWrapper,
  Contents,
  CreatedAt,
  Header,
  Info,
  Title,
  Wrapper,
  Writer,
  ButtonWrapper,
  Button,
} from '../../../styles/detail';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  console.log(data);

  return (
    <Wrapper>
      <CardWrapper>
        <Header>
          <AvatarWrapper>
            <Avatar src="/images/avatar.svg" alt="프로필 이미지"></Avatar>
            <Info>
              <Writer>{data?.fetchBoard?.writer}</Writer>
              <CreatedAt>{data?.fetchBoard?.createdAt}</CreatedAt>
            </Info>
          </AvatarWrapper>
        </Header>
        <Body>
          <Title>{data?.fetchBoard?.title}</Title>
          <Contents>{data?.fetchBoard?.contents}</Contents>
        </Body>
      </CardWrapper>
      <ButtonWrapper>
        <Button>목록으로</Button>
        <Button>수정하기</Button>
        <Button>삭제하기</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
