import styled from '@emotion/styled';

export const BoardContainer = styled.div`
  width: 1200px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 102px 100px 102px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BoardSubject = styled.div`
  color: #000;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 80px;
`;

export const InfoWrapper = styled.div`
  weight: 996px;
  display: flex;
  justify-content: space-between;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WriterWrapperTop = styled.div`
  margin-bottom: 16px;
`;

export const BoardWriter = styled.label`
  color: #000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Star = styled.span`
  color: #ffd600;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-left: 5px;
`;

export const BoardWriterInput = styled.input`
  width: 474px;
  height: 52px;
  padding-left: 16px;
`;

export const WriterPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

export const BoardPassword = styled.label`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const BoardPasswordInput = styled.input`
  width: 474px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background: #fff;

  padding-left: 16px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const Title = styled.label`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  margin-bottom: 16px;
`;

export const TitleInput = styled.input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  background: #fff;
  padding-left: 16px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.label`
  margin: 40px 0px 16px 0px;
`;

export const TextArea = styled.textarea`
  width: 996px;
  height: 480px;

  border: 1px solid #bdbdbd;
  background: #fff;
  resize: none;

  padding-left: 16px;
  padding-top: 14px;
`;

export const AddressWrapper = styled.div`
  width: 1020px;
  margin-top: 16px;
`;

export const Address = styled.div`
  color: #000
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  margin-bottom:16px;
`;

export const ZipcodeWrapper = styled.div``;

export const ZipcodeInput = styled.input`
  width: 77px;
  height: 52px;

  border: 1px solid #bdbdbd;
  background: #fff;

  box-sizing: border-box;
  padding-left: 14px;
`;

export const ZipcodeButton = styled.button`
  display: inline-flex;
  padding: 14px 16px;
  justify-content: center;
  align-items: center;

  color: #fff;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  background: #000;

  margin-left: 16px;
  cursor: pointer;
`;

export const AddressInputWrapper = styled.div`
  display: felx;
  flex-direction: column;

  margin-top: 16px;
`;

export const AddressTopInput = styled.input`
  display: block;

  width: 1012px;
  height: 52px;

  padding-left: 16px;
`;

export const AddressbottomInput = styled.input`
  display: block;
  width: 1012px;
  height: 52px;

  margin-top: 30px;

  padding-left: 16px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 1020px;

  margin-top: 37px;
`;

export const AttachImage = styled.div`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const UploadWrapper = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const UploadBox = styled.div`
  width: 78px;
  height: 78px;
  background: #bdbdbd;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-right: 24px;
`;

export const Plus = styled.div``;

export const Upload = styled.div``;

export const MainSettingsWrapper = styled.div`
  width: 1020px;

  margin-top: 40px;
`;

export const MainSettings = styled.div`
  color: #000;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  margin-bottom: 16px;
`;

export const MainSettingsRadioWrapper = styled.div`
  display: flex;
`;

export const RadioWrapper = styled.div`
  margin-right: 20px;
`;

export const MainSettingsRadio = styled.input`
  background-color: red;
`;

export const MainSettingsRadioLabel = styled.label``;

export const RegistrationButton = styled.button`
  padding: 14px 60px;

  background-color: ${(props) => (props.isActive === true ? '#ffd600' : '')};
  border: none;

  margin-top: 80px;

  color: var(--Black, #000);
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 500;
`;

export const Error = styled.div`
  color: red;
  margin-top: 10px;
  font-size: 14px;
`;
