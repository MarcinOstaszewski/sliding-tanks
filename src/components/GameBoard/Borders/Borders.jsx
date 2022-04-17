import { BordersStyled } from './Borders.Styled';

const Borders = () => {
    return (
        <BordersStyled>
            <div className="border top-border"></div>
            <div className="border right-border"></div>
            <div className="border bottom-border"></div>
            <div className="border left-border"></div>

            {/* <div className="bottom-bar" style={{ backgroundColor: coloursPalette.primary }}></div>
            <div className="right-bar"></div> */}
        </BordersStyled>
    );
};

export default Borders;