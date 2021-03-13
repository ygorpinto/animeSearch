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
        font-family: 'Ranchers', cursive;
    }
        input {
            height:2rem;
            width:15rem;
            border-radius:0.6rem;
            border:none;
            box-shadow:0.1rem 0.1rem rgba(0,0,0,0.3);
            ::placeholder {
                text-align:center;
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

        }
        button {
            margin:5%;
            border-radius:0.3rem;
            border:none;
            box-shadow:0.1rem 0.1rem rgba(0,0,0,0.3);
            width:5rem;
            background-color:#fff;

            :hover {
                opacity:0.8;
            }
            
            a {
                text-decoration: none;
                color:#000000;
            }
            
        }
    }   
}
`