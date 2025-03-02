import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function AnalyticsPage() {
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
                                <div className="mt-4 h-[80px] w-full bg-muted/50 rounded-md"></div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Average Session</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">3m 42s</div>
                                <p className="text-xs text-muted-foreground">+12.3% from last month</p>
                                <div className="mt-4 h-[80px] w-full bg-muted/50 rounded-md"></div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">24.3%</div>
                                <p className="text-xs text-muted-foreground">-2.1% from last month</p>
                                <div className="mt-4 h-[80px] w-full bg-muted/50 rounded-md"></div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">3.2%</div>
                                <p className="text-xs text-muted-foreground">+1.2% from last month</p>
                                <div className="mt-4 h-[80px] w-full bg-muted/50 rounded-md"></div>
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
                                <div className="h-[300px] w-full bg-muted/50 rounded-md"></div>
                            </CardContent>
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
                        <CardHeader>
                            <CardTitle>Traffic Details</CardTitle>
                            <CardDescription>Detailed breakdown of traffic sources and patterns</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-[400px] w-full bg-muted/50 rounded-md flex items-center justify-center">
                                <p className="text-muted-foreground">Traffic analysis charts would appear here</p>
                            </div>
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

