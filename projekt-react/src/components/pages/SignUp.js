import React, { useLayoutEffect } from "react";
import LoginSection from "../LoginSection";

function SignUp() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <LoginSection></LoginSection>
    </>
  );
}

export default SignUp;
