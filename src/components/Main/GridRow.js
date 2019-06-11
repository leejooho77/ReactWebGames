import React from 'react';
import { Row } from 'antd';
import Grid from './Grid';

const GridRow = ({ grids }) => {
    return (
        <Row>
            {
                grids.map((status, i) => {
                    return (
                        <Grid
                            key={i}
                            status={`cell ${status}`}
                        />
                    );
                })
            }            
        </Row>
    );
}

export default GridRow;