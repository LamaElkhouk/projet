
const Entete = () => {
    const firstdate = new Date('1997-01-01'); //premiere date

    var date = new Date('2022-11-18');
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    console.log("first : "+firstDay);
    console.log("last : "+lastDay);


    const jours= ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]; //jour de la
    const months =[ {nom:"Janvier",nbjours:31}, {nom:"février",nbjours:29}, {nom:"mars",nbjours:31},{nom:"avril",nbjours:30},{nom:"mai",nbjours:31},{nom:"juin",nbjours:30},{nom: "juillet",nbjours:31}, {nom:"août",nbjours:31}, {nom:"septembre",nbjours:30},{nom:"octobre",nbjours:31},{nom:"novembre",nbjours:30},{nom:"décembre",nbjours:31}];
    const months2 =[ {nom:"Janvier",nbjours:31}, {nom:"février",nbjours:28}, {nom:"mars",nbjours:31},{nom:"avril",nbjours:30},{nom:"mai",nbjours:31},{nom:"juin",nbjours:30},{nom: "juillet",nbjours:31}, {nom:"août",nbjours:31}, {nom:"septembre",nbjours:30},{nom:"octobre",nbjours:31},{nom:"novembre",nbjours:30},{nom:"décembre",nbjours:31}];

    const tab_nbjours=[];
    for(let i=0;i<months.length;i++){
        tab_nbjours.push(months[i].nbjours);
    }

    const years=[];
    for (let i = 0; i<43; i++){
            const annee=firstdate.getFullYear()+i; // commence a partir de 1997 jusqu'a 2040
        if((annee%400===0)||((annee%4===0)&&(annee%100!==0))
){ //année bissextile
            years.push({id: firstdate.getFullYear()+i,bissextile:true,mois:months});
        }else{
            years.push({id: firstdate.getFullYear()+i,bissextile:false,mois:months2}); //année classique
        }
    }

    return ( 
        <div> 
            <p>entete</p>   
            <div>
            {years.map((year,index)=> 
                        year.bissextile?
                        <ul className="m-2" key={index}>{year.id}: année BISSEXTILE 
                            <li>
                                {year.mois.map((m,index2)=>{
                                    const tab=[];
                                    for(let j=1;j<m.nbjours+1;j++){
                                        tab.push(j);
                                    }
                                    return(
                                        <div> {m.nom} 
                                            <span> {tab} </span>
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
                                    //pour canendrier
                                    const calendrier=[];
                                    for(let j=1;j<m.nbjours+1;j++){
                                        calendrier.push(j);
                                    }
                                    return(  //rendu calendrier
                                        <div> {m.nom} 

                                            {jours.map((p,index)=>
                                                <th className="m-2" key={index}>{p}</th> //mois en fr 
                                            )}
                                            <tr>
                                                {calendrier}  
                                            </tr>

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



                { ()=>{
                    const calendrier=[];
                    let compteur=1;

                        for (let s = 0; s <6; s++) {
                                calendrier.push(<tr>1</tr>);
                                for(let j=0;j<7;j++ ){
                                    calendrier[s].push(<td>{compteur}</td>);
                                    compteur++;
                                }
                        }
                        console.log("c"+calendrier);
                        return(
                            <div>
                                {calendrier}
                            </div>
                        )

                    }
                }

                
                


                    <tr>
                        <td>b</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>b</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>        
            </div>
    );
}

export default Entete;