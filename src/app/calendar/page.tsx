"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Edit, Trash } from "lucide-react"

// Sample event data
interface Event {
    id: number;
    title: string;
    date: Date;
    time: string;
    notes: string;
}

const initialEvents: Event[] = [
    { id: 1, title: "Team Meeting", date: new Date(2023, 4, 15), time: "10:00 AM", notes: "Discuss project progress" },
    { id: 2, title: "Client Call", date: new Date(2023, 4, 18), time: "2:00 PM", notes: "Review proposal" },
    {
        id: 3,
        title: "Product Launch",
        date: new Date(2023, 4, 22),
        time: "9:00 AM",
        notes: "Final preparations for launch",
    },
]

export default function CalendarPage() {
    const [events, setEvents] = useState<Event[]>(initialEvents)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [isAddEventOpen, setIsAddEventOpen] = useState(false)
    const [newEvent, setNewEvent] = useState({ title: "", time: "", notes: "" })
    const [editingEvent, setEditingEvent] = useState<Event | null>(null)

    const handleDateSelect = (date: Date | undefined) => {
        if (date) setSelectedDate(date)
    }

    const handleAddEvent = () => {
        const event = {
            id: events.length + 1,
            ...newEvent,
            date: selectedDate,
        }
        setEvents([...events, event])
        setNewEvent({ title: "", time: "", notes: "" })
        setIsAddEventOpen(false)
    }

    const handleEditEvent = (event: Event) => {
        setEditingEvent(event)
        setNewEvent({
            title: event.title,
            time: event.time,
            notes: event.notes,
        })
        setIsAddEventOpen(true)
    }

    const handleUpdateEvent = () => {
        if (!editingEvent) return;
        const updatedEvents = events.map((event) => (event.id === editingEvent.id ? { ...event, ...newEvent } : event))
        setEvents(updatedEvents)
        setEditingEvent(null)
        setNewEvent({ title: "", time: "", notes: "" })
        setIsAddEventOpen(false)
    }

    const handleDeleteEvent = (eventId: number) => {
        const updatedEvents = events.filter((event) => event.id !== eventId)
        setEvents(updatedEvents)
    }

    const eventsForSelectedDate = events.filter((event) => event.date.toDateString() === selectedDate.toDateString())

    return (
        <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Calendar</h1>
                    <p className="text-muted-foreground">Manage your schedule and events</p>
                </div>
                <Dialog open={isAddEventOpen} onOpenChange={setIsAddEventOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" />
                            Add Event
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>{editingEvent ? "Edit Event" : "Add New Event"}</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="title" className="text-right">
                                    Title
                                </Label>
                                <Input
                                    id="title"
                                    value={newEvent.title}
                                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="time" className="text-right">
                                    Time
                                </Label>
                                <Input
                                    id="time"
                                    value={newEvent.time}
                                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="notes" className="text-right">
                                    Notes
                                </Label>
                                <Textarea
                                    id="notes"
                                    value={newEvent.notes}
                                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setNewEvent({ ...newEvent, notes: e.target.value })}
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button onClick={editingEvent ? handleUpdateEvent : handleAddEvent}>
                                {editingEvent ? "Update Event" : "Add Event"}
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Calendar</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Calendar mode="single" selected={selectedDate} onSelect={handleDateSelect} className="rounded-md border" />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Events for {selectedDate.toDateString()}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {eventsForSelectedDate.length === 0 ? (
                            <p className="text-muted-foreground">No events scheduled for this day.</p>
                        ) : (
                            <ul className="space-y-4">
                                {eventsForSelectedDate.map((event) => (
                                    <li key={event.id} className="flex items-center justify-between p-2 border rounded-md">
                                        <div>
                                            <h3 className="font-medium">{event.title}</h3>
                                            <p className="text-sm text-muted-foreground">{event.time}</p>
                                            <p className="text-sm">{event.notes}</p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <Button variant="ghost" size="icon" onClick={() => handleEditEvent(event)}>
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                            <Button variant="ghost" size="icon" onClick={() => handleDeleteEvent(event.id)}>
                                                <Trash className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

