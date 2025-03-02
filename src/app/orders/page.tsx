"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MoreHorizontal, ArrowUpDown } from "lucide-react"

// Sample order data
const initialOrders = [
    {
        id: 1,
        orderNumber: "ORD-001",
        date: "2023-05-01",
        customer: "John Doe",
        items: "Product A, Product B",
        total: 150.0,
        status: "Completed",
    },
    {
        id: 2,
        orderNumber: "ORD-002",
        date: "2023-05-03",
        customer: "Jane Smith",
        items: "Product C",
        total: 75.5,
        status: "Processing",
    },
    {
        id: 3,
        orderNumber: "ORD-003",
        date: "2023-05-05",
        customer: "Bob Johnson",
        items: "Product A, Product D",
        total: 200.0,
        status: "Shipped",
    },
    {
        id: 4,
        orderNumber: "ORD-004",
        date: "2023-05-07",
        customer: "Alice Brown",
        items: "Product B, Product C",
        total: 180.0,
        status: "Completed",
    },
    {
        id: 5,
        orderNumber: "ORD-005",
        date: "2023-05-10",
        customer: "Charlie Wilson",
        items: "Product E",
        total: 95.0,
        status: "Processing",
    },
]

export default function OrdersPage() {
    const [orders, setOrders] = useState(initialOrders)
    const [sortConfig, setSortConfig] = useState<{ key: 'orderNumber' | 'date' | 'total' | null, direction: 'ascending' | 'descending' }>({ key: null, direction: "ascending" })
    const [filterStatus, setFilterStatus] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const handleSort = (key: 'orderNumber' | 'date' | 'total') => {
        let direction: 'ascending' | 'descending' = "ascending"
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending"
        }
        setSortConfig({ key, direction })

        setOrders((prevOrders) =>
            [...prevOrders].sort((a, b) => {
                if (a[key] < b[key]) return direction === "ascending" ? -1 : 1
                if (a[key] > b[key]) return direction === "ascending" ? 1 : -1
                return 0
            }),
        )
    }

    const filteredOrders = orders.filter(
        (order) =>
            (filterStatus === "all" || order.status === filterStatus) &&
            (order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                order.customer.toLowerCase().includes(searchTerm.toLowerCase())),
    )

    return (
        <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Orders</h1>
                    <p className="text-muted-foreground">Manage and track your orders</p>
                </div>
            </div>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle>All Orders</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search orders..."
                                    className="pl-8"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <Select value={filterStatus} onValueChange={setFilterStatus}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Statuses</SelectItem>
                                <SelectItem value="Completed">Completed</SelectItem>
                                <SelectItem value="Processing">Processing</SelectItem>
                                <SelectItem value="Shipped">Shipped</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">
                                        <Button variant="ghost" onClick={() => handleSort("orderNumber")}>
                                            Order # <ArrowUpDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </TableHead>
                                    <TableHead>
                                        <Button variant="ghost" onClick={() => handleSort("date")}>
                                            Date <ArrowUpDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </TableHead>
                                    <TableHead>Customer</TableHead>
                                    <TableHead>Items</TableHead>
                                    <TableHead>
                                        <Button variant="ghost" onClick={() => handleSort("total")}>
                                            Total <ArrowUpDown className="ml-2 h-4 w-4" />
                                        </Button>
                                    </TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredOrders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell className="font-medium">{order.orderNumber}</TableCell>
                                        <TableCell>{order.date}</TableCell>
                                        <TableCell>{order.customer}</TableCell>
                                        <TableCell>{order.items}</TableCell>
                                        <TableCell>${order.total.toFixed(2)}</TableCell>
                                        <TableCell>
                                            <Badge
                                                variant={
                                                    order.status === "Completed"
                                                        ? "default"
                                                        : order.status === "Processing"
                                                            ? "secondary"
                                                            : "outline"
                                                }
                                            >
                                                {order.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="icon">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                        <span className="sr-only">Open menu</span>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>View details</DropdownMenuItem>
                                                    <DropdownMenuItem>Update status</DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-destructive">Cancel order</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

