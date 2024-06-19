import { FC } from "react";
import { User } from "../components/👥 User";
import Clasis from "../style/User.module.css"
import ID from "../style/User.module.css";
import { NEWis } from "../components/NEW 🆕"

const Userobje: FC = () => {
    let Userd = User.map((is) => {
        return (
            <div key={is.Id} className={Clasis["User_Continer"]}>
                <div className={Clasis["Cntener"]}>
                    <img src={is.img} alt="" className={Clasis["user_img"]} />
                    <div className={Clasis["text_Continer"]}>

                        <span id={ID["Text_name"]}>{is.last} </span>
                        <div>
                            <span id={ID["Text_last"]}>{is.fuleName}</span>
                        </div>

                    </div>
                </div>
            </div>
        )
    })
    let nevs = NEWis.map((Index) => {
        return (
            <div key={Index.id} className={Clasis["User_Continer"]}>
                <div className={Clasis["Cntener"]}>
                    <img src={Index.img} alt="" className={Clasis["user_img"]} />
                    <div className={Clasis["text_Continer"]}>
                        <span id={ID["Text_name"]}>{Index.text} </span>
                        <div>
                            <span id={ID["Text_last"]}>{Index.text_bottn}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    let NEW
    return (
        <div className={Clasis["Continer_isUser"]}>
            <div className={Clasis["frstCilder"]}>
                <h3 id={ID["Title"]}>մԵՐ ՄԱՍԻՆ</h3>
                <div className={Clasis["elemenetUSER"]}>
                    {Userd}
                </div>
            </div>
            <div className={Clasis["frstCilder"]}>
                <h3 id={ID["Title"]}>ՆՈՐՈՒԹՅՈՒՆՆԵՐ </h3>
                <div className={Clasis["elemenetUSER"]}>
                    {nevs}
                </div>
            </div>
        </div>
    )
}
export default Userobje
