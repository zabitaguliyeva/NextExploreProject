import{
    BsYoutube,
    BsGithub,
    BsLinkedin,
    BsFacebook,
    BsReddit,
} from "react-icons/bs"
import payment from '../../images/Logos-01.png'
import Logo from "./Logo"
import Container from "./Container"

const Footer = () => {
  return <div className="w-full bg-darkText texy-slate-100">
    <Container className="grid grid-cols-1 md:grid-cols-2 lg :grid-cols-4 gap-10">
        <div className="text-white flex flex-col gap-y-4">
            <Logo/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis nam non ex temporibus quos maiores velit maxime odio quo optio!</p>
            <div className="flex items-center gap-x-4">
             
               <a href="youtube.com" target="_blank">
               <span className="socialLink">
                   <BsYoutube/> 
                </span>
               </a>
               <a href="youtube.com" target="_blank">
               <span className="socialLink">
                   <BsGithub/> 
                </span>
               </a>
               <a href="youtube.com" target="_blank">
               <span className="socialLink">
                   <BsLinkedin/> 
                </span>
               </a>
               <a href="youtube.com" target="_blank">
               <span className="socialLink">
                   <BsFacebook/> 
                </span>
               </a>
               <a href="youtube.com" target="_blank">
               <span className="socialLink">
                   <BsReddit/> 
                </span>
               </a>
            </div>
        </div>
        <div>
            <p className="text-lg">Latest posts</p>
            <ul className="text-white text-sm font-light mt-2 flex flex-col gap-y-2">
             <li className="flex flex-col"> <span className="text-slate hover:text-orange-600 cursor-pointer duration-200"> Where Music Is Headed Next</span>
              <span className="text-orange-600"> Augst 6, 2022</span></li>
              <li className="flex flex-col"> <span className="text-slate hover:text-orange-600 cursor-pointer duration-200"> Where Music Is Headed Next</span>
              <span className="text-orange-600"> Augst 6, 2022</span></li>
              <li className="flex flex-col"> <span className="text-slate hover:text-orange-600 cursor-pointer duration-200"> Where Music Is Headed Next</span>
              <span className="text-orange-600"> Augst 6, 2022</span></li>
              <li className="flex flex-col"> <span className="text-slate hover:text-orange-600 cursor-pointer duration-200"> Where Music Is Headed Next</span>
              <span className="text-orange-600"> Augst 6, 2022</span></li>
            </ul>
            <p className="text-lg">Links</p>
            <ul className="text-white text-base font-medium mt-2 flex flex-col gap-y-2">
                <li className="hover:text-orange-500 cursor-pointer duration-200">Home</li>
                <li className="hover:text-orange-500 cursor-pointer duration-200">Cart </li>
                <li className="hover:text-orange-500 cursor-pointer duration-200">About</li>
                <li className="hover:text-orange-500 cursor-pointer duration-200">Home</li>
            </ul>
            <li className="hover:text-orange-500 cursor-pointer duration-200">Contact</li>
        </div>
    </Container>
  </div>
}

export default Footer