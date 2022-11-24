
import { useCallback, useState } from 'react';
const Entete = () => {
    const firstdate = new Date('1997-01-01'); //premiere date

    var date = new Date('2022-11-18');
    var firstDay = new Date(date.getUTCFullYear(), date.getUTCMonth(), 1);
    var lastDay = new Date(date.getUTCFullYear(), date.getUTCMonth() + 1, 0);

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
            const annee=firstdate.getUTCFullYear()+i; // commence a partir de 1997 jusqu'a 2040
        if((annee%400===0)||((annee%4===0)&&(annee%100!==0))){ //année bissextile
            years.push({id: firstdate.getUTCFullYear()+i,bissextile:true, mois:months});
        }else{
            years.push({id: firstdate.getUTCFullYear()+i,bissextile:false, mois:months2}); //année classique
        }
    }
/*
    const test={}
    for (let i = 0; i<43; i++){
        const annee=firstdate.getUTCFullYear()+i; // commence a partir de 1997 jusqu'a 2040
        if((annee%400===0)||((annee%4===0)&&(annee%100!==0))){ //année bissextile
            test[firstdate.getUTCFullYear()+i] = {id: firstdate.getUTCFullYear()+i,bissextile:true, mois:months};
        }else{
            test[firstdate.getUTCFullYear()+i] =  {id: firstdate.getUTCFullYear()+i,bissextile:false, mois:months2}; //année classique
        }
    }
    console.log("test", test)
    console.log("test aujourd'hui", test[new Date().getUTCFullYear()])
*/
    const positionDeLanneeActuel = years.indexOf(
        years.filter((annee) => {
            return annee.id === new Date().getUTCFullYear()
        })[0]
    ) || 0
    

    const[position,setPosition]=useState(positionDeLanneeActuel < 0 ? 0 : positionDeLanneeActuel || 0);
    const[YEARS,setYears]=useState(years);
    console.log(YEARS)
    

    const Next = useCallback(() => {
        if (position < YEARS.length - 1) {
            setPosition(position + 1);
        }
    }, [position, YEARS]);
    
    const Prev = useCallback(() => {
        if (position > 0) {
            setPosition(position - 1);
        }
    }, [position]);

    const[positionMois,setPositionMois]=useState(0);
    const[MONTHS,setMonth]=useState(months);
    

    const NextMonth = useCallback(() => {
        if (positionMois < MONTHS.length - 1) {
            setPositionMois(positionMois + 1);
        }
    }, [positionMois, MONTHS]);
    
    const PrevMonth = useCallback(() => {
        if (positionMois > 0) {
            setPositionMois(positionMois - 1);
        }
    }, [positionMois]);

    

    const formulaire =  {RendezVous : "" };
    

    return ( 
        <div>             
            <div>
                <div>
                    <button onClick={Prev} >Prev</button>
                    <span>{YEARS[position].id || "année invalide"}</span>
                    <button onClick={Next}>Next</button>
                </div>
                <div>
                    <button onClick={PrevMonth} >Prev</button>
                    <span>{YEARS[position]["mois"][positionMois].nom || "mois invalide"}</span>
                    <button onClick={NextMonth}>Next</button>
                </div>
                <div className='bg-light' style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gridTemplateRows: 'repeat(7, 1fr)',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                }}>
                    {
                        jours.map((value, index) => {
                            return (
                                <div key={index} className="nom-jour bg-secondary">
                                    {value}
                                </div>
                            )
                    })}
                    {
                        Array(new Date(YEARS[position].id, positionMois, 1).getUTCDay()).fill('_').map((value, index) => {
                            return (
                                <div key={index}>
                                </div>
                            )
                        })
                    }
                    {
                        Array(YEARS[position]["mois"][positionMois].nbjours).fill('_').map((value, index) => {
                            return (
                                <div className='date-jour' key={index}
                                    style={{
                                        background: (YEARS[position].id === new Date().getUTCFullYear()
                                        && positionMois === new Date().getUTCMonth()
                                        && index+1 === new Date().getUTCDate())? '#bbb': '',
                                    }}
                                >
                                    {index+1}
                                </div>
                            )
                        })
                    }
                </div>
                </div>

            </div>
    );
}

export default Entete;