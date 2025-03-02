import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileText, Settings } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function DashboardPage() {
    return (
        <div className="p-4 md:p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, John Doe</p>
            </div>

            {/* Dashboard Content */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">New Users</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2,350</div>
                        <p className="text-xs text-muted-foreground">+10.1% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">+19% from last month</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">24.3%</div>
                        <p className="text-xs text-muted-foreground">-2.1% from last month</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="md:col-span-2">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>Your recent activity across the platform</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                                    <Avatar>
                                        <AvatarFallback>{`U${i}`}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium">User {i} performed an action</p>
                                        <p className="text-xs text-muted-foreground">
                                            {i} hour{i !== 1 ? "s" : ""} ago
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>Frequently used actions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Button className="w-full justify-start">
                                <Users className="mr-2 h-4 w-4" />
                                Add New User
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <FileText className="mr-2 h-4 w-4" />
                                Generate Report
                            </Button>
                            <Button className="w-full justify-start" variant="outline">
                                <Settings className="mr-2 h-4 w-4" />
                                System Settings
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

