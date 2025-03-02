import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Send } from "lucide-react"

export default function MessagesPage() {
    // Sample conversation data
    const conversations = [
        {
            id: 1,
            name: "Sarah Johnson",
            avatar: "SJ",
            lastMessage: "Can you send me the report?",
            time: "2m ago",
            unread: true,
        },
        { id: 2, name: "Michael Brown", avatar: "MB", lastMessage: "Thanks for your help!", time: "1h ago", unread: false },
        {
            id: 3,
            name: "Emily Davis",
            avatar: "ED",
            lastMessage: "Meeting scheduled for tomorrow",
            time: "3h ago",
            unread: false,
        },
        {
            id: 4,
            name: "David Wilson",
            avatar: "DW",
            lastMessage: "Let's discuss the project details",
            time: "5h ago",
            unread: false,
        },
        {
            id: 5,
            name: "Lisa Anderson",
            avatar: "LA",
            lastMessage: "I've sent you the files",
            time: "1d ago",
            unread: false,
        },
    ]

    // Sample messages for the active conversation
    const messages = [
        {
            id: 1,
            sender: "Sarah Johnson",
            avatar: "SJ",
            content: "Hi there! How's the project coming along?",
            time: "10:30 AM",
            isSelf: false,
        },
        {
            id: 2,
            sender: "You",
            content: "It's going well. I'm working on the final touches.",
            time: "10:32 AM",
            isSelf: true,
        },
        {
            id: 3,
            sender: "Sarah Johnson",
            avatar: "SJ",
            content: "Great! When do you think you'll be finished?",
            time: "10:33 AM",
            isSelf: false,
        },
        {
            id: 4,
            sender: "You",
            content: "I should be done by tomorrow afternoon. I'll send you the report then.",
            time: "10:35 AM",
            isSelf: true,
        },
        {
            id: 5,
            sender: "Sarah Johnson",
            avatar: "SJ",
            content: "Perfect! Looking forward to seeing it.",
            time: "10:36 AM",
            isSelf: false,
        },
        {
            id: 6,
            sender: "Sarah Johnson",
            avatar: "SJ",
            content: "Can you send me the report?",
            time: "10:45 AM",
            isSelf: false,
        },
    ]

    return (
        <div className="flex h-full">
            {/* Conversations Sidebar */}
            <div className="w-full md:w-80 border-r h-full flex flex-col">
                <div className="p-4 border-b">
                    <h2 className="text-xl font-bold mb-4">Messages</h2>
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search conversations..." className="pl-8" />
                    </div>
                </div>
                <div className="flex-1 overflow-auto">
                    {conversations.map((conversation) => (
                        <div
                            key={conversation.id}
                            className={`flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer ${conversation.id === 1 ? "bg-muted/50" : ""}`}
                        >
                            <Avatar>
                                <AvatarFallback>{conversation.avatar}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center">
                                    <p className="font-medium truncate">{conversation.name}</p>
                                    <span className="text-xs text-muted-foreground">{conversation.time}</span>
                                </div>
                                <p className="text-sm text-muted-foreground truncate">{conversation.lastMessage}</p>
                            </div>
                            {conversation.unread && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="hidden md:flex flex-col flex-1 h-full">
                {/* Chat Header */}
                <div className="p-4 border-b flex items-center gap-3">
                    <Avatar>
                        <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-auto p-4 space-y-4">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.isSelf ? "justify-end" : "justify-start"}`}>
                            <div className={`flex gap-3 max-w-[80%] ${message.isSelf ? "flex-row-reverse" : ""}`}>
                                {!message.isSelf && (
                                    <Avatar>
                                        <AvatarFallback>{message.avatar}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div>
                                    <div
                                        className={`p-3 rounded-lg ${message.isSelf ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                                    >
                                        <p>{message.content}</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-1">{message.time}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t">
                    <div className="flex gap-2">
                        <Input placeholder="Type a message..." className="flex-1" />
                        <Button size="icon">
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Send message</span>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Empty State for Mobile */}
            <div className="flex-1 flex items-center justify-center md:hidden">
                <div className="text-center p-4">
                    <h3 className="font-medium">Select a conversation</h3>
                    <p className="text-sm text-muted-foreground">Choose a conversation from the list to start chatting</p>
                </div>
            </div>
        </div>
    )
}

