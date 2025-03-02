"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
    BarChart3,
    Users,
    Package,
    Settings,
    HelpCircle,
    Bell,
    Search,
    Menu,
    X,
    Home,
    MessageSquare,
    Calendar,
    FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import "./globals.css"

export default function RootLayoutClient({
    children,
    geistSans,
    geistMono,
}: {
    children: React.ReactNode
    geistSans: { variable: string }
    geistMono: { variable: string }
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [isMobile, setIsMobile] = useState(false)
    const [activePath, setActivePath] = useState("")

    // Check if we're on mobile when component mounts and when window resizes
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 1024)
            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false)
            } else {
                setIsSidebarOpen(true)
            }
        }

        // Initial check
        checkIfMobile()

        // Add event listener for window resize
        window.addEventListener("resize", checkIfMobile)

        // Clean up event listener
        return () => window.removeEventListener("resize", checkIfMobile)
    }, [])

    // Set active path based on current URL
    useEffect(() => {
        setActivePath(window.location.pathname)
    }, [])

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    // Navigation items
    const navItems = [
        { path: "/", label: "Dashboard", icon: Home },
        { path: "/analytics", label: "Analytics", icon: BarChart3 },
        { path: "/users", label: "Users", icon: Users },
        { path: "/messages", label: "Messages", icon: MessageSquare },
        { path: "/calendar", label: "Calendar", icon: Calendar },
        { path: "/reports", label: "Reports", icon: FileText },
    ]

    const settingsItems = [
        { path: "/settings", label: "Settings", icon: Settings },
        { path: "/help", label: "Help & Support", icon: HelpCircle },
    ]

    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="flex h-screen bg-background">
                    {/* Vertical Sidebar */}
                    <aside
                        className={`fixed lg:relative z-20 flex flex-col h-full bg-sidebar transition-all duration-300 ease-in-out ${isSidebarOpen ? "w-64" : "w-0 lg:w-20"
                            } border-r`}
                    >
                        {/* Sidebar Header */}
                        <div className="flex items-center h-16 px-4 border-b">
                            {isSidebarOpen && (
                                <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
                                    <Package className="h-6 w-6" />
                                    <span>AdminPanel</span>
                                </Link>
                            )}
                            {!isSidebarOpen && (
                                <Link href="/" className="flex items-center justify-center w-full">
                                    <Package className="h-6 w-6" />
                                </Link>
                            )}
                        </div>

                        {/* Sidebar Navigation */}
                        <nav className="flex-1 overflow-y-auto py-4">
                            <ul className="space-y-1 px-2">
                                {navItems.map((item) => (
                                    <li key={item.path}>
                                        <Link
                                            href={item.path}
                                            className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md ${activePath === item.path
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "hover:bg-muted text-muted-foreground font-medium"
                                                }`}
                                            onClick={() => setActivePath(item.path)}
                                        >
                                            <item.icon className="h-4 w-4" />
                                            {isSidebarOpen && <span>{item.label}</span>}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {isSidebarOpen && (
                                <div className="mt-6 px-4">
                                    <h3 className="text-xs font-semibold text-muted-foreground mb-2 px-2">SETTINGS</h3>
                                    <ul className="space-y-1 px-2">
                                        {settingsItems.map((item) => (
                                            <li key={item.path}>
                                                <Link
                                                    href={item.path}
                                                    className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md ${activePath === item.path
                                                        ? "bg-primary/10 text-primary font-medium"
                                                        : "hover:bg-muted text-muted-foreground font-medium"
                                                        }`}
                                                    onClick={() => setActivePath(item.path)}
                                                >
                                                    <item.icon className="h-4 w-4" />
                                                    <span>{item.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </nav>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col overflow-hidden">
                        {/* Horizontal Navbar */}
                        <header className="h-16 flex items-center justify-between px-4 border-b bg-background">
                            <div className="flex items-center gap-2">
                                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:flex hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle sidebar</span>
                                </Button>
                                <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden flex">
                                    {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                                    <span className="sr-only">Toggle sidebar</span>
                                </Button>
                                <div className="relative hidden md:flex items-center">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input type="search" placeholder="Search..." className="w-64 pl-8" />
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                {/* Notification System */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="relative">
                                            <Bell className="h-5 w-5" />
                                            <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">3</Badge>
                                            <span className="sr-only">Notifications</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-80">
                                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <div className="max-h-80 overflow-y-auto">
                                            <DropdownMenuItem className="flex flex-col items-start py-2">
                                                <div className="font-medium">New user registered</div>
                                                <div className="text-xs text-muted-foreground">2 minutes ago</div>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="flex flex-col items-start py-2">
                                                <div className="font-medium">Sales report available</div>
                                                <div className="text-xs text-muted-foreground">1 hour ago</div>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="flex flex-col items-start py-2">
                                                <div className="font-medium">Server update completed</div>
                                                <div className="text-xs text-muted-foreground">3 hours ago</div>
                                            </DropdownMenuItem>
                                        </div>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="justify-center font-medium">View all notifications</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>

                                {/* User Avatar */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="rounded-full">
                                            <Avatar>
                                                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                                                <AvatarFallback>JD</AvatarFallback>
                                            </Avatar>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Settings</DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>Log out</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </header>

                        {/* Main Content */}
                        <main className="flex-1 overflow-y-auto bg-muted/30">{children}</main>
                    </div>

                    {/* Overlay for mobile when sidebar is open */}
                    {isMobile && isSidebarOpen && <div className="fixed inset-0 bg-black/50 z-10" onClick={toggleSidebar} />}
                </div>
            </body>
        </html>
    )
}

