import React from 'react'
import { useNavigate } from 'react-router-dom';

function Buttonn({title ,color,hoverColor,to,download,textcolor }) {
  const navigate = useNavigate();

  const handleClick = () => {
     if (download) {
      const link = document.createElement('a');         // <a> tag create kiya JS se
      link.href = download;                             // uska href diya => jaise "/resume.pdf"
      link.download = download.split('/').pop();        // jo bhi last me file name ho, wo download name banega
      link.click();                                     // manually click karwa diya us link pe
    } else if (to) {
      navigate(to);                                     // agar download nahi hai, to page navigate karo
    }
  };
const colortext=()=>{
if(!textcolor){
  textcolor==='text-white';
}
else if(textcolor){
  textcolor===textcolor;
}
};
  return (
    <>
    <button className={`${color} ${textcolor} px-1 py-1 md:px-4 md:py-2 text-sm md:text-xl rounded-lg  ${hoverColor}` } onClick={handleClick}>
        {title}
    </button>
    </>
  )
}

export default Buttonn