"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText } from "lucide-react"

// Sample report data
const userActivityData = [
    { id: 1, user: "John Doe", action: "Login", timestamp: "2023-05-15 10:30:00" },
    { id: 2, user: "Jane Smith", action: "Update Profile", timestamp: "2023-05-15 11:45:00" },
    { id: 3, user: "Bob Johnson", action: "Create Post", timestamp: "2023-05-15 13:15:00" },
    { id: 4, user: "Alice Brown", action: "Logout", timestamp: "2023-05-15 14:30:00" },
    { id: 5, user: "Charlie Wilson", action: "Delete Comment", timestamp: "2023-05-15 15:45:00" },
]

const salesData = [
    { id: 1, product: "Widget A", quantity: 100, revenue: 1000, date: "2023-05-15" },
    { id: 2, product: "Gadget B", quantity: 50, revenue: 2500, date: "2023-05-15" },
    { id: 3, product: "Tool C", quantity: 75, revenue: 1875, date: "2023-05-15" },
    { id: 4, product: "Device D", quantity: 25, revenue: 1250, date: "2023-05-15" },
    { id: 5, product: "Accessory E", quantity: 200, revenue: 1000, date: "2023-05-15" },
]

const systemPerformanceData = [
    { id: 1, metric: "CPU Usage", value: "45%", timestamp: "2023-05-15 10:00:00" },
    { id: 2, metric: "Memory Usage", value: "60%", timestamp: "2023-05-15 10:00:00" },
    { id: 3, metric: "Disk I/O", value: "20 MB/s", timestamp: "2023-05-15 10:00:00" },
    { id: 4, metric: "Network Traffic", value: "5 Mbps", timestamp: "2023-05-15 10:00:00" },
    { id: 5, metric: "Response Time", value: "200 ms", timestamp: "2023-05-15 10:00:00" },
]

export default function ReportsPage() {
    const [reportType, setReportType] = useState("userActivity")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    const handleExport = (format: string) => {
        // In a real application, this would trigger the export process
        console.log(`Exporting ${reportType} report as ${format}`)
    }

    const renderReportTable = () => {
        switch (reportType) {
            case "userActivity":
                return (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Action</TableHead>
                                <TableHead>Timestamp</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {userActivityData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.user}</TableCell>
                                    <TableCell>{row.action}</TableCell>
                                    <TableCell>{row.timestamp}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )
            case "sales":
                return (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Product</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Revenue</TableHead>
                                <TableHead>Date</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {salesData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.product}</TableCell>
                                    <TableCell>{row.quantity}</TableCell>
                                    <TableCell>${row.revenue.toFixed(2)}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )
            case "systemPerformance":
                return (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Metric</TableHead>
                                <TableHead>Value</TableHead>
                                <TableHead>Timestamp</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {systemPerformanceData.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.metric}</TableCell>
                                    <TableCell>{row.value}</TableCell>
                                    <TableCell>{row.timestamp}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )
            default:
                return null
        }
    }

    return (
        <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Reports</h1>
                    <p className="text-muted-foreground">Generate and view detailed reports</p>
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Generate Report</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-2">
                            <Label htmlFor="report-type">Report Type</Label>
                            <Select value={reportType} onValueChange={setReportType}>
                                <SelectTrigger id="report-type">
                                    <SelectValue placeholder="Select report type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="userActivity">User Activity</SelectItem>
                                    <SelectItem value="sales">Sales Data</SelectItem>
                                    <SelectItem value="systemPerformance">System Performance</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="start-date">Start Date</Label>
                            <Input id="start-date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="end-date">End Date</Label>
                            <Input id="end-date" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                        </div>
                        <div className="space-y-2 flex items-end">
                            <Button className="w-full">Generate Report</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="mt-6">
                <CardHeader>
                    <CardTitle>Report Results</CardTitle>
                </CardHeader>
                <CardContent>
                    <Tabs defaultValue="table" className="space-y-4">
                        <TabsList>
                            <TabsTrigger value="table">Table</TabsTrigger>
                            <TabsTrigger value="chart">Chart</TabsTrigger>
                        </TabsList>
                        <TabsContent value="table" className="space-y-4">
                            <div className="rounded-md border">{renderReportTable()}</div>
                        </TabsContent>
                        <TabsContent value="chart" className="space-y-4">
                            <div className="h-[400px] w-full bg-muted/50 rounded-md flex items-center justify-center">
                                <p className="text-muted-foreground">Chart visualization would appear here</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                    <div className="flex justify-end space-x-2 mt-4">
                        <Button variant="outline" onClick={() => handleExport("csv")}>
                            <FileText className="mr-2 h-4 w-4" />
                            Export CSV
                        </Button>
                        <Button variant="outline" onClick={() => handleExport("pdf")}>
                            <FileText className="mr-2 h-4 w-4" />
                            Export PDF
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

