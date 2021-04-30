import React from "react";
import { Link } from "react-router-dom";
import {SiGmail} from 'react-icons/si'

const Gmaillto = ({ mailto }) => {
    return (
        <Link
            to='#'
            target='_blank'
            aria-label='Mail'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }} >

            <SiGmail className="text-white" />
        </Link>
    );
};

export default Gmaillto;