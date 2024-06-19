import { FC } from "react";
import Clasis from "../style/nevsProduct.module.scss"
import { title } from "process";
const Products: FC = () => {
   return (
      <div className={Clasis["container"]}>
      <h1 className={Clasis["title_hidn"]} >ՀՐԱՏԱՐԱԿՈՒԹՅՈՒՆՆԵՐ</h1>
      <div className={ Clasis["publication"]}>
        <div className={Clasis["image"]}>
          <img src="/img/p1.png" alt="Sample" width={150} height={100} />
        </div>
        <div className={Clasis["details"]}>
        <h2 className={Clasis["title"]}>վերնագիր</h2>
          <p className={Clasis["text"]}>ենթագրեր, ենթագրեր, ենթագրեր, ենթագրեր, ենթագրեր</p>
        </div>
      </div>
      <div className={ Clasis["publication"]}>
        <div className={Clasis["image"]}>
          <img src="/img/p1.png" alt="Sample" width={150} height={100} />
        </div>
        <div className={Clasis["details"]}>
          <h2 className={Clasis["title"]}>վերնագիր</h2>
          <p className={Clasis["text"]}>ենթագրեր, ենթագրեր, ենթագրեր, ենթագրեր, ենթագրեր</p>
        </div>
      </div>
      </div>
   )
}

export default Products