import styled from 'styled-components'

export const FetchAnimesStyles = styled.div`
height:100vh;
width:100%;

display: flex;
flex-direction:column;
align-content:center;

.formContainer {
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    h1 {
        margin:1%;
        text-align:center;
        font-size:5rem;
        font-family: 'Poppins', sans-serif;
        font-weight:100;
    }
        input {
            height:2rem;
            width:20rem;
            border-radius:0.6rem;
            border:none;
            box-shadow:0.1rem 0.1rem rgba(0,0,0,0.3);
            text-align:center;
            font-family: 'Montserrat', sans-serif;
            ::placeholder {
                text-align:center;
                font-family: 'Montserrat', sans-serif;
            }
        }

        @media screen and (max-width:450px){
            h1 {
            margin:1%;
            text-align:center;
            font-size:1.6rem;
            font-family: 'Poppins', sans-serif;
            font-weight:100;
        }

        input {
            width:80vw;
        }
    }
}

.mainContainer {

    margin-top:2%;

    display:flex;
    justify-content:center;
    flex-wrap:wrap;

    .anime {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin:3%;
        height:15rem;
        width:10rem;
        img {
            max-width:80%;
        }
        p {
            text-align:center;
            font-family: 'Montserrat', sans-serif;
            font-size:0.9rem;
        }
        button {
            margin:5%;
            border-radius:0.3rem;
            border:none;
            box-shadow:0.1rem 0.1rem rgba(0,0,0,0.3);
            width:5rem;
            background-color:#fff;
            font-family: 'Montserrat', sans-serif;

            :hover {
                opacity:0.8;
            }
            
            a {
                text-decoration: none;
                color:#000000;
            }
            
        }

    }   

    @media screen and (max-width:450px){
            .anime {
                margin-top:7%;

                p {
                    font-size:0.7rem;
                }
            }
        }
}
`