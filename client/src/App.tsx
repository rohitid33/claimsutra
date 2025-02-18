import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/hooks/use-auth";
import { ThemeProvider } from "@/hooks/use-theme";
import { ProtectedRoute } from "@/lib/protected-route";
import Navbar from "@/components/layout/navbar";
import Home from "@/pages/home";
import Complaint from "@/pages/complaint";
import Resources from "@/pages/resources";
import NotFound from "@/pages/not-found";
import { Link, useLocation } from "wouter";
import AuthPage from "@/pages/auth";
import DashboardPage from "@/pages/dashboard"; // Import the DashboardPage component


function BottomNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-5 gap-2">
          <Link href="/">
            <a className={`flex flex-col items-center ${location === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className="text-xl">🏠</span>
              <span className="text-xs">Home</span>
            </a>
          </Link>
          <Link href="/services">
            <a className={`flex flex-col items-center ${location === '/services' ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className="text-xl">🛠️</span>
              <span className="text-xs">All Services</span>
            </a>
          </Link>
          <Link href="/consult">
            <a className={`flex flex-col items-center ${location === '/consult' ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className="text-xl">💬</span>
              <span className="text-xs">Consult</span>
            </a>
          </Link>
          <Link href="/tickets">
            <a className={`flex flex-col items-center ${location === '/tickets' ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className="text-xl">🎫</span>
              <span className="text-xs">My Tickets</span>
            </a>
          </Link>
          <Link href="/document-vault">
            <a className={`flex flex-col items-center ${location === '/document-vault' ? 'text-primary' : 'text-muted-foreground'}`}>
              <span className="text-xl">📋</span>
              <span className="text-xs">DocVault</span>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

import React, { Suspense } from "react";

function Router() {
  return (
    <div className="flex min-h-screen flex-col pb-16">
      <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <ProtectedRoute path="/complaint" component={Complaint} />
          <Route path="/resources" component={Resources} />
          <Route path="/auth" component={AuthPage} />
          <ProtectedRoute path="/dashboard" component={DashboardPage} />
          <ProtectedRoute path="/services" component={React.lazy(() => import("@/pages/services"))} />
          <ProtectedRoute path="/consult" component={React.lazy(() => import("@/pages/consult"))} />
          <ProtectedRoute path="/tickets" component={React.lazy(() => import("@/pages/tickets"))} />
          <ProtectedRoute path="/document-vault" component={React.lazy(() => import("@/pages/document-vault"))} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <BottomNav />
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;