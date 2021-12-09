import styled from "styled-components"

function Stat({ heading, stat }) {
    return (
        <Wrapper>
            <StatNum>{stat}</StatNum>
            <StatHeading>{heading}</StatHeading>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    @media screen and (max-width: 960px) {
        padding-bottom: 25px;
    }
`;

const StatHeading = styled.p`
    color: hsla(0, 0%, 100%, 0.6);
    text-transform: uppercase;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 15px;
    font-weight: 400;
    padding-top: 4px;
`;

const StatNum = styled.h3`
    color: hsl(0, 0%, 100%);
`;
export default Stat
