import React from 'react';
import {PagesType} from '../data/dataState';
import {useParams} from 'react-router-dom';
import {Error404} from './Error404';
import {findAllByDisplayValue} from '@testing-library/react';
import {isValidDateValue} from '@testing-library/user-event/dist/utils';

type PropsType = {
    pages: Array<PagesType>
}
export const Page = (props: PropsType) => {
    const params = useParams()

    return (
        <div>
            {props.pages.length > Number(params.id)
                ? (<div>
                        <div> {props.pages[Number(params.id)].heading}</div>
                        <div> {props.pages[Number(params.id)].about}</div>
                   </div>)
                : (<div><Error404/></div>)
            }
        </div>
    )
};

