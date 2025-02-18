import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Tickets() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">My Tickets</h1>
      <div className="space-y-4">
        {tickets.map((ticket) => (
          <Card key={ticket.id}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">#{ticket.id} - {ticket.title}</CardTitle>
                <Badge variant={ticket.status === 'Open' ? 'default' : 'secondary'}>
                  {ticket.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{ticket.description}</p>
              <div className="mt-2 text-sm text-muted-foreground">
                Created: {ticket.date}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const tickets = [
  {
    id: "T123",
    title: "Health Insurance Claim",
    status: "Open",
    description: "Claim processing for hospital expenses",
    date: "2024-02-18",
  },
  {
    id: "T124",
    title: "Car Insurance Dispute",
    status: "Closed",
    description: "Resolution for accident claim",
    date: "2024-02-15",
  },
];
