import { ArrowRight, BookOpen, Calendar, Clock, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import blogPostSafety from "@/assets/blog-post-safety.png";
import blogPostDigitalSafety from "@/assets/blog-post-digital-safety.png";
import blogPostEmpowerment from "@/assets/blog-post-empowerment.png";

const BlogSection = () => {
  const blogs = [
    {
      title: "How Safety Kits Can Help Women Stay Secure",
      description: "Learn about the essential items in our safety kits and how they empower women to feel more protected in their daily lives.",
      category: "Safety",
      categoryColor: "bg-gradient-to-r from-primary to-rose-dark text-white",
      headerBg: "bg-gradient-to-br from-primary/20 via-rose-100 to-primary/10",
      date: "Dec 1, 2025",
      readTime: "3 min read",
      iconBg: "bg-gradient-to-br from-primary/30 to-rose-dark/30",
      iconColor: "text-primary",
      image: blogPostSafety,
    },
    {
      title: "Cyber Safety Tips Every Woman Should Know",
      description: "Practical digital safety measures to protect yourself from online harassment, phishing, and cyber threats.",
      category: "Cyber Safety",
      categoryColor: "bg-gradient-to-r from-teal to-emerald-600 text-white",
      headerBg: "bg-gradient-to-br from-teal/20 via-emerald-100 to-teal/10",
      date: "Nov 28, 2025",
      readTime: "4 min read",
      iconBg: "bg-gradient-to-br from-teal/30 to-emerald-600/30",
      iconColor: "text-teal",
      image: blogPostDigitalSafety,
    },
    {
      title: "Why Women's Self-Reliance Matters for Society",
      description: "Exploring the broader impact of women's economic independence on communities, families, and national development.",
      category: "Empowerment",
      categoryColor: "bg-gradient-to-r from-accent to-amber-500 text-white",
      headerBg: "bg-gradient-to-br from-accent/20 via-amber-100 to-accent/10",
      date: "Nov 25, 2025",
      readTime: "6 min read",
      iconBg: "bg-gradient-to-br from-accent/30 to-amber-500/30",
      iconColor: "text-accent",
      image: blogPostEmpowerment,
    },
  ];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-primary/5 to-accent/10" />
      <div className="absolute inset-0 bg-gradient-to-tl from-rose-50/50 via-transparent to-gold/5" />
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      
      {/* Decorative elements */}
      <Sparkles className="absolute top-24 left-1/4 w-5 h-5 text-primary/30 animate-twinkle" />
      <Sparkles className="absolute bottom-32 right-1/3 w-4 h-4 text-accent/40 animate-twinkle" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 left-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-16 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-primary/10">
                <BookOpen className="w-4 h-4" />
                Latest Updates
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Blog <span className="text-gradient">Highlights</span>
              </h2>
            </div>
            <Link to="/blog" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white group">
                View All Posts
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="group bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with image */}
                <div className="h-44 relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating sparkles */}
                  <Sparkles className="absolute top-3 right-4 w-4 h-4 text-white/50 animate-pulse" />
                  
                  <span className={`absolute top-3 left-3 ${blog.categoryColor} px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 relative">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2" />
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3 relative z-10">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug relative z-10">
                    {blog.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 relative z-10">
                    {blog.description}
                  </p>

                  <Link
                    to="/blog"
                    className="inline-flex items-center text-primary font-medium text-sm hover:gap-3 transition-all gap-2 relative z-10"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
