function UI() {
    return (
        <ul className="container">
            {cards.map((item, idx) => (
                <Card 
                    key={idx}
                    cimg={item.cimg}
                    cnumber={item.cnumber}
                    cmenu={item.cmenu}
                    cmoney={item.cmoney}
                    cbtn={item.cbtn}
                />
            ))}
        </ul>
    );
}