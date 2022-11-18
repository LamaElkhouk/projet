
const Entete = () => {
    const currentDay= new Date().getDate();
    const currentMonth =new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const jours= ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];

    //tab = {id:1, month:"janvier", nb:31, annee: []}
   

    //console.log(years)


    const months =[ {nom:"Janvier",nbjours:31}, {nom:"février",nbjours:29}, {nom:"mars",nbjours:31},{nom:"avril",nbjours:30},{nom:"mai",nbjours:31},{nom:"juin",nbjours:30},{nom: "juillet",nbjours:31}, {nom:"août",nbjours:31}, {nom:"septembre",nbjours:30},{nom:"octobre",nbjours:31},{nom:"novembre",nbjours:30},{nom:"décembre",nbjours:31}];
  

    const months2 =[ {nom:"Janvier",nbjours:31}, {nom:"février",nbjours:28}, {nom:"mars",nbjours:31},{nom:"avril",nbjours:30},{nom:"mai",nbjours:31},{nom:"juin",nbjours:30},{nom: "juillet",nbjours:31}, {nom:"août",nbjours:31}, {nom:"septembre",nbjours:30},{nom:"octobre",nbjours:31},{nom:"novembre",nbjours:30},{nom:"décembre",nbjours:31}];

    
    
    const years=[];

    for (let i = 1997; i<2040; i++){
        if((i%400===0)||((i%4===0)&&(i%100!==0))){ //année bissextile
            years.push({id: i,bissextile:true,mois:months});
            /*if(years.mois.nom==="février"){
                years.mois.nbjours=29;
            }else if((years.mois.nom==="novembre")||(years.mois.nom==="septembre")||(years.mois.nom==="avril")||(years.mois.nom==="juin")){ 
                years.mois.nbjours=30;
            }else{
                years.mois.nbjours=31;
            }*/
        }
        else{
            years.push({id: i,bissextile:false,mois:months2}); //année classique
        }
    }
   // console.log(years[0].mois[1].nom); //parcours année et parcours mois =>retourne fevrier


    //novembre septembre juin avril => 30 jours
    // fevrier. =  classique =28 jours / bi=	29 jours

    return ( 
        <div> 
            <p>entete {currentDay} {currentMonth} {currentYear}</p>   
            <div>
            {years.map((year,id)=> 
                        year.bissextile?
                        <p className="m-2" key={id.year}>{year.id}: année BISSEXTILE  </p> 
                        :
                        <p className="m-2" key={id.year}>{year.id}: année classique ; </p>
                        )}
            </div>
            <table class="table">
                <thead>
                    <tr>
                    {jours.map((p,index)=>
                        <th className="m-2" key={index}>{p}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {months.map((month,index)=>
                        <td className="m-2" key={index}>{month.nom} : 
                        {month.nbjours}
                        
                        </td>
                    )}
                    </tr>
                </tbody>
            </table>        
            </div>
    );
}

export default Entete;