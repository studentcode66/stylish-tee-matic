
export default function Footer() {
  return (
    <footer className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-6">
              SHIRTS<span className="text-primary">MATTER</span>
            </h3>
            <p className="text-muted-foreground">
              Premium shirts for those who demand excellence in every thread.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Shop</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>1234 Fashion Street</li>
              <li>Style City, SC 12345</li>
              <li>contact@shirtsmatter.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-muted">
          <p className="text-center text-muted-foreground">
            © 2024 SHIRTSMATTER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
