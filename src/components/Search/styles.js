import styled from 'styled-components'

const SearchsContainer = styled.div`
    width: 80%;
    height: 70%;
    border: 1px solid black;
    margin-top: 10px;
    margin-left: 30px;
    overflow-y: auto;
    max-height: 60%;
    background-color: #0d2b27;
`

const SearchContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    padding: 5px 0;
    color: #baacab;
    transition: 200ms ease-in;
    &:hover {
        background-color: #046c5c;
    }
`

const SearchInputContainer = styled.div`
    & input {
        padding: 10px;
        border: none;
        border-radius: 20px;
        background-color: #00201b;
        color: #fff;
        font-size: 16px;
        width: 300px;
    };
    & input::placeholder {
        color: #aaa;
    };
    & input::focus {
        outline: none;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    }
`

const PlayContainer = styled.div`
    flex: 0.1;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
        height: 30px;
    }
`

const InfoContainer = styled.div`
    flex: 0.4;
    display: flex;
    alig-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
`

const ActionsContainer = styled.div`
    flex: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
    & img {
        height: 30px;
    }
`

export { SearchsContainer, SearchContainer, SearchInputContainer, PlayContainer, InfoContainer, ActionsContainer}