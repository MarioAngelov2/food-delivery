import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center h-screen align-middle">
        <h1 className="mb-10 text-2xl font-bold text-center uppercase">
          Admin Login
        </h1>
        <form className="flex flex-col items-center justify-center" action="">
          <div className="flex flex-col justify-center gap-2 max-w-[400px] w-full">
            <Label>Username</Label>
            <Input
              type="email"
              placeholder="Enter username"
              className="transition-all ease-in-out"
            />
          </div>
          <div className="flex flex-col justify-center gap-2 mt-6 max-w-[400px] w-full">
            <Label>Password</Label>
            <Input
              type="email"
              placeholder="Enter password"
              className="transition-all ease-in-out"
            />
          </div>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default Login;
