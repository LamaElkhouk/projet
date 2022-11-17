import Entete from "./composantsCalendrier/EnteteCalendrier";
import Body from "./composantsCalendrier/BodyCalendrier";
const Calendrier = () => {
    return ( 
        <div> 
            <p>Mon calendrier</p>
            <Entete/>
            <Body/>
        </div>
    );
}

export default Calendrier;