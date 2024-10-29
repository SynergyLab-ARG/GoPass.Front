import { useEffect } from "react"
import { useTranslation } from "react-i18next"

import { useGetUserTicketsSold } from "../../hooks/useGetUserTicketsSold"
import { MyTicketsCardSold } from "../components/UI/MyTicketsCardSold"
import { Navbar } from "../components/UI/Navbar"

import { ticketStore } from "../../store_zustand/tickets"
import { Ticket } from "../../types"

export const MyTicketsSold: React.FC = () => {
  const { t } = useTranslation()

  const tickets = ticketStore((state) => state.ticketsSold)

  const { getUserTicketsDataSold } = useGetUserTicketsSold()

  useEffect(() => {
    const fetchTickets = async () => {
      await getUserTicketsDataSold()
    }
    fetchTickets()
  }, [])

  return (
    <>
      <Navbar />
      <div className="mb-5 flex min-h-screen w-full flex-col items-center">
        <section className="flex w-full flex-col items-center">
          {tickets.length === 0 ? (
            <div className="absolute flex h-full w-full items-center justify-center">
              <p className="text-xl font-semibold text-gray-500">{t("noEntriesAvailable")}</p>
            </div>
          ) : (
            <div className="mt-20 w-[90%]">
              <h2 className="m-5 text-center text-xl font-semibold">{t("myTicketsSold")}</h2>
              <ul>
                {tickets.map((ticket: Ticket, index) => (
                  <li className="mt-5" key={index}>
                    <MyTicketsCardSold ticket={ticket} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </>
  )
}
