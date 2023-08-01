import styles from "../style";
import {logo} from "../assets";
import {footerLinks,socialMedia} from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
          <div className="flex-[1] flex flex-col justify-start mr-10">
            <img src={logo} alt="hoobank" className="w-[266px] h-[72.14px] object-contain"/>
            <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to get hire at top companies in just one click.
        </p>
              </div>   
              <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerLink) => (
                 <div key={footerLink.key} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                 <h4>
                   {footerLink.title}
                   </h4> 
                   <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
                   </div>
                ))}
                </div>     
        </div>
        
        <div className="w-full flex justify-center items-center md:flex-row  pt-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          © Copyright 2023 to GetHired. All Rights Reserved. Created By Satyam Gupta
        </p>
       
        </div>

    </section>
  )
}

export default Footer