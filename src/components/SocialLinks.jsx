import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {
 const links = [
    {
        id:1,
        child:(
            <>
            LinkedIn <FaLinkedin fontSize={30}/>
            </>
        ),
        href:'https://linkedin.com',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            GitHub <FaGithub  fontSize={30}/>
            </>
        ),
        href:'https://github.com/Karthigeyankiruba',
       
    },
    {
        id:3,
        child:(
            <>
            Mail <HiOutlineMail  fontSize={30} />
            </>
        ),
        href:'karthigeyan0901@gmail.com',
        
    },
    {
        id:4,
        child:(
            <>
            Resume <BsFillPersonLinesFill fontSize={30}/>
            </>
        ),
        href:'/resume.pdf',
        style:'rounded-br-md',
        download:true,
    },
 ]


  return (
    <div className='hidden lg:flex-col top-[35%] left-0 fixed'>
        <ul>

            {
                links.map(({id, child,style,download,href}) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + " " + style}>
                <a href={href} className='flex justify-between items-center w-full text-white' 
                download={download}
                target='_blank'
                rel="noreferrer"
                >
                    {child}
                    </a>
            </li>
                ))
            }
           
        </ul>
    </div>
  )
}

export default SocialLinks