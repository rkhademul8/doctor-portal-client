
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoiment from '../AvailableAppoiment/AvailableAppoiment';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <h2>Apponmentent</h2>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvailableAppoiment date={date}></AvailableAppoiment>
        </div>
    );
};

export default Appoinment;