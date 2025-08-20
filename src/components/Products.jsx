import { Check, Star, ArrowRight, Shield, Zap, Globe, Database, Users, GraduationCap, Calendar, BookOpen, BarChart3, CreditCard, Brain, Smartphone, Cloud, Lock, MessageSquare, Camera, Award, Heart, Mic, Blocks, CreditCard as Payment, Bus, Home, Package, Laptop, Globe2, UserCheck, AlertTriangle, Settings, Languages, ShieldCheck, ChevronRight, Play, Sparkles, TrendingUp, Target } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

// Analytics tracking function
const trackEvent = (eventName, properties = {}) => {
  // Google Analytics 4 (gtag)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'User Interaction',
      event_label: properties.label || '',
      page_location: window.location.href,
      page_title: document.title,
      ...properties
    })
  }
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, properties)
  }
  
  // Custom analytics or other tracking services
  console.log('Analytics Event:', eventName, properties)
}

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [hoveredModule, setHoveredModule] = useState(null)

  const openCalendlyPopup = () => {
    // Track demo scheduling attempt
    trackEvent('schedule_demo_clicked', {
      event_category: 'Lead Generation',
      event_label: 'Calendly Demo Popup',
      source: 'products_page',
      value: 1
    })
    
    // Open contact page for demo scheduling
    window.location.href = '/contact?subject=demo&message=I would like to schedule a product demo.'
  }

  const coreModules = [
    {
      name: "Student Information System (SIS)",
      icon: <Users className="h-6 w-6" />,
      description: "Comprehensive student data management with academic records, enrollment, and lifecycle tracking.",
      category: "Core Management",
      features: ["Student Profiles", "Academic Records", "Enrollment Management", "Progress Tracking"],
      color: "blue"
    },
    {
      name: "Online Admission",
      icon: <Globe className="h-6 w-6" />,
      description: "Digital admission process with online applications, document verification, and automated workflows.",
      category: "Core Management",
      features: ["Online Applications", "Document Verification", "Automated Workflows", "Payment Integration"],
      color: "blue"
    },
    {
      name: "Attendance Management",
      icon: <UserCheck className="h-6 w-6" />,
      description: "Real-time attendance tracking with biometric integration and automated reporting.",
      category: "Core Management",
      features: ["Biometric Integration", "Real-time Tracking", "Automated Reports", "Parent Notifications"],
      color: "blue"
    },
    {
      name: "Fee Management",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Complete fee collection system with online payments, installments, and financial tracking.",
      category: "Financial",
      features: ["Online Payments", "Installment Plans", "Financial Reports", "Receipt Generation"],
      color: "green"
    },
    {
      name: "Exam & Result Management",
      icon: <Award className="h-6 w-6" />,
      description: "Digital examination system with result processing, grade calculation, and transcript generation.",
      category: "Academic",
      features: ["Digital Exams", "Grade Calculation", "Transcript Generation", "Result Analytics"],
      color: "purple"
    },
    {
      name: "Class Scheduling",
      icon: <Calendar className="h-6 w-6" />,
      description: "Intelligent timetable management with conflict resolution and resource optimization.",
      category: "Academic",
      features: ["Smart Scheduling", "Conflict Resolution", "Resource Management", "Schedule Optimization"],
      color: "purple"
    }
  ]

  const communicationModules = [
    {
      name: "Parent/Teacher Communication",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "Integrated messaging platform for seamless stakeholder communication.",
      category: "Communication",
      features: ["Real-time Messaging", "Group Communications", "File Sharing", "Video Calls"],
      color: "orange"
    },
    {
      name: "SMS Gateway Integration",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Automated SMS notifications for attendance, fees, announcements, and alerts.",
      category: "Communication",
      features: ["Automated SMS", "Bulk Messaging", "Custom Templates", "Delivery Reports"],
      color: "orange"
    },
    {
      name: "Mobile App",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Native mobile applications for students, parents, and faculty with offline capabilities.",
      category: "Communication",
      features: ["Native Apps", "Offline Mode", "Push Notifications", "Multi-platform"],
      color: "orange"
    },
    {
      name: "Website/Portal Builder",
      icon: <Globe2 className="h-6 w-6" />,
      description: "Dynamic website builder with customizable templates and content management.",
      category: "Communication",
      features: ["Drag & Drop Builder", "Custom Templates", "SEO Optimization", "Content Management"],
      color: "orange"
    }
  ]

  const analyticsModules = [
    {
      name: "Reporting & Analytics",
      icon: <BarChart3 className="h-6 w-6" />,
      description: "Advanced analytics dashboard with real-time insights and performance metrics.",
      category: "Analytics",
      features: ["Real-time Dashboards", "Performance Metrics", "Custom Reports", "Data Visualization"],
      color: "indigo"
    },
    {
      name: "Custom Report Builder",
      icon: <Settings className="h-6 w-6" />,
      description: "Drag-and-drop report builder with customizable templates and automated scheduling.",
      category: "Analytics",
      features: ["Drag & Drop Interface", "Custom Templates", "Automated Scheduling", "Export Options"],
      color: "indigo"
    },
    {
      name: "AI-Based Predictive Analytics",
      icon: <Brain className="h-6 w-6" />,
      description: "Machine learning algorithms for student performance prediction and risk assessment.",
      category: "AI & Analytics",
      features: ["ML Algorithms", "Performance Prediction", "Risk Assessment", "Early Intervention"],
      color: "red"
    },
    {
      name: "Behavior Tracking",
      icon: <UserCheck className="h-6 w-6" />,
      description: "Student behavior monitoring with intervention alerts and progress tracking.",
      category: "Analytics",
      features: ["Behavior Monitoring", "Intervention Alerts", "Progress Tracking", "Behavioral Reports"],
      color: "indigo"
    }
  ]

  const managementModules = [
    {
      name: "Library Management",
      icon: <BookOpen className="h-6 w-6" />,
      description: "Digital library system with catalog management, book tracking, and online resources.",
      category: "Operations",
      features: ["Digital Catalog", "Book Tracking", "Online Resources", "Member Management"],
      color: "teal"
    },
    {
      name: "HR & Payroll",
      icon: <Users className="h-6 w-6" />,
      description: "Complete human resource management with payroll processing and employee records.",
      category: "Operations",
      features: ["Employee Records", "Payroll Processing", "Leave Management", "Performance Reviews"],
      color: "teal"
    },
    {
      name: "Transport Tracking",
      icon: <Bus className="h-6 w-6" />,
      description: "GPS-enabled transport management with route optimization and safety monitoring.",
      category: "Operations",
      features: ["GPS Tracking", "Route Optimization", "Safety Monitoring", "Parent Notifications"],
      color: "teal"
    },
    {
      name: "Hostel Management",
      icon: <Home className="h-6 w-6" />,
      description: "Comprehensive hostel administration with room allocation and facility management.",
      category: "Operations",
      features: ["Room Allocation", "Facility Management", "Visitor Management", "Maintenance Tracking"],
      color: "teal"
    },
    {
      name: "Inventory/Assets",
      icon: <Package className="h-6 w-6" />,
      description: "Asset tracking and inventory management with maintenance scheduling.",
      category: "Operations",
      features: ["Asset Tracking", "Inventory Management", "Maintenance Scheduling", "Depreciation Tracking"],
      color: "teal"
    },
    {
      name: "Multi-Campus Management",
      icon: <Globe className="h-6 w-6" />,
      description: "Centralized management system for multiple campus locations and branches.",
      category: "Operations",
      features: ["Centralized Control", "Multi-location Support", "Branch Management", "Unified Reporting"],
      color: "teal"
    }
  ]

  const learningModules = [
    {
      name: "LMS / E-Learning",
      icon: <Laptop className="h-6 w-6" />,
      description: "Comprehensive learning management system with course delivery and assessment tools.",
      category: "Learning",
      features: ["Course Management", "Assessment Tools", "Progress Tracking", "Interactive Content"],
      color: "pink"
    },
    {
      name: "Digital Exam Proctoring",
      icon: <Camera className="h-6 w-6" />,
      description: "AI-powered online exam monitoring with fraud detection and security features.",
      category: "Learning",
      features: ["AI Monitoring", "Fraud Detection", "Secure Browser", "Identity Verification"],
      color: "pink"
    },
    {
      name: "Gamified Learning",
      icon: <Star className="h-6 w-6" />,
      description: "Interactive learning platform with badges, leaderboards, and achievement systems.",
      category: "Learning",
      features: ["Achievement Badges", "Leaderboards", "Progress Rewards", "Interactive Challenges"],
      color: "pink"
    },
    {
      name: "Lesson Planning Module",
      icon: <Calendar className="h-6 w-6" />,
      description: "Collaborative lesson planning tools with curriculum mapping and resource sharing.",
      category: "Learning",
      features: ["Curriculum Mapping", "Resource Sharing", "Collaborative Planning", "Standards Alignment"],
      color: "pink"
    }
  ]

  const advancedModules = [
    {
      name: "AI Chatbot Assistant",
      icon: <Brain className="h-6 w-6" />,
      description: "Intelligent virtual assistant for student queries, support, and guidance.",
      category: "AI & Innovation",
      features: ["Natural Language Processing", "24/7 Support", "Multi-language", "Learning Assistance"],
      color: "red"
    },
    {
      name: "Voice Assistant Integration",
      icon: <Mic className="h-6 w-6" />,
      description: "Voice-enabled interactions for accessibility and hands-free operations.",
      category: "AI & Innovation",
      features: ["Voice Commands", "Accessibility Features", "Hands-free Operation", "Multi-language Support"],
      color: "red"
    },
    {
      name: "Blockchain-Based Certificates",
      icon: <Blocks className="h-6 w-6" />,
      description: "Tamper-proof digital certificates with blockchain verification technology.",
      category: "AI & Innovation",
      features: ["Blockchain Security", "Digital Verification", "Tamper-proof", "Global Recognition"],
      color: "red"
    },
    {
      name: "Dynamic Smart ID Cards",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Smart ID cards with NFC/RFID technology for access control and payments.",
      category: "AI & Innovation",
      features: ["NFC/RFID Technology", "Access Control", "Payment Integration", "Real-time Updates"],
      color: "red"
    }
  ]

  const specializedModules = [
    {
      name: "Alumni & CRM",
      icon: <Users className="h-6 w-6" />,
      description: "Alumni network management with engagement tracking and fundraising tools.",
      category: "Specialized",
      features: ["Alumni Network", "Engagement Tracking", "Fundraising Tools", "Event Management"],
      color: "yellow"
    },
    {
      name: "Health Records",
      icon: <Heart className="h-6 w-6" />,
      description: "Student health management with medical records and wellness tracking.",
      category: "Specialized",
      features: ["Medical Records", "Wellness Tracking", "Health Alerts", "Vaccination Records"],
      color: "yellow"
    },
    {
      name: "Counseling & Mental Health Logs",
      icon: <Heart className="h-6 w-6" />,
      description: "Mental health support system with counseling session tracking and resources.",
      category: "Specialized",
      features: ["Session Tracking", "Mental Health Resources", "Counselor Management", "Progress Monitoring"],
      color: "yellow"
    },
    {
      name: "CO-Curricular Management",
      icon: <Star className="h-6 w-6" />,
      description: "Extra-curricular activity management with event planning and participation tracking.",
      category: "Specialized",
      features: ["Activity Management", "Event Planning", "Participation Tracking", "Achievement Records"],
      color: "yellow"
    },
    {
      name: "Parent Fee Loan/Installment Integration",
      icon: <Payment className="h-6 w-6" />,
      description: "Flexible payment solutions with loan integration and installment planning.",
      category: "Specialized",
      features: ["Loan Integration", "Installment Plans", "Credit Assessment", "Payment Flexibility"],
      color: "yellow"
    },
    {
      name: "Incident & Emergency Response System",
      icon: <AlertTriangle className="h-6 w-6" />,
      description: "Emergency management system with incident reporting and response protocols.",
      category: "Specialized",
      features: ["Incident Reporting", "Emergency Protocols", "Alert System", "Response Tracking"],
      color: "yellow"
    }
  ]

  const enterpriseModules = [
    {
      name: "Role-Based Access Control",
      icon: <Lock className="h-6 w-6" />,
      description: "Granular permission system with role management and security controls.",
      category: "Enterprise",
      features: ["Granular Permissions", "Role Management", "Security Controls", "Audit Trails"],
      color: "gray"
    },
    {
      name: "Custom API Marketplace",
      icon: <Cloud className="h-6 w-6" />,
      description: "API ecosystem for third-party integrations and custom development.",
      category: "Enterprise",
      features: ["API Ecosystem", "Third-party Integrations", "Custom Development", "Developer Tools"],
      color: "gray"
    },
    {
      name: "Language Localization",
      icon: <Languages className="h-6 w-6" />,
      description: "Multi-language support with regional customization and cultural adaptation.",
      category: "Enterprise",
      features: ["Multi-language Support", "Regional Customization", "Cultural Adaptation", "RTL Support"],
      color: "gray"
    },
    {
      name: "Data Privacy & Consent Management",
      icon: <ShieldCheck className="h-6 w-6" />,
      description: "GDPR-compliant data management with consent tracking and privacy controls.",
      category: "Enterprise",
      features: ["GDPR Compliance", "Consent Tracking", "Privacy Controls", "Data Anonymization"],
      color: "gray"
    }
  ]

  const allModules = [
    ...coreModules,
    ...communicationModules,
    ...analyticsModules,
    ...managementModules,
    ...learningModules,
    ...advancedModules,
    ...specializedModules,
    ...enterpriseModules
  ]

  const moduleCategories = [
    { name: "All Modules", key: "all", count: allModules.length, color: "blue" },
    { name: "Core Management", key: "core", modules: coreModules, color: "blue" },
    { name: "Communication", key: "communication", modules: communicationModules, color: "orange" },
    { name: "Analytics & AI", key: "analytics", modules: analyticsModules, color: "indigo" },
    { name: "Operations", key: "operations", modules: managementModules, color: "teal" },
    { name: "Learning", key: "learning", modules: learningModules, color: "pink" },
    { name: "AI & Innovation", key: "innovation", modules: advancedModules, color: "red" },
    { name: "Specialized", key: "specialized", modules: specializedModules, color: "yellow" },
    { name: "Enterprise", key: "enterprise", modules: enterpriseModules, color: "gray" }
  ]

  const getFilteredModules = () => {
    if (activeCategory === 'all') return allModules
    const category = moduleCategories.find(cat => cat.key === activeCategory)
    return category?.modules || []
  }

  const solutions = [
    {
      name: "SchoolxNow Complete",
      category: "All-in-One Platform",
      price: "Contact for Pricing",
      description: "Comprehensive school management platform with all 37 modules included for complete institutional transformation.",
      features: [
        "All 37 Solution Modules Included",
        "Multi-Campus Management",
        "AI-Powered Analytics & Insights",
        "Mobile Apps for All Stakeholders",
        "24/7 Premium Support",
        "Custom Integrations & API Access"
      ],
      icon: <Globe className="h-10 w-10 text-blue-700" />,
      popular: true,
      gradient: "from-blue-600 to-purple-600"
    },
    {
      name: "SchoolxNow Essential",
      category: "Core Platform",
      price: "Contact for Pricing",
      description: "Essential school management modules for small to medium institutions starting their digital journey.",
      features: [
        "Student Information System",
        "Attendance & Fee Management",
        "Exam & Result Processing",
        "Parent Communication Portal",
        "Basic Reporting & Analytics",
        "Standard Support Package"
      ],
      icon: <BookOpen className="h-10 w-10 text-green-700" />,
      popular: false,
      gradient: "from-green-600 to-teal-600"
    },
    {
      name: "SchoolxNow Advanced",
      category: "Enhanced Platform",
      price: "Contact for Pricing",
      description: "Advanced platform with AI features, learning management, and specialized modules for growing institutions.",
      features: [
        "20+ Core & Advanced Modules",
        "LMS & E-Learning Platform",
        "AI-Based Predictive Analytics",
        "Transport & Hostel Management",
        "Custom Report Builder",
        "Priority Support & Training"
      ],
      icon: <Brain className="h-10 w-10 text-purple-700" />,
      popular: false,
      gradient: "from-purple-600 to-pink-600"
    },
    {
      name: "SchoolxNow Enterprise",
      category: "Enterprise Solution",
      price: "Contact for Pricing",
      description: "Enterprise-grade solution with blockchain certificates, voice assistants, and complete customization.",
      features: [
        "All Premium & AI Modules",
        "Blockchain-Based Certificates",
        "Voice Assistant Integration",
        "Custom API Development",
        "White-Label Solutions",
        "Dedicated Account Manager"
      ],
      icon: <Shield className="h-10 w-10 text-red-700" />,
      popular: false,
      gradient: "from-red-600 to-orange-600"
    }
  ]

  const stats = [
    { number: "37+", label: "Solution Modules", icon: <Blocks className="h-8 w-8" /> },
    { number: "8", label: "Categories", icon: <Target className="h-8 w-8" /> },
    { number: "200+", label: "Institutions", icon: <GraduationCap className="h-8 w-8" /> },
    { number: "99.9%", label: "Uptime", icon: <TrendingUp className="h-8 w-8" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            37+ Integrated Solution Modules
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Global School
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Transform every aspect of your institution with our comprehensive suite of educational technology modules designed for academic excellence and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-emerald-900 hover:bg-emerald-50 text-lg px-8 py-4 h-auto font-semibold"
              onClick={() => {
                trackEvent('hero_schedule_demo_clicked', {
                  event_category: 'Lead Generation',
                  event_label: 'Hero Section - Schedule Demo',
                  button_location: 'hero_primary',
                  value: 1
                })
                openCalendlyPopup()
              }}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto text-white border-white/30 hover:bg-white/10 backdrop-blur-sm font-semibold"
              onClick={() => {
                trackEvent('hero_explore_solutions_clicked', {
                  event_category: 'Navigation',
                  event_label: 'Hero Section - Explore Solutions',
                  button_location: 'hero_secondary',
                  scroll_target: 'solution_modules'
                })
                // Scroll to modules section
                const modulesSection = document.querySelector('#solution-modules');
                if (modulesSection) {
                  modulesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module Categories Filter */}
      <section id="solution-modules" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solution Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of educational technology modules organized by category
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {moduleCategories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 shadow-sm'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-75">
                  ({category.key === 'all' ? allModules.length : category.modules?.length || 0})
                </span>
              </button>
            ))}
          </div>

          {/* Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getFilteredModules().map((module, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200"
                onMouseEnter={() => setHoveredModule(index)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${
                      module.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                      module.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                      module.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                      module.color === 'orange' ? 'bg-gradient-to-br from-orange-500 to-orange-600' :
                      module.color === 'indigo' ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' :
                      module.color === 'red' ? 'bg-gradient-to-br from-red-500 to-red-600' :
                      module.color === 'teal' ? 'bg-gradient-to-br from-teal-500 to-teal-600' :
                      module.color === 'pink' ? 'bg-gradient-to-br from-pink-500 to-pink-600' :
                      module.color === 'yellow' ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' :
                      'bg-gradient-to-br from-gray-500 to-gray-600'
                    }`}>
                      {module.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {module.name}
                      </h3>
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        module.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                        module.color === 'green' ? 'bg-green-100 text-green-700' :
                        module.color === 'purple' ? 'bg-purple-100 text-purple-700' :
                        module.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                        module.color === 'indigo' ? 'bg-indigo-100 text-indigo-700' :
                        module.color === 'red' ? 'bg-red-100 text-red-700' :
                        module.color === 'teal' ? 'bg-teal-100 text-teal-700' :
                        module.color === 'pink' ? 'bg-pink-100 text-pink-700' :
                        module.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {module.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="space-y-2">
                    {module.features.slice(0, hoveredModule === index ? 4 : 2).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {module.features.length > 2 && hoveredModule !== index && (
                      <div className="text-sm text-blue-600 font-medium">
                        +{module.features.length - 2} more features
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button variant="outline" className="w-full group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Packages */}
      <section id="solution-packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solution Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package tailored to your institution's needs and growth stage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group-hover:border-transparent transition-all duration-500">
                  {solution.popular && (
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      <Star className="inline h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${solution.gradient} rounded-2xl flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{solution.name}</h3>
                        <p className="text-lg font-medium text-gray-600">{solution.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {solution.description}
                    </p>
                    
                    <div className="mb-8">
                      <div className="text-3xl font-bold text-gray-900 mb-2">{solution.price}</div>
                      <p className="text-gray-500">Custom enterprise pricing available</p>
                    </div>

                    <ul className="space-y-4 mb-10">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-4 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/get-started" className="flex-1">
                        <Button 
                          className={`w-full bg-gradient-to-r ${solution.gradient} hover:shadow-lg py-3 font-semibold`}
                          onClick={(e) => {
                            trackEvent('solution_package_demo_clicked', {
                              event_category: 'Lead Generation',
                              event_label: `Package Demo - ${solution.name}`,
                              package_name: solution.name,
                              package_category: solution.category,
                              package_popular: solution.popular,
                              value: solution.popular ? 2 : 1
                            })
                            e.preventDefault()
                            openCalendlyPopup()
                          }}
                        >
                          Schedule Demo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        className="flex-1 py-3 hover:bg-gray-50"
                        onClick={() => {
                          trackEvent('solution_package_learn_more_clicked', {
                            event_category: 'Product Interest',
                            event_label: `Package Learn More - ${solution.name}`,
                            package_name: solution.name,
                            package_category: solution.category,
                            package_popular: solution.popular
                          })
                        }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures successful deployment and seamless adoption across your institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Planning",
                description: "Comprehensive analysis of institutional requirements and module selection planning.",
                icon: <Target className="h-8 w-8" />
              },
              {
                step: "2",
                title: "Configuration & Setup",
                description: "Module configuration, data migration, and integration with existing infrastructure.",
                icon: <Settings className="h-8 w-8" />
              },
              {
                step: "3",
                title: "Training & Adoption",
                description: "Comprehensive training programs for all modules and user roles across the institution.",
                icon: <GraduationCap className="h-8 w-8" />
              },
              {
                step: "4",
                title: "Go-Live & Support",
                description: "Smooth transition to live environment with ongoing support and continuous optimization.",
                icon: <Zap className="h-8 w-8" />
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-2xl font-bold text-white">{process.step}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {process.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Institution?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            Schedule a consultation with our education technology experts to discuss your specific requirements 
            and explore how our 37+ solution modules can drive your institutional success.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/get-started">
              <Button 
                size="lg" 
                className="bg-white text-emerald-900 hover:bg-emerald-50 text-lg px-10 py-4 h-auto font-semibold"
                onClick={() => {
                  trackEvent('cta_schedule_demo_clicked', {
                    event_category: 'Lead Generation',
                    event_label: 'CTA Section - Schedule Demo',
                    button_location: 'cta_primary',
                    value: 2
                  })
                  openCalendlyPopup()
                }}
              >
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-4 h-auto text-white border-white/30 hover:bg-white/10 backdrop-blur-sm font-semibold"
              onClick={() => {
                trackEvent('cta_custom_demo_clicked', {
                  event_category: 'Product Interest',
                  event_label: 'CTA Section - Request Custom Demo',
                  button_location: 'cta_secondary',
                  external_link: 'https://www.shikkacorp.com'
                })
                // Open demo video in new tab or show demo modal
                const demoVideoUrl = 'https://www.shikkacorp.com'; // Actual product demo
                window.open(demoVideoUrl, '_blank');
              }}
            >
                Request Custom Demo
                <Play className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

