"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, AreaChart, Area } from "recharts";
import * as React from "react";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function AnalyticsPage() {
    const TrafficChartData = [
        { date: "2024-04-01", desktop: 222, mobile: 150 },
        { date: "2024-04-02", desktop: 97, mobile: 180 },
        { date: "2024-04-03", desktop: 167, mobile: 120 },
        { date: "2024-04-04", desktop: 242, mobile: 260 },
        { date: "2024-04-05", desktop: 373, mobile: 290 },
        { date: "2024-04-06", desktop: 301, mobile: 340 },
        { date: "2024-04-07", desktop: 245, mobile: 180 },
        { date: "2024-04-08", desktop: 409, mobile: 320 },
        { date: "2024-04-09", desktop: 59, mobile: 110 },
        { date: "2024-04-10", desktop: 261, mobile: 190 },
        { date: "2024-04-11", desktop: 327, mobile: 350 },
        { date: "2024-04-12", desktop: 292, mobile: 210 },
        { date: "2024-04-13", desktop: 342, mobile: 380 },
        { date: "2024-04-14", desktop: 137, mobile: 220 },
        { date: "2024-04-15", desktop: 120, mobile: 170 },
        { date: "2024-04-16", desktop: 138, mobile: 190 },
        { date: "2024-04-17", desktop: 446, mobile: 360 },
        { date: "2024-04-18", desktop: 364, mobile: 410 },
        { date: "2024-04-19", desktop: 243, mobile: 180 },
        { date: "2024-04-20", desktop: 89, mobile: 150 },
        { date: "2024-04-21", desktop: 137, mobile: 200 },
        { date: "2024-04-22", desktop: 224, mobile: 170 },
        { date: "2024-04-23", desktop: 138, mobile: 230 },
        { date: "2024-04-24", desktop: 387, mobile: 290 },
        { date: "2024-04-25", desktop: 215, mobile: 250 },
        { date: "2024-04-26", desktop: 75, mobile: 130 },
        { date: "2024-04-27", desktop: 383, mobile: 420 },
        { date: "2024-04-28", desktop: 122, mobile: 180 },
        { date: "2024-04-29", desktop: 315, mobile: 240 },
        { date: "2024-04-30", desktop: 454, mobile: 380 },
        { date: "2024-05-01", desktop: 165, mobile: 220 },
        { date: "2024-05-02", desktop: 293, mobile: 310 },
        { date: "2024-05-03", desktop: 247, mobile: 190 },
        { date: "2024-05-04", desktop: 385, mobile: 420 },
        { date: "2024-05-05", desktop: 481, mobile: 390 },
        { date: "2024-05-06", desktop: 498, mobile: 520 },
        { date: "2024-05-07", desktop: 388, mobile: 300 },
        { date: "2024-05-08", desktop: 149, mobile: 210 },
        { date: "2024-05-09", desktop: 227, mobile: 180 },
        { date: "2024-05-10", desktop: 293, mobile: 330 },
        { date: "2024-05-11", desktop: 335, mobile: 270 },
        { date: "2024-05-12", desktop: 197, mobile: 240 },
        { date: "2024-05-13", desktop: 197, mobile: 160 },
        { date: "2024-05-14", desktop: 448, mobile: 490 },
        { date: "2024-05-15", desktop: 473, mobile: 380 },
        { date: "2024-05-16", desktop: 338, mobile: 400 },
        { date: "2024-05-17", desktop: 499, mobile: 420 },
        { date: "2024-05-18", desktop: 315, mobile: 350 },
        { date: "2024-05-19", desktop: 235, mobile: 180 },
        { date: "2024-05-20", desktop: 177, mobile: 230 },
        { date: "2024-05-21", desktop: 82, mobile: 140 },
        { date: "2024-05-22", desktop: 81, mobile: 120 },
        { date: "2024-05-23", desktop: 252, mobile: 290 },
        { date: "2024-05-24", desktop: 294, mobile: 220 },
        { date: "2024-05-25", desktop: 201, mobile: 250 },
        { date: "2024-05-26", desktop: 213, mobile: 170 },
        { date: "2024-05-27", desktop: 420, mobile: 460 },
        { date: "2024-05-28", desktop: 233, mobile: 190 },
        { date: "2024-05-29", desktop: 78, mobile: 130 },
        { date: "2024-05-30", desktop: 340, mobile: 280 },
        { date: "2024-05-31", desktop: 178, mobile: 230 },
        { date: "2024-06-01", desktop: 178, mobile: 200 },
        { date: "2024-06-02", desktop: 470, mobile: 410 },
        { date: "2024-06-03", desktop: 103, mobile: 160 },
        { date: "2024-06-04", desktop: 439, mobile: 380 },
        { date: "2024-06-05", desktop: 88, mobile: 140 },
        { date: "2024-06-06", desktop: 294, mobile: 250 },
        { date: "2024-06-07", desktop: 323, mobile: 370 },
        { date: "2024-06-08", desktop: 385, mobile: 320 },
        { date: "2024-06-09", desktop: 438, mobile: 480 },
        { date: "2024-06-10", desktop: 155, mobile: 200 },
        { date: "2024-06-11", desktop: 92, mobile: 150 },
        { date: "2024-06-12", desktop: 492, mobile: 420 },
        { date: "2024-06-13", desktop: 81, mobile: 130 },
        { date: "2024-06-14", desktop: 426, mobile: 380 },
        { date: "2024-06-15", desktop: 307, mobile: 350 },
        { date: "2024-06-16", desktop: 371, mobile: 310 },
        { date: "2024-06-17", desktop: 475, mobile: 520 },
        { date: "2024-06-18", desktop: 107, mobile: 170 },
        { date: "2024-06-19", desktop: 341, mobile: 290 },
        { date: "2024-06-20", desktop: 408, mobile: 450 },
        { date: "2024-06-21", desktop: 169, mobile: 210 },
        { date: "2024-06-22", desktop: 317, mobile: 270 },
        { date: "2024-06-23", desktop: 480, mobile: 530 },
        { date: "2024-06-24", desktop: 132, mobile: 180 },
        { date: "2024-06-25", desktop: 141, mobile: 190 },
        { date: "2024-06-26", desktop: 434, mobile: 380 },
        { date: "2024-06-27", desktop: 448, mobile: 490 },
        { date: "2024-06-28", desktop: 149, mobile: 200 },
        { date: "2024-06-29", desktop: 103, mobile: 160 },
        { date: "2024-06-30", desktop: 446, mobile: 400 },
    ]

    const OverviewChartData = [
        { month: "September", desktop: 186 },
        { month: "November", desktop: 305 },
        { month: "December", desktop: 237 },
        { month: "January", desktop: 73 },
        { month: "Feburary", desktop: 209 },
        { month: "March", desktop: 214 },
    ]

    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
        },
        mobile: {
            label: "Mobile",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig

    const [timeRange, setTimeRange] = React.useState("90d")
    const filteredData = TrafficChartData.filter((item) => {
        const date = new Date(item.date)
        const referenceDate = new Date("2024-06-30")
        let daysToSubtract = 90
        if (timeRange === "30d") {
            daysToSubtract = 30
        } else if (timeRange === "7d") {
            daysToSubtract = 7
        }
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
    })
    return (
        <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold">Analytics</h1>
                    <p className="text-muted-foreground">View detailed metrics about your application</p>
                </div>
                <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export Data
                </Button>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="traffic">Traffic</TabsTrigger>
                    <TabsTrigger value="engagement">Engagement</TabsTrigger>
                    <TabsTrigger value="conversion">Conversion</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">45,231</div>
                                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                {/* <div className="mt-4 h-[80px] w-full bg-muted/50 rounded-md"></div> */}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Average Session</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">3m 42s</div>
                                <p className="text-xs text-muted-foreground">+12.3% from last month</p>
                                {/* <div className="mt-4 h-[80px] w-full bg-muted/50 rounded-md"></div> */}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">24.3%</div>
                                <p className="text-xs text-muted-foreground">-2.1% from last month</p>
                                {/* <div className="mt-4 h-[80px] w-full bg-muted/50 rounded-md"></div> */}
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">3.2%</div>
                                <p className="text-xs text-muted-foreground">+1.2% from last month</p>
                                {/* <div className="mt-4 h-[80px] w-full bg-muted/50 rounded-md"></div> */}
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="lg:col-span-5">
                            <CardHeader>
                                <CardTitle>Traffic Overview</CardTitle>
                                <CardDescription>Visitor traffic over the last 30 days</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig}>
                                    <LineChart
                                        accessibilityLayer
                                        data={OverviewChartData}
                                        margin={{
                                            left: 12,
                                            right: 12,
                                        }}
                                    >
                                        <CartesianGrid vertical={false} />
                                        <XAxis
                                            dataKey="month"
                                            tickLine={false}
                                            axisLine={false}
                                            tickMargin={8}
                                            tickFormatter={(value) => value.slice(0, 3)}
                                        />
                                        <ChartTooltip
                                            cursor={false}
                                            content={<ChartTooltipContent hideLabel />}
                                        />
                                        <Line
                                            dataKey="desktop"
                                            type="natural"
                                            stroke={chartConfig.desktop.color}
                                            strokeWidth={2}
                                            dot={false}
                                        />
                                    </LineChart>
                                </ChartContainer>
                            </CardContent>
                            <CardFooter className="flex-col items-start gap-2 text-sm">
                                <div className="flex gap-2 font-medium leading-none">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="leading-none text-muted-foreground">
                                    Showing total visitors for the last 6 months
                                </div>
                            </CardFooter>
                        </Card>
                        <Card className="lg:col-span-2">
                            <CardHeader>
                                <CardTitle>Traffic Sources</CardTitle>
                                <CardDescription>Top referral sources</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Direct</p>
                                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                                <div className="bg-primary h-full w-[45%]"></div>
                                            </div>
                                        </div>
                                        <div className="font-medium">45%</div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Search</p>
                                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                                <div className="bg-primary h-full w-[30%]"></div>
                                            </div>
                                        </div>
                                        <div className="font-medium">30%</div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Social</p>
                                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                                <div className="bg-primary h-full w-[15%]"></div>
                                            </div>
                                        </div>
                                        <div className="font-medium">15%</div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium">Referral</p>
                                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                                                <div className="bg-primary h-full w-[10%]"></div>
                                            </div>
                                        </div>
                                        <div className="font-medium">10%</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
                <TabsContent value="traffic" className="space-y-4">
                    <Card>
                        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
                            <div className="grid flex-1 gap-1 text-center sm:text-left">
                                <CardTitle>Traffic Details</CardTitle>
                                <CardDescription>
                                    View traffic data and trends over time. Filter by different time periods to analyze visitor patterns.
                                </CardDescription>
                            </div>
                            <Select value={timeRange} onValueChange={setTimeRange}>
                                <SelectTrigger
                                    className="w-[160px] rounded-lg sm:ml-auto"
                                    aria-label="Select a value"
                                >
                                    <SelectValue placeholder="Last 3 months" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl">
                                    <SelectItem value="90d" className="rounded-lg">
                                        Last 3 months
                                    </SelectItem>
                                    <SelectItem value="30d" className="rounded-lg">
                                        Last 30 days
                                    </SelectItem>
                                    <SelectItem value="7d" className="rounded-lg">
                                        Last 7 days
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </CardHeader>
                        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
                            <ChartContainer
                                config={chartConfig}
                                className="aspect-auto h-[250px] w-full"
                            >
                                <AreaChart data={filteredData}>
                                    <defs>
                                        <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="var(--color-desktop)"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="var(--color-desktop)"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                        <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="5%"
                                                stopColor="var(--color-mobile)"
                                                stopOpacity={0.8}
                                            />
                                            <stop
                                                offset="95%"
                                                stopColor="var(--color-mobile)"
                                                stopOpacity={0.1}
                                            />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="date"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        minTickGap={32}
                                        tickFormatter={(value) => {
                                            const date = new Date(value)
                                            return date.toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                            })
                                        }}
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={
                                            <ChartTooltipContent
                                                labelFormatter={(value) => {
                                                    return new Date(value).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                    })
                                                }}
                                                indicator="dot"
                                            />
                                        }
                                    />
                                    <Area
                                        dataKey="mobile"
                                        type="natural"
                                        fill="url(#fillMobile)"
                                        stroke="var(--color-mobile)"
                                        stackId="a"
                                    />
                                    <Area
                                        dataKey="desktop"
                                        type="natural"
                                        fill="url(#fillDesktop)"
                                        stroke="var(--color-desktop)"
                                        stackId="a"
                                    />
                                    <ChartLegend content={<ChartLegendContent />} />
                                </AreaChart>
                            </ChartContainer>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="engagement" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>User Engagement</CardTitle>
                            <CardDescription>Metrics on how users interact with your platform</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[400px] w-full bg-muted/50 rounded-md flex items-center justify-center">
                                <p className="text-muted-foreground">Engagement metrics would appear here</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="conversion" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Conversion Metrics</CardTitle>
                            <CardDescription>Analysis of conversion rates and funnels</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[400px] w-full bg-muted/50 rounded-md flex items-center justify-center">
                                <p className="text-muted-foreground">Conversion funnel visualization would appear here</p>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

