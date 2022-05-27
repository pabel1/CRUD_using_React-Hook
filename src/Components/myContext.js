import React,{useState} from 'react'
export const DataContext= React.createContext();

export function DataContextProvider({children}){

    const [data,setData]= useState([
        {id:1111,Name:"Pabel Ahmed",position:"Junior Software Developer",salary:30000},
        {id:1000,Name:"Shakil Ahmed",position:"Senior Software Developer",salary:50000},
        {id:1211,Name:" Ahmed",position:"Junior Software Developer",salary:30000}
    ]);

    return (
    <DataContext.Provider value={[data,setData]}>
        {children}

    </DataContext.Provider>
    );
}