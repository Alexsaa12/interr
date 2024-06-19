import { FC } from "react";
import Clasis from "../style/abouts.module.css"

const Abouts: FC = () => {
    return (
        <div className={Clasis["about"]}>
            <div className={Clasis['title']}>
                <h4 className={Clasis["title_ext"]}>մԵՐ ՄԱՍԻՆ</h4>
                <div className={Clasis["text_el"]}>
                    <span className={Clasis["textis"]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem ipsum dolor sit amet. when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.?</span>
                </div>
            </div>
        </div>
    )
}
export default Abouts