import styled from 'styled-components';
import Stat from './stat'; 
import headerDesktop from '../assets/image-header-desktop.jpg';
import headerMobile from '../assets/image-header-mobile.jpg';

const data = [
    ['companies', '10k+'],
    ['templates', '314'],
    ['queries', '12m+']
]

function Card() {
    return (
        <Container>
            <Flex>
                <FlexCol>
                    <Heading>
                        Get <HighLight>insights</HighLight> that help your business grow.
                    </Heading>

                    <MainPara>
                        Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                        experience, and overall efficiency.
                    </MainPara>

                    <StatWrapper>
                        {data.map((val, idx) => {
                            return <Stat stat={val[1]} heading={val[0]}/>
                        })}
                    </StatWrapper>
                </FlexCol>
                <ImageWrapper imgUrl={headerDesktop} />
            </Flex>
        </Container>
    )
}

const ImageWrapper = styled.div`
    width: 100%;
    background: url(${headerDesktop}), hsl(277, 64%, 61%);
    background-blend-mode: multiply;
    border-radius: 0 5px 5px 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media screen and (max-width: 960px) {
        min-height: 400px;
        background-size: cover;
        background-position: top;
        border-radius: 5px 5px 0 0;
    }

    @media screen and (max-width: 500px) {
        background: url(${headerMobile}), hsl(277, 64%, 61%);
        min-height: 250px;
        background-size: cover;
        border-radius: 5px 5px 0 0;
    }
`;

const Container = styled.div`
    background-color: hsl(244, 38%, 16%);
    border-radius: 5px;
    width: 80%;
    font-family: 'Inter', sans-serif;

    @media screen and (max-width: 960px) {
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;

const Flex = styled.div`
    display: flex;
    height: auto;
    @media screen and (max-width: 960px) {
        flex-direction: column-reverse;
    }
`;

const StatWrapper = styled.div`
    padding-top: 60px;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px;

    @media screen and (max-width: 960px) {
        width: 100%;
        text-align: center;
        align-items: center;
    }
`;

const HighLight = styled.span`
    color: hsl(277, 64%, 61%);
`;

const MainPara = styled.p`
    padding-top: 20px;
    line-height: 25px;
    color: hsla(0, 0%, 100%, 0.75);
    font-size: 15px;
    font-weight: 400;
`;

const Heading = styled.h1`
    color: hsl(0, 0%, 100%);
    font-weight: 700;
`;
export default Card
