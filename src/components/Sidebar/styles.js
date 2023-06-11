import styled from 'styled-components'

const SidebarContainer = styled.div`
    flex: 0.2;
    height: 90vh;
    background-color: #00201b;
    min-width: 240px;
    color: #fff;
    & img {
        width: 250px;
        padding: 10px;
        margin-right: auto;
    }
    & hr {
        border: 1px solid smokegray;
        width: 90%;
        margin: 10px auto;
    }
`

const Playlists = styled.div`
    margin: 5px 10px;
`

const Choices = styled.div`
    display: flex;
    align-items: center;
    color: gray;
    height: 40px;
    cursor: pointer;
    transition: 300ms color ease-in;
    &:hover {
        color: #fff;
    }
    & h5 {
        margin: 10px 0 0 20px;
    }
`
export {SidebarContainer, Playlists, Choices}