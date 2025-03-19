import React, { useEffect, useState } from "react";
import styles from "../../styles/scheduleModal.module.css";
import { ConvertDate } from "../../utils/DateValue";
import { CiCalendar } from "react-icons/ci";
import { PaymentModal } from "../PaymentModal/PaymentModal";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: number;
  userId: number;
}

const stripePromise = loadStripe(
  "pk_test_51R3sntPLBQDd5RinRUTU4qn6tjrVfatgpeREConNNZXb3qqZVEiYymE1OZCJJZuqyFD7SiwOzFvZm4guPCArqdwz00GsdACd0h"
);

const MyModal: React.FC<MyModalProps> = ({
  isOpen,
  onClose,
  event,
  userId,
  checkScheduledEvent,
}) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState(1);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state) => state.user.user.user);

  const guests =
    userData.user_events.find((e) => e.event_id === event.id)?.guests || 0;

  const startDate = ConvertDate(event.start_date);
  const endDate = ConvertDate(event.end_date);

  const fetchClientSecret = async () => {
    setLoading(true); // Show loader
    try {
      const res = await fetch("/payment/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: event.cost * selectedGuests }),
      });

      const { clientSecret } = await res.json();
      if (clientSecret !== undefined) {
        setClientSecret(clientSecret);
        setShowPaymentModal(true);
      }
    } catch (error) {
      console.error("Error fetching clientSecret:", error);
    } finally {
      setLoading(false);
    }
  };

  const openPaymentModal = async () => {
    await fetchClientSecret();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.modalOverlay} onClick={onClose}>
        <div
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className={styles.modalTimeRange}>
            {`${startDate[3]}:${startDate[4]} ${startDate[5]} - ${endDate[3]}:${endDate[4]} ${endDate[5]}`}
          </h2>

          <div className={styles.modalDates}>
            <div className={styles.dateField}>
              <label>From</label>
              <div>
                <CiCalendar
                  style={{ paddingRight: "10px", fontSize: "15px" }}
                />
                {`${startDate[2]} ${startDate[1]} ${startDate[0]}`}
              </div>
            </div>
            <div className={styles.dateField}>
              <label>To</label>
              <div>
                <CiCalendar
                  style={{ paddingRight: "10px", fontSize: "15px" }}
                />
                {`${endDate[2]} ${endDate[1]} ${endDate[0]}`}
              </div>
            </div>
          </div>

          {checkScheduledEvent ? (
            <div className={styles.modalGuests}>
              <label htmlFor="guests">Guests</label>
              <input id="guests" value={guests ?? ""} readOnly />
            </div>
          ) : (
            <div className={styles.modalGuests}>
              <label htmlFor="guests">Guests</label>
              <select
                id="guests"
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(parseInt(e.target.value))}
              >
                <option value={1}>1 adult</option>
                <option value={2}>2 adults</option>
                <option value={3}>3 adults</option>
              </select>
            </div>
          )}

          {!checkScheduledEvent && (
            <>
              <div className={styles.eventInformation}>
                <div className={styles.seats}>
                  <div>Seats Available</div>
                  <p className={styles.modalSeats}>{`${event.seats}`}</p>
                </div>
                <div className={styles.cost}>
                  <div>Cost</div>
                  <p className={styles.modalSeats}>{`$${
                    event.cost * selectedGuests
                  }`}</p>
                </div>
              </div>

              <button
                onClick={openPaymentModal}
                className={styles.modalReserveButton}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} style={{ color: "#fff" }} />
                ) : (
                  "Reserve my seats"
                )}
              </button>
            </>
          )}
        </div>
        <p className={styles.modalHelp}>Need help?</p>
      </div>

      {showPaymentModal && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentModal
            event={event}
            userId={userId}
            guests={selectedGuests}
            setShowPaymentModal={setShowPaymentModal}
          />
        </Elements>
      )}
    </>
  );
};

export default MyModal;
