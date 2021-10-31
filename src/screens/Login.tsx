import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import routes from "../routes";
import AuthLayout from "../components/auth/AuthLayout";
import SubmitButton from "../components/auth/SubmitButton";
import Separator from "../components/auth/Separator";
import InputBox from "../components/auth/InputBox";
import FormBox from "../components/auth/FormBox";
import BottomBox from "../components/auth/BottomBox";
import Pagetitle from "../components/pagetitle";
import { SubmitHandler, useForm } from "react-hook-form";
import { passwordExp } from "../regExps";
import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import ErrorBox from "../components/auth/ErrorBox";
import { logUserIn } from "../apollo";
import { Link, useLocation } from "react-router-dom";
import { ChimstagramLogo } from "../components/shared";
const FacebookLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  color: ${(props) => props.theme.facebookFontColor};
  cursor: pointer;
  span {
    margin-left: 8px;
    font-size: 14px;
    line-height: 13px;
    font-weight: 600;
  }
`;

const ForgotPassword = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;

  width: 100%;
  a {
    text-align: center;
    width: 100%;
    cursor: pointer;
    color: ${(props) => props.theme.linkFontColor};
    font-size: 12px;
  }
`;

const LOGIN_MUTATION = gql`
  mutation ($loginUser: String!, $password: String!) {
    login(loginUser: $loginUser, password: $password) {
      error
      ok
      token
    }
  }
`;

interface IForm {
  user: string;
  password: string;
}

const Login = () => {
  const location = useLocation<any>();
  const [loginError, setLoginError] = useState(null);
  const onCompleted = (data: any) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) {
      setLoginError(error);
      setError("result", { message: error });
    } else {
      setLoginError(null);
    }
    if (token) {
      logUserIn(token);
    }
  };

  const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted });

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmitValid: SubmitHandler<IForm> = ({ user, password }) => {
    if (!loading) {
      login({ variables: { loginUser: user, password } });
    }
  };

  const onSubmitInvalid = (data: any) => {
    console.log("onSubmitInvalid");
  };

  return (
    <AuthLayout>
      <Pagetitle title="로그인" />
      <FormBox>
        <ChimstagramLogo />
        <form onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}>
          <InputBox
            onFocus={() => clearErrors("result")}
            hasError={Boolean(errors?.user?.message)}
            {...register("user", {
              required: "사용자 이름 또는 이메일을 입력하세요",
              minLength: 6,
            })}
            type="text"
            placeholder="사용자 이름 또는 이메일"
          />
          <InputBox
            onFocus={() => clearErrors("result")}
            hasError={Boolean(errors?.password?.message)}
            {...register("password", {
              required: "비밀번호를 입력하세요",
              minLength: 8,
              pattern: {
                value: passwordExp,
                message: "숫자,영어,특수문자 포함 8~16글자",
              },
            })}
            type="password"
            placeholder="비밀번호"
          />
          <SubmitButton
            disabled={!isValid || loading}
            type="submit"
            value={loading ? "로그인중" : "로그인"}
          />
        </form>
        <Separator />
        <FacebookLogin>
          <FontAwesomeIcon icon={faFacebookSquare} />
          <span>Facebook으로 로그인</span>
        </FacebookLogin>
        <ErrorBox hasError={Boolean(!loginError)}>
          {loginError ? loginError : location?.state?.message || null}
        </ErrorBox>
        <ForgotPassword>
          <Link to="#">비밀번호를 잊으셨나요?</Link>
        </ForgotPassword>
      </FormBox>
      <BottomBox
        cta="계정이 없으신가요?"
        link={routes.signUp}
        linkText="가입하기"
      />
    </AuthLayout>
  );
};

export default Login;
