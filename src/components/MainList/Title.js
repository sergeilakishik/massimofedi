import styled from 'styled-components/native';

const Title = styled.Text`
    font-size: 16;
    text-align: center;
    font-weight: bold;
    color: ${props => (props.inversion ? 'black' : 'white')};
    background-color: ${props => (props.inversion ? 'white' : 'transparent')};
`;

export default Title;
