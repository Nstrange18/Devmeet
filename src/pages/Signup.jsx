import createBgImg from "../assets/create-account-devmeet-bg-image.png";
import createaccountimg from "../assets/create-account-devmeet-image.png";
import createaccountlogo from "../assets/create-account-devmeet-logo.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-screen text-[gainsboro] flex justify-center items-center bg-gradient-to-r from-[black] via-[#352f2f] to-[#1b1a1a]">
      <section
        className="flex justify-between items-center bg-center bg-cover w-4/5 h-4/5 rounded-3xl"
        style={{
          backgroundImage: `url(${createBgImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <form className="bg-[#1f1a1a] shadow-[3px_0px_9px_-2px_black] w-4/10 h-full rounded-tl-3xl rounded-bl-3xl !p-2">
          <div className="flex items-center !mr-auto">
            <img src={createaccountlogo} alt="" width={100} />
            <h1 className={`text-2xl text-[#040d14] font-bold !-ml-4`}>
              <span class="text-black">Dev</span>
              <span className="text-[#6bbd40]">meet</span>
            </h1>
          </div>

          <section className="!ml-10">

            <div className="!mr-auto !mt-5 !mb-10">
              <h1 className="text-3xl font-bold">Create an account</h1>
              <h1 className="text-gray-400">Let's get started!</h1>
            </div>

            <div className="border-1 border-gray-400 border-solid !my-5 w-9/10 rounded-md">
              <label htmlFor="username">
                <h1 className="-translate-y-3 !px-1 translate-x-2 bg-[#1f1a1a] w-fit !-mb-3">Name</h1>
              </label>
              <input
                type="text"
                name="username"
                placeholder="Please enter a username:"
                className="focus:outline-none w-full !px-2 !py-1 !-mt-9"
              />
            </div>

            <div className="border-1 border-gray-400 border-solid !my-5 w-9/10 rounded-md">
              <label htmlFor="Email">
                <h1 className="-translate-y-3 !px-1 translate-x-2 bg-[#1f1a1a] w-fit !-mb-3">Email</h1>
              </label> 
              <input
                type="text"
                name="email"
                placeholder="Email:"
                className="focus:outline-none w-full !px-2 !py-1 !-mt-9"
              />
            </div>

            <div className="border-1 border-gray-400 border-solid !my-5 w-9/10 rounded-md">
              <label htmlFor="Password">
                <h1 className="-translate-y-3 !px-1 translate-x-2 bg-[#1f1a1a] w-fit !-mb-3">Password</h1>
              </label>
              <input
                type="text"
                name="password"
                placeholder="Password:"
                className="focus:outline-none w-full !px-2 !py-1 !-mt-9"
              />
            </div>

            <button type="submit" className="w-9/10 bg-blue-700 !py-2 rounded-3xl">Create an account</button>

            <div className="flex items-center gap-2 !mt-2 text-gray-500 !py-6 !px-10">
              Already have an account? <Link to="/login" className="underline">Login</Link>
            </div>
          </section>
        </form>

        <img src={createaccountimg} alt="" className="w-6/10" />
      </section>
    </div>
  );
};

export default Signup;
