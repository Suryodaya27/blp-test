"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, Clock, ArrowRight, Tag, TrendingUp, Lightbulb, Target, Users } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Posts", count: 24 },
    { id: "strategy", label: "Strategy", count: 8 },
    { id: "case-studies", label: "Case Studies", count: 6 },
    { id: "trends", label: "Trends", count: 5 },
    { id: "tools", label: "Tools & Tech", count: 3 },
    { id: "insights", label: "Industry Insights", count: 2 }
  ];

  const featuredPost = {
    id: 1,
    title: "The Future of AI in Marketing: 2024 Blueprint",
    excerpt: "How artificial intelligence is reshaping digital marketing strategies and what brands need to know to stay ahead.",
    author: "Ayush Kumar",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "trends",
    image: "/api/placeholder/800/400",
    tags: ["AI", "Marketing", "Strategy", "2024"]
  };

  const blogPosts = [
    {
      id: 2,
      title: "How We Increased BeReal's Engagement by 340%",
      excerpt: "A deep dive into the strategy, execution, and results of our viral social media campaign for BeReal.",
      author: "Vrutti Patel",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "case-studies",
      image: "/api/placeholder/600/300",
      tags: ["Case Study", "Social Media", "BeReal"]
    },
    {
      id: 3,
      title: "Landing Page Optimization: The Complete Guide",
      excerpt: "Everything you need to know about creating high-converting landing pages that drive results.",
      author: "Suryodaya Singh",
      date: "Dec 10, 2024",
      readTime: "12 min read",
      category: "strategy",
      image: "/api/placeholder/600/300",
      tags: ["CRO", "Landing Pages", "Conversion"]
    },
    {
      id: 4,
      title: "5 Marketing Trends That Will Dominate 2024",
      excerpt: "Stay ahead of the curve with these emerging marketing trends and strategies for the new year.",
      author: "Ayush Kumar",
      date: "Dec 8, 2024",
      readTime: "7 min read",
      category: "trends",
      image: "/api/placeholder/600/300",
      tags: ["Trends", "2024", "Strategy"]
    },
    {
      id: 5,
      title: "Building AI Agents for Marketing Automation",
      excerpt: "A technical guide to implementing AI agents that can optimize your marketing campaigns automatically.",
      author: "Suryodaya Singh",
      date: "Dec 5, 2024",
      readTime: "15 min read",
      category: "tools",
      image: "/api/placeholder/600/300",
      tags: ["AI", "Automation", "Technical"]
    },
    {
      id: 6,
      title: "The Psychology of Influencer Marketing",
      excerpt: "Understanding the psychological triggers that make influencer campaigns successful and how to leverage them.",
      author: "Vrutti Patel",
      date: "Dec 3, 2024",
      readTime: "9 min read",
      category: "strategy",
      image: "/api/placeholder/600/300",
      tags: ["Influencer", "Psychology", "Marketing"]
    },
    {
      id: 7,
      title: "Myntra's Mobile-First Strategy: A Case Study",
      excerpt: "How we helped Myntra optimize their mobile experience and increase conversions by 280%.",
      author: "Team BluePrynt",
      date: "Nov 30, 2024",
      readTime: "11 min read",
      category: "case-studies",
      image: "/api/placeholder/600/300",
      tags: ["Myntra", "Mobile", "E-commerce"]
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "strategy": return Target;
      case "case-studies": return TrendingUp;
      case "trends": return Lightbulb;
      case "tools": return Tag;
      case "insights": return Users;
      default: return Tag;
    }
  };

  return (
    <div className="min-h-screen pt-24 relative">
      <AnimatedBackground />

      {/* Hero Section */}
      <section
        className="py-16"
      >
        <div className="container mx-auto px-6 text-center">
          <h1
            className="font-outfit font-bold text-5xl md:text-6xl mb-6 text-foreground"
          >
            Insights & Blueprints
          </h1>
          <p
            className="font-outfit text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Deep dives into marketing strategies, case studies, and industry insights
            from the architects of digital transformation.
          </p>
          {/* Search Bar */}
          <div
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-center bg-card border-border"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        className="py-8 bg-card border-b border-border"
      >
        <div className="container mx-auto px-6">
          <div
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "bg-background border border-border hover:border-border-bright text-foreground"
                  }`}
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  <span className="font-outfit font-medium">{category.label}</span>
                  <Badge 
                    variant="secondary" 
                    className={`ml-2 ${
                      selectedCategory === category.id 
                        ? "bg-primary-foreground/20 text-primary-foreground" 
                        : ""
                    }`}
                  >
                    {category.count}
                  </Badge>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section
        className="py-16"
      >
        <div className="container mx-auto px-6">
          <h2
            className="font-outfit font-bold text-2xl mb-8 text-foreground"
          >
            Featured Article
          </h2>
          <div
            className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-card transition-all duration-500 group"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto bg-linear-to-br from-primary to-cyan">
                <div className="absolute inset-0 bg-gradient-primary opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Lightbulb className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <h3 className="font-outfit font-bold text-2xl">Featured</h3>
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{featuredPost.category}</Badge>
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="font-outfit font-bold text-2xl lg:text-3xl mb-4 text-foreground group-hover:text-cyan transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="font-outfit text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-outfit font-medium text-foreground text-sm">
                        {featuredPost.author}
                      </p>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {featuredPost.date}
                        <Clock className="w-3 h-3 ml-3 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" asChild className="group-hover:border-cyan group-hover:text-cyan">
                  <Link href={`/blog/${featuredPost.id}`}>
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section
        className="py-16 bg-card"
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="font-outfit font-bold text-2xl text-foreground"
            >
              Latest Articles
            </h2>
            <p
              className="font-outfit text-muted-foreground"
            >
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-card hover:-translate-y-2 transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative h-48 bg-linear-to-br from-primary to-cyan">
                  <div className="absolute inset-0 bg-gradient-primary opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="font-outfit font-bold text-sm opacity-80">#{post.id}</div>
                      <div className="font-outfit text-xs opacity-60 mt-1">{post.category}</div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-outfit font-semibold text-lg mb-3 text-foreground group-hover:text-cyan transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-outfit text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {/* Author & Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full group-hover:border-cyan group-hover:text-cyan">
                    <Link href={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        className="py-24 bg-gradient-hero"
      >
        <div className="container mx-auto px-6 text-center">
          <h2
            className="font-outfit font-bold text-4xl md:text-5xl mb-6 text-foreground"
          >
            Stay Updated with BluePrynt Insights
          </h2>
          <p
            className="font-outfit text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Get the latest marketing strategies, case studies, and industry insights 
            delivered straight to your inbox.
          </p>
          <div
            className="max-w-md mx-auto flex gap-4"
          >
            <Input
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button variant="hero">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <p
            className="font-outfit text-sm text-muted-foreground mt-4"
          >
            Join 10,000+ marketers getting weekly insights. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;