import React from 'react';
import * as H from './styles'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import raccoon from '../../assets/raccoon.png'

function Certificate(){
    return(
        <>
        <H.Container  id='DivToPrint'>
            <H.ContainerBorder>
                <H.Title>RACCOON SERVICES</H.Title>
                <img src={raccoon}></img>
                <H.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</H.Text>
                <H.Icon xmlns="http://www.w3.org/2000/svg"  width="100" height="100" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="15" cy="15" r="3" />
                <path d="M13 17.5v4.5l2 -1.5l2 1.5v-4.5" />
                <path d="M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73" />
                <line x1="6" y1="9" x2="18" y2="9" />
                <line x1="6" y1="12" x2="9" y2="12" />
                <line x1="6" y1="15" x2="8" y2="15" />
                </H.Icon>
            </H.ContainerBorder>
        </H.Container>
    </>
    )
}

function createCertificate(){

    html2canvas(document.querySelector("#DivToPrint")!).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('landscape','cm','a3');
        pdf.addImage(imgData, 'JPEG', 0, 0,0, 0);
        pdf.save("download.pdf");
        console.log("OK")
        
    });
    
}

const Home: React.FC = () => {

    return (
        <>  
            <H.GlobalContainer>
                <button onClick={createCertificate}>Download PDF</button>
            </H.GlobalContainer>
            <Certificate></Certificate>
        </>
    );
};  

export default Home;