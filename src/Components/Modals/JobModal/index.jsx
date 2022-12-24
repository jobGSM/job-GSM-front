import * as S from "./style";

const JobModal = ({ setAddJob }) => {
  return (
    <S.Sex>
      <S.JobModal>
        <S.CloseButton
          onClick={() => {
            setAddJob(false);
          }}
        >
          X
        </S.CloseButton>
      </S.JobModal>
    </S.Sex>
  );
};

export default JobModal;
