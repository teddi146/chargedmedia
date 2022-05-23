import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 0px auto;
  width: 100%;
  height: fit-content;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const CloseBtn = styled.span`
  position: absolute;
  top: 2%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
`;

export const FormContentLeft = styled.div`
  background: linear-gradient(90deg, #05e675 0%, #00a94c 100%);
  /* border-radius: 10px 0 0 10px; */
  position: relative;
`;

export const FormContentRight = styled.div`
  /* border-radius: 0 10px 10px 0; */
  width: 100%;
  position: relative;
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`;

export const FormImg = styled.img`
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormImg2 = styled.img`
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormSuccess = styled.div`
  text-align: center;
  font-size: 24px;
  margin-top: 80px;
  color: #fff;
`;

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormH1 = styled.h1`
  font-size: 1rem;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: #fff;
`;

export const FormInputs = styled.div`
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const FormP = styled.p`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #f00e0e; ;
`;

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;

  &:placeholder {
    color: #595959;
    font-size: 12px;
  }
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
`;

export const FormInputButton = styled.button`
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(90deg, #05e675 0%, #00a94c 100%);
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    background: #fff;
    color: #00a94c;
    transition: all 0.4s ease-out;
  }
`;
export const FormInputLogin = styled.span`
  font-size: 0.8rem;
  margin-top: 10px;
  color: #fff;
  width: 80%;
  text-align: center;
`;
export const FormInputLoginA = styled.span`
  text-decoration: none;
  color: #00a94c;
  font-weight: 600;
  cursor: pointer;
`;
