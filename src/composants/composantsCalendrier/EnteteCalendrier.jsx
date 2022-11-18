
const Entete = () => {
    const firstdate = new Date('1997-01-01');

    const jours= ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
    const months =[ {nom:"Janvier",nbjours:31}, {nom:"février",nbjours:29}, {nom:"mars",nbjours:31},{nom:"avril",nbjours:30},{nom:"mai",nbjours:31},{nom:"juin",nbjours:30},{nom: "juillet",nbjours:31}, {nom:"août",nbjours:31}, {nom:"septembre",nbjours:30},{nom:"octobre",nbjours:31},{nom:"novembre",nbjours:30},{nom:"décembre",nbjours:31}];
    const months2 =[ {nom:"Janvier",nbjours:31}, {nom:"février",nbjours:28}, {nom:"mars",nbjours:31},{nom:"avril",nbjours:30},{nom:"mai",nbjours:31},{nom:"juin",nbjours:30},{nom: "juillet",nbjours:31}, {nom:"août",nbjours:31}, {nom:"septembre",nbjours:30},{nom:"octobre",nbjours:31},{nom:"novembre",nbjours:30},{nom:"décembre",nbjours:31}];

    const tab_nbjours=[];
    for(let i=0;i<months.length;i++){
        tab_nbjours.push(months[i].nbjours);
    }

    const tab_calendrier=[];




    const years=[];

    for (let i = 0; i<43; i++){
            const annee=firstdate.getFullYear()+i; // commence a partir de 1997 jusqu'a 2040

        if((annee%400===0)||((annee%4===0)&&(annee%100!==0))
        ){ //année bissextile
            years.push({id: firstdate.getFullYear()+i,bissextile:true,mois:months});
            /* for(let j =0;j<12;j++){
                console.log("yearrrrrrr"+years[i].mois[j].nom+"  "+years[i].mois[j].nbjours);
                if(years[i].mois[j].nom==="février"){
                    years[i].mois[j].nbjours=29;
                }else if((years[i].mois[j].nom==="novembre")||(years[i].mois[j].nom==="septembre")||(years[i].mois[j].nom==="avril")||(years[i].mois[j].nom==="juin")){ 
                    years[i].mois[j].nbjours=30;
                }else{
                    years[i].mois[j].nbjours=31;
                }  
            }*/

                //console.log(years[0].mois[1].nom); //parcours année et parcours mois =>retourne fevrier

        }else{

            years.push({id: firstdate.getFullYear()+i,bissextile:false,mois:months2}); //année classique
            /*for(let j =0;j<12;j++){
                if(years[i].mois[j].nom==="février"){
                    years[i].mois[j].nbjours=28;
                }else if((years[i].mois[j].nom==="novembre")||(years[i].mois[j].nom==="septembre")||(years[i].mois[j].nom==="avril")||(years[i].mois[j].nom==="juin")){ 
                    years[i].mois[j].nbjours=30;
                }else{
                    years[i].mois[j].nbjours=31;
                }  
            }*/
        
        
        }
    }
    console.log(years);

    //novembre septembre juin avril => 30 jours
    // fevrier. =  classique =28 jours / bi=	29 jours

    return ( 
        <div> 
            <p>entete</p>   
            <div>
            {years.map((year,index)=> 
                        year.bissextile?
                        <ul className="m-2" key={index}>{year.id}: année BISSEXTILE 
                            <li>
                                {year.mois.map((m,index2)=>{
                                    return(
                                        <div> {m.nom} 

                                            <span> {m.nbjours} </span>

                                        </div>
                                    )
                                })
                                }
                                
                                </li>
                        </ul>  

                        
                                                :
                        <ul className="m-2" key={index}>{year.id}: année classique  
                            <li>
                                {year.mois.map((m,index2)=>{
                                    return(
                                        <div> {m.nom} 

                                            <span> {m.nbjours} </span>

                                        </div>
                                    )
                                })
                                }
                                
                            </li>
                        </ul>
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
                        <ul>
                        {tab_nbjours.map((jour,index)=>
                        <l className="m-2" key={index}>{jour}

                        {}
                        </l>
                    )}

                        </ul>
                    </tr>
                </tbody>
            </table>        
            </div>
    );
}

export default Entete;