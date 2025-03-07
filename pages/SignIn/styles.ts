import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: rgb(192, 192, 192);

`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 24px;

`;

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    color: gray;
    margin-bottom: 20px;
    fontWeight: bold;
`;

