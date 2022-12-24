import * as S from "./style";

const OpenModalButton = ({ setAddJob }) => {
  return (
    <S.AddJobButton
      onClick={() => {
        setAddJob(true);
      }}
    >
      +
    </S.AddJobButton>
  );
};

export default OpenModalButton;
