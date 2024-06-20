"use client";
import Image from "next/image";

import {Stack,Button,Card,CardText} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <h1 style={{fontSize :"24px", color: "blue"}}>Home Movie List</h1>
      <h2 style={{fontSize :"20px", color: "green"}}>Faqih Matuz Sahro</h2>
      <h3 style={{fontSize :"18px", color: "red"}}>Kelas Pemrograman Web 2024</h3>
      
    <Stack direction="horizontal" gap={2}>
      <Button as="a" variant="primary">
      Button as link
      </Button>
    <Button as="a" variant="success">
      Button as link
    </Button>
    </Stack> 
    <br/>
    <Card className="bg-transparent text-white text-center movieimage">
      {/* <Image src="https://cdna.artstation.com/p/assets/images/images/051/931/548/large/aimistics-xmen-tw-min.jpg?1658514664" 
      alt = "card image" height={300} width={480}></Image> */}

      <img className="card-img-top"
      src="https://cdna.artstation.com/p/assets/images/images/051/931/548/large/aimistics-xmen-tw-min.jpg?1658514664"
      alt="card image cap"></img>

      <div className="bg-dark p-1 m-1">
      <CardText> FILM X-man Apocalypce</CardText>
      <CardText>Rating 7.9</CardText>
      </div>
    </Card>
    </div>
  )
}