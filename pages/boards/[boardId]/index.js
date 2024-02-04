import BoardDetail from '../../../src/components/units/board/detail/BoardDetail.container';
import BoardCommentListPage from '../../../src/components/units/board/comment/commentList/BoardCommentList.container';
import BoardCommentWritePage from '../../../src/components/units/board/comment/commentWrite/BoardCommentWrite.container';

export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWritePage />
      <BoardCommentListPage />
    </>
  );
}
