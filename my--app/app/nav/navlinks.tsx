"use client"
import Link from "next/link";
import { FC } from "react";
import Clasis from "../nav/style/nav.module.css"
import ID from "./style/nav.module.css"
import BurgerLinks  from "../nav/components/burger";



const NavLinks: FC = () => {
    return (

        <div>
              
            <div className={Clasis["nav"]}> 
            <BurgerLinks></BurgerLinks>
                <ul className={Clasis["ul"]}>
           
                    
                    <div>
                        <img src="img/logo.jpg" alt="" className={Clasis["logo"]} />
                    </div>
                    <li className={Clasis["li"]}>
                        <Link href="#home" className={Clasis["a"]}>Մեր մասին</Link>
                    </li>
                    <li className={Clasis["dropdown"]}>
                        <Link href="javascript:void(0)" className={Clasis["dropbtn"]}>Գրադարան</Link>
                        <div className={Clasis["dropdown-content"]}>
                            <Link href="#" className={Clasis["a"]}> Օրենսդրություն</Link>
                            <Link href="#" className={Clasis["a"]}>Հրատարակություններ</Link>

                        </div>
                    </li>
                    <li className={Clasis["li"]}>
                        <Link href="#news" className={Clasis["a"]}>Աշխատակզմ v</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )

}
export default NavLinks