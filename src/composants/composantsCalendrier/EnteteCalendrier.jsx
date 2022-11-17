
const Entete = () => {
    const currentDay= new Date().getDate();
    const currentMonth =new Date().getMonth();
    const currentYear = new Date().getFullYear();
    return ( 
        <div> 
            <p>entete {currentDay} {currentMonth} {currentYear}</p>            
            </div>
    );
}

export default Entete;