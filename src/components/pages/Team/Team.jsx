import React from 'react'
import Member from '../../Member'
import { teamMember1, teamMember2, teamMember3 } from './Data';
import "./Team.css"


function Team() {
    return (
        <>

        {/* <div className="container-fluid d-flex justify-content-center" style={{marginBottom: "4em"}}>
            <div className="row m-auto">
                <div className="col-sm d-flex justify-content-center">
                    <Member
                        name = {teamMember1.name}
                        description= {teamMember1.description}
                        imgSource = {teamMember1.img} />
                </div>

                <div className="col-sm d-flex justify-content-center">
                    <Member
                        name = {teamMember2.name}
                        description= {teamMember2.description}
                        imgSource = {teamMember2.img} />
                </div>

                <div className="col-sm d-flex justify-content-center">
                    <Member
                        name = {teamMember3.name}
                        description= {teamMember3.description}
                        imgSource = {teamMember3.img} />
                </div>
            </div>
        </div> */}


        <div className="container-fluid ">
            <div className="row team-overall-container">
                <div className="col-lg p-0">
                    <div className="team-member-container">
                        <Member
                            name = {teamMember1.name}
                            description= {teamMember1.description}
                            imgSource = {teamMember1.img}
                        />
                    </div>
                </div>

                <div className="col-lg p-0">
                    <div className="team-member-container">
                        <Member
                            name = {teamMember2.name}
                            description= {teamMember2.description}
                            imgSource = {teamMember2.img}
                        />
                   </div>
                </div>

                <div className="col-lg p-0">
                    <div className="team-member-container">
                        <Member
                            name = {teamMember3.name}
                            description= {teamMember3.description}
                            imgSource = {teamMember3.img}
                        />
                    </div>
                </div>

            </div>
        </div>


















        </>
    )
}

export default Team