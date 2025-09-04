import { Icon } from "@iconify/react/dist/iconify.js"
import bgImg from "../assets/devmeet-bg.png"
import loginBanner from "../assets/devmeet-banner-with-logo.png"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-center bg-cover " style={{backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat"}}>
        
        {/* background image */}
        {/* <img src={bgImg} alt="" className="absolute -z-1 rounded-3xl w-250 h-7/10 min-w-100 shadow-[2px_5px_1px_1px_gainsboro]"/> */}
        
        <main className="container flex justify-around items-center w-75/100 !p-3 bg-center bg-cover rounded-2xl bg-gradient-to-br from-gray-600 via-slate-700 to-indigo-900">
        
          <div className="!-ml-10">
            <img src={loginBanner} alt="" width={400}/>
          </div>
          
          <div className="input-container bg-amber-50 rounded-2xl !p-9 !py-20 !-mr-18">
            <h2 className="font-mono !mb-6 text-2xl">Log in</h2>

            <section className="inputs ">
              <div className="flex items-center gap-2 border-1 border-amber-100 w-90 bg-gray-300 !py-1.5 !px-3 !mb-3 rounded-2xl border-none">
                <Icon icon="fa6-solid:user" className='icon' />
                <input className="focus:outline-none w-70" type="text" placeholder='Username'/>
              </div>

              <div className="flex items-center gap-2 border-1 border-amber-100 w-90 bg-gray-300 !py-1.5 !px-3 rounded-2xl border-none">
                <Icon icon="fa6-solid:lock" className='icon ' />
                <input className="focus:outline-none w-70" type="password" placeholder='Password'/>
              </div>
            </section>

            <section className="remember-line flex justify-between !p-2">
              <span className="remember-me flex items-center gap-1">
                <input type="checkbox" name="Remember Me"  value="Remember Me" />
                <label htmlFor="checkbox">Remember Me</label>
              </span>

              <span className="forgot-password-link">
                <a href="">Forgot password?</a>
              </span>
            </section>

            <section className="login-buttons flex flex-col gap-2 !mt-2">
              <button className='bg-black text-white w-90 !py-2 rounded-3xl cursor-pointer'>Log in</button>

              <div className="or-span flex items-center gap-1">
                  <div className="bg-gray-300 h-0.5 w-42"></div>         
                  or
                  <div className="bg-gray-300 h-0.5 w-42"></div>
              </div>

              <Link to="signup"><button className="cursor-pointer text-white bg-gradient-to-bl from-[#3d633d] via-[#46a546] to-[#3dad68] w-90 !py-2 rounded-4xl">Sign up</button></Link>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}

export default Login