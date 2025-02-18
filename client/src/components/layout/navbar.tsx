
import { Link } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useAuth } from "@/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

const servicesByCategory = {
  "Insurance Claims": [
    { title: "Health Claim", icon: "🏥", link: "/health-claim" },
    { title: "Motor Accident", icon: "🚗", link: "/motor-claim" },
    { title: "Fire Claim", icon: "🔥", link: "/fire-claim" },
    { title: "Life Insurance", icon: "👥", link: "/life-claim" },
    { title: "Travel Claim", icon: "✈️", link: "/travel-claim" },
    { title: "Property Claim", icon: "🏠", link: "/property-claim" },
    { title: "Marine Claim", icon: "🚢", link: "/marine-claim" },
    { title: "Liability Claim", icon: "⚖️", link: "/liability-claim" }
  ],
  "Loan Services": [
    { title: "Personal Loan", icon: "👤", link: "/personal-loan" },
    { title: "Home Loan", icon: "🏠", link: "/home-loan" },
    { title: "Business Loan", icon: "💼", link: "/business-loan" }
  ],
  "Consumer Services": [
    { title: "Product Issues", icon: "📦", link: "/product-issues" },
    { title: "Service Quality", icon: "⭐", link: "/service-quality" },
    { title: "Billing Disputes", icon: "💳", link: "/billing-disputes" }
  ]
};

export default function Navbar() {
  const { user, logoutMutation } = useAuth();

  return (
    <div>
      <header className="border-b bg-background py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/">
            <a className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white text-xl">✓</span>
              </div>
              <span className="text-xl font-bold text-primary">Claimsutra</span>
            </a>
          </Link>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/file-claim">
                    <div className="flex items-center gap-2 w-full">
                      <span className="text-xl">📝</span>
                      <span>File a Claim</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/track-claim">
                    <div className="flex items-center gap-2 w-full">
                      <span className="text-xl">🔍</span>
                      <span>Track Claim</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/consult">
              <a className="flex items-center gap-2 text-foreground">
                <span className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-xl">📞</span>
                <span className="hidden sm:block">Talk to Expert</span>
              </a>
            </Link>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 text-foreground">
                    <span className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">👤</span>
                    <span className="hidden sm:block">{user.name}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">
                      <div className="flex items-center gap-2">
                        <span>Profile</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="text-destructive focus:text-destructive"
                    onClick={() => logoutMutation.mutate()}
                  >
                    <div className="flex items-center gap-2">
                      <span>Logout</span>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/auth">
                <a className="flex items-center gap-2 text-foreground">
                  <span className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">👤</span>
                  <span className="hidden sm:block">Login</span>
                </a>
              </Link>
            )}
          </div>
        </div>
      </header>
      <div className="bg-primary text-white text-center py-1.5 text-sm font-medium">
        India's Legal Claim Expert
      </div>
      <div className="border-t bg-background">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-foreground flex items-center gap-2">
                  <span className="text-xl">🔍</span>
                  <span>All Services</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-96 p-4">
                <input
                  type="search"
                  placeholder="Search services..."
                  className="w-full mb-4 p-2 border rounded"
                  onChange={(e) => {
                    const search = e.target.value.toLowerCase();
                  }}
                />
                {Object.entries(servicesByCategory).map(([category, services]) => (
                  <div key={category} className="mb-4">
                    <DropdownMenuLabel className="font-bold text-lg mb-2">{category}</DropdownMenuLabel>
                    <div className="grid grid-cols-3 gap-4">
                      {services.map((service) => (
                        <Link key={service.title} href={service.link}>
                          <div className="flex flex-col items-center text-center hover:bg-muted p-2 rounded-lg">
                            <span className="text-3xl mb-2">{service.icon}</span>
                            <span className="text-sm">{service.title}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <DropdownMenuSeparator className="my-4" />
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
