export const getDate = (date) => {
  //   _ 는 '임시'라는 뜻. 조작한 데이터를 의미함.
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = _date.getMonth() + 1;
  const dd = _date.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
