const navItem = ["Home", "About me", "Star Wars", "Contact"];

const Navigation = () => {
    return (
        <div className="fixed-top mt-1 ms-5">
            <ul className="nav">
                {navItem.map(item => <li className="nav-item btn btn-danger mx-1">{item}</li>)}
            </ul>
        </div>
    );
}
export default Navigation;