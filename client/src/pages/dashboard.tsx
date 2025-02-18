
import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getQueryFn } from "@/lib/queryClient";
import type { Complaint } from "@shared/schema";

export default function DashboardPage() {
  const { user } = useAuth();
  const { data: complaints } = useQuery<Complaint[]>({
    queryKey: ["/api/complaints"],
    queryFn: getQueryFn(),
  });

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome, {user?.name}!</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Account Information</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="font-medium">Username</dt>
                <dd>{user?.username}</dd>
              </div>
              <div>
                <dt className="font-medium">Email</dt>
                <dd>{user?.email}</dd>
              </div>
              <div>
                <dt className="font-medium">Member since</dt>
                <dd>{new Date(user?.createdAt ?? "").toLocaleDateString()}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Complaints</CardTitle>
          </CardHeader>
          <CardContent>
            {complaints?.length === 0 ? (
              <p className="text-muted-foreground">No complaints filed yet.</p>
            ) : (
              <ul className="space-y-2">
                {complaints?.map((complaint) => (
                  <li key={complaint.id}>
                    <p className="font-medium">{complaint.insuranceType}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(complaint.createdAt).toLocaleDateString()}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
