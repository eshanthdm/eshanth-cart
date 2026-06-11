import React, { useState, useEffect } from 'react';
import { 
  FaRocket, FaLaptopCode, FaChalkboardTeacher, FaUserGraduate, FaArrowRight, 
  FaPlayCircle, FaQuoteLeft, FaCode, FaDatabase, FaBrain, FaCloud, 
  FaShieldAlt, FaRobot, FaClock, FaAward, FaVideo, FaFileAlt, FaCalendarAlt, 
  FaUser, FaSearch, FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaBars, FaTimes,
  FaHome, FaInfoCircle, FaBookOpen, FaBlog, FaEnvelopeOpen, FaBuilding,
  FaGraduationCap, FaHandshake, FaChartLine, FaRegLightbulb, FaStar,
  FaQuoteRight, FaBullseye, FaHeart, FaBriefcase, FaGlobe, FaServer,
  FaUniversity, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaEdit, FaSave,
  FaTimesCircle, FaCheckCircle, FaSpinner, FaImage, FaPlug, FaCamera,
  FaTrash, FaUpload, FaCheck, FaAngleDown, FaAngleUp, FaLaptop
} from 'react-icons/fa';

const SkillGridWebsite = () => {
  const [activePage, setActivePage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCourse, setFilterCourse] = useState('all');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    bio: '',
    profilePicture: ''
  });
  const [editProfile, setEditProfile] = useState({
    name: '',
    phone: '',
    course: '',
    bio: ''
  });
  const [profilePicturePreview, setProfilePicturePreview] = useState('');

  // Carousel states
  const [heroCarouselIndex, setHeroCarouselIndex] = useState(0);
  const [aboutCarouselIndex, setAboutCarouselIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Load saved user data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('skillgrid_user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUserProfile(userData);
      setIsLoggedIn(true);
    }
  }, []);

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [activePage]);

  // Auto-slide carousels
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroCarouselIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, []);

  useEffect(() => {
    const aboutInterval = setInterval(() => {
      setAboutCarouselIndex((prev) => (prev + 1) % aboutSlides.length);
    }, 6000);
    return () => clearInterval(aboutInterval);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(testimonialInterval);
  }, []);

  // Hero Carousel Slides
  const heroSlides = [
    {
      video: "https://assets.mixkit.co/videos/preview/mixkit-student-studying-on-laptop-39883-large.mp4",
      title: "Master Tech Skills",
      subtitle: "Join India's most innovative EdTech platform"
    },
    {
      video: "https://assets.mixkit.co/videos/preview/mixkit-programming-code-on-laptop-27583-large.mp4",
      title: "Learn from Experts",
      subtitle: "Industry professionals with real-world experience"
    },
    {
      video: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-technology-interface-3116-large.mp4",
      title: "Build Real Projects",
      subtitle: "Portfolio-ready projects that impress employers"
    }
  ];

  // About Carousel Slides
  const aboutSlides = [
    {
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-team-of-developers-working-on-project-32825-large.mp4",
      title: "Our Journey",
      description: "Founded in Bangalore with a vision to transform tech education across India"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      title: "Our Modern Campus",
      description: "State-of-the-art learning facilities in the heart of Electronic City, Bangalore"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
      title: "Our Community",
      description: "50,000+ strong community of tech enthusiasts learning together"
    },
    {
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-students-working-together-on-laptops-39882-large.mp4",
      title: "Collaborative Learning",
      description: "Group projects and peer-to-peer learning environment"
    },
    {
      type: "image",
      url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800",
      title: "Graduation Day",
      description: "Celebrating success stories of our talented graduates"
    }
  ];

  // Testimonials Data
  const testimonials = [
    { name: "Priya Sharma", role: "Software Engineer at Microsoft", quote: "SkillGrid transformed my career. The instructors are amazing! The hands-on projects gave me the confidence to crack top company interviews.", rating: 5, image: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Rahul Kumar", role: "Data Scientist at Flipkart", quote: "Best decision I made for my career. Got placed within 3 months of completing the course. The mentorship program is outstanding!", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Ananya Reddy", role: "Full Stack Developer at Razorpay", quote: "Practical approach and industry projects made all the difference. The career support team helped me land my dream job.", rating: 5, image: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Vikram Singh", role: "AI Engineer at Google", quote: "The AI curriculum is cutting-edge and constantly updated. I'm now working on exciting projects at Google thanks to SkillGrid.", rating: 5, image: "https://randomuser.me/api/portraits/men/45.jpg" }
  ];

  // Courses Data
  const courses = [
    { id: 1, title: "Full Stack Development", category: "development", icon: <FaCode />, duration: "6 months", students: "15,000+", level: "Beginner to Advanced", color: "#ff6b35", image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400" },
    { id: 2, title: "Data Science & AI", category: "data", icon: <FaDatabase />, duration: "8 months", students: "12,000+", level: "Intermediate", color: "#ff8c42", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
    { id: 3, title: "Cloud Computing", category: "cloud", icon: <FaCloud />, duration: "4 months", students: "8,000+", level: "Intermediate", color: "#ff9f4a", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400" },
    { id: 4, title: "Cybersecurity", category: "security", icon: <FaShieldAlt />, duration: "5 months", students: "6,000+", level: "Advanced", color: "#ff6b35", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400" },
    { id: 5, title: "AI & Machine Learning", category: "ai", icon: <FaRobot />, duration: "7 months", students: "10,000+", level: "Advanced", color: "#ff8c42", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400" },
    { id: 6, title: "DevOps Engineering", category: "development", icon: <FaCode />, duration: "4 months", students: "5,000+", level: "Intermediate", color: "#ff9f4a", image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400" },
  ];

  // Blog Data
  const blogs = [
    { id: 1, title: "Top 10 AI Trends in 2025", excerpt: "Discover the latest AI innovations shaping the tech industry in 2025 and beyond...", author: "Dr. Priya Sharma", date: "Mar 15, 2025", category: "AI", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400" },
    { id: 2, title: "How to Crack FAANG Interviews", excerpt: "Proven strategies from engineers who made it to top tech companies like Google, Amazon...", author: "Rahul Verma", date: "Mar 12, 2025", category: "Career", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400" },
    { id: 3, title: "Full Stack Roadmap 2025", excerpt: "Complete guide to becoming a full stack developer with the latest technologies...", author: "Anjali Nair", date: "Mar 10, 2025", category: "Development", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400" },
    { id: 4, title: "Data Science vs AI", excerpt: "Understanding the differences and career paths in data science and artificial intelligence...", author: "Vikram Singh", date: "Mar 8, 2025", category: "Data", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400" },
    { id: 5, title: "Remote Work Success Tips", excerpt: "How to thrive in a remote-first work environment and stay productive...", author: "Neha Gupta", date: "Mar 5, 2025", category: "Career", image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=400" },
    { id: 6, title: "Cloud Certifications Guide", excerpt: "Which cloud certification is right for your career path? AWS, Azure, or GCP?...", author: "Akash Reddy", date: "Mar 1, 2025", category: "Cloud", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400" },
  ];

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginEmail && loginPassword) {
      const userData = {
        name: loginEmail.split('@')[0],
        email: loginEmail,
        phone: '',
        course: '',
        bio: '',
        profilePicture: ''
      };
      setUserProfile(userData);
      localStorage.setItem('skillgrid_user', JSON.stringify(userData));
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setLoginEmail('');
      setLoginPassword('');
      alert('Login successful! Welcome to SkillGrid!');
    } else {
      alert('Please enter email and password');
    }
  };

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (signupName && signupEmail && signupPassword) {
      const userData = {
        name: signupName,
        email: signupEmail,
        phone: '',
        course: '',
        bio: '',
        profilePicture: ''
      };
      setUserProfile(userData);
      localStorage.setItem('skillgrid_user', JSON.stringify(userData));
      setIsLoggedIn(true);
      setShowSignupModal(false);
      setSignupName('');
      setSignupEmail('');
      setSignupPassword('');
      alert('Account created successfully! Welcome to SkillGrid!');
    } else {
      alert('Please fill all fields');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('skillgrid_user');
    setUserProfile({ name: '', email: '', phone: '', course: '', bio: '', profilePicture: '' });
    alert('Logged out successfully!');
  };

  // Handle Profile Picture Upload
  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setProfilePicturePreview(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  // Save Profile Picture
  const saveProfilePicture = () => {
    if (profilePicturePreview) {
      const updatedProfile = { ...userProfile, profilePicture: profilePicturePreview };
      setUserProfile(updatedProfile);
      localStorage.setItem('skillgrid_user', JSON.stringify(updatedProfile));
      setProfilePicturePreview('');
      alert('Profile picture updated!');
    }
  };

  // Open Profile Modal
  const openProfileModal = () => {
    setEditProfile({
      name: userProfile.name,
      phone: userProfile.phone,
      course: userProfile.course,
      bio: userProfile.bio
    });
    setShowProfileModal(true);
  };

  // Save Profile
  const saveProfile = () => {
    const updatedProfile = {
      ...userProfile,
      name: editProfile.name,
      phone: editProfile.phone,
      course: editProfile.course,
      bio: editProfile.bio
    };
    setUserProfile(updatedProfile);
    localStorage.setItem('skillgrid_user', JSON.stringify(updatedProfile));
    setShowProfileModal(false);
    alert('Profile updated successfully!');
  };

  const filteredCourses = filterCourse === 'all' ? courses : courses.filter(c => c.category === filterCourse);
  const filteredBlogs = blogs.filter(blog => 
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Styles
  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: '#ffffff',
      color: '#1e2a3a',
      lineHeight: 1.5,
    },
    navbar: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
      padding: '16px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      cursor: 'pointer',
    },
    logoIcon: {
      background: 'linear-gradient(135deg, #ff6b35 0%, #ff9f4a 100%)',
      width: '45px',
      height: '45px',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.6rem',
      color: '#fff',
      boxShadow: '0 4px 10px rgba(255,107,53,0.3)',
    },
    logoText: {
      fontSize: '1.8rem',
      fontWeight: '800',
      background: 'linear-gradient(135deg, #1e3a5f 0%, #ff6b35 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      letterSpacing: '-0.5px',
    },
    navLinks: {
      display: 'flex',
      gap: '32px',
      alignItems: 'center',
    },
    navLink: {
      cursor: 'pointer',
      fontWeight: '500',
      transition: 'color 0.3s',
      color: '#1e2a3a',
    },
    ctaNav: {
      backgroundColor: '#ff6b35',
      color: '#fff',
      padding: '8px 20px',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    userAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#ff6b35',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      cursor: 'pointer',
      overflow: 'hidden',
    },
    userAvatarImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    userName: {
      fontWeight: '600',
      color: '#ff6b35',
      cursor: 'pointer',
    },
    iconBtn: {
      background: 'none',
      border: 'none',
      fontSize: '1.2rem',
      cursor: 'pointer',
      color: '#1e3a5f',
    },
    menuIcon: {
      display: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    // Modal Styles
    modalOverlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal: {
      backgroundColor: '#fff',
      borderRadius: '24px',
      padding: '40px',
      maxWidth: '500px',
      width: '90%',
      position: 'relative',
      maxHeight: '90vh',
      overflowY: 'auto',
    },
    modalTitle: {
      fontSize: '1.8rem',
      color: '#1e3a5f',
      marginBottom: '20px',
      textAlign: 'center',
    },
    modalInput: {
      width: '100%',
      padding: '12px 16px',
      marginBottom: '15px',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      transition: 'border-color 0.3s',
    },
    modalBtn: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#ff6b35',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    closeModal: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      fontSize: '1.2rem',
      cursor: 'pointer',
      color: '#4a5568',
    },
    // Profile Picture Upload
    profilePictureSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '20px',
    },
    profilePicturePreview: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '10px',
      border: '3px solid #ff6b35',
    },
    uploadLabel: {
      backgroundColor: '#f0f0f0',
      padding: '8px 16px',
      borderRadius: '20px',
      cursor: 'pointer',
      fontSize: '0.85rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
    },
    hero: {
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 5% 60px',
      background: 'linear-gradient(135deg, #fff 0%, #fff5eb 100%)',
      flexWrap: 'wrap',
    },
    heroContent: {
      flex: 1,
      minWidth: '280px',
      zIndex: 2,
    },
    heroBadge: {
      display: 'inline-block',
      background: 'linear-gradient(135deg, #ff6b35 0%, #ff9f4a 100%)',
      color: '#fff',
      padding: '6px 16px',
      borderRadius: '50px',
      fontSize: '0.85rem',
      fontWeight: '600',
      marginBottom: '24px',
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: '#1e3a5f',
      marginBottom: '20px',
      lineHeight: 1.2,
    },
    heroHighlight: {
      background: 'linear-gradient(135deg, #ff6b35 0%, #ff9f4a 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
    },
    heroDesc: {
      fontSize: '1.1rem',
      color: '#4a5568',
      marginBottom: '32px',
      lineHeight: 1.6,
    },
    btnPrimary: {
      background: 'linear-gradient(135deg, #ff6b35 0%, #ff9f4a 100%)',
      color: '#fff',
      border: 'none',
      padding: '14px 32px',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
    },
    btnOutline: {
      backgroundColor: 'transparent',
      color: '#1e3a5f',
      border: '2px solid #ff6b35',
      padding: '12px 28px',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      marginLeft: '16px',
      transition: 'all 0.3s ease',
    },
    heroCarousel: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      minWidth: '280px',
    },
    carouselWrapper: {
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      maxWidth: '500px',
      width: '100%',
      position: 'relative',
    },
    carouselMedia: {
      width: '100%',
      height: 'auto',
      display: 'block',
    },
    carouselDots: {
      position: 'absolute',
      bottom: '15px',
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: '10px',
      zIndex: 10,
    },
    dot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: 'rgba(255,255,255,0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    activeDot: {
      backgroundColor: '#ff6b35',
      width: '25px',
      borderRadius: '5px',
    },
    section: {
      padding: '80px 5%',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    sectionTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#1e3a5f',
      textAlign: 'center',
      marginBottom: '16px',
    },
    sectionSubtitle: {
      textAlign: 'center',
      color: '#4a5568',
      marginBottom: '48px',
      fontSize: '1.1rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
    },
    card: {
      padding: '30px',
      border: '1px solid #e2e8f0',
      borderRadius: '20px',
      transition: 'all 0.3s',
      cursor: 'pointer',
      backgroundColor: '#fff',
    },
    cardIcon: {
      fontSize: '2.5rem',
      color: '#ff6b35',
      marginBottom: '20px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
    },
    statCard: {
      textAlign: 'center',
      padding: '30px',
      background: 'linear-gradient(135deg, #fff5eb 0%, #ffe8dc 100%)',
      borderRadius: '20px',
      transition: 'transform 0.3s',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '800',
      color: '#ff6b35',
    },
    testimonialCard: {
      backgroundColor: '#f8fafc',
      padding: '30px',
      borderRadius: '20px',
      borderLeft: '4px solid #ff6b35',
    },
    courseCard: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      transition: 'transform 0.3s',
    },
    courseImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    courseContent: {
      padding: '24px',
    },
    courseMeta: {
      display: 'flex',
      gap: '16px',
      margin: '16px 0',
      fontSize: '0.85rem',
      color: '#4a5568',
    },
    btnEnroll: {
      width: '100%',
      padding: '12px',
      background: 'linear-gradient(135deg, #ff6b35 0%, #ff9f4a 100%)',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '16px',
    },
    filterBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      flexWrap: 'wrap',
      marginBottom: '40px',
    },
    filterBtn: {
      padding: '10px 24px',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: '600',
      transition: 'all 0.3s',
    },
    blogCard: {
      backgroundColor: '#fff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    },
    blogImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover',
    },
    blogCategory: {
      display: 'inline-block',
      backgroundColor: '#fff5eb',
      color: '#ff6b35',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '0.75rem',
      fontWeight: '600',
    },
    searchBox: {
      maxWidth: '500px',
      margin: '30px auto 0',
      display: 'flex',
      backgroundColor: '#fff',
      borderRadius: '50px',
      overflow: 'hidden',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    searchInput: {
      flex: 1,
      padding: '14px 20px',
      border: 'none',
      outline: 'none',
      fontSize: '1rem',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '40px',
    },
    contactInfo: {
      backgroundColor: '#f8fafc',
      padding: '30px',
      borderRadius: '20px',
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
      marginBottom: '25px',
    },
    contactIcon: {
      fontSize: '1.5rem',
      color: '#ff6b35',
    },
    formGroup: {
      marginBottom: '20px',
    },
    input: {
      width: '100%',
      padding: '14px',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
    },
    textarea: {
      width: '100%',
      padding: '14px',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      fontSize: '1rem',
      minHeight: '120px',
    },
    footer: {
      backgroundColor: '#1e3a5f',
      color: '#fff',
      padding: '60px 5% 30px',
      marginTop: '60px',
    },
    footerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    socialIcons: {
      display: 'flex',
      gap: '16px',
      marginTop: '20px',
    },
    socialIcon: {
      fontSize: '1.3rem',
      cursor: 'pointer',
      transition: 'color 0.3s',
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #ff6b35 0%, #ff9f4a 100%)',
      padding: '60px 5%',
      textAlign: 'center',
      color: '#fff',
    },
    ctaButton: {
      backgroundColor: '#fff',
      color: '#ff6b35',
      border: 'none',
      padding: '14px 36px',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      marginTop: '20px',
    },
    aboutCarousel: {
      maxWidth: '700px',
      margin: '0 auto',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
      position: 'relative',
      backgroundColor: '#f8fafc',
    },
    aboutCarouselMedia: {
      width: '100%',
      height: '400px',
      objectFit: 'cover',
    },
    aboutCarouselCaption: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#fff',
    },
    aboutStats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      marginTop: '60px',
    },
    aboutStatItem: {
      textAlign: 'center',
      padding: '25px',
      background: 'linear-gradient(135deg, #fff5eb 0%, #ffe8dc 100%)',
      borderRadius: '16px',
    },
    partnerGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
      gap: '20px',
      marginTop: '40px',
    },
    partnerCard: {
      backgroundColor: '#f8fafc',
      padding: '20px',
      borderRadius: '16px',
      textAlign: 'center',
      transition: 'transform 0.3s',
    },
    valueCard: {
      textAlign: 'center',
      padding: '30px',
      backgroundColor: '#fff',
      borderRadius: '20px',
      border: '1px solid #e2e8f0',
    },
  };

  // Login Modal Component
  const LoginModal = () => (
    <div style={styles.modalOverlay} onClick={() => setShowLoginModal(false)}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeModal} onClick={() => setShowLoginModal(false)}><FaTimes /></button>
        <h2 style={styles.modalTitle}>Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email Address" style={styles.modalInput} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
          <input type="password" placeholder="Password" style={styles.modalInput} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
          <button type="submit" style={styles.modalBtn}>Login</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.85rem', color: '#4a5568' }}>
          Don't have an account? <span style={{ color: '#ff6b35', cursor: 'pointer' }} onClick={() => { setShowLoginModal(false); setShowSignupModal(true); }}>Sign Up</span>
        </p>
      </div>
    </div>
  );

  // Signup Modal Component
  const SignupModal = () => (
    <div style={styles.modalOverlay} onClick={() => setShowSignupModal(false)}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeModal} onClick={() => setShowSignupModal(false)}><FaTimes /></button>
        <h2 style={styles.modalTitle}>Create Account</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" style={styles.modalInput} value={signupName} onChange={(e) => setSignupName(e.target.value)} required />
          <input type="email" placeholder="Email Address" style={styles.modalInput} value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
          <input type="password" placeholder="Password" style={styles.modalInput} value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required />
          <button type="submit" style={styles.modalBtn}>Sign Up</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.85rem', color: '#4a5568' }}>
          Already have an account? <span style={{ color: '#ff6b35', cursor: 'pointer' }} onClick={() => { setShowSignupModal(false); setShowLoginModal(true); }}>Login</span>
        </p>
      </div>
    </div>
  );

  // Profile Modal Component
  const ProfileModal = () => (
    <div style={styles.modalOverlay} onClick={() => setShowProfileModal(false)}>
      <div style={{ ...styles.modal, maxWidth: '550px' }} onClick={(e) => e.stopPropagation()}>
        <button style={styles.closeModal} onClick={() => setShowProfileModal(false)}><FaTimes /></button>
        <h2 style={styles.modalTitle}>Your Profile</h2>
        
        {/* Profile Picture Section */}
        <div style={styles.profilePictureSection}>
          {userProfile.profilePicture ? (
            <img src={userProfile.profilePicture} alt="Profile" style={styles.profilePicturePreview} />
          ) : (
            <div style={{ ...styles.userAvatar, width: '100px', height: '100px', fontSize: '3rem', marginBottom: '10px' }}>
              {userProfile.name ? userProfile.name.charAt(0).toUpperCase() : <FaUser />}
            </div>
          )}
          <input type="file" id="profileUpload" accept="image/*" style={{ display: 'none' }} onChange={handleProfilePictureUpload} />
          <label htmlFor="profileUpload" style={styles.uploadLabel}>
            <FaCamera /> Change Photo
          </label>
          {profilePicturePreview && (
            <button onClick={saveProfilePicture} style={{ ...styles.uploadLabel, backgroundColor: '#ff6b35', color: '#fff', marginTop: '10px' }}>
              <FaCheck /> Save Photo
            </button>
          )}
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email (cannot change)</label>
          <input type="email" value={userProfile.email} disabled style={{ ...styles.modalInput, backgroundColor: '#f0f0f0' }} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Full Name</label>
          <input type="text" placeholder="Your Name" style={styles.modalInput} value={editProfile.name} onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Phone Number</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" style={styles.modalInput} value={editProfile.phone} onChange={(e) => setEditProfile({ ...editProfile, phone: e.target.value })} />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Enrolled Course</label>
          <select style={styles.modalInput} value={editProfile.course} onChange={(e) => setEditProfile({ ...editProfile, course: e.target.value })}>
            <option value="">Select a course</option>
            {courses.map(course => <option key={course.id} value={course.title}>{course.title}</option>)}
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Bio / About You</label>
          <textarea placeholder="Tell us about yourself..." style={{ ...styles.modalInput, minHeight: '80px' }} value={editProfile.bio} onChange={(e) => setEditProfile({ ...editProfile, bio: e.target.value })} />
        </div>
        <button style={styles.modalBtn} onClick={saveProfile}>Save Profile</button>
      </div>
    </div>
  );

  // Navigation Component
  const Navbar = () => (
    <div style={styles.navbar}>
      <div style={styles.logoContainer} onClick={() => setActivePage('home')}>
        <div style={styles.logoIcon}>
          <FaGraduationCap />
        </div>
        <span style={styles.logoText}>SkillGrid</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <div style={{ ...styles.navLinks, display: mobileMenuOpen ? 'flex' : 'flex', flexDirection: mobileMenuOpen ? 'column' : 'row', position: mobileMenuOpen ? 'absolute' : 'relative', top: mobileMenuOpen ? '70px' : 'auto', left: mobileMenuOpen ? '0' : 'auto', backgroundColor: mobileMenuOpen ? '#fff' : 'transparent', width: mobileMenuOpen ? '100%' : 'auto', padding: mobileMenuOpen ? '20px' : '0', boxShadow: mobileMenuOpen ? '0 4px 20px rgba(0,0,0,0.1)' : 'none', zIndex: 999 }}>
          <span style={styles.navLink} onClick={() => setActivePage('home')}><FaHome style={{ marginRight: '8px' }} /> Home</span>
          <span style={styles.navLink} onClick={() => setActivePage('about')}><FaInfoCircle style={{ marginRight: '8px' }} /> About</span>
          <span style={styles.navLink} onClick={() => setActivePage('courses')}><FaBookOpen style={{ marginRight: '8px' }} /> Courses</span>
          <span style={styles.navLink} onClick={() => setActivePage('blog')}><FaBlog style={{ marginRight: '8px' }} /> Blog</span>
          <span style={styles.navLink} onClick={() => setActivePage('contact')}><FaEnvelopeOpen style={{ marginRight: '8px' }} /> Contact</span>
          {isLoggedIn ? (
            <div style={styles.userInfo}>
              <div style={styles.userAvatar} onClick={openProfileModal}>
                {userProfile.profilePicture ? (
                  <img src={userProfile.profilePicture} alt="Profile" style={styles.userAvatarImg} />
                ) : (
                  userProfile.name ? userProfile.name.charAt(0).toUpperCase() : <FaUser />
                )}
              </div>
              <span style={styles.userName} onClick={openProfileModal}>{userProfile.name}</span>
              <button style={styles.iconBtn} onClick={handleLogout} title="Logout"><FaSignOutAlt /></button>
            </div>
          ) : (
            <span style={styles.ctaNav} onClick={() => setShowSignupModal(true)}>Sign Up Free</span>
          )}
        </div>
        <div style={styles.menuIcon} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );

  // CTA Component
  const CTASection = () => (
    <div style={styles.ctaSection}>
      <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Ready to Start Your Journey?</h2>
      <p style={{ marginBottom: '20px', opacity: 0.9 }}>Join 50,000+ learners and transform your career with SkillGrid</p>
      {!isLoggedIn ? (
        <button style={styles.ctaButton} onClick={() => setShowSignupModal(true)}>Get Started Today →</button>
      ) : (
        <button style={styles.ctaButton} onClick={() => setActivePage('courses')}>Explore Courses →</button>
      )}
    </div>
  );

  // Footer Component
  const Footer = () => (
    <div style={styles.footer}>
      <div style={styles.footerGrid}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ ...styles.logoIcon, background: '#ff8c42' }}><FaGraduationCap /></div>
            <h2 style={{ color: '#fff', margin: 0 }}>SkillGrid</h2>
          </div>
          <p>Bangalore's premier EdTech platform helping students build successful tech careers.</p>
          <div style={styles.socialIcons}>
            <FaGithub style={styles.socialIcon} />
            <FaTwitter style={styles.socialIcon} />
            <FaLinkedin style={styles.socialIcon} />
            <FaInstagram style={styles.socialIcon} />
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p style={{ cursor: 'pointer', marginTop: '10px' }} onClick={() => setActivePage('home')}>Home</p>
          <p style={{ cursor: 'pointer', marginTop: '10px' }} onClick={() => setActivePage('about')}>About</p>
          <p style={{ cursor: 'pointer', marginTop: '10px' }} onClick={() => setActivePage('courses')}>Courses</p>
          <p style={{ cursor: 'pointer', marginTop: '10px' }} onClick={() => setActivePage('blog')}>Blog</p>
        </div>
        <div>
          <h4>Contact</h4>
          <p>📍 #123, Tech Park, Bangalore - 560001</p>
          <p>📞 +91 80 1234 5678</p>
          <p>✉️ hello@skillgrid.com</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p>&copy; 2025 SkillGrid EdTech Pvt Ltd. All rights reserved.</p>
      </div>
    </div>
  );

  // Home Page
  const HomePage = () => (
    <>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <span style={styles.heroBadge}>India's Fastest Growing EdTech</span>
          <h1 style={styles.heroTitle}>
            Master Tech Skills with <span style={styles.heroHighlight}>SkillGrid</span>
          </h1>
          <p style={styles.heroDesc}>
            Bangalore's premier EdTech platform helping 50,000+ learners build successful careers 
            in AI, Data Science, Full Stack, and more.
          </p>
          <div>
            {!isLoggedIn ? (
              <button style={styles.btnPrimary} onClick={() => setShowSignupModal(true)}>
                Start Learning <FaArrowRight />
              </button>
            ) : (
              <button style={styles.btnPrimary} onClick={() => setActivePage('courses')}>
                Continue Learning <FaArrowRight />
              </button>
            )}
            <button style={styles.btnOutline}>
              <FaPlayCircle /> Watch Demo
            </button>
          </div>
        </div>
        <div style={styles.heroCarousel}>
          <div style={styles.carouselWrapper}>
            <video key={heroCarouselIndex} style={styles.carouselMedia} autoPlay muted loop playsInline>
              <source src={heroSlides[heroCarouselIndex].video} type="video/mp4" />
            </video>
            <div style={styles.carouselDots}>
              {heroSlides.map((_, idx) => (
                <div key={idx} style={{ ...styles.dot, ...(heroCarouselIndex === idx ? styles.activeDot : {}) }} onClick={() => setHeroCarouselIndex(idx)} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.statsGrid}>
          {[
            { number: "50,000+", label: "Active Learners" },
            { number: "200+", label: "Expert Instructors" },
            { number: "98%", label: "Placement Rate" },
            { number: "15+", label: "Industry Partners" },
          ].map((stat, idx) => (
            <div key={idx} style={styles.statCard}>
              <div style={styles.statNumber}>{stat.number}</div>
              <div>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Why Choose SkillGrid?</h2>
        <p style={styles.sectionSubtitle}>We provide industry-ready training with hands-on projects</p>
        <div style={styles.grid}>
          {[
            { icon: <FaRocket />, title: "Industry Curriculum", desc: "Courses designed with top tech companies" },
            { icon: <FaLaptopCode />, title: "Live Projects", desc: "Work on real-world projects from day one" },
            { icon: <FaChalkboardTeacher />, title: "Expert Mentors", desc: "Learn from industry veterans" },
            { icon: <FaUserGraduate />, title: "Career Support", desc: "Resume building & interview preparation" },
          ].map((feature, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.cardIcon}>{feature.icon}</div>
              <h3 style={{ color: '#1e3a5f', marginBottom: '10px' }}>{feature.title}</h3>
              <p style={{ color: '#4a5568' }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...styles.section, backgroundColor: '#f8fafc', marginTop: '0', borderRadius: '0' }}>
        <h2 style={styles.sectionTitle}>Popular Courses</h2>
        <p style={styles.sectionSubtitle}>Most enrolled programs this month</p>
        <div style={styles.grid}>
          {courses.slice(0, 3).map(course => (
            <div key={course.id} style={styles.courseCard}>
              <img src={course.image} alt={course.title} style={styles.courseImage} />
              <div style={styles.courseContent}>
                <div style={styles.cardIcon}>{course.icon}</div>
                <h3 style={{ color: '#1e3a5f', marginBottom: '12px' }}>{course.title}</h3>
                <div style={styles.courseMeta}>
                  <span><FaClock /> {course.duration}</span>
                  <span><FaUserGraduate /> {course.students}</span>
                </div>
                <button style={styles.btnEnroll} onClick={() => { setActivePage('courses'); }}>View Course →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>What Our Students Say</h2>
        <p style={styles.sectionSubtitle}>Success stories from Bangalore and beyond</p>
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div style={styles.testimonialCard}>
            <FaQuoteRight style={{ color: '#ff6b35', fontSize: '2rem', marginBottom: '16px', opacity: 0.5 }} />
            <p style={{ fontStyle: 'italic', marginBottom: '16px', fontSize: '1.1rem' }}>"{testimonials[testimonialIndex].quote}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '20px' }}>
              <img src={testimonials[testimonialIndex].image} alt={testimonials[testimonialIndex].name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
              <div>
                <h4 style={{ color: '#1e3a5f' }}>{testimonials[testimonialIndex].name}</h4>
                <p style={{ fontSize: '0.85rem', color: '#ff6b35' }}>{testimonials[testimonialIndex].role}</p>
                <div style={{ display: 'flex', gap: '3px', marginTop: '5px' }}>
                  {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (<FaStar key={i} style={{ color: '#ff6b35', fontSize: '0.8rem' }} />))}
                </div>
              </div>
            </div>
          </div>
          <div style={styles.carouselDots}>
            {testimonials.map((_, idx) => (
              <div key={idx} style={{ ...styles.dot, ...(testimonialIndex === idx ? styles.activeDot : {}), backgroundColor: testimonialIndex === idx ? '#ff6b35' : '#ccc' }} onClick={() => setTestimonialIndex(idx)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );

  // About Page
  const AboutPage = () => (
    <>
      <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5282 100%)', color: '#fff', padding: '100px 5% 80px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>About SkillGrid</h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Founded in Bangalore in 2020, we're on a mission to bridge the skill gap and empower India's youth with industry-relevant tech education.
        </p>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Story in Pictures & Videos</h2>
        <p style={styles.sectionSubtitle}>A glimpse into the SkillGrid journey</p>
        <div style={styles.aboutCarousel}>
          {aboutSlides[aboutCarouselIndex].type === 'video' ? (
            <video key={aboutCarouselIndex} style={styles.aboutCarouselMedia} autoPlay muted loop playsInline>
              <source src={aboutSlides[aboutCarouselIndex].url} type="video/mp4" />
            </video>
          ) : (
            <img src={aboutSlides[aboutCarouselIndex].url} alt={aboutSlides[aboutCarouselIndex].title} style={styles.aboutCarouselMedia} />
          )}
          <div style={styles.aboutCarouselCaption}>
            <h3 style={{ color: '#1e3a5f', marginBottom: '8px' }}>{aboutSlides[aboutCarouselIndex].title}</h3>
            <p style={{ color: '#4a5568' }}>{aboutSlides[aboutCarouselIndex].description}</p>
          </div>
          <div style={styles.carouselDots}>
            {aboutSlides.map((_, idx) => (
              <div key={idx} style={{ ...styles.dot, ...(aboutCarouselIndex === idx ? styles.activeDot : {}) }} onClick={() => setAboutCarouselIndex(idx)} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ ...styles.section, backgroundColor: '#f8fafc' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ backgroundColor: '#fff5eb', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <FaBullseye size={40} color="#ff6b35" />
            </div>
            <h3 style={{ color: '#1e3a5f', marginBottom: '15px', fontSize: '1.5rem' }}>Our Mission</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>To make quality tech education accessible to every aspiring student with practical training and guaranteed career outcomes.</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#fff', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <div style={{ backgroundColor: '#fff5eb', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
              <FaHeart size={40} color="#ff6b35" />
            </div>
            <h3 style={{ color: '#1e3a5f', marginBottom: '15px', fontSize: '1.5rem' }}>Our Vision</h3>
            <p style={{ color: '#4a5568', lineHeight: '1.6' }}>To become India's most trusted EdTech platform, creating 1 million job-ready tech professionals by 2030.</p>
          </div>
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>SkillGrid by Numbers</h2>
        <div style={styles.aboutStats}>
          {[
            { number: "2020", label: "Year Founded", icon: <FaCalendarAlt />, color: "#ff6b35" },
            { number: "Bangalore", label: "Headquarters", icon: <FaBuilding />, color: "#ff8c42" },
            { number: "50+", label: "Expert Faculty", icon: <FaChalkboardTeacher />, color: "#ff9f4a" },
            { number: "100%", label: "Job Assistance", icon: <FaHandshake />, color: "#ff6b35" },
          ].map((stat, idx) => (
            <div key={idx} style={styles.aboutStatItem}>
              <div style={{ fontSize: '2rem', color: stat.color, marginBottom: '15px' }}>{stat.icon}</div>
              <div style={styles.statNumber}>{stat.number}</div>
              <div style={{ color: '#4a5568', fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...styles.section, backgroundColor: '#fff5eb' }}>
        <h2 style={styles.sectionTitle}>Our Industry Partners</h2>
        <div style={styles.partnerGrid}>
          {[
            { name: "Microsoft", icon: <FaBriefcase />, bg: "#f0f0f0" },
            { name: "Google", icon: <FaGlobe />, bg: "#e8f0fe" },
            { name: "Amazon", icon: <FaServer />, bg: "#fef3e8" },
            { name: "Flipkart", icon: "🛒", bg: "#e8f8f5" },
            { name: "Infosys", icon: <FaUniversity />, bg: "#f0e8fe" },
            { name: "TCS", icon: <FaBuilding />, bg: "#fee8e8" },
          ].map((partner, idx) => (
            <div key={idx} style={{ ...styles.partnerCard, backgroundColor: partner.bg }}>
              <div style={{ fontSize: '2rem', color: '#ff6b35', marginBottom: '10px' }}>{partner.icon}</div>
              <p style={{ fontWeight: '600', color: '#1e3a5f' }}>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Our Core Values</h2>
        <div style={styles.grid}>
          {[
            { icon: <FaRegLightbulb />, title: "Innovation", desc: "Constantly evolving curriculum", color: "#ff6b35" },
            { icon: <FaUserGraduate />, title: "Student First", desc: "Every decision prioritizes learners", color: "#ff8c42" },
            { icon: <FaLaptopCode />, title: "Practical Learning", desc: "Learn by building real projects", color: "#ff9f4a" },
            { icon: <FaHandshake />, title: "Integrity", desc: "Transparent and honest approach", color: "#ff6b35" },
          ].map((value, idx) => (
            <div key={idx} style={styles.valueCard}>
              <div style={{ ...styles.cardIcon, color: value.color }}>{value.icon}</div>
              <h3 style={{ color: '#1e3a5f', marginBottom: '12px' }}>{value.title}</h3>
              <p style={{ color: '#4a5568' }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // Courses Page
  const CoursesPage = () => (
    <>
      <div style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)', padding: '80px 5% 60px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Our Courses</h1>
        <p>Industry-aligned programs designed to make you job-ready</p>
        <div style={styles.filterBar}>
          {['all', 'development', 'data', 'cloud', 'security', 'ai'].map((cat) => (
            <button key={cat} style={{ ...styles.filterBtn, backgroundColor: filterCourse === cat ? '#fff' : 'rgba(255,255,255,0.2)', color: filterCourse === cat ? '#ff6b35' : '#fff' }} onClick={() => setFilterCourse(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.grid}>
          {filteredCourses.map(course => (
            <div key={course.id} style={styles.courseCard}>
              <img src={course.image} alt={course.title} style={styles.courseImage} />
              <div style={styles.courseContent}>
                <div style={styles.cardIcon}>{course.icon}</div>
                <h3 style={{ color: '#1e3a5f', marginBottom: '12px' }}>{course.title}</h3>
                <div style={styles.courseMeta}>
                  <span><FaClock /> {course.duration}</span>
                  <span><FaUserGraduate /> {course.students}</span>
                </div>
                <p style={{ color: '#4a5568', fontSize: '0.9rem' }}>Level: {course.level}</p>
                <button style={styles.btnEnroll} onClick={() => alert(isLoggedIn ? `Enrolled in ${course.title}!` : 'Please login to enroll')}>Enroll Now →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // Blog Page
  const BlogPage = () => (
    <>
      <div style={{ background: '#1e3a5f', padding: '80px 5% 60px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>SkillGrid Blog</h1>
        <p>Insights, tips, and trends from the tech world</p>
        <div style={styles.searchBox}>
          <input type="text" placeholder="Search articles..." style={styles.searchInput} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <button style={{ backgroundColor: '#ff6b35', border: 'none', padding: '0 24px', cursor: 'pointer', color: '#fff' }}><FaSearch /></button>
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.grid}>
          {filteredBlogs.map(blog => (
            <div key={blog.id} style={styles.blogCard}>
              <img src={blog.image} alt={blog.title} style={styles.blogImage} />
              <div style={{ padding: '24px' }}>
                <span style={styles.blogCategory}>{blog.category}</span>
                <h3 style={{ fontSize: '1.3rem', color: '#1e3a5f', margin: '12px 0' }}>{blog.title}</h3>
                <p style={{ color: '#4a5568', marginBottom: '16px' }}>{blog.excerpt}</p>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.8rem', color: '#718096', marginBottom: '16px' }}>
                  <span><FaUser /> {blog.author}</span>
                  <span><FaCalendarAlt /> {blog.date}</span>
                </div>
                <button style={{ color: '#ff6b35', fontWeight: '600', background: 'none', border: 'none', cursor: 'pointer' }} onClick={() => alert('Read more: ' + blog.title)}>Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  // Contact Page
  const ContactPage = () => (
    <>
      <div style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)', padding: '80px 5% 60px', textAlign: 'center', color: '#fff' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Get In Touch</h1>
        <p>We'd love to hear from you. Send us a message and we'll respond within 24 hours.</p>
      </div>

      <div style={styles.section}>
        <div style={styles.contactGrid}>
          <div style={styles.contactInfo}>
            <h2 style={{ color: '#1e3a5f', marginBottom: '30px' }}>Contact Information</h2>
            <div style={styles.contactItem}>
              <FaMapMarkerAlt style={styles.contactIcon} />
              <div>#123, Tech Park, Electronics City, Bangalore - 560001</div>
            </div>
            <div style={styles.contactItem}>
              <FaPhone style={styles.contactIcon} />
              <div>+91 80 1234 5678</div>
            </div>
            <div style={styles.contactItem}>
              <FaEnvelope style={styles.contactIcon} />
              <div>hello@skillgrid.com</div>
            </div>
          </div>
          <div style={{ padding: '30px', backgroundColor: '#f8fafc', borderRadius: '20px' }}>
            <h2 style={{ color: '#1e3a5f', marginBottom: '30px' }}>Send us a Message</h2>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will contact you soon.'); }}>
              <div style={styles.formGroup}>
                <input type="text" placeholder="Your Name" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <input type="email" placeholder="Your Email" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <input type="text" placeholder="Subject" style={styles.input} required />
              </div>
              <div style={styles.formGroup}>
                <textarea placeholder="Your Message" style={styles.textarea} required></textarea>
              </div>
              <button type="submit" style={styles.btnPrimary}>Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );

  // Main Render
  return (
    <div style={styles.container}>
      <Navbar />
      {activePage === 'home' && <HomePage />}
      {activePage === 'about' && <AboutPage />}
      {activePage === 'courses' && <CoursesPage />}
      {activePage === 'blog' && <BlogPage />}
      {activePage === 'contact' && <ContactPage />}
      <CTASection />
      <Footer />
      {showLoginModal && <LoginModal />}
      {showSignupModal && <SignupModal />}
      {showProfileModal && <ProfileModal />}
    </div>
  );
};

export default SkillGridWebsite;