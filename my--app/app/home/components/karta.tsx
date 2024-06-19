import { FC } from "react";
import Clasis from "../style/kardez.module.css";
const ITKart: FC = () => {

    return (
        <div>
            <div>
                <h2 className={Clasis["title"]}>ՔԱՐՏԵԶ</h2>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8416.778392969469!2d44.55099293915042!3d39.95331697586419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1shy!2sam!4v1718708447495!5m2!1shy!2sam" width="100%" height="200" loading="lazy"></iframe>
            </div>
        </div>
    )

}
export default ITKart