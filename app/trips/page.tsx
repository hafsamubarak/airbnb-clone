import EmptyState from "../components/EmptyState";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <EmptyState 
             title="Unauthorised"
             subtitle="Please login to access the feature"
            />
        )
    }

    const reservation = await getReservations({ userId: currentUser.id });

    if (reservation.length === 0) {
        return (
            <EmptyState 
             title="No trips Found!"
             subtitle="Looks like you have'nt reserved any trips"
            />
        )
    }

    return (
        <TripsClient
          reservations={reservation}
          currentUser={currentUser}
        />
    )
}


export default TripsPage