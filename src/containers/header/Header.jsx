import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">This is First Aryan Zangi Ract project</h1>
                <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex fugiat dolor quia vel. Nisi debitis cumque incidunt consequuntur repellat eum amet, sit obcaecati voluptas consequatur
                    ducimus, aspernatur odit aliquid assumenda
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Addres" />
                    <button type="button">Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="AI" />
            </div>
        </div>
    );
};

export default Header;
