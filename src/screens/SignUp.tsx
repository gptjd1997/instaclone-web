import styled from "styled-components";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import SubmitButton from "../components/auth/SubmitButton";
import Separator from "../components/auth/Separator";
import InputBox from "../components/auth/InputBox";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import { useForm } from "react-hook-form";
import { emailExp, passwordExp, usernameExp } from "../regExps";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { ChimstagramLogo } from "../components/shared";

const FacebookLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: #385285;
  cursor: pointer;
  width: 286px;
  span {
    margin-left: 8px;
    font-size: 14px;
    line-height: 13px;
    font-weight: 600;
  }
`;

const Subtitle = styled.h2`
  text-align: center;
  width: 286px;
  color: ${(props) => props.theme.subFontColor};
  margin-bottom: 10px;
  font-size: 17px;
  line-height: 20px;
  font-weight: 600;
`;

const CREATEACCOUNT_MUTATION = gql`
  mutation (
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      error
      ok
    }
  }
`;

const SignUp = () => {
  const history = useHistory();
  const onCompleted = (data: any) => {
    const {
      createAccount: { ok, error },
    } = data;

    if (!ok) {
      setError("result", { message: error });
      console.log(ok, error);
    } else {
      console.log(ok, error);
      history.push(routes.home, { message: "계정이 생성되었습니다." });
    }
  };
  const [createAccount, { loading }] = useMutation(CREATEACCOUNT_MUTATION, {
    onCompleted,
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    clearErrors,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const resultClear = () => clearErrors("result");

  const onSubmitValid = ({
    lastName,
    firstName,
    email,
    username,
    password,
  }: any) => {
    if (!loading) {
      createAccount({
        variables: { lastName, firstName, email, username, password },
      });
    }
  };

  const onSubmitInValid = (data: any) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <FormBox>
        <ChimstagramLogo />
        <Subtitle>침착맨의 열받음을 느끼려면 가입하세요.</Subtitle>
        <FacebookLogin>
          <SubmitButton type="submit" value="Facebook으로 로그인" />
        </FacebookLogin>

        <Separator />
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInValid)}>
          <InputBox
            onFocus={resultClear}
            {...register("lastName", { required: false })}
            type="text"
            placeholder="성"
          />
          <InputBox
            hasError={Boolean(errors?.firstName)}
            onFocus={resultClear}
            {...register("firstName", { required: true, minLength: 1 })}
            type="text"
            placeholder="이름 (필수)"
          />
          <InputBox
            hasError={Boolean(errors?.email)}
            onFocus={resultClear}
            {...register("email", {
              minLength: 6,
              required: true,
              pattern: { value: emailExp, message: "이메일 형식 에러" },
            })}
            type="text"
            placeholder="이메일 주소 (필수)"
          />
          <InputBox
            hasError={Boolean(errors?.username)}
            onFocus={resultClear}
            {...register("username", {
              minLength: 6,
              maxLength: 12,
              required: true,
              pattern: { value: usernameExp, message: "username 형식 에러" },
            })}
            type="text"
            placeholder="사용자 이름 ┃ 소문자 또는 _ 6~12글자 (필수)"
          />
          <InputBox
            hasError={Boolean(errors?.password)}
            onFocus={resultClear}
            {...register("password", {
              minLength: 6,
              maxLength: 16,
              required: true,
              pattern: {
                value: passwordExp,
                message: "숫자,영어,특수문자 포함 8~16글자",
              },
            })}
            type="password"
            placeholder="비밀번호┃ 숫자,영어,특수문자 8~16글자 (필수)"
          />
          <SubmitButton
            disabled={!isValid || !loading}
            type="submit"
            value={loading ? "가입중" : "가입"}
          />
        </form>
      </FormBox>
      <BottomBox
        cta="계정이 있으신가요?"
        link={routes.home}
        linkText="로그인"
      />
    </AuthLayout>
  );
};

export default SignUp;
