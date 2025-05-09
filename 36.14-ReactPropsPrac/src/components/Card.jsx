import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
    return (
        <div>
            <div className="card">
                <p>{props.id}</p>
                <div className="top">
                    <h2 className="name">{props.name}</h2>
                    <Avatar img={props.img}/>
                </div>
                <div className="bottom">
                    <Detail tel={props.tel} email={props.email}/>
                </div>
            </div>
        </div>
    );
};

export default Card;