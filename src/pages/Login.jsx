import { Icon } from "@iconify/react/dist/iconify.js"
import bgImg from "../assets/devmeet-bg.png"
import loginBanner from "../assets/devmeet-banner-with-logo.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Home from "./Home"

const Login = () => {

  const inputValues = {
    userName: '',
    password: '',
  }

  const [formValues, setFormValues] = useState(inputValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  // Handles the error 
  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors])

  // if (!formErrors) {
  //   <Home />
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value})
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  const validate = (values) => {
    const error = {}
    if(!values.userName){
      error.userName = 'Username is required'
    }

    if(!values.password){
      error.password = 'Password is required'
    } 

    else if ( values.password.length < 8 ) {
      error.password = 'Password must be more than 8 characters';
    }
    else if ( values.password.length > 16 ) {
      error.password = 'Password must be less than 16 characters';
    }
    return error
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center bg-center bg-cover" style={{backgroundImage: `url(${bgImg})`, backgroundRepeat: "no-repeat"}}>
        
        {/* background image */}
        {/* <img src={bgImg} alt="" className="absolute -z-1 rounded-3xl w-250 h-7/10 min-w-100 shadow-[2px_5px_1px_1px_gainsboro]"/> */}
        
        <main className="container flex justify-around items-center w-78/100 h-auto !p-3 bg-center bg-cover rounded-2xl bg-gradient-to-br from-gray-600 via-slate-700 to-indigo-900">
        
          <div className="">
            <img src={loginBanner} alt="login banner" width={400}/>
          </div>

          
          <form onSubmit={handleSubmit} className="input-container bg-amber-50 rounded-2xl !p-9 !py-20 !-mr-18">

            {/* <pre>{  JSON.stringify(formValues, undefined, 2) }</pre> <br /> */}
            
            {/* Signed in successfully message */}
            {Object.keys(formErrors).length === 0 && isSubmit ? <div className="!p-2 rounded-2xl w-4/5 bg-black text-white">Signed in successfully</div> : null}

            <h2 className="font-mono !mb-6 text-2xl">Log in</h2>


            <section className="inputs">
              <div className="flex items-center gap-2 border-1 border-amber-100 w-90 bg-gray-300 !py-1.5 !px-3 !mb-1zzzzzzzzzzzzzzzzzzzzzzzxd rounded-2xl border-none">
                <Icon icon="fa6-solid:user" className='icon' />
                <input className="focus:outline-none w-70" type="text" name="userName" placeholder='Username' value={formValues.userName} onChange={handleChange}/>
              </div>
              <p className="text-red-700">{ formErrors.userName }</p> <br />

              <div className="flex items-center gap-2 border-1 border-amber-100 w-90 bg-gray-300 !py-1.5 !px-3 rounded-2xl border-none">
                <Icon icon="fa6-solid:lock" className='icon ' />
                <input className="focus:outline-none w-70" type="password" name="password" placeholder='Password' value={formValues.password} onChange={handleChange}/>
              </div>
              <p className="text-red-700">{ formErrors.password }</p>
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
              <button type="submit" className='bg-black text-white w-90 !py-2 rounded-3xl cursor-pointer'>Log in</button>

              <div className="or-span flex items-center gap-1">
                  <div className="bg-gray-300 h-0.5 w-42"></div>         
                  or
                  <div className="bg-gray-300 h-0.5 w-42"></div>
              </div>

              <Link to="/signup"><button className="cursor-pointer text-white bg-gradient-to-bl from-[#3d633d] via-[#46a546] to-[#3dad68] w-90 !py-2 rounded-4xl">Sign up</button></Link>
            </section>
          </form>
        </main>
      </div>
    </>
  )
}

export default Login