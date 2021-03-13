import styled from 'styled-components'

export const FetchAnimesStyles = styled.div`
height:100vh;
width:100%;

display: flex;
justify-content:center;

.formContainer {
    margin: 5rem 1rem;
    h1 {
        text-align:center;
        font-size:5rem;
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

}
`