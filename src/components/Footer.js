import Button from "./Button";

const text1 ="Send me an";
const text2="email";
const Footer = () => {
    return (
        <div className="footer row align-items-center m-0">
            <Button text1={text1} text2={text2}/>
        </div>
    );
};

export default Footer;