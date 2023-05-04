export const dataState: DataStateType={
    pages:[
        {
            heading:"Messages",
            about:"Missage_1"
        },
        {
            heading:"Friends",
            about:"My friends"
        },
        {
            heading:"Settings",
            about:"Settings of account"
        }
    ]
}

export type DataStateType={
    pages:Array<PagesType>
}

export type  PagesType ={
    heading:string,
    about:string,
}