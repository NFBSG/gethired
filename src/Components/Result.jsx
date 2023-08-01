import {card} from '../assets';
import styles,{layout} from '../style';
import Button from './Button';
const Result =()=>{
  //CardDeal
    return(
        <section className={layout.section}>
         <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>We have differnt finetech companies and great partner with banking firms
           
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Here you can job in technical domain such as software engineer,data scientist, software tester as well as non coding domain like UI/UX Designer, Grapich Designer, Investment Banking and much more
      </p>
      <Button styles="mt-10 rounded-[10px]"/>
    </div>

<div className={layout.sectionImg}>
  <img src={card} alt="card" className='w-[100%] h-[100%]'/>
  
</div>
  </section>
    )
}
export default  Result;