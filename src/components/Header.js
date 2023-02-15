import Navigation from "./Navigation";

const title = "Luke Skywalker";
const Header = () => {
    return (
        <div className="header">
            <Navigation/>
            <h1 className="text-center py-4">{title}</h1>
        </div>
    );

}

export default Header;