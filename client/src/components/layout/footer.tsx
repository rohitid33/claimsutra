import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Insurance Samadhan</h3>
            <p className="mt-2 text-sm text-gray-600">
              Your trusted partner in resolving insurance grievances.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/">
                  <a className="text-sm text-gray-600 hover:text-primary">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/complaint">
                  <a className="text-sm text-gray-600 hover:text-primary">File Complaint</a>
                </Link>
              </li>
              <li>
                <Link href="/resources">
                  <a className="text-sm text-gray-600 hover:text-primary">Resources</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-gray-600">Email: support@example.com</li>
              <li className="text-sm text-gray-600">Phone: +1 234 567 890</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Insurance Samadhan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
