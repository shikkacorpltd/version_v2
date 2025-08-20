import { FileText, Download, CheckCircle, Shield, Clock, Users } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

export default function Contract() {
  const contractTypes = [
    {
      title: "Standard Service Agreement",
      description: "Comprehensive service agreement for educational institutions",
      features: [
        "Software licensing terms",
        "Implementation timeline",
        "Support and maintenance",
        "Data security provisions",
        "Payment terms and conditions"
      ],
      duration: "12-36 months",
      icon: FileText
    },
    {
      title: "Enterprise License Agreement",
      description: "Advanced licensing for multi-campus institutions",
      features: [
        "Multi-campus deployment",
        "Custom integrations",
        "Dedicated support team",
        "Advanced security features",
        "Priority updates and features"
      ],
      duration: "24-60 months",
      icon: Shield
    },
    {
      title: "Implementation Contract",
      description: "Professional services for system deployment",
      features: [
        "Project management",
        "Data migration services",
        "Staff training programs",
        "Go-live support",
        "Post-implementation review"
      ],
      duration: "3-12 months",
      icon: Users
    }
  ]

  const contractTerms = [
    {
      category: "Service Level Agreement (SLA)",
      items: [
        "99.9% system uptime guarantee",
        "24/7 technical support availability",
        "Maximum 4-hour response time for critical issues",
        "Monthly performance reporting",
        "Scheduled maintenance windows"
      ]
    },
    {
      category: "Data Protection & Security",
      items: [
        "GDPR and local data protection compliance",
        "End-to-end encryption for all data",
        "Regular security audits and assessments",
        "Secure data backup and recovery",
        "Access control and user management"
      ]
    },
    {
      category: "Payment Terms",
      items: [
        "Flexible payment schedules available",
        "Annual, bi-annual, or monthly billing options",
        "Early payment discounts",
        "Transparent pricing with no hidden fees",
        "Invoice payment terms: Net 30 days"
      ]
    },
    {
      category: "Termination & Renewal",
      items: [
        "30-day notice period for termination",
        "Data export assistance upon termination",
        "Automatic renewal with opt-out option",
        "Pro-rated refunds for unused services",
        "Transition support to alternative systems"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Service Contracts & Agreements
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Transparent, flexible, and comprehensive contract terms designed to protect your institution and ensure successful implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-3 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Sample Contract
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 text-lg">
                Request Custom Terms
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Types Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contract Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the contract type that best fits your institutional needs and requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => {
              const IconComponent = contract.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                      <IconComponent className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{contract.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Clock className="h-4 w-4 mr-1" />
                        {contract.duration}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{contract.description}</p>
                  
                  <div className="space-y-3">
                    {contract.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">
                    <Link to="/contact" className="w-full">
                      Request This Contract
                    </Link>
                  </Button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contract Terms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Key Contract Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our standard contract terms are designed to be fair, transparent, and protective of both parties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {contractTerms.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Compliance Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Legal Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our contracts comply with international and local legal standards to ensure your institution's protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Protection</h3>
              <p className="text-gray-600">
                Full compliance with GDPR, Bangladesh Data Protection Act, and international privacy standards.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Standards</h3>
              <p className="text-gray-600">
                Adherence to educational technology standards and institutional governance requirements.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                ISO 27001 certified processes and quality management systems for service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Contract Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined contract process ensures quick turnaround while maintaining thoroughness.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Discuss your requirements and determine the appropriate contract type."
              },
              {
                step: "2",
                title: "Contract Drafting",
                description: "We prepare a customized contract based on your specific needs."
              },
              {
                step: "3",
                title: "Review & Negotiation",
                description: "Review terms with your legal team and negotiate any modifications."
              },
              {
                step: "4",
                title: "Execution & Delivery",
                description: "Sign the contract and begin implementation according to agreed timeline."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
            Contact our legal and sales team to discuss your contract requirements and begin the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 text-lg"
              onClick={() => {
                // Simulate file download
                const link = document.createElement('a')
                link.href = 'data:text/plain;charset=utf-8,Sample Contract - SchoolxNow Limited\n\nThis is a sample contract document.\n\nFor actual contracts, please contact our sales team.'
                link.download = 'SchoolxNow_Sample_Contract.txt'
                link.click()
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Sample Contract
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-900 px-8 py-3 text-lg">
                Request Custom Terms
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

