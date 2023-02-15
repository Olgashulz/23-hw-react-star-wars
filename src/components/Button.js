const Button = ({text1, text2}) => {
    return (
        <div className="btn btn-danger col-2 offset-2">
            <p className="text-center m-0">
                {text1}
                <span className="email text-uppercase">{` ${text2}`}</span>
            </p>
        </div>
    );
};

export default Button;