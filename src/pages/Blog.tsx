import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User, Shield, Heart, Wifi, Users, BookOpen, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-blog.png";
import welcomeImage from "@/assets/blog-welcome.png";
import whyMattersImage from "@/assets/blog-why-matters.png";
import storiesImage from "@/assets/blog-stories.png";
import blogPostSafety from "@/assets/blog-post-safety.png";
import blogPostDigitalSafety from "@/assets/blog-post-digital-safety.png";
import blogPostEmpowerment from "@/assets/blog-post-empowerment.png";
import blogPostStories from "@/assets/blog-post-stories.png";
import blogPostCrisis from "@/assets/blog-post-crisis.png";
import blogPostCommunity from "@/assets/blog-post-community.png";
import usePageTitle from "@/hooks/usePageTitle";

const Blog = () => {
  usePageTitle("Blog - Awdorg Foundation");
  const categories = [
    {
      icon: Shield,
      title: "Women's Safety",
      description: "Helpful articles focused on street safety, crisis preparedness, preventing harassment, and building safer environments for women.",
    },
    {
      icon: Heart,
      title: "Self-Reliance & Empowerment",
      description: "Stories and guidance on how women can become independent, confident, and self-reliant through practical support.",
    },
    {
      icon: Wifi,
      title: "Cyber Safety",
      description: "Tips and information about staying safe online, protecting digital identity, and dealing with online harassment.",
    },
    {
      icon: Users,
      title: "Community Awareness",
      description: "Insights into how communities can work together to create safer spaces for women through cooperation and responsible behavior.",
    },
    {
      icon: BookOpen,
      title: "Real Stories & Impact",
      description: "Inspiring stories of women who found support, regained their confidence, and moved toward a brighter future with the help of Awdorg Foundation.",
    },
  ];

  const whyMatters = [
    "Spread awareness",
    "Build safer communities",
    "Encourage women to take action",
    "Guide families and communities",
    "Inspire positive change",
  ];

  const exampleTopics = [
    "How Safety Kits Can Help Women Feel More Secure",
    "Simple Cyber Safety Tips Every Woman Should Know",
    "Why Women's Self-Reliance Strengthens Communities",
    "How Communities Can Support Women During Crisis",
    "Empowerment Story: A Woman's Journey to Independence",
  ];

  const posts = [
    {
      title: "How Safety Kits Can Help Women Stay Secure",
      excerpt: "Learn about the essential items in our safety kits and how they can help women feel more secure in their daily lives.",
      date: "December 1, 2024",
      readTime: "5 min read",
      author: "Awdorg Team",
      category: "Safety",
      image: blogPostSafety,
    },
    {
      title: "Cyber Safety Tips Every Woman Should Know",
      excerpt: "In today's digital age, online safety is crucial. Here are essential tips to protect yourself from cyber threats.",
      date: "November 25, 2024",
      readTime: "7 min read",
      author: "Awdorg Team",
      category: "Digital Safety",
      image: blogPostDigitalSafety,
    },
    {
      title: "Why Women's Self-Reliance Matters for Society",
      excerpt: "Explore the importance of women's financial independence and how it benefits families and communities.",
      date: "November 18, 2024",
      readTime: "6 min read",
      author: "Awdorg Team",
      category: "Empowerment",
      image: blogPostEmpowerment,
    },
    {
      title: "Success Stories: Women Who Transformed Their Lives",
      excerpt: "Read inspiring stories of women who overcame challenges with the support of Awdorg Foundation.",
      date: "November 10, 2024",
      readTime: "8 min read",
      author: "Awdorg Team",
      category: "Stories",
      image: blogPostStories,
    },
    {
      title: "Understanding Domestic Violence: Signs and Support",
      excerpt: "Learn to recognize the signs of domestic violence and understand the support options available.",
      date: "November 3, 2024",
      readTime: "9 min read",
      author: "Awdorg Team",
      category: "Crisis Support",
      image: blogPostCrisis,
    },
    {
      title: "Community Safety: A Collective Responsibility",
      excerpt: "How communities can come together to create safer environments for women and children.",
      date: "October 28, 2024",
      readTime: "5 min read",
      author: "Awdorg Team",
      category: "Community",
      image: blogPostCommunity,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Awdorg Foundation Blog" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-accent/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
        </div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute top-20 left-10 w-36 h-36 bg-accent/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-primary-foreground/10 rounded-full blur-3xl float-slow" />
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-24 text-primary-foreground/40 float-slow">
          <BookOpen className="w-10 h-10" />
        </div>
        <div className="absolute bottom-36 left-24 text-accent/50 float-medium">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-24 h-24 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 animate-fade-in border border-primary-foreground/30">
              <BookOpen className="w-12 h-12 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in animation-delay-100">
              Awdorg Foundation <span className="text-accent">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-in animation-delay-200">
              Knowledge, inspiring stories, and practical guidance for women's safety and empowerment
            </p>
            
            {/* Scroll Indicator */}
            <div className="mt-10 animate-bounce">
              <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full mx-auto flex items-start justify-center p-1">
                <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
          </svg>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
              Welcome to the Awdorg Foundation Blog
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={welcomeImage} 
                  alt="Woman reading educational content" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our blog is a space dedicated to sharing knowledge, inspiring stories, and practical guidance that supports women's safety, empowerment, and self-reliance.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We publish articles that help women, communities, volunteers, and supporters understand how they can contribute to a safer and more inclusive society.
                </p>
                <p className="text-primary font-semibold">
                  From safety tips to empowerment stories, every post is designed to bring awareness and encourage meaningful action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Will Find */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            What You Will Find Here
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore our content categories
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-primary transition-all duration-300 animate-fade-in border border-border/50 hover:border-primary/30 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <category.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {index + 1}. {category.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Blog Matters */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
              Why Our Blog Matters
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
              <div className="animate-fade-in">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Knowledge and awareness can save lives. By sharing real experiences, safety guidance, and empowerment-focused content, we aim to:
                </p>
                <ul className="space-y-3">
                  {whyMatters.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 bg-card/50 p-3 rounded-xl border border-border/30">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-primary font-semibold mt-6">
                  Our blog is a small step toward a larger movement for women's safety and empowerment.
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={whyMattersImage} 
                  alt="Community awareness session" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                <img 
                  src={storiesImage} 
                  alt="Writing inspiring stories" 
                  className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                />
              </div>
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border/50 order-1 lg:order-2">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Topics We Cover
                </h3>
                <ul className="space-y-3">
                  {exampleTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-secondary/30 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-gradient-hero flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-muted-foreground text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-transparent relative overflow-hidden">
        <div className="absolute top-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Your latest articles will automatically appear here once published
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-primary transition-all duration-300 animate-fade-in border border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3 w-10 h-10 border border-white/30 rounded-full backdrop-blur-sm" />
                  <span className="absolute bottom-3 left-3 bg-primary/90 text-primary-foreground font-display text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <button className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected CTA */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
        <div className="absolute top-20 right-20 text-primary-foreground/30 float-slow">
          <Sparkles className="w-8 h-8" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Stay Connected
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-4 max-w-2xl mx-auto">
            Visit our blog regularly for updates, new articles, and inspiring stories.
          </p>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Your involvement helps spread awareness and build a safer world for women.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary-foreground/30"
            />
            <Button variant="secondary" size="lg" className="shadow-gold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;