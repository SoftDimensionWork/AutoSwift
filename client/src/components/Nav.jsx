import { NavLink } from "react-router-dom"
import Button from "./Button"
const Nav = () => {
  return (
    <>
        <div className="flex justify-between">
            {/* logo */}
            <div className="">
                <h1 className="text-3xl font-semibold">
                    Logo-🖤
                </h1>
            </div>
            {/* Nav buttons */}
            <div className="flex gap-14">
                <NavLink to="/" className={`text-lg font-light text-gray-600`}>
                    Home
                </NavLink>
                <NavLink className={`text-lg font-light text-gray-600`}>
                    Features
                </NavLink>
                <NavLink className={`text-lg font-light text-gray-600`}>
                    Cars
                </NavLink>
                <NavLink className={`text-lg font-light text-gray-600`}>
                    Reviews
                </NavLink>
            </div>
            {/* contact */}
            <div className="">
                <Button text={`Contact`}/>
            </div>
        </div>
    </>
  )
}

export default Nav