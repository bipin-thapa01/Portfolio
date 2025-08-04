import "./global.css";
import { useRouter } from "next/navigation";

export default function Footer(){

  const router = useRouter();

  const date = new Date();
  const year = date.getFullYear();

  const goFacebook = ()=>{
    router.push("https://www.facebook.com/bipin.thapasingh/");
  }

  const goGithub = ()=>{
    router.push("https://github.com/bipin-thapa01");
  }

  const goLinkedin = ()=>{
    router.push("https://www.linkedin.com/in/bipin-thapa-990b5131b/");
  }

  return (
    <div className="footer">
      <div>Copyright {year} - All right reserved</div>
      <div>
        <div className="pointer"  onClick={goFacebook}>Facebook</div>
        <div className="pointer" onClick={goGithub}>Github</div>
        <div className="pointer" onClick={goLinkedin}>LinkedIn</div>
      </div>
    </div>
  );
}