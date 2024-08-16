import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/600847" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/august-helle/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, i) => {
        return (
          <Link href={social.path} key={i} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
