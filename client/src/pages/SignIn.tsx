import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-center w-full h-screen mx-auto mt-14 lg:mt-36">
      <SignIn />
      </div>
    </MaxWidthWrapper>
  );
};
