import { useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { adminLoginStore } from "../../zustand/store";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const getData = adminLoginStore();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { username, password } = data;

    getData.login(username, password);
  };

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col justify-center h-screen align-middle">
        <h1 className="mb-10 text-2xl font-bold text-center uppercase">
          Admin Login
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center"
          action=""
        >
          <div className="flex flex-col justify-center gap-2 max-w-[400px] w-full">
            <Label>Username</Label>
            <Input
              type="text"
              placeholder="Enter username"
              className="transition-all ease-in-out"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <div className="flex flex-col justify-center gap-2 mt-6 max-w-[400px] w-full">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter password"
              className="transition-all ease-in-out"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>
          <button className="w-40 h-12 mt-10 text-white uppercase transition-all ease-in-out bg-black border-2 border-black rounded-md hover:bg-white hover:text-black">
            Login
          </button>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default Login;
