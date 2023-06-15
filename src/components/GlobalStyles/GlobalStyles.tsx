import React, { ReactNode } from 'react';
import "./GlobalStyles.scss"
import { GlobalTypesProps } from '../GlobalTypes/GlobalTypes';

const GlobalStyles = ({children}: GlobalTypesProps): JSX.Element => {
    return <>{children}</>;
}

export default GlobalStyles;