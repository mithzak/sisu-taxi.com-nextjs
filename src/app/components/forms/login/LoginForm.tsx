import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";

const loginSchema = z.object({
    email: z.string().email("Email is invalid."),
    password: z.string().min(6, "Password must be at least 6 characters long."),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        console.log("Login Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col">
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    className="bg-[#1E1E1E] text-white p-4 rounded-xl border border-gray-700 focus:border-[#FDB813] outline-none transition"
                />
                {errors.email && (
                    <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
                )}
            </div>

            <div className="flex flex-col">
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                    className="bg-[#1E1E1E] text-white p-4 rounded-xl border border-gray-700 focus:border-[#FDB813] outline-none transition"
                />
                {errors.password && (
                    <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>
                )}
            </div>

            <button
                type="submit"
                className="bg-[#FDB813] hover:bg-amber-300 text-[#2A2A2A] font-bold py-3 rounded-2xl shadow-lg hover:shadow-[0_0_25px_#FDB813aa] hover:scale-105 transition transform mt-2"
            >
                Login
            </button>
        </form>
    );
}

export default LoginForm;