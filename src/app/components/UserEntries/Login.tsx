import React, { useState } from "react";
import NextImage from "../Common/Image/Image";
import InputField from "../Common/Forms/InputFields";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", code: "" });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Please enter a valid email address";
  };
  const validateCode = (code: string) => {
    return code.length >= 1 ? "" : "Code must not be empty";
  };
  const validatePassword = (password: string) => {
    return password.length >= 6 ? "" : "Password must be at least 6 characters";
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const codeError = validateCode(code);

    if (emailError || passwordError || code) {
      setErrors({
        email: emailError,
        password: passwordError,
        code: codeError,
      });
    } else {
      setErrors({ email: "", password: "", code: "" });
      // Proceed with form submission
      console.log({ email, password });
    }
  };

  return (
    <div className="relative custom-border-gradient w-full min-h-40 flex">
      <div className="bg-[#002B34] rounded-[18px] h-auto w-full p-9 flex flex-col items-center justifty-center">
        <div className="hidden md:flex">
          <NextImage
            src="/cof_goblin_1.png"
            alt="7bet logo"
            height={686}
            width={380}
            containerClass="z-10"
            className="absolute top-[-50px] left-[-165px] scale-110"
          />
        </div>
        <div className="flex flex-col w-full md:w-[390px] ml-0 md:ml-[165px]">
          <NextImage
            src="/Logo.png"
            alt="7bet logo"
            height={39}
            width={91}
            containerClass="relative mx-auto"
            className="mx-auto"
          />
          <p className="text-xl text-[#F8F9FF] mb-9">Login</p>
          <form className="flex flex-col min-h-[419px]" onSubmit={handleSubmit}>
            <InputField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              error={errors.email}
              variant="userEntryInput"
              className="mb-3"
            />
            <InputField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              error={errors.password}
              variant="userEntryInput"
              className="mb-3"
            />
            <div className="flex justify-end w-full mb-6">
              <Link
                href="/forgot"
                className="text-xs text-white font-medium hover:opacity-75"
              >
                Forgot password?
              </Link>
            </div>
            <InputField
              label="Code Verification"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              type="input"
              error={errors.code}
              variant="userEntryInput"
              className="mb-3"
            />
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 items-center space-x-2 mb-10 mt-16">
              <button
                type="submit"
                className="px-11 py-3 w-fit rounded-[41px] text-xl font-semibold text-white border border-cyan-200 hover:opacity-95"
                style={{
                  background:
                    "linear-gradient(180deg, #0ad4f3 0%, #9eefff 100%)",
                }}
              >
                Login
              </button>
              <span className="text-xs font-medium text-white">
                No account yet?
              </span>
              <button
                type="button"
                className="text-xs font-semibold text-cyan-100 hover:opacity-75"
              >
                REGISTER NOW
              </button>
            </div>
            <div className="flex items-center mx-auto">
              <button type="button" className="flex space-x-4 items-center">
                <NextImage
                  src="/Google.png"
                  alt="7bet logo"
                  height={20}
                  width={20}
                  containerClass="relative"
                />
                <span className="text-[#AFBBC9] text-xs font-semibold">
                  Sign in with Google
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
