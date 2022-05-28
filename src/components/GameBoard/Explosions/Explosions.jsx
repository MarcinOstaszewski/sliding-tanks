const Explosions = (props) => {

    const newExplosions = props.explosions
        .map((exp, index) => {
            if (exp.timestamp < Date.now() - 600) {
                return '';
            }
            return <div
                key={index}
                className="explosion"
                style={{
                    left: exp.position.x,
                    top: exp.position.y
                }}
            ></div>
        });

    return <>{newExplosions}</>
}

export default Explosions;