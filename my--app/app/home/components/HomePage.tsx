import { FC } from "react";
import Clasis from "../style/Homebg.module.css"
import Abouts from "../components/about";
import Userobje from "../components/Userobject";
import Products from"../components/newsProducts"
import  ITKart from "../components/karta"
const HomeEG: FC = () => {
    return (
        <div>
            <div className={Clasis["homeimg"]}>
                <div className={Clasis["textElement"]}>
                    <div className={Clasis["text"]}>
                        <h2> Բացահայտենք յուրաքանչյուր
                            երեխայի ներուժը
                        </h2>
                    </div>
                </div>
            </div>
            <Abouts/>
            <Userobje/>
            <div>

            <Products/>
            </div>
            <ITKart/>

        </div>
    )
}
export default HomeEG