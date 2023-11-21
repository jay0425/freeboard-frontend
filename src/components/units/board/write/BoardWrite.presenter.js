import * as S from './BoardWrite.styles';

export default function BoardWriteUI(props) {
  return (
    <div>
      <S.BoardContainer>
        <S.BoardSubject>게시물 등록</S.BoardSubject>

        <S.InfoWrapper>
          <S.WriterWrapper>
            <S.WriterWrapperTop>
              <S.BoardWriter for="boardWriter">작성자</S.BoardWriter>
              <S.Star>*</S.Star>
            </S.WriterWrapperTop>
            <S.BoardWriterInput
              type="text"
              id="boardWriter"
              placeholder="이름을 적어 주세요."
              onChange={props.onChangeWriter}
            />
            <S.Error>{props.writerErrer}</S.Error>
          </S.WriterWrapper>
          <S.WriterPasswordWrapper>
            <S.BoardPassword for="boardPassword">비밀번호</S.BoardPassword>
            <S.BoardPasswordInput
              type="password"
              id="boardPassword"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.WriterPasswordWrapper>
        </S.InfoWrapper>

        <S.TitleWrapper>
          <S.Title for="title">제목</S.Title>
          <S.TitleInput id="title" type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeTitle} />
          <S.Error>{props.titleError}</S.Error>
        </S.TitleWrapper>

        <S.TextWrapper>
          <S.Text for="text">내용</S.Text>
          <S.TextArea id="text" type="text" placeholder="내용을 작성해주세요." onChange={props.onChangeContents} />
          <S.Error>{props.contentsError}</S.Error>
        </S.TextWrapper>

        <S.AddressWrapper>
          <S.Address>주소</S.Address>
          <S.ZipcodeWrapper>
            <S.ZipcodeInput placeholder="07250" />
            <S.ZipcodeButton>우편번호 검색</S.ZipcodeButton>
          </S.ZipcodeWrapper>
          <S.AddressInputWrapper>
            <S.AddressTopInput />
            <S.AddressbottomInput />
          </S.AddressInputWrapper>
        </S.AddressWrapper>

        <S.ImageWrapper>
          <S.AttachImage>사진 첨부</S.AttachImage>
          <S.UploadWrapper>
            <S.UploadBox>
              <S.Plus>+</S.Plus>
              <S.Upload>Upload</S.Upload>
            </S.UploadBox>
            <S.UploadBox>
              <S.Plus>+</S.Plus>
              <S.Upload>Upload</S.Upload>
            </S.UploadBox>
            <S.UploadBox>
              <S.Plus>+</S.Plus>
              <S.Upload>Upload</S.Upload>
            </S.UploadBox>
          </S.UploadWrapper>
        </S.ImageWrapper>

        <S.MainSettingsWrapper>
          <S.MainSettings>메인 설정</S.MainSettings>
          <S.MainSettingsRadioWrapper>
            <S.RadioWrapper>
              <S.MainSettingsRadio type="radio" id="youtube" name="mainSettings" checked />
              <S.MainSettingsRadioLabel for="youtube">유튜브</S.MainSettingsRadioLabel>
            </S.RadioWrapper>
            <S.RadioWrapper>
              <S.MainSettingsRadio type="radio" id="image" name="mainSettings" />
              <S.MainSettingsRadioLabel for="image">사진</S.MainSettingsRadioLabel>
            </S.RadioWrapper>
          </S.MainSettingsRadioWrapper>
        </S.MainSettingsWrapper>

        <S.RegistrationButton onClick={props.onClickSubmit} isActive={props.isActive}>
          등록하기
        </S.RegistrationButton>
      </S.BoardContainer>
    </div>
  );
}
