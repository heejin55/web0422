function Card(props) {
    return (
        <li className="card_list">
            <div className="card_img">
                <img src={props.cimg} alt={props.cmenu} />
            </div>
            <div>
                <span className="card_number">{props.cnumber}</span>
                <span className="card_menu">{props.cmenu}</span>
            </div>
            <div>
                <span className="card_money"><span className="card_sale">{props.csale}</span> {props.cmoney}원</span>
            </div>
            <div className="card_btn">
                <button><i class="ri-shopping-cart-line"></i>{props.cbtn}</button>
            </div>
        </li>
    );
}
