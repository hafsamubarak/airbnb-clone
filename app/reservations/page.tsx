import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

import TripsClient from "../trips/TripsClient";
import ReservationsClient from "./ReservationsClient";

const ReservationPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <EmptyState 
             title="Unauthorized"
             subtitle="Please Login"
            />
        )
    }


    const reservations = await getReservations({ authorId: currentUser.id });


    if (reservations.length === 0) {
        return (
            <EmptyState 
             title="No reservations Found!"
             subtitle="Looks like you have no reservations on your Property"
            />
        )
    }

    return (
        <ReservationsClient 
         reservations={reservations}
         currentUser={currentUser}
        />
    )
}

export default ReservationPage