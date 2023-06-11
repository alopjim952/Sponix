import styled from 'styled-components';

const BodyContainer = styled.div`
    flex: 0.8;
    background-color: #013b32;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    margin-top: 10px;
    margin-right: 10px;
`

const HeaderLeft = styled.div`
    display: flex;
    flex: 0.5;
    min-width: 75px;
    background-color: fff;
    border-radius: 30px;
    padding: 10px;
    & input {
        border:none;
        width: 100%;
    }
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    & h4 {
        margin-left: 15px;
    }
`

const Photo = styled.div`
    & img {
        border-radius: 50%;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
        border-radius: 10px;
    }
    & img:hover {
        transform: scale(1.1);
    }
    & .oculto {
        display: none
    }
    & button {
        background-color: #013b36;
        color: #fff;
        border: none;
        padding: 2px 5px;
        font-size: 10px;
        font-weight: bold;
        border-radius: 4px;
        cursor: pointer;
    }
`

export { BodyContainer, HeaderContainer, HeaderLeft, HeaderRight, Photo }