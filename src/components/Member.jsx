import React from 'react'
import Card from 'react-bootstrap/Card'
import "./Member.css"

function Member({name, description, imgSource}) {

    return (

        <Card>

            <Card.Img className="card-img-top" variant="top" src={imgSource} />

            <Card.Body>
                <Card.Title className ="text-center">{name}</Card.Title>
                <Card.Text className="text-center">
                    {description}
                </Card.Text>

            </Card.Body>

        </Card>
    )
}

export default Member

        // <Card style={{ minWidth : widthSet, marginTop:"3em"}}>

        //     <Card.Img style={{minHeight: heightSet, minWidht: widthSet}} variant="top" src={imgSource} />

        //     <Card.Body>
        //         <Card.Title>{name}</Card.Title>

        //         <Card.Text>
        //             {description}
        //         </Card.Text>

        //     </Card.Body>

        // </Card>