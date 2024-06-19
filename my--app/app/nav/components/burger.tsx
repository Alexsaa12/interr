import { FC } from "react";
import Clasis from "../style/burger.module.css"
 import ID  from "../style/burger.module.css"
 const BurgerLinks:FC =()=>{
     return(
        <div className={Clasis["body"]}>
            <nav role="navigation">
                <div id={ID["menuToggle"]}>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id={ID["menu"]}>
                        <a href="#"><li className={Clasis["li_links"]}>Home</li></a>
                        <a href="#"><li className={Clasis["li_links"]}>Home</li></a>
                        <a href="#"><li className={Clasis["li_links"]}>About</li></a>
                        <a href="#"><li className={Clasis["li_links"]}>Info</li></a>
                        <a href="#"><li className={Clasis["li_links"]}>Contact</li></a>
                        <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
                    </ul>
                </div>
            </nav>
            </div>
     )
 }
 export default BurgerLinks