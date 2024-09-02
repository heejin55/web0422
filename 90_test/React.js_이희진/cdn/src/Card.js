function Card(props) {
    return (
        <li className="card_list">
            <div className="card_img">
                <img src={props.cimg} alt={props.cmenu} />
            </div>
            <div>
                <span className="card_number">{props.cnum}</span>
                <span className="card_menu">{props.cmenu}</span>
                <span className="card_money">{props.cmoney}</span>
            </div>
            <div className="card_btn">
                <button>{props.cbtn}</button>
            </div>
        </li>
    );
}