import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <MaxWidthWrapper>
      <div className="flex mx-auto w-full mt-14 justify-center lg:mt-36 h-screen">
      <SignIn />
      </div>
    </MaxWidthWrapper>
  );
};
