function Ui() {
    return (
        <ul className="container">
            {cards.map((item, idx) => (
                <Card
                    key={idx}
                    cimg={item.cimg}
                    cnumber={item.cnum}
                    cmenu={item.cmenu}
                    csale={item.csale}
                    cmoney={item.cmoney}
                    cbtn={item.cbtn}
                />
            ))}
        </ul>
    );
}
