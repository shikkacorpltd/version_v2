// pages/get-started.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ArrowRight, Users, BookOpen, Award, TrendingUp, AlertCircle } from 'lucide-react';

export default function GetStartedPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    studentCount: '',
    role: '',
    email: '',
    phone: '',
    challenges: []
  });

  /* ---------- Validation ---------- */
  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.schoolName.trim()) newErrors.schoolName = 'School name is required';
        else if (formData.schoolName.trim().length < 2) newErrors.schoolName = 'At least 2 characters';
        if (!formData.studentCount) newErrors.studentCount = 'Select student count';
        if (!formData.role) newErrors.role = 'Select your role';
        break;
      case 2:
        if (formData.challenges.length === 0) newErrors.challenges = 'Select at least one challenge';
        break;
      case 3:
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
        else if (!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, '')))
          newErrors.phone = 'Invalid phone number';
        break;
      default:
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ---------- Handlers ---------- */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleChallengeToggle = (challenge) => {
    setFormData((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter((c) => c !== challenge)
        : [...prev.challenges, challenge]
    }));
    if (errors.challenges) setErrors((prev) => ({ ...prev, challenges: '' }));
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      setErrors({});
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep(3)) return; // Step 4 is only review
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1000)); // simulate API

    const params = new URLSearchParams({
      subject: 'Demo Request',
      message: `
School: ${formData.schoolName}
Students: ${formData.studentCount}
Role: ${formData.role}
Challenges: ${formData.challenges.join(', ')}
Email: ${formData.email}
Phone: ${formData.phone}
      `.trim()
    });

    router.push(`/contact?${params.toString()}`);
  };

  /* ---------- Render ---------- */
  const ErrorMessage = ({ error }) =>
    error ? (
      <div className="flex items-center mt-1 text-red-600 text-sm">
        <AlertCircle className="w-4 h-4 mr-1" />
        {error}
      </div>
    ) : null;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-center mb-2">Tell us about your school</h2>
            <p className="text-center text-gray-600 mb-6">Help us understand your educational institution</p>

            <label className="block text-sm font-medium">School / Institution Name *</label>
            <input
              name="schoolName"
              value={formData.schoolName}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                errors.schoolName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g. Lincoln High School"
            />
            <ErrorMessage error={errors.schoolName} />

            <label className="block text-sm font-medium mt-4">Number of Students *</label>
            <select
              name="studentCount"
              value={formData.studentCount}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.studentCount ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select range</option>
              <option>1-100</option>
              <option>101-500</option>
              <option>501-1000</option>
              <option>1000+</option>
            </select>
            <ErrorMessage error={errors.studentCount} />

            <label className="block text-sm font-medium mt-4">Your Role *</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.role ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select role</option>
              <option value="principal">Principal/Head</option>
              <option value="admin">Administrator</option>
              <option value="teacher">Teacher</option>
              <option value="it">IT Manager</option>
              <option value="other">Other</option>
            </select>
            <ErrorMessage error={errors.role} />
          </div>
        );

      case 2:
        return (
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-center mb-2">What challenges are you facing?</h2>
            <p className="text-center text-gray-600 mb-6">Select all that apply to your institution *</p>
            {errors.challenges && (
              <div className="text-center text-red-600 mb-2">{errors.challenges}</div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'student-management', label: 'Student Information Management', icon: Users },
                { id: 'academic-tracking', label: 'Academic Performance Tracking', icon: TrendingUp },
                { id: 'communication', label: 'Parent-Teacher Communication', icon: BookOpen },
                { id: 'attendance', label: 'Attendance Management', icon: Award },
                { id: 'fee-management', label: 'Fee Collection & Management', icon: Users },
                { id: 'reporting', label: 'Administrative Reporting', icon: TrendingUp }
              ].map(({ id, label, icon: Icon }) => (
                <div
                  key={id}
                  onClick={() => handleChallengeToggle(id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition ${
                    formData.challenges.includes(id)
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <span className="font-medium">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-center mb-2">Contact Information</h2>
            <p className="text-center text-gray-600 mb-6">How can we reach you for a personalized demo?</p>

            <label className="block text-sm font-medium">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="you@example.com"
            />
            <ErrorMessage error={errors.email} />

            <label className="block text-sm font-medium mt-4">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+1 555 123 4567"
            />
            <ErrorMessage error={errors.phone} />
          </div>
        );

      case 4:
        return (
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-center mb-2">Review Your Information</h2>
            <p className="text-center text-gray-600 mb-6">Please confirm your details before submitting</p>

            <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-sm">
              <div>
                <span className="font-semibold">School:</span> {formData.schoolName}
              </div>
              <div>
                <span className="font-semibold">Students:</span> {formData.studentCount}
              </div>
              <div>
                <span className="font-semibold">Your Role:</span> {formData.role}
              </div>
              <div>
                <span className="font-semibold">Challenges:</span> {formData.challenges.join(', ') || 'None'}
              </div>
              <div>
                <span className="font-semibold">Email:</span> {formData.email}
              </div>
              <div>
                <span className="font-semibold">Phone:</span> {formData.phone}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Head>
        <title>Get Started | YourPlatform</title>
        <meta name="description" content="Tell us about your school and get a personalized demo." />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    step <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            {renderStep()}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-lg font-medium ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-green-600 text-white hover:bg-green-700'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit & Get Demo'}
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}