"use client"

import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react"
import { Calendar, Clock, MapPin, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getAllCleanupEvents } from "../../lib/db/cleanupEvents"
import { CleanupEvent } from "../../types/cleanupEvent"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { set } from "date-fns"

export default function CleanupEventsPage() {
  const [location, setLocation] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [isSchoolFriendly, setIsSchoolFriendly] = useState(true)
  const router = useRouter()
  const [permenantData, setPermanentData] = useState<CleanupEvent[]>([])
  // const [distance, setDistance] = useState("Within 2 miles")
  const [isLoading, setIsLoading] = useState(false)
  // const [events, setEvents]]

  const [cleanupEvents, setCleanupEvents] = useState<CleanupEvent[]>([])

  const handleSearch = () => {
    setIsLoading(true);

    try {
      // Filter events based on search criteria
      const filteredEvents = permenantData.filter(event => {
        // Filter by location (case insensitive partial match)
        const locationMatch = location === "" ||
          event.location.toLowerCase().includes(location.toLowerCase());

        // Filter by date range
        const eventDate = new Date(event.date).getTime();
        const startDateMatch = startDate === "" ||
          eventDate >= new Date(startDate).getTime();
        const endDateMatch = endDate === "" ||
          eventDate <= new Date(endDate).getTime();

        // Filter by school friendly
        const schoolFriendlyMatch = isSchoolFriendly === event.schoolFriendly;

        // Filter by distance (assuming event has a distance property)
        // const distanceValue = parseInt(distance.match(/\d+/)?.[0] || "2");
        // const distanceMatch = event. <= distanceValue;

        return locationMatch && startDateMatch && endDateMatch &&
          schoolFriendlyMatch;
      });

      console.log("Filtered events:", filteredEvents);
      // In a real app, you might want to set these filtered events to state
      // setCleanupEvents(filteredEvents);

      // For now, we'll just log them
      // return filteredEvents;
      setCleanupEvents(filteredEvents);
      setIsLoading(false);

    } catch (error) {
      console.error("Error filtering events:", error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigate = (eventId: string) => {
    router.push(`/events/${eventId}`)
  };

  useEffect(() => {
    if (localStorage.getItem("user") === null) {
      router.push("/auth/login")
    }
    setIsLoading(true)
    initializeData();
  }, []);


  const initializeData = async () => {
    try {
      const res = await getAllCleanupEvents()
      console.log(res)
      setCleanupEvents(res as CleanupEvent[])
      setPermanentData(res as CleanupEvent[])

      // Find all valid dates from the events
      const validDates = res
        .map(event => event.date) // assuming each event has a 'date' property
        .filter(date => date) // remove null/undefined
        .map(date => new Date(date)); // convert to Date objects

      if (validDates.length > 0) {
        // Find the earliest date (minimum)
        const earliestDate = new Date(Math.min(...validDates.map(date => date.getTime())));
        // Find the latest date (maximum)
        const latestDate = new Date(Math.max(...validDates.map(date => date.getTime())));

        // Format as YYYY-MM-DD
        setStartDate(earliestDate.toISOString().slice(0, 10));
        setEndDate(latestDate.toISOString().slice(0, 10));
      } else {
        // Default to today if no dates found
        const today = new Date().toISOString().slice(0, 10);
        setStartDate(today);
        setEndDate(today);
      }
    } catch (e) {
      console.log(e)
      const today = new Date().toISOString().slice(0, 10);
      setStartDate(today);
      setEndDate(today);
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return <div className="min-h-screen bg-[#f5f5f5]">
      <div className="flex-1">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  }


  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="flex-1">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-gradient-to-b from-green-900 to-green-700 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1200')" }}
          ></div>

          <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Join hands to keep the ocean blue and
              <br />
              the turtles happy!
            </h1>

            <div className="w-full max-w-3xl bg-green-800 bg-opacity-50 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="col-span-1 md:col-span-1">
                  <Input
                    type="text"
                    placeholder="Town name or postcode"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-white text-black"
                  />
                </div>
                {/* <div className="relative">
                  <select
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white text-gray-800"
                  >
                    <option className="text-gray-800 hover:bg-green-100">Within 2 miles</option>
                    <option className="text-gray-800 hover:bg-green-100">Within 5 miles</option>
                    <option className="text-gray-800 hover:bg-green-100">Within 10 miles</option>
                    <option className="text-gray-800 hover:bg-green-100">Within 20 miles</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-gray-500"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-white text-black"
                />
                <Input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-white text-black"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSchoolFriendly}
                    onChange={(e) => setIsSchoolFriendly(e.target.checked)}
                    className="sr-only"
                  />
                  <div
                    className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${isSchoolFriendly ? "bg-green-500 border-green-500" : "border-white"}`}
                  >
                    {isSchoolFriendly && <Check className="h-3 w-3 text-white" />}
                  </div>
                  School friendly?
                </label>

                <Button onClick={handleSearch} className="bg-green-500 hover:bg-green-600 text-white px-8">
                  Search
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 ml-2"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* <div className="absolute left-10 bottom-10">
            <img src="/placeholder.svg?height=100&width=100" alt="Starfish" className="h-20 w-auto" />
          </div>
          <div className="absolute left-32 bottom-16">
            <img src="/placeholder.svg?height=80&width=80" alt="Shell" className="h-16 w-auto" />
          </div> */}
        </div>

        {/* Events List */}
        <div className="container mx-auto py-12 px-6">
          {cleanupEvents.map((event: { id: string; image: any; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; date: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; time: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; location: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; schoolFriendly: any; organizedBy: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined }) => (
            <div key={event.id} className="mb-12 border-b border-gray-200 pb-12 last:border-0" onClick={() => { handleNavigate(event.id) }}>
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <Image
                    src={event.image}
                    alt="Event Image"
                    width={400}
                    height={200}
                    objectFit="cover"
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <div className="md:ml-6 flex-1">
                  <h2 className="text-xl font-bold mb-4">{event.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-gray-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <span className="mr-2">School friendly?</span>
                    {event.schoolFriendly ? (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">Yes</span>
                    ) : (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">No</span>
                    )}
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600">Organized by:</p>
                    <p className="font-medium">{event.organizedBy}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          {/* <div className="flex justify-center items-center mt-8">
            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">1</button>

            {[2, 3, 4, 5, 6].map((page) => (
              <button
                key={page}
                className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center mx-1"
              >
                {page}
              </button>
            ))}

            <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

