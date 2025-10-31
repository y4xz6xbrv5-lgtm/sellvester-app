// Application State - using JavaScript variables for state management
const appState = {
  registrationData: {},
  registrationStep: 1,
  campaignData: {
    channel: 'email',
    audience: 'all',
    template: null,
    subject: '',
    message: ''
  },
  campaignStep: 1,
  currentView: 'home',
  currentRole: null,
  vendorRegistrationData: {},
  vendorRegistrationStep: 1,
  selectedTier: null,
  selectedBillingPeriod: 'annual',
  selectedCustomerId: null,
  selectedVendorId: 'v1',
  
  vendors: [
    {
      id: 'v1',
      name: 'Java Junction Coffee',
      category: 'Food & Beverage',
      specialization: 'Artisan Coffee & Pastries',
      customer_count: 234,
      product_count: 28,
      reward_type: 'purchase_based',
      threshold: 10,
      custom_terminology: 'orders',
      reward_description: 'Free coffee of your choice',
      phone: '555-0100',
      email: 'hello@javajunction.com',
      monthly_subscription: '$79'
    },
    {
      id: 'v2',
      name: "Bella's Boutique",
      category: 'Retail & Shopping',
      specialization: 'Women\'s Fashion & Accessories',
      customer_count: 187,
      product_count: 156,
      reward_type: 'spend_based',
      threshold: 200,
      custom_terminology: 'purchases',
      reward_description: '20% off your next purchase',
      phone: '555-0200',
      email: 'info@bellasboutique.com',
      monthly_subscription: '$79'
    },
    {
      id: 'v3',
      name: "Tony's Food Truck",
      category: 'Food & Beverage',
      specialization: 'Authentic Street Tacos',
      customer_count: 156,
      product_count: 18,
      reward_type: 'visits_based',
      threshold: 12,
      custom_terminology: 'stops',
      reward_description: 'Free meal (up to $15 value)',
      phone: '555-0300',
      email: 'tony@tonysfoodtruck.com',
      monthly_subscription: '$49'
    },
    {
      id: 'v4',
      name: 'Sunset Wellness',
      category: 'Health & Wellness',
      specialization: 'Holistic Health Products',
      customer_count: 198,
      product_count: 45,
      reward_type: 'purchase_based',
      threshold: 6,
      custom_terminology: 'purchases',
      reward_description: 'Free item from select collection',
      phone: '555-0400',
      email: 'info@sunsetwellness.com',
      monthly_subscription: '$79'
    },
    {
      id: 'v5',
      name: 'Clean Cuts Barber',
      category: 'Beauty & Personal Care',
      specialization: 'Men\'s Grooming & Haircuts',
      customer_count: 145,
      product_count: 12,
      reward_type: 'points_based',
      threshold: 100,
      points_per_dollar: 1,
      custom_terminology: 'points',
      reward_description: 'Free haircut',
      phone: '555-0500',
      email: 'info@cleancuts.com',
      monthly_subscription: '$59'
    },
    {
      id: 'v6',
      name: "Mike's Auto Detail",
      category: 'Automotive',
      specialization: 'Professional Car Detailing',
      customer_count: 89,
      product_count: 8,
      reward_type: 'purchase_based',
      threshold: 5,
      custom_terminology: 'services',
      reward_description: 'Free basic wash',
      phone: '555-0600',
      email: 'mike@mikesautodetail.com',
      monthly_subscription: '$49'
    }
  ],
  
  customers: [
    {
      id: 'c1',
      name: 'Alex Martinez',
      phone: '555-0123',
      email: 'alex.martinez@email.com',
      dob: '1995-03-15',
      email_optin: true,
      sms_optin: true,
      preferred_contact: 'Both',
      registration_date: '2025-09-10'
    },
    {
      id: 'c2',
      name: 'Jordan Smith',
      phone: '555-0456',
      email: 'jordan.smith@email.com',
      dob: '1992-07-22',
      email_optin: true,
      sms_optin: false,
      preferred_contact: 'Email',
      registration_date: '2025-08-05'
    },
    {
      id: 'c3',
      name: 'Sam Johnson',
      phone: '555-0789',
      email: 'sam.j@email.com',
      dob: '1998-11-30',
      email_optin: true,
      sms_optin: true,
      preferred_contact: 'SMS',
      registration_date: '2025-10-01'
    },
    {
      id: 'c4',
      name: 'Taylor Brooks',
      phone: '555-0321',
      email: 'tbrooks@email.com',
      dob: '1990-05-18',
      email_optin: true,
      sms_optin: true,
      preferred_contact: 'Both',
      registration_date: '2025-09-20'
    }
  ],
  
  productCategories: [
    { id: 'cat1', name: 'Beverages', icon: '☕' },
    { id: 'cat2', name: 'Food', icon: '🍔' },
    { id: 'cat3', name: 'Clothing', icon: '👕' },
    { id: 'cat4', name: 'Accessories', icon: '👜' },
    { id: 'cat5', name: 'Services', icon: '✂️' },
    { id: 'cat6', name: 'Products', icon: '🛍️' }
  ],
  
  products: [
    { id: 'p1', vendor_id: 'v1', name: 'Alpine Sunset', category: 'Flower', strain: 'Indica', description: 'Premium indoor cultivation with relaxing evening effects. Carefully cured for optimal terpene preservation.', thc_percent: 24, cbd_percent: 0.5, prices: { eighth: 45, quarter: 85, half: 160, ounce: 280 }, stock_status: 'In Stock', stock_quantity: 24, brand: 'Green Valley' },
    { id: 'p2', vendor_id: 'v1', name: 'Morning Clarity', category: 'Flower', strain: 'Sativa', description: 'Energizing sativa-dominant blend perfect for daytime focus and creativity.', thc_percent: 22, cbd_percent: 0.3, prices: { eighth: 40, quarter: 75, half: 140, ounce: 250 }, stock_status: 'In Stock', stock_quantity: 18, brand: 'Green Valley' },
    { id: 'p3', vendor_id: 'v1', name: 'Golden Reserve', category: 'Concentrates', strain: 'Hybrid', description: 'Live resin extract preserving full spectrum terpenes and cannabinoids.', thc_percent: 78, cbd_percent: 0.2, prices: { gram: 55, half_gram: 30 }, stock_status: 'In Stock', stock_quantity: 12, brand: 'Green Valley' },
    { id: 'p4', vendor_id: 'v2', name: 'Relief Tincture', category: 'Wellness', strain: 'CBD', description: 'High CBD therapeutic tincture for daily wellness support. 1:20 THC:CBD ratio.', thc_percent: 2, cbd_percent: 40, prices: { unit: 65 }, stock_status: 'In Stock', stock_quantity: 28, brand: 'Mountain Peak' },
    { id: 'p5', vendor_id: 'v2', name: 'Sleep Formula', category: 'Edibles', strain: 'Indica', description: 'Specialized evening formulation with CBN for restful sleep. 10mg THC per piece.', thc_percent: 10, cbd_percent: 2, prices: { unit: 25 }, stock_status: 'In Stock', stock_quantity: 45, brand: 'Mountain Peak' },
    { id: 'p6', vendor_id: 'v2', name: 'Balance Capsules', category: 'Wellness', strain: 'Hybrid', description: 'Precisely dosed capsules for consistent therapeutic effects. 5mg THC, 5mg CBD.', thc_percent: 5, cbd_percent: 5, prices: { unit: 35 }, stock_status: 'Low Stock', stock_quantity: 8, brand: 'Mountain Peak' },
    { id: 'p7', vendor_id: 'v3', name: 'Sunset OG', category: 'Flower', strain: 'Hybrid', description: 'Community favorite hybrid with balanced effects. Locally grown and cured.', thc_percent: 21, cbd_percent: 0.4, prices: { eighth: 35, quarter: 65, half: 120, ounce: 200 }, stock_status: 'In Stock', stock_quantity: 32, brand: 'Sunset Collective' },
    { id: 'p8', vendor_id: 'v3', name: 'Community Blend', category: 'Edibles', strain: 'Hybrid', description: 'Artisan gummies crafted by local producers. 10mg THC per piece, 10 count.', thc_percent: 10, cbd_percent: 0, prices: { unit: 20 }, stock_status: 'In Stock', stock_quantity: 56, brand: 'Local Artisan' },
    { id: 'p9', vendor_id: 'v4', name: 'Emerald Dream', category: 'Flower', strain: 'Sativa', description: 'Small batch sativa with uplifting effects. Hand-trimmed perfection.', thc_percent: 26, cbd_percent: 0.2, prices: { eighth: 50, quarter: 95 }, stock_status: 'In Stock', stock_quantity: 14, brand: 'Elevated Gardens' },
    { id: 'p10', vendor_id: 'v5', name: 'City Lights', category: 'Vapes', strain: 'Sativa', description: 'Premium distillate vape with natural terpenes. Clean, smooth vapor.', thc_percent: 88, cbd_percent: 0.1, prices: { half_gram: 35, gram: 60 }, stock_status: 'In Stock', stock_quantity: 42, brand: 'Urban Leaf' },
    { id: 'p11', vendor_id: 'v5', name: 'Chill Vibes', category: 'Edibles', strain: 'Indica', description: 'Modern edible experience with consistent dosing. 5mg THC per piece, 20 count.', thc_percent: 5, cbd_percent: 0, prices: { unit: 28 }, stock_status: 'In Stock', stock_quantity: 67, brand: 'Urban Leaf' },
    { id: 'p12', vendor_id: 'v6', name: 'Pacific Blue', category: 'Flower', strain: 'Hybrid', description: 'West coast classic with ocean-grown quality. Smooth, balanced effects.', thc_percent: 23, cbd_percent: 0.5, prices: { eighth: 42, quarter: 80, half: 150 }, stock_status: 'In Stock', stock_quantity: 21, brand: 'Pacific Coast' }
  ],
  
  productFilters: {
    category: 'all',
    priceRange: 'all',
    thcLevel: 'all',
    inStockOnly: false,
    searchQuery: ''
  },
  
  currentProduct: null,
  selectedVendorForProducts: null,
  
  campaigns: [
    {
      id: 'camp1',
      vendor_id: 'v1',
      name: 'One Punch Away Campaign',
      channel: 'Both',
      sent_date: '2025-10-20',
      recipients: 45,
      segment: 'Customers 1 punch away',
      email_open_rate: '68%',
      sms_response_rate: '12%',
      conversions: 12,
      revenue_generated: '$600'
    },
    {
      id: 'camp2',
      vendor_id: 'v1',
      name: 'Weekend Flash Sale',
      channel: 'SMS',
      sent_date: '2025-10-27',
      recipients: 142,
      segment: 'All SMS subscribers',
      sms_response_rate: '8%',
      conversions: 18,
      revenue_generated: '$900'
    }
  ],
  
  campaignTemplates: {
    email: [
      {
        name: 'Points Balance Update',
        subject: "You're {punches_left} punches away from your reward!",
        body: "Hi {customer_name}! You currently have {current_punches} punches at {vendor_name}. Just {punches_left} more purchases and you'll earn your {reward_description}. We can't wait to reward your loyalty!"
      },
      {
        name: 'Reward Ready',
        subject: '🎉 Congrats! You\'ve earned a free reward',
        body: 'Great news {customer_name}! You\'ve earned your {reward_description} at {vendor_name}. Stop by anytime to claim it. Thanks for being a loyal customer!'
      },
      {
        name: 'Exclusive Promotion',
        subject: 'VIP Offer Just for You',
        body: 'Hey {customer_name}, as one of our valued loyalty members, you get early access to our latest promotion: Buy 2 eighths, get 15% off. Show your SellVester XP app when you visit!'
      },
      {
        name: 'We Miss You',
        subject: 'Come back and get a bonus punch!',
        body: "Hi {customer_name}, we haven't seen you in a while! Come visit {vendor_name} this week and we'll add a BONUS punch to your card. Your current balance: {current_punches} punches."
      }
    ],
    sms: [
      {
        name: 'Quick Update',
        message: 'Hey {customer_name}! You have {current_punches} punches at {vendor_name}. {punches_left} more to go! 🎁'
      },
      {
        name: 'Reward Alert',
        message: '{customer_name}, you earned a {reward_description}! Come claim it at {vendor_name} 🌟'
      },
      {
        name: 'Flash Sale',
        message: 'FLASH SALE TODAY at {vendor_name}! Show your SellVester XP app for 20% off. Ends at 8pm!'
      },
      {
        name: 'Event Invite',
        message: '{customer_name}, join us this Saturday at the Vendor Show! Exclusive deals for SellVester XP members. See you there!'
      }
    ]
  },
  
  customerCards: [
    {
      customer_id: 'c1',
      vendor_id: 'v1',
      punches: 8,
      total_spent: 0,
      points: 0,
      visits: 8,
      rewards_earned: 0,
      last_visit: '2025-10-25',
      history: [
        { date: '2025-10-25', type: 'purchase' },
        { date: '2025-10-23', type: 'purchase' },
        { date: '2025-10-20', type: 'purchase' },
        { date: '2025-10-18', type: 'purchase' },
        { date: '2025-10-15', type: 'purchase' }
      ]
    },
    {
      customer_id: 'c1',
      vendor_id: 'v2',
      punches: 0,
      total_spent: 145,
      points: 0,
      visits: 0,
      rewards_earned: 0,
      last_visit: '2025-10-20',
      history: [
        { date: '2025-10-20', type: 'spend', amount: 75 },
        { date: '2025-10-15', type: 'spend', amount: 70 }
      ]
    },
    {
      customer_id: 'c1',
      vendor_id: 'v3',
      punches: 0,
      total_spent: 0,
      points: 0,
      visits: 9,
      rewards_earned: 0,
      last_visit: '2025-10-26',
      history: [
        { date: '2025-10-26', type: 'visit' },
        { date: '2025-10-24', type: 'visit' },
        { date: '2025-10-22', type: 'visit' },
        { date: '2025-10-20', type: 'visit' }
      ]
    },
    {
      customer_id: 'c1',
      vendor_id: 'v4',
      punches: 5,
      total_spent: 0,
      points: 0,
      visits: 5,
      rewards_earned: 0,
      last_visit: '2025-10-24',
      history: [
        { date: '2025-10-24', type: 'purchase' },
        { date: '2025-10-20', type: 'purchase' }
      ]
    },
    {
      customer_id: 'c2',
      vendor_id: 'v1',
      punches: 3,
      total_spent: 0,
      points: 0,
      visits: 3,
      rewards_earned: 0,
      last_visit: '2025-10-28',
      history: [
        { date: '2025-10-28', type: 'purchase' },
        { date: '2025-10-25', type: 'purchase' }
      ]
    },
    {
      customer_id: 'c3',
      vendor_id: 'v1',
      punches: 10,
      total_spent: 0,
      points: 0,
      visits: 10,
      rewards_earned: 1,
      last_visit: '2025-10-27',
      history: [
        { date: '2025-10-27', type: 'purchase' }
      ]
    },
    {
      customer_id: 'c3',
      vendor_id: 'v2',
      punches: 0,
      total_spent: 205,
      points: 0,
      visits: 0,
      rewards_earned: 1,
      last_visit: '2025-10-26',
      history: [
        { date: '2025-10-26', type: 'spend', amount: 55 }
      ]
    }
  ]
};

// Application Controller
const app = {
  init() {
    this.showView('home');
    this.updateVendorStats();
  },
  
  showView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
      view.classList.remove('active');
    });
    
    const targetView = document.getElementById(`${viewId}-view`);
    if (targetView) {
      targetView.classList.add('active');
      appState.currentView = viewId;
    }
    
    if (viewId === 'vendor-customers') {
      this.loadCustomersList();
    } else if (viewId === 'vendor-database') {
      this.loadCustomerDatabase();
    } else if (viewId === 'vendor-marketing') {
      this.loadCampaignHistory();
    } else if (viewId === 'vendor-campaign-creator') {
      appState.campaignStep = 1;
      this.updateCampaignStep();
    }
  },
  
  selectRole(role) {
    appState.currentRole = role;
    
    if (role === 'customer') {
      const hasCustomer = appState.customers.find(c => c.id === 'c1');
      if (hasCustomer && hasCustomer.email) {
        this.loadCustomerDashboard();
        this.showView('customer-dashboard');
      } else {
        this.showView('customer-registration-welcome');
      }
    } else if (role === 'vendor') {
      // Show pricing page for new vendors
      this.showView('vendor-pricing');
    } else if (role === 'admin') {
      this.loadPlatformAdmin();
      this.showView('platform-admin');
    }
  },
  
  startRegistration() {
    appState.registrationStep = 1;
    this.updateRegistrationStep();
    this.showView('customer-registration-form');
  },
  
  updateRegistrationStep() {
    for (let i = 1; i <= 7; i++) {
      const indicator = document.getElementById(`step-indicator-${i}`);
      if (indicator) {
        if (i <= appState.registrationStep) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      }
    }
    
    for (let i = 1; i <= 7; i++) {
      const step = document.getElementById(`registration-step-${i}`);
      if (step) {
        if (i === appState.registrationStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      }
    }
    
    // Update step counter
    const stepNumber = document.getElementById('current-step-number');
    if (stepNumber) {
      stepNumber.textContent = appState.registrationStep;
    }
  },
  
  nextRegistrationStep() {
    if (appState.registrationStep === 1) {
      // Step 1: Personal Information
      const firstName = document.getElementById('reg-first-name').value;
      const lastName = document.getElementById('reg-last-name').value;
      const email = document.getElementById('reg-email').value;
      const phone = document.getElementById('reg-phone').value;
      const dob = document.getElementById('reg-dob').value;
      const gender = document.getElementById('reg-gender').value;
      
      if (!firstName || !lastName || !email || !phone || !dob) {
        alert('Please fill in all required fields');
        return;
      }
      
      // Validate age (21+)
      const birthDate = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 21) {
        alert('You must be 21 years or older to register');
        return;
      }
      
      appState.registrationData = {
        firstName,
        lastName,
        name: `${firstName} ${lastName}`,
        email,
        phone,
        dob,
        gender
      };
    } else if (appState.registrationStep === 2) {
      // Step 2: Location
      const zip = document.getElementById('reg-zip').value;
      const city = document.getElementById('reg-city').value;
      const state = document.getElementById('reg-state').value;
      const source = document.getElementById('reg-source').value;
      
      if (!zip || !city || !state) {
        alert('Please fill in all required location fields');
        return;
      }
      
      appState.registrationData = {
        ...appState.registrationData,
        zip,
        city,
        state,
        source
      };
    } else if (appState.registrationStep === 3) {
      // Step 3: Cannabis Preferences
      const products = Array.from(document.querySelectorAll('.reg-product:checked')).map(cb => cb.value);
      const frequency = document.querySelector('input[name="reg-frequency"]:checked')?.value;
      const spending = document.querySelector('input[name="reg-spending"]:checked')?.value;
      
      appState.registrationData = {
        ...appState.registrationData,
        products,
        frequency,
        spending
      };
    } else if (appState.registrationStep === 4) {
      // Step 4: More Preferences
      const times = Array.from(document.querySelectorAll('.reg-time:checked')).map(cb => cb.value);
      const reasons = Array.from(document.querySelectorAll('.reg-reason:checked')).map(cb => cb.value);
      const effects = Array.from(document.querySelectorAll('.reg-effect:checked')).map(cb => cb.value);
      
      appState.registrationData = {
        ...appState.registrationData,
        times,
        reasons,
        effects
      };
    } else if (appState.registrationStep === 5) {
      // Step 5: Communication Preferences
      const emailPromos = document.getElementById('email-promos').checked;
      const emailProducts = document.getElementById('email-products').checked;
      const emailWeekly = document.getElementById('email-weekly').checked;
      const emailEducation = document.getElementById('email-education').checked;
      
      const smsFlash = document.getElementById('sms-flash').checked;
      const smsRewards = document.getElementById('sms-rewards').checked;
      const smsClose = document.getElementById('sms-close').checked;
      const smsNearby = document.getElementById('sms-nearby').checked;
      
      const pushNearby = document.getElementById('push-nearby').checked;
      const pushMilestones = document.getElementById('push-milestones').checked;
      const pushEvents = document.getElementById('push-events').checked;
      
      const commFrequency = document.querySelector('input[name="reg-comm-frequency"]:checked')?.value || '2-3weekly';
      
      const personalize = document.getElementById('personalize').checked;
      const shareVendors = document.getElementById('share-vendors').checked;
      const thirdParty = document.getElementById('third-party').checked;
      
      appState.registrationData = {
        ...appState.registrationData,
        email_optin: emailPromos || emailProducts || emailWeekly || emailEducation,
        sms_optin: smsFlash || smsRewards || smsClose || smsNearby,
        email_prefs: { emailPromos, emailProducts, emailWeekly, emailEducation },
        sms_prefs: { smsFlash, smsRewards, smsClose, smsNearby },
        push_prefs: { pushNearby, pushMilestones, pushEvents },
        comm_frequency: commFrequency,
        personalize,
        shareVendors,
        thirdParty
      };
    } else if (appState.registrationStep === 6) {
      // Step 6: Terms validation
      const ageAccepted = document.getElementById('accept-age').checked;
      const termsAccepted = document.getElementById('accept-terms').checked;
      const privacyAccepted = document.getElementById('accept-privacy').checked;
      
      if (!ageAccepted || !termsAccepted || !privacyAccepted) {
        alert('Please accept all terms and verify your age (21+)');
        return;
      }
    }
    
    appState.registrationStep++;
    this.updateRegistrationStep();
  },
  
  prevRegistrationStep() {
    if (appState.registrationStep > 1) {
      appState.registrationStep--;
      this.updateRegistrationStep();
    }
  },
  
  registrationBack() {
    if (appState.registrationStep === 1) {
      this.showView('customer-registration-welcome');
    } else {
      this.prevRegistrationStep();
    }
  },
  

  
  completeRegistration() {
    // Update customer data with comprehensive registration info
    const customer = appState.customers.find(c => c.id === 'c1');
    if (customer) {
      customer.name = appState.registrationData.name;
      customer.email = appState.registrationData.email;
      customer.phone = appState.registrationData.phone;
      customer.dob = appState.registrationData.dob;
      customer.gender = appState.registrationData.gender;
      customer.zip = appState.registrationData.zip;
      customer.city = appState.registrationData.city;
      customer.state = appState.registrationData.state;
      customer.source = appState.registrationData.source;
      customer.products = appState.registrationData.products;
      customer.frequency = appState.registrationData.frequency;
      customer.spending = appState.registrationData.spending;
      customer.times = appState.registrationData.times;
      customer.reasons = appState.registrationData.reasons;
      customer.effects = appState.registrationData.effects;
      customer.email_optin = appState.registrationData.email_optin;
      customer.sms_optin = appState.registrationData.sms_optin;
      customer.email_prefs = appState.registrationData.email_prefs;
      customer.sms_prefs = appState.registrationData.sms_prefs;
      customer.push_prefs = appState.registrationData.push_prefs;
      customer.comm_frequency = appState.registrationData.comm_frequency;
      customer.personalize = appState.registrationData.personalize;
      customer.shareVendors = appState.registrationData.shareVendors;
      customer.thirdParty = appState.registrationData.thirdParty;
      customer.preferred_contact = appState.registrationData.email_optin && appState.registrationData.sms_optin ? 'Both' : 
                                   appState.registrationData.email_optin ? 'Email' : 'SMS';
    }
    
    // Reset registration state
    appState.registrationStep = 1;
    appState.registrationData = {};
    
    // Load customer dashboard
    this.loadCustomerDashboard();
    this.showView('customer-dashboard');
  },
  
  loadCustomerDashboard() {
    const customerId = 'c1';
    const customer = appState.customers.find(c => c.id === customerId);
    
    const nameDisplay = document.getElementById('customer-name-display');
    if (nameDisplay) {
      nameDisplay.textContent = customer.name.split(' ')[0];
    }
    
    this.loadMyVendors();
    this.loadVendorDirectory();
  },
  
  switchDashboardTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    
    if (tab === 'my-vendors') {
      document.getElementById('my-vendors-tab').classList.add('active');
    } else if (tab === 'discover') {
      document.getElementById('discover-tab').classList.add('active');
    }
  },
  
  loadMyVendors() {
    const customerId = 'c1';
    const customerCards = appState.customerCards.filter(card => card.customer_id === customerId);
    const cardsContainer = document.getElementById('customer-cards-list');
    const badge = document.getElementById('vendor-count-badge');
    
    if (badge) {
      badge.textContent = `${customerCards.length} active`;
    }
    
    if (customerCards.length === 0) {
      cardsContainer.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 40px;">No loyalty programs yet. Check out the Discover tab to join vendors!</p>';
      return;
    }
    
    cardsContainer.innerHTML = customerCards.map(card => {
      const vendor = appState.vendors.find(v => v.id === card.vendor_id);
      let progressText = '';
      let progressPercent = 0;
      let statusText = '';
      const terminology = vendor.custom_terminology || 'purchases';
      
      if (vendor.reward_type === 'purchase_based') {
        const current = card.punches || card.visits || 0;
        progressText = `${current} / ${vendor.threshold} ${terminology}`;
        progressPercent = (current / vendor.threshold) * 100;
        const remaining = vendor.threshold - current;
        statusText = remaining > 0 ? `${remaining} away from reward!` : 'Reward ready! 🎉';
      } else if (vendor.reward_type === 'spend_based') {
        progressText = `$${card.total_spent} / $${vendor.threshold} spent`;
        progressPercent = (card.total_spent / vendor.threshold) * 100;
        const remaining = vendor.threshold - card.total_spent;
        statusText = remaining > 0 ? `$${remaining.toFixed(0)} to go` : 'Reward ready! 🎉';
      } else if (vendor.reward_type === 'visits_based') {
        const current = card.visits || 0;
        progressText = `${current} / ${vendor.threshold} ${terminology}`;
        progressPercent = (current / vendor.threshold) * 100;
        const remaining = vendor.threshold - current;
        statusText = remaining > 0 ? `${remaining} more ${terminology}!` : 'Reward ready! 🎉';
      } else if (vendor.reward_type === 'points_based') {
        const current = card.points || 0;
        progressText = `${current} / ${vendor.threshold} points`;
        progressPercent = (current / vendor.threshold) * 100;
        const remaining = vendor.threshold - current;
        statusText = remaining > 0 ? `${remaining} more points!` : 'Reward ready! 🎉';
      }
      
      return `
        <div class="loyalty-card" onclick="app.showCardDetail('${card.customer_id}', '${card.vendor_id}')">
          <h3>${vendor.name}</h3>
          <p style="font-size: 12px; color: var(--color-text-secondary); margin: 4px 0 12px 0;">${vendor.specialization}</p>
          <div class="card-progress">
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${Math.min(progressPercent, 100)}%"></div>
            </div>
            <div class="progress-text">${progressText}</div>
            <div style="font-size: 14px; color: var(--color-primary); margin-top: 8px; font-weight: 500;">${statusText}</div>
          </div>
          <div class="card-reward" style="margin-top: 12px;">
            🎁 ${vendor.reward_description}
          </div>
          <div class="loyalty-card-footer">
            <button class="btn btn--secondary btn-small" onclick="event.stopPropagation(); app.showProductCatalog('${card.vendor_id}')">🛍️ Products</button>
            <button class="btn btn--primary btn-small" onclick="event.stopPropagation(); app.showCardDetail('${card.customer_id}', '${card.vendor_id}')">Show QR</button>
          </div>
        </div>
      `;
    }).join('');
  },
  
  loadVendorDirectory() {
    const customerId = 'c1';
    const enrolledVendorIds = appState.customerCards
      .filter(c => c.customer_id === customerId)
      .map(c => c.vendor_id);
    
    const container = document.getElementById('vendors-directory');
    
    container.innerHTML = appState.vendors.map(vendor => {
      const isEnrolled = enrolledVendorIds.includes(vendor.id);
      
      let rewardTypeText = '';
      const terminology = vendor.custom_terminology || 'purchases';
      const rewardTerm = vendor.reward_terminology_rewards || 'reward';
      if (vendor.reward_type === 'purchase_based') {
        rewardTypeText = `${vendor.threshold} ${terminology} → ${rewardTerm}`;
      } else if (vendor.reward_type === 'spend_based') {
        rewardTypeText = `Spend $${vendor.threshold} → ${rewardTerm}`;
      } else if (vendor.reward_type === 'visits_based') {
        rewardTypeText = `${vendor.threshold} ${terminology} → ${rewardTerm}`;
      } else if (vendor.reward_type === 'points_based') {
        rewardTypeText = `${vendor.threshold} points → ${rewardTerm}`;
      }
      
      return `
        <div class="vendor-directory-card" onclick="app.showVendorDetail('${vendor.id}')">
          <div class="vendor-directory-header">
            <div class="vendor-directory-icon">🌿</div>
            <div class="vendor-directory-info">
              <h4>${vendor.name}</h4>
              <p>${vendor.specialization}</p>
            </div>
          </div>
          ${isEnrolled ? '<div class="enrollment-badge">✓ Enrolled</div>' : '<div class="enrollment-badge new">⭐ New Vendor</div>'}
          <div class="vendor-directory-details">
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Products:</span>
              <span class="vendor-detail-value">${vendor.product_count} items</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Reward Program:</span>
              <span class="vendor-detail-value">${rewardTypeText}</span>
            </div>
            <div class="vendor-detail-row">
              <span class="vendor-detail-label">Customers:</span>
              <span class="vendor-detail-value">${vendor.customer_count}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  },
  
  searchVendors() {
    const query = document.getElementById('vendor-search').value.toLowerCase();
    const vendorCards = document.querySelectorAll('.vendor-directory-card');
    
    vendorCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? 'block' : 'none';
    });
  },
  
  saveVendorSettings() {
    const vendor = appState.vendors.find(v => v.id === appState.selectedVendorId);
    if (!vendor) return;
    
    const selectedType = document.querySelector('input[name="reward-type"]:checked')?.value;
    vendor.reward_type = selectedType;
    
    if (selectedType === 'purchase_based') {
      vendor.threshold = parseInt(document.getElementById('threshold-purchases')?.value) || 10;
    } else if (selectedType === 'spend_based') {
      vendor.threshold = parseInt(document.getElementById('threshold-amount')?.value) || 200;
    } else if (selectedType === 'visits_based') {
      vendor.threshold = parseInt(document.getElementById('threshold-visits')?.value) || 10;
    } else if (selectedType === 'points_based') {
      vendor.threshold = parseInt(document.getElementById('points-threshold')?.value) || 100;
      vendor.points_per_dollar = parseFloat(document.getElementById('points-per-dollar')?.value) || 1;
    }
    
    const rewardField = document.getElementById('reward-description');
    if (rewardField && rewardField.value) {
      vendor.reward_description = rewardField.value;
    }
    
    const terminologyField = document.getElementById('custom-terminology');
    if (terminologyField) {
      vendor.custom_terminology = terminologyField.value || 'purchases';
    }
    
    // Save brand customization
    const brandApproach = document.getElementById('brand-approach');
    if (brandApproach) vendor.brand_approach = brandApproach.value;
    
    const brandColorPrimary = document.getElementById('brand-color-primary');
    if (brandColorPrimary) vendor.brand_color_primary = brandColorPrimary.value;
    
    const brandColorSecondary = document.getElementById('brand-color-secondary');
    if (brandColorSecondary) vendor.brand_color_secondary = brandColorSecondary.value;
    
    const customerTerm = document.getElementById('customer-terminology');
    if (customerTerm) vendor.reward_terminology_customer = customerTerm.value || 'customers';
    
    const productTerm = document.getElementById('product-terminology');
    if (productTerm) vendor.reward_terminology_product = productTerm.value || 'products';
    
    const rewardTerm = document.getElementById('reward-terminology');
    if (rewardTerm) vendor.reward_terminology_rewards = rewardTerm.value || 'rewards';
    
    alert('✅ Program settings saved successfully!\n\nYour loyalty program and brand customization have been updated. Changes will be visible to customers immediately.');
    this.showView('vendor-dashboard');
  },
  
  showVendorDetail(vendorId) {
    appState.selectedVendorForProducts = vendorId;
    const vendor = appState.vendors.find(v => v.id === vendorId);
    const customerId = 'c1';
    const card = appState.customerCards.find(c => 
      c.customer_id === customerId && c.vendor_id === vendorId
    );
    
    document.getElementById('vendor-detail-name').textContent = vendor.name;
    document.getElementById('vendor-detail-title').textContent = vendor.name;
    document.getElementById('vendor-detail-specialization').textContent = vendor.specialization;
    
    let rewardTypeText = '';
    if (vendor.reward_type === 'purchase_based') {
      rewardTypeText = `Purchase-based (${vendor.threshold} purchases)`;
    } else {
      rewardTypeText = `Spend-based ($${vendor.threshold} total)`;
    }
    document.getElementById('vendor-reward-type').textContent = rewardTypeText;
    document.getElementById('vendor-reward-desc').textContent = vendor.reward_description;
    
    document.getElementById('vendor-contact-phone').textContent = vendor.phone;
    document.getElementById('vendor-contact-email').textContent = vendor.email;
    
    const enrollmentSection = document.getElementById('enrollment-status');
    const actionBtn = document.getElementById('vendor-action-btn');
    
    if (card) {
      let progressText = '';
      let progressPercent = 0;
      
      if (vendor.reward_type === 'purchase_based') {
        progressText = `${card.punches} / ${vendor.threshold} purchases`;
        progressPercent = (card.punches / vendor.threshold) * 100;
      } else {
        progressText = `$${card.total_spent} / $${vendor.threshold} spent`;
        progressPercent = (card.total_spent / vendor.threshold) * 100;
      }
      
      enrollmentSection.innerHTML = `
        <div class="enrollment-progress">
          <h4>Your Progress</h4>
          <div class="progress-bar" style="margin-bottom: 8px;">
            <div class="progress-fill" style="width: ${Math.min(progressPercent, 100)}%"></div>
          </div>
          <div class="progress-text" style="font-size: 16px; font-weight: 500;">${progressText}</div>
        </div>
      `;
      
      actionBtn.textContent = '📱 Show My QR Code';
      actionBtn.onclick = () => app.showCardDetail(customerId, vendorId);
    } else {
      enrollmentSection.innerHTML = `
        <p style="color: var(--color-text-secondary); margin-bottom: 16px;">Join this loyalty program to start earning rewards!</p>
      `;
      
      actionBtn.textContent = '✨ Join Loyalty Program';
      actionBtn.onclick = () => app.joinVendorProgram(vendorId);
    }
    
    this.showView('vendor-detail');
  },
  
  handleVendorAction() {
    // Handled by dynamic onclick
  },
  
  showProductCatalogFromDetail() {
    const vendorId = appState.selectedVendorForProducts;
    this.showProductCatalog(vendorId);
  },
  
  joinVendorProgram(vendorId) {
    const customerId = 'c1';
    const vendor = appState.vendors.find(v => v.id === vendorId);
    
    const newCard = {
      customer_id: customerId,
      vendor_id: vendorId,
      punches: 0,
      total_spent: 0,
      rewards_earned: 0,
      last_visit: new Date().toISOString().split('T')[0],
      history: []
    };
    
    appState.customerCards.push(newCard);
    
    alert(`🎉 Welcome to ${vendor.name}!\n\nYou've successfully joined their loyalty program. Start making purchases to earn rewards!`);
    
    this.loadMyVendors();
    this.loadVendorDirectory();
    this.showVendorDetail(vendorId);
  },
  
  showCardDetail(customerId, vendorId) {
    const card = appState.customerCards.find(c => 
      c.customer_id === customerId && c.vendor_id === vendorId
    );
    const vendor = appState.vendors.find(v => v.id === vendorId);
    
    if (!card || !vendor) return;
    
    document.getElementById('card-detail-vendor-name').textContent = vendor.name;
    
    const qrCode = document.getElementById('customer-qr-code');
    qrCode.innerHTML = `
      <svg viewBox="0 0 100 100" style="width: 100%; height: 100%;">
        <rect width="100" height="100" fill="white"/>
        <rect x="10" y="10" width="15" height="15" fill="black"/>
        <rect x="75" y="10" width="15" height="15" fill="black"/>
        <rect x="10" y="75" width="15" height="15" fill="black"/>
        <rect x="35" y="35" width="30" height="30" fill="black"/>
        <text x="50" y="55" text-anchor="middle" font-size="8" fill="white">${customerId}</text>
      </svg>
    `;
    
    this.renderPunchCard('punch-card-visual', card, vendor);
    
    let progressText = '';
    if (vendor.reward_type === 'purchase_based') {
      const remaining = vendor.threshold - card.punches;
      progressText = remaining > 0 
        ? `${remaining} more purchase${remaining !== 1 ? 's' : ''} to earn your reward!`
        : 'Reward ready to redeem!';
    } else {
      const remaining = vendor.threshold - card.total_spent;
      progressText = remaining > 0 
        ? `$${remaining.toFixed(2)} more to earn your reward!`
        : 'Reward ready to redeem!';
    }
    document.getElementById('progress-text').textContent = progressText;
    
    document.getElementById('reward-description').textContent = vendor.reward_description;
    
    const historyList = document.getElementById('history-list');
    if (card.history && card.history.length > 0) {
      historyList.innerHTML = card.history.slice(0, 5).map(h => {
        const typeText = h.type === 'punch' ? 'Purchase' : `Spent $${h.amount}`;
        return `
          <div class="history-item">
            <span>${typeText}</span>
            <span class="history-date">${h.date}</span>
          </div>
        `;
      }).join('');
    } else {
      historyList.innerHTML = '<p style="color: var(--color-text-secondary);">No history yet</p>';
    }
    
    this.showView('customer-card-detail');
  },
  
  renderPunchCard(containerId, card, vendor) {
    const container = document.getElementById(containerId);
    const threshold = vendor.threshold;
    const current = vendor.reward_type === 'purchase_based' ? card.punches : Math.floor((card.total_spent / vendor.threshold) * threshold);
    
    let circles = '';
    for (let i = 0; i < threshold; i++) {
      const filled = i < current ? 'filled' : '';
      const icon = i < current ? '✓' : '';
      circles += `<div class="punch-circle ${filled}">${icon}</div>`;
    }
    
    container.innerHTML = circles;
  },
  
  loadVendorDashboard() {
    this.updateVendorStats();
    this.loadRecentCheckins();
    this.loadCampaignHistory();
    this.updateVendorInventorySummary();
    this.loadVendorProgramSettings();
    this.updateCurrentProgramSummary();
  },
  
  updateCurrentProgramSummary() {
    const vendor = appState.vendors.find(v => v.id === appState.selectedVendorId);
    if (!vendor) return;
    
    const summaryEl = document.getElementById('current-program-summary');
    if (!summaryEl) return;
    
    const terminology = vendor.custom_terminology || 'purchases';
    let programText = '';
    
    if (vendor.reward_type === 'purchase_based') {
      programText = `Purchase-Based: ${vendor.threshold} ${terminology} → ${vendor.reward_description}`;
    } else if (vendor.reward_type === 'spend_based') {
      programText = `Spend-Based: $${vendor.threshold} → ${vendor.reward_description}`;
    } else if (vendor.reward_type === 'visits_based') {
      programText = `Visits-Based: ${vendor.threshold} ${terminology} → ${vendor.reward_description}`;
    } else if (vendor.reward_type === 'points_based') {
      programText = `Points-Based: ${vendor.threshold} points (${vendor.points_per_dollar} per $) → ${vendor.reward_description}`;
    }
    
    summaryEl.textContent = programText;
  },
  
  loadVendorProgramSettings() {
    const vendor = appState.vendors.find(v => v.id === appState.selectedVendorId);
    if (!vendor) return;
    
    // Show VIP program section only for Gold/Platinum tiers
    const vipSection = document.getElementById('vip-program-section');
    if (vipSection) {
      if (vendor.tier === 'gold' || vendor.tier === 'platinum') {
        vipSection.style.display = 'block';
      } else {
        vipSection.style.display = 'none';
      }
    }
    
    // Set program type radio
    document.querySelectorAll('input[name="reward-type"]').forEach(radio => {
      radio.checked = radio.value === vendor.reward_type;
    });
    
    // Set threshold values
    if (vendor.reward_type === 'purchase_based') {
      document.getElementById('threshold-purchases').value = vendor.threshold;
    } else if (vendor.reward_type === 'spend_based') {
      document.getElementById('threshold-amount').value = vendor.threshold;
    } else if (vendor.reward_type === 'visits_based') {
      const visitsField = document.getElementById('threshold-visits');
      if (visitsField) visitsField.value = vendor.threshold;
    } else if (vendor.reward_type === 'points_based') {
      const pointsPerDollar = document.getElementById('points-per-dollar');
      const pointsThreshold = document.getElementById('points-threshold');
      if (pointsPerDollar) pointsPerDollar.value = vendor.points_per_dollar || 1;
      if (pointsThreshold) pointsThreshold.value = vendor.threshold;
    }
    
    // Set reward description
    const rewardField = document.getElementById('reward-description');
    if (rewardField && typeof rewardField.value !== 'undefined') {
      rewardField.value = vendor.reward_description;
    }
    
    // Set custom terminology
    const terminologyField = document.getElementById('custom-terminology');
    if (terminologyField) {
      terminologyField.value = vendor.custom_terminology || '';
    }
    
    // Set brand customization
    const brandApproach = document.getElementById('brand-approach');
    if (brandApproach) brandApproach.value = vendor.brand_approach || 'Discrete & Artisanal';
    
    const brandColorPrimary = document.getElementById('brand-color-primary');
    if (brandColorPrimary) brandColorPrimary.value = vendor.brand_color_primary || '#2D5016';
    
    const brandColorSecondary = document.getElementById('brand-color-secondary');
    if (brandColorSecondary) brandColorSecondary.value = vendor.brand_color_secondary || '#B8860B';
    
    const customerTerm = document.getElementById('customer-terminology');
    if (customerTerm) customerTerm.value = vendor.reward_terminology_customer || '';
    
    const productTerm = document.getElementById('product-terminology');
    if (productTerm) productTerm.value = vendor.reward_terminology_product || '';
    
    const rewardTerm = document.getElementById('reward-terminology');
    if (rewardTerm) rewardTerm.value = vendor.reward_terminology_rewards || '';
    
    this.updateProgramTypeFields();
    this.updateSettingsPreview();
  },
  
  updateProgramTypeFields() {
    const selectedType = document.querySelector('input[name="reward-type"]:checked')?.value;
    
    const fieldPurchases = document.getElementById('field-purchases');
    const fieldAmount = document.getElementById('field-amount');
    const fieldVisits = document.getElementById('field-visits');
    const fieldPoints = document.getElementById('field-points');
    
    if (fieldPurchases) fieldPurchases.style.display = 'none';
    if (fieldAmount) fieldAmount.style.display = 'none';
    if (fieldVisits) fieldVisits.style.display = 'none';
    if (fieldPoints) fieldPoints.style.display = 'none';
    
    if (selectedType === 'purchase_based' && fieldPurchases) {
      fieldPurchases.style.display = 'block';
    } else if (selectedType === 'spend_based' && fieldAmount) {
      fieldAmount.style.display = 'block';
    } else if (selectedType === 'visits_based' && fieldVisits) {
      fieldVisits.style.display = 'block';
    } else if (selectedType === 'points_based' && fieldPoints) {
      fieldPoints.style.display = 'block';
    }
    
    this.updateSettingsPreview();
  },
  
  updateSettingsPreview() {
    const previewText = document.getElementById('preview-text');
    if (!previewText) return;
    
    const selectedType = document.querySelector('input[name="reward-type"]:checked')?.value;
    const rewardDesc = document.getElementById('reward-description')?.value || 'Free reward';
    const terminology = document.getElementById('custom-terminology')?.value || 'purchases';
    
    let text = '';
    
    if (selectedType === 'purchase_based') {
      const threshold = document.getElementById('threshold-purchases')?.value || 10;
      text = `Make ${threshold} ${terminology} and earn: ${rewardDesc}!`;
    } else if (selectedType === 'spend_based') {
      const threshold = document.getElementById('threshold-amount')?.value || 200;
      text = `Spend $${threshold} and earn: ${rewardDesc}!`;
    } else if (selectedType === 'visits_based') {
      const threshold = document.getElementById('threshold-visits')?.value || 10;
      text = `Complete ${threshold} ${terminology} and earn: ${rewardDesc}!`;
    } else if (selectedType === 'points_based') {
      const threshold = document.getElementById('points-threshold')?.value || 100;
      const perDollar = document.getElementById('points-per-dollar')?.value || 1;
      text = `Earn ${perDollar} point per $1, reach ${threshold} points: ${rewardDesc}!`;
    }
    
    previewText.textContent = text;
  },
  
  updateVendorInventorySummary() {
    const vendorId = appState.selectedVendorId;
    const products = appState.products.filter(p => p.vendor_id === vendorId);
    
    const totalProducts = products.length;
    const inStock = products.filter(p => p.stock_status === 'In Stock').length;
    const lowStock = products.filter(p => p.stock_status === 'Low Stock').length;
    
    const summaryEl = document.getElementById('vendor-inventory-summary');
    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="inventory-summary-item">
          <span class="summary-icon">🛍️</span>
          <div>
            <div class="summary-value">${totalProducts} products</div>
            <div class="summary-detail">${inStock} in stock</div>
          </div>
        </div>
        ${lowStock > 0 ? `
          <div class="inventory-summary-item warning">
            <span class="summary-icon">⚠️</span>
            <div>
              <div class="summary-value">${lowStock} low stock alerts</div>
              <div class="summary-detail">Update inventory</div>
            </div>
          </div>
        ` : ''}
      `;
    }
  },
  
  loadCustomerDatabase() {
    const vendorId = appState.selectedVendorId;
    const vendorCards = appState.customerCards.filter(c => c.vendor_id === vendorId);
    const vendor = appState.vendors.find(v => v.id === vendorId);
    
    document.getElementById('db-total').textContent = vendorCards.length;
    const emailCount = vendorCards.filter(card => {
      const customer = appState.customers.find(c => c.id === card.customer_id);
      return customer && customer.email_optin;
    }).length;
    document.getElementById('db-email').textContent = emailCount;
    
    const smsCount = vendorCards.filter(card => {
      const customer = appState.customers.find(c => c.id === card.customer_id);
      return customer && customer.sms_optin;
    }).length;
    document.getElementById('db-sms').textContent = smsCount;
    
    this.renderDatabaseTable(vendorCards, vendor);
  },
  
  renderDatabaseTable(cards, vendor) {
    const table = document.getElementById('database-table');
    
    let html = `
      <div class="db-row header">
        <div class="db-cell">Name</div>
        <div class="db-cell">Contact</div>
        <div class="db-cell">Punches</div>
        <div class="db-cell">Email</div>
        <div class="db-cell">SMS</div>
      </div>
    `;
    
    cards.forEach(card => {
      const customer = appState.customers.find(c => c.id === card.customer_id);
      if (!customer) return;
      
      html += `
        <div class="db-row">
          <div class="db-cell"><strong>${customer.name}</strong></div>
          <div class="db-cell">${customer.email}<br/><small>${customer.phone}</small></div>
          <div class="db-cell">${card.punches}/${vendor.threshold}</div>
          <div class="db-cell"><span class="optin-badge ${customer.email_optin ? 'yes' : 'no'}">${customer.email_optin ? '✓ Yes' : '✗ No'}</span></div>
          <div class="db-cell"><span class="optin-badge ${customer.sms_optin ? 'yes' : 'no'}">${customer.sms_optin ? '✓ Yes' : '✗ No'}</span></div>
        </div>
      `;
    });
    
    table.innerHTML = html;
  },
  
  filterDatabase(filter) {
    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.classList.remove('active');
    });
    event.target.classList.add('active');
    
    const vendorId = appState.selectedVendorId;
    let cards = appState.customerCards.filter(c => c.vendor_id === vendorId);
    const vendor = appState.vendors.find(v => v.id === vendorId);
    
    if (filter === 'email') {
      cards = cards.filter(card => {
        const customer = appState.customers.find(c => c.id === card.customer_id);
        return customer && customer.email_optin;
      });
    } else if (filter === 'sms') {
      cards = cards.filter(card => {
        const customer = appState.customers.find(c => c.id === card.customer_id);
        return customer && customer.sms_optin;
      });
    } else if (filter === 'reward-ready') {
      cards = cards.filter(card => card.punches >= vendor.threshold);
    } else if (filter === 'at-risk') {
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
      cards = cards.filter(card => new Date(card.last_visit) < thirtyDaysAgo);
    }
    
    this.renderDatabaseTable(cards, vendor);
  },
  
  exportDatabase(type) {
    alert(`Exporting ${type} list to CSV...\n\nIn a real application, this would download a CSV file with the customer data.`);
  },
  
  loadCampaignHistory() {
    const vendorId = appState.selectedVendorId;
    const campaigns = appState.campaigns.filter(c => c.vendor_id === vendorId);
    const container = document.getElementById('campaign-history');
    
    if (!container) return;
    
    if (campaigns.length === 0) {
      container.innerHTML = '<p style="color: var(--color-text-secondary);">No campaigns sent yet</p>';
      return;
    }
    
    container.innerHTML = campaigns.map(campaign => `
      <div class="campaign-card">
        <div class="campaign-header">
          <div>
            <div class="campaign-name">${campaign.name}</div>
            <div class="campaign-date">${campaign.sent_date}</div>
          </div>
          <span class="campaign-channel">${campaign.channel}</span>
        </div>
        <div class="campaign-metrics">
          <div class="campaign-metric">
            <div class="campaign-metric-value">${campaign.recipients}</div>
            <div class="campaign-metric-label">Recipients</div>
          </div>
          ${campaign.email_open_rate ? `
            <div class="campaign-metric">
              <div class="campaign-metric-value">${campaign.email_open_rate}</div>
              <div class="campaign-metric-label">Open Rate</div>
            </div>
          ` : ''}
          ${campaign.sms_response_rate ? `
            <div class="campaign-metric">
              <div class="campaign-metric-value">${campaign.sms_response_rate}</div>
              <div class="campaign-metric-label">Response</div>
            </div>
          ` : ''}
          <div class="campaign-metric">
            <div class="campaign-metric-value">${campaign.conversions}</div>
            <div class="campaign-metric-label">Conversions</div>
          </div>
          <div class="campaign-metric">
            <div class="campaign-metric-value">${campaign.revenue_generated}</div>
            <div class="campaign-metric-label">Revenue</div>
          </div>
        </div>
      </div>
    `).join('');
  },
  
  nextCampaignStep() {
    if (appState.campaignStep < 5) {
      appState.campaignStep++;
      this.updateCampaignStep();
      
      if (appState.campaignStep === 2) {
        this.loadAudienceSegments();
      } else if (appState.campaignStep === 3) {
        this.loadTemplates();
      } else if (appState.campaignStep === 4) {
        this.setupMessageEditor();
      } else if (appState.campaignStep === 5) {
        this.showCampaignSummary();
      }
    }
  },
  
  updateCampaignStep() {
    for (let i = 1; i <= 5; i++) {
      const step = document.getElementById(`campaign-step-${i}`);
      if (step) {
        if (i === appState.campaignStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      }
    }
  },
  
  loadAudienceSegments() {
    const container = document.getElementById('audience-segments');
    const segments = [
      { id: 'all', name: 'All Customers', count: 187 },
      { id: 'email', name: 'Email Subscribers', count: 156 },
      { id: 'sms', name: 'SMS Subscribers', count: 142 },
      { id: 'one-away', name: 'Customers 1 punch away from reward', count: 45 },
      { id: 'reward-ready', name: 'Customers with unclaimed rewards', count: 23 },
      { id: 'inactive', name: 'Inactive customers (30+ days)', count: 31 },
      { id: 'high-value', name: 'High-value customers (5+ purchases)', count: 67 }
    ];
    
    container.innerHTML = segments.map((segment, index) => `
      <label class="segment-option" onclick="app.selectSegment('${segment.id}')">
        <input type="radio" name="audience" value="${segment.id}" ${index === 0 ? 'checked' : ''}>
        <div class="segment-info">
          <div class="segment-name">${segment.name}</div>
          <div class="segment-count">${segment.count} customers</div>
        </div>
      </label>
    `).join('');
  },
  
  selectSegment(segmentId) {
    appState.campaignData.audience = segmentId;
    document.querySelectorAll('.segment-option').forEach(opt => {
      opt.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
  },
  
  loadTemplates() {
    const channel = document.querySelector('input[name="campaign-channel"]:checked').value;
    appState.campaignData.channel = channel;
    
    const templates = channel === 'sms' || channel === 'both' 
      ? appState.campaignTemplates.sms 
      : appState.campaignTemplates.email;
    
    const container = document.getElementById('template-grid');
    
    container.innerHTML = templates.map((template, index) => `
      <div class="template-card" onclick="app.selectTemplate(${index})">
        <div class="template-name">${template.name}</div>
        <div class="template-preview">${template.subject || template.message}</div>
      </div>
    `).join('');
  },
  
  selectTemplate(index) {
    const channel = appState.campaignData.channel;
    const templates = channel === 'sms' || channel === 'both'
      ? appState.campaignTemplates.sms
      : appState.campaignTemplates.email;
    
    appState.campaignData.template = templates[index];
    
    document.querySelectorAll('.template-card').forEach(card => {
      card.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
  },
  
  setupMessageEditor() {
    const template = appState.campaignData.template;
    if (template) {
      if (template.subject) {
        document.getElementById('campaign-subject').value = template.subject;
        document.getElementById('campaign-message').value = template.body;
      } else {
        document.getElementById('campaign-message').value = template.message;
      }
    }
    
    const messageField = document.getElementById('campaign-message');
    messageField.addEventListener('input', () => {
      document.getElementById('char-count').textContent = messageField.value.length;
      this.updateMessagePreview();
    });
    
    document.getElementById('campaign-subject').addEventListener('input', () => {
      this.updateMessagePreview();
    });
    
    this.updateMessagePreview();
  },
  
  insertMergeField(field) {
    const messageField = document.getElementById('campaign-message');
    const cursorPos = messageField.selectionStart;
    const textBefore = messageField.value.substring(0, cursorPos);
    const textAfter = messageField.value.substring(cursorPos);
    messageField.value = textBefore + field + textAfter;
    messageField.focus();
    messageField.setSelectionRange(cursorPos + field.length, cursorPos + field.length);
    this.updateMessagePreview();
  },
  
  updateMessagePreview() {
    const subject = document.getElementById('campaign-subject').value;
    const message = document.getElementById('campaign-message').value;
    const preview = document.getElementById('message-preview');
    
    let previewText = message
      .replace(/{customer_name}/g, 'Alex')
      .replace(/{current_punches}/g, '5')
      .replace(/{punches_left}/g, '1')
      .replace(/{vendor_name}/g, 'Green Valley Premium')
      .replace(/{reward_description}/g, 'Free 1/8th of your choice');
    
    if (subject) {
      previewText = `<strong>Subject:</strong> ${subject}<br/><br/>${previewText}`;
    }
    
    preview.innerHTML = previewText || '<em>Start typing to see preview...</em>';
  },
  
  showCampaignSummary() {
    const subject = document.getElementById('campaign-subject').value;
    const message = document.getElementById('campaign-message').value;
    const channel = appState.campaignData.channel;
    const audience = appState.campaignData.audience;
    
    appState.campaignData.subject = subject;
    appState.campaignData.message = message;
    
    const audienceCount = {
      'all': 187,
      'email': 156,
      'sms': 142,
      'one-away': 45,
      'reward-ready': 23,
      'inactive': 31,
      'high-value': 67
    }[audience] || 187;
    
    const summary = document.getElementById('campaign-summary');
    summary.innerHTML = `
      <div class="summary-row">
        <span class="summary-label">Channel</span>
        <span class="summary-value">${channel === 'both' ? 'Email + SMS' : channel.toUpperCase()}</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Recipients</span>
        <span class="summary-value">${audienceCount} customers</span>
      </div>
      ${subject ? `
        <div class="summary-row">
          <span class="summary-label">Subject</span>
          <span class="summary-value">${subject}</span>
        </div>
      ` : ''}
      <div class="summary-row">
        <span class="summary-label">Message Preview</span>
        <span class="summary-value">${message.substring(0, 50)}...</span>
      </div>
      <div class="summary-row">
        <span class="summary-label">Estimated Delivery</span>
        <span class="summary-value">Within 5 minutes</span>
      </div>
    `;
  },
  
  sendCampaign() {
    const audienceCount = {
      'all': 187,
      'email': 156,
      'sms': 142,
      'one-away': 45,
      'reward-ready': 23,
      'inactive': 31,
      'high-value': 67
    }[appState.campaignData.audience] || 187;
    
    const newCampaign = {
      id: `camp${appState.campaigns.length + 1}`,
      vendor_id: appState.selectedVendorId,
      name: appState.campaignData.subject || 'New Campaign',
      channel: appState.campaignData.channel,
      sent_date: new Date().toISOString().split('T')[0],
      recipients: audienceCount,
      segment: appState.campaignData.audience,
      email_open_rate: appState.campaignData.channel !== 'sms' ? '0%' : null,
      sms_response_rate: appState.campaignData.channel !== 'email' ? '0%' : null,
      conversions: 0,
      revenue_generated: '$0'
    };
    
    appState.campaigns.push(newCampaign);
    
    appState.campaignStep = 1;
    appState.campaignData = {
      channel: 'email',
      audience: 'all',
      template: null,
      subject: '',
      message: ''
    };
    
    alert(`Campaign sent to ${audienceCount} customers!\n\nYour message is being delivered now. Check back later for analytics.`);
    this.showView('vendor-marketing');
    this.loadCampaignHistory();
  },
  
  updateVendorStats() {
    const vendorId = appState.selectedVendorId;
    const vendorCards = appState.customerCards.filter(c => c.vendor_id === vendorId);
    
    const activeCustomers = vendorCards.length;
    document.getElementById('stat-active-customers').textContent = activeCustomers;
    
    const rewardsIssued = vendorCards.reduce((sum, card) => sum + card.rewards_earned, 0);
    document.getElementById('stat-rewards-issued').textContent = rewardsIssued;
    
    const totalSpent = vendorCards.reduce((sum, card) => sum + card.total_spent, 0);
    const avgValue = activeCustomers > 0 ? totalSpent / activeCustomers : 0;
    document.getElementById('stat-avg-value').textContent = `$${avgValue.toFixed(0)}`;
    
    const redemptionRate = activeCustomers > 0 ? (rewardsIssued / activeCustomers * 100) : 0;
    document.getElementById('stat-redemption-rate').textContent = `${redemptionRate.toFixed(0)}%`;
  },
  
  loadRecentCheckins() {
    const vendorId = appState.selectedVendorId;
    const vendorCards = appState.customerCards
      .filter(c => c.vendor_id === vendorId)
      .sort((a, b) => new Date(b.last_visit) - new Date(a.last_visit))
      .slice(0, 5);
    
    const checkinsContainer = document.getElementById('recent-checkins');
    
    if (vendorCards.length === 0) {
      checkinsContainer.innerHTML = '<p style="color: var(--color-text-secondary);">No recent check-ins</p>';
      return;
    }
    
    checkinsContainer.innerHTML = vendorCards.map(card => {
      const customer = appState.customers.find(c => c.id === card.customer_id);
      return `
        <div class="checkin-item">
          <div class="checkin-info">
            <div class="checkin-name">${customer.name}</div>
            <div class="checkin-time">${card.last_visit}</div>
          </div>
          <div class="checkin-status">
            ${card.punches} punches
          </div>
        </div>
      `;
    }).join('');
  },
  
  scanDemoCustomer(customerId) {
    appState.selectedCustomerId = customerId;
    this.showAddPunchView();
  },
  
  showAddPunchView() {
    const customerId = appState.selectedCustomerId;
    const vendorId = appState.selectedVendorId;
    
    const customer = appState.customers.find(c => c.id === customerId);
    let card = appState.customerCards.find(c => 
      c.customer_id === customerId && c.vendor_id === vendorId
    );
    
    if (!card) {
      card = {
        customer_id: customerId,
        vendor_id: vendorId,
        punches: 0,
        total_spent: 0,
        rewards_earned: 0,
        last_visit: new Date().toISOString().split('T')[0],
        history: []
      };
      appState.customerCards.push(card);
    }
    
    const vendor = appState.vendors.find(v => v.id === vendorId);
    
    document.getElementById('punch-customer-name').textContent = customer.name;
    document.getElementById('punch-customer-contact').textContent = `${customer.phone} • ${customer.email}`;
    
    this.renderPunchCard('punch-progress-visual', card, vendor);
    
    let progressText = '';
    if (vendor.reward_type === 'purchase_based') {
      progressText = `${card.punches} / ${vendor.threshold} purchases`;
    } else {
      progressText = `$${card.total_spent} / $${vendor.threshold} spent`;
    }
    document.getElementById('punch-progress-text').textContent = progressText;
    
    const punchSection = document.getElementById('punch-action-section');
    const spendSection = document.getElementById('spend-action-section');
    const redeemSection = document.getElementById('redeem-action-section');
    
    const isRewardAvailable = vendor.reward_type === 'purchase_based'
      ? card.punches >= vendor.threshold
      : card.total_spent >= vendor.threshold;
    
    if (isRewardAvailable) {
      punchSection.style.display = 'none';
      spendSection.style.display = 'none';
      redeemSection.style.display = 'block';
      document.getElementById('redeem-reward-text').textContent = vendor.reward_description;
    } else {
      redeemSection.style.display = 'none';
      if (vendor.reward_type === 'purchase_based') {
        punchSection.style.display = 'block';
        spendSection.style.display = 'none';
      } else {
        punchSection.style.display = 'none';
        spendSection.style.display = 'block';
      }
    }
    
    this.showView('vendor-add-punch');
  },
  
  addPunch() {
    const customerId = appState.selectedCustomerId;
    const vendorId = appState.selectedVendorId;
    const card = appState.customerCards.find(c => 
      c.customer_id === customerId && c.vendor_id === vendorId
    );
    const vendor = appState.vendors.find(v => v.id === vendorId);
    
    if (!card) return;
    
    card.punches++;
    card.last_visit = new Date().toISOString().split('T')[0];
    card.history.unshift({
      date: card.last_visit,
      type: 'punch'
    });
    
    const remaining = vendor.threshold - card.punches;
    let message = '';
    if (remaining > 0) {
      message = `${remaining} more purchase${remaining !== 1 ? 's' : ''} until reward!`;
    } else {
      message = 'Reward unlocked! 🎉';
    }
    this.showConfirmation(message);
  },
  
  addSpend() {
    const customerId = appState.selectedCustomerId;
    const vendorId = appState.selectedVendorId;
    const card = appState.customerCards.find(c => 
      c.customer_id === customerId && c.vendor_id === vendorId
    );
    const vendor = appState.vendors.find(v => v.id === vendorId);
    const amountInput = document.getElementById('spend-amount');
    const amount = parseFloat(amountInput.value);
    
    if (!card || !amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    card.total_spent += amount;
    card.last_visit = new Date().toISOString().split('T')[0];
    card.history.unshift({
      date: card.last_visit,
      type: 'spend',
      amount: amount
    });
    
    amountInput.value = '';
    
    const remaining = vendor.threshold - card.total_spent;
    let message = '';
    if (remaining > 0) {
      message = `$${remaining.toFixed(2)} more until reward!`;
    } else {
      message = 'Reward unlocked! 🎉';
    }
    this.showConfirmation(message);
  },
  
  redeemReward() {
    const customerId = appState.selectedCustomerId;
    const vendorId = appState.selectedVendorId;
    const card = appState.customerCards.find(c => 
      c.customer_id === customerId && c.vendor_id === vendorId
    );
    
    if (!card) return;
    
    card.punches = 0;
    card.total_spent = 0;
    card.rewards_earned++;
    card.history.unshift({
      date: new Date().toISOString().split('T')[0],
      type: 'reward_redeemed'
    });
    
    this.showConfirmation('Reward redeemed successfully! 🎉');
  },
  
  showConfirmation(message) {
    document.getElementById('confirmation-message').textContent = message;
    document.getElementById('scan-confirmation-modal').classList.add('active');
    
    this.updateVendorStats();
  },
  
  closeConfirmationModal() {
    document.getElementById('scan-confirmation-modal').classList.remove('active');
    this.showView('vendor-dashboard');
  },
  
  manualCustomerLookup() {
    const query = prompt('Enter customer phone or email:');
    if (!query) return;
    
    const customer = appState.customers.find(c => 
      c.phone.includes(query) || c.email.toLowerCase().includes(query.toLowerCase())
    );
    
    if (customer) {
      appState.selectedCustomerId = customer.id;
      this.showAddPunchView();
    } else {
      alert('Customer not found. They may need to sign up for the loyalty program.');
    }
  },
  
  showProductCatalog(vendorId) {
    appState.selectedVendorForProducts = vendorId;
    const vendor = appState.vendors.find(v => v.id === vendorId);
    
    document.getElementById('catalog-vendor-name').textContent = vendor.name;
    
    appState.productFilters = {
      category: 'all',
      priceRange: 'all',
      thcLevel: 'all',
      inStockOnly: false,
      searchQuery: ''
    };
    
    this.loadProductCatalog();
    this.showView('customer-product-catalog');
  },
  
  loadProductCatalog() {
    const vendorId = appState.selectedVendorForProducts;
    let products = appState.products.filter(p => p.vendor_id === vendorId);
    
    if (appState.productFilters.category !== 'all') {
      products = products.filter(p => p.category === appState.productFilters.category);
    }
    
    if (appState.productFilters.inStockOnly) {
      products = products.filter(p => p.stock_status === 'In Stock');
    }
    
    if (appState.productFilters.highThc) {
      products = products.filter(p => p.thc_percent && p.thc_percent >= 20);
    }
    
    if (appState.productFilters.searchQuery) {
      const query = appState.productFilters.searchQuery.toLowerCase();
      products = products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        (p.strain && p.strain.toLowerCase().includes(query))
      );
    }
    
    if (appState.productFilters.thcLevel !== 'all') {
      if (appState.productFilters.thcLevel === 'high') {
        products = products.filter(p => p.thc_percent >= 20);
      } else if (appState.productFilters.thcLevel === 'medium') {
        products = products.filter(p => p.thc_percent >= 10 && p.thc_percent < 20);
      } else if (appState.productFilters.thcLevel === 'low') {
        products = products.filter(p => p.thc_percent < 10);
      }
    }
    
    this.renderProductCatalog(products);
  },
  
  renderProductCatalog(products) {
    const container = document.getElementById('products-grid');
    
    if (products.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); grid-column: 1/-1;">No items found matching your filters.</p>';
      return;
    }
    
    const getCategoryIcon = (category) => {
      const icons = {
        'Beverages': '☕',
        'Food': '🍔',
        'Clothing': '👕',
        'Accessories': '👜',
        'Services': '✂️',
        'Products': '🛍️'
      };
      return icons[category] || '💻';
    };
    
    container.innerHTML = products.map(product => {
      const stockClass = product.stock_status === 'In Stock' ? 'in-stock' : 
                        product.stock_status === 'Low Stock' ? 'low-stock' : 'out-stock';
      
      let priceDisplay = '';
      if (product.prices.eighth) {
        priceDisplay = `$${product.prices.eighth}/eighth`;
      } else if (product.prices.gram) {
        priceDisplay = `$${product.prices.gram}/gram`;
      } else if (product.prices.unit) {
        priceDisplay = `$${product.prices.unit}`;
      }
      
      const icon = getCategoryIcon(product.category);
      
      return `
        <div class="product-card" onclick="app.showProductDetail('${product.id}')">
          <div class="product-image">
            <div class="product-placeholder">${icon}</div>
            <span class="stock-badge ${stockClass}">${product.stock_status}</span>
          </div>
          <div class="product-info">
            <h4 class="product-name">${product.name}</h4>
            <div class="product-meta">
              ${product.strain ? `<span class="strain-badge">${product.strain}</span>` : ''}
              ${product.thc_percent ? `<span class="thc-badge">THC ${product.thc_percent}%</span>` : ''}
            </div>
            <p class="product-description">${product.description.substring(0, 80)}...</p>
            <div class="product-price">${priceDisplay}</div>
          </div>
        </div>
      `;
    }).join('');
  },
  
  filterByCategory(category) {
    appState.productFilters.category = category;
    this.loadProductCatalog();
    
    document.querySelectorAll('.category-chip').forEach(chip => {
      chip.classList.remove('active');
    });
    event.target.classList.add('active');
  },
  
  toggleInStockFilter() {
    appState.productFilters.inStockOnly = event.target.checked;
    this.loadProductCatalog();
  },
  
  toggleHighThcFilter() {
    appState.productFilters.highThc = event.target.checked;
    this.loadProductCatalog();
  },
  
  searchProducts() {
    const query = document.getElementById('product-search').value;
    appState.productFilters.searchQuery = query;
    this.loadProductCatalog();
  },
  
  showProductDetail(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('product-detail-modal');
    const content = document.getElementById('product-detail-content');
    
    const stockClass = product.stock_status === 'In Stock' ? 'in-stock' : 
                      product.stock_status === 'Low Stock' ? 'low-stock' : 'out-stock';
    
    const vendor = appState.vendors.find(v => v.id === product.vendor_id);
    
    content.innerHTML = `
      <h3>${product.name}</h3>
      <div class="product-badges">
        ${product.strain ? `<span class="strain-badge">${product.strain}</span>` : ''}
        ${product.category ? `<span class="strain-badge">${product.category}</span>` : ''}
        <span class="stock-badge ${stockClass}">${product.stock_status}</span>
      </div>
      ${product.thc_percent || product.cbd_percent ? `
      <div class="product-stats">
        ${product.thc_percent ? `
        <div class="stat-item">
          <span class="stat-label">THC</span>
          <span class="stat-value">${product.thc_percent}%</span>
        </div>
        ` : ''}
        ${product.cbd_percent ? `
        <div class="stat-item">
          <span class="stat-label">CBD</span>
          <span class="stat-value">${product.cbd_percent}%</span>
        </div>
        ` : ''}
      </div>
      ` : ''}
      <div class="product-detail-description">
        <h4>Description</h4>
        <p>${product.description}</p>
      </div>
      <div class="product-pricing">
        <h4>Pricing</h4>
        ${product.prices.eighth ? `<div class="price-option"><span>Eighth (3.5g):</span><strong>$${product.prices.eighth}</strong></div>` : ''}
        ${product.prices.quarter ? `<div class="price-option"><span>Quarter (7g):</span><strong>$${product.prices.quarter}</strong></div>` : ''}
        ${product.prices.half ? `<div class="price-option"><span>Half (14g):</span><strong>$${product.prices.half}</strong></div>` : ''}
        ${product.prices.ounce ? `<div class="price-option"><span>Ounce (28g):</span><strong>$${product.prices.ounce}</strong></div>` : ''}
        ${product.prices.gram ? `<div class="price-option"><span>Gram:</span><strong>$${product.prices.gram}</strong></div>` : ''}
        ${product.prices.half_gram ? `<div class="price-option"><span>Half Gram:</span><strong>$${product.prices.half_gram}</strong></div>` : ''}
        ${product.prices.unit && !product.prices.eighth && !product.prices.gram ? `<div class="price-option"><span>Price:</span><strong>$${product.prices.unit}</strong></div>` : ''}
      </div>
      <div class="product-notice">
        💡 Visit ${vendor.name} in person to purchase and earn loyalty rewards with SellVester XP!
      </div>
      <div class="product-actions">
        <button class="btn btn--secondary btn--full-width" onclick="app.contactVendorAboutProduct('${product.id}')">
          💬 Contact ${vendor.name}
        </button>
      </div>
    `;
    
    modal.classList.add('active');
  },
  
  closeProductDetail() {
    document.getElementById('product-detail-modal').classList.remove('active');
  },
  
  contactVendorAboutProduct(productId) {
    const product = appState.products.find(p => p.id === productId);
    const vendor = appState.vendors.find(v => v.id === product.vendor_id);
    
    alert(`Contact ${vendor.name} about ${product.name}:\n\nPhone: ${vendor.phone}\nEmail: ${vendor.email}\n\nIn a real application, this would open your phone/email app with a pre-filled message about this product.`);
  },
  
  showVendorProducts() {
    const vendorId = appState.selectedVendorId;
    const products = appState.products.filter(p => p.vendor_id === vendorId);
    
    const totalProducts = products.length;
    const inStock = products.filter(p => p.stock_status === 'In Stock').length;
    const lowStock = products.filter(p => p.stock_status === 'Low Stock').length;
    const outStock = products.filter(p => p.stock_status === 'Out of Stock').length;
    
    document.getElementById('vendor-total-products').textContent = totalProducts;
    document.getElementById('vendor-in-stock').textContent = inStock;
    document.getElementById('vendor-low-stock').textContent = lowStock;
    document.getElementById('vendor-out-stock').textContent = outStock;
    
    this.renderVendorProductsList(products);
    this.showView('vendor-products-management');
  },
  
  renderVendorProductsList(products) {
    const container = document.getElementById('vendor-products-list');
    
    if (products.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">No items yet. Click "Add New Item" to get started!</p>';
      return;
    }
    
    container.innerHTML = products.map(product => {
      const stockClass = product.stock_status === 'In Stock' ? 'in-stock' : 
                        product.stock_status === 'Low Stock' ? 'low-stock' : 'out-stock';
      
      return `
        <div class="vendor-product-item">
          <div class="vendor-product-info">
            <h4>${product.name}</h4>
            <div class="vendor-product-meta">
              <span>${product.category}</span>
              ${product.brand ? `<span>${product.brand}</span>` : ''}
              <span>$${product.prices.unit}</span>
            </div>
          </div>
          <div class="vendor-product-stock">
            <span class="stock-badge ${stockClass}">${product.stock_status}</span>
            <span class="stock-qty">Qty: ${product.stock_quantity}</span>
          </div>
          <div class="vendor-product-actions">
            <button class="btn btn--secondary btn-small" onclick="app.editProduct('${product.id}')">Edit</button>
            <button class="btn btn--secondary btn-small" onclick="app.quickUpdateStock('${product.id}')">Update Stock</button>
          </div>
        </div>
      `;
    }).join('');
  },
  
  showAddProductForm() {
    appState.currentProduct = null;
    this.resetProductForm();
    this.showView('vendor-product-form');
  },
  
  editProduct(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    appState.currentProduct = product;
    this.populateProductForm(product);
    this.showView('vendor-product-form');
  },
  
  resetProductForm() {
    document.getElementById('product-form-title').textContent = 'Add New Item';
    document.getElementById('product-name').value = '';
    document.getElementById('product-category').value = 'Products';
    const brandField = document.getElementById('product-brand');
    if (brandField) brandField.value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-price-unit').value = '';
    document.getElementById('product-stock-status').value = 'In Stock';
    document.getElementById('product-stock-qty').value = '';
  },
  
  populateProductForm(product) {
    document.getElementById('product-form-title').textContent = 'Edit Product';
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-category').value = product.category;
    const brandField = document.getElementById('product-brand');
    if (brandField) brandField.value = product.brand || '';
    const strainField = document.getElementById('product-strain');
    if (strainField) strainField.value = product.strain || '';
    const thcField = document.getElementById('product-thc');
    if (thcField) thcField.value = product.thc_percent || '';
    const cbdField = document.getElementById('product-cbd');
    if (cbdField) cbdField.value = product.cbd_percent || '';
    document.getElementById('product-description').value = product.description;
    document.getElementById('product-price-unit').value = product.prices.unit || product.prices.eighth || product.prices.gram || '';
    document.getElementById('product-stock-status').value = product.stock_status;
    document.getElementById('product-stock-qty').value = product.stock_quantity;
  },
  
  saveProduct() {
    const name = document.getElementById('product-name').value;
    const category = document.getElementById('product-category').value;
    const description = document.getElementById('product-description').value;
    const stockStatus = document.getElementById('product-stock-status').value;
    const stockQty = parseInt(document.getElementById('product-stock-qty').value) || 0;
    const brand = document.getElementById('product-brand')?.value || '';
    const strain = document.getElementById('product-strain')?.value || '';
    const thc = parseFloat(document.getElementById('product-thc')?.value) || 0;
    const cbd = parseFloat(document.getElementById('product-cbd')?.value) || 0;
    
    if (!name || !description) {
      alert('Please fill in product name and description');
      return;
    }
    
    const unit = document.getElementById('product-price-unit').value;
    
    if (!unit) {
      alert('Please enter a price');
      return;
    }
    
    const prices = { unit: parseFloat(unit) };
    
    if (appState.currentProduct) {
      const product = appState.currentProduct;
      product.name = name;
      product.category = category;
      product.brand = brand;
      product.strain = strain;
      product.thc_percent = thc;
      product.cbd_percent = cbd;
      product.description = description;
      product.prices = prices;
      product.stock_status = stockStatus;
      product.stock_quantity = stockQty;
    } else {
      const newProduct = {
        id: 'p' + (appState.products.length + 1),
        vendor_id: appState.selectedVendorId,
        name,
        category,
        brand,
        strain,
        thc_percent: thc,
        cbd_percent: cbd,
        description,
        prices,
        stock_status: stockStatus,
        stock_quantity: stockQty
      };
      appState.products.push(newProduct);
    }
    
    alert('Product saved successfully!');
    this.showVendorProducts();
  },
  
  resetToDefaults() {
    const vendor = appState.vendors.find(v => v.id === appState.selectedVendorId);
    if (!vendor) return;
    
    if (!confirm('Reset to default settings? This will update your program to recommended defaults based on your business type.')) {
      return;
    }
    
    // Set defaults based on business category
    if (vendor.category === 'Food & Beverage') {
      vendor.reward_type = 'purchase_based';
      vendor.threshold = 10;
      vendor.custom_terminology = 'purchases';
      vendor.reward_description = 'Free item of your choice';
    } else if (vendor.category === 'Retail & Shopping') {
      vendor.reward_type = 'spend_based';
      vendor.threshold = 200;
      vendor.custom_terminology = 'purchases';
      vendor.reward_description = '20% off your next purchase';
    } else {
      vendor.reward_type = 'purchase_based';
      vendor.threshold = 6;
      vendor.custom_terminology = 'purchases';
      vendor.reward_description = 'Free reward';
    }
    
    this.loadVendorProgramSettings();
    alert('Settings reset to recommended defaults!');
  },
  
  quickUpdateStock(productId) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return;
    
    const newStatus = prompt(`Update stock status for ${product.name}:\n\n1 - In Stock\n2 - Low Stock\n3 - Out of Stock\n\nEnter 1, 2, or 3:`);
    
    if (newStatus === '1') {
      product.stock_status = 'In Stock';
    } else if (newStatus === '2') {
      product.stock_status = 'Low Stock';
    } else if (newStatus === '3') {
      product.stock_status = 'Out of Stock';
      product.stock_quantity = 0;
    } else {
      return;
    }
    
    if (newStatus !== '3') {
      const qty = prompt('Enter stock quantity:');
      if (qty !== null) {
        product.stock_quantity = parseInt(qty) || 0;
      }
    }
    
    this.showVendorProducts();
  },
  
  loadCustomersList() {
    const vendorId = appState.selectedVendorId;
    const vendorCards = appState.customerCards.filter(c => c.vendor_id === vendorId);
    const vendor = appState.vendors.find(v => v.id === vendorId);
    const container = document.getElementById('customers-list');
    
    if (vendorCards.length === 0) {
      container.innerHTML = '<p style="color: var(--color-text-secondary);">No customers yet</p>';
      return;
    }
    
    container.innerHTML = vendorCards.map(card => {
      const customer = appState.customers.find(c => c.id === card.customer_id);
      let progress = '';
      if (vendor.reward_type === 'purchase_based') {
        progress = `${card.punches}/${vendor.threshold} punches`;
      } else {
        progress = `$${card.total_spent}/$${vendor.threshold}`;
      }
      
      return `
        <div class="customer-item">
          <h4>${customer.name}</h4>
          <div class="customer-details">
            <span>${customer.phone}</span>
            <span>${progress}</span>
            <span>${card.rewards_earned} rewards</span>
            <span>Last: ${card.last_visit}</span>
          </div>
        </div>
      `;
    }).join('');
  },
  
  loadPlatformAdmin() {
    const vendorsList = document.getElementById('admin-vendors-list');
    
    vendorsList.innerHTML = appState.vendors.map(vendor => {
      return `
        <div class="admin-vendor-item">
          <div class="admin-vendor-info">
            <h4>${vendor.name}</h4>
            <div class="admin-vendor-meta">
              <span>📍 ${vendor.specialization}</span>
              <span>💳 ${vendor.monthly_subscription}/mo</span>
            </div>
          </div>
          <div class="admin-vendor-stats">
            <div class="admin-vendor-stat">
              <div class="admin-vendor-stat-value">${vendor.customer_count}</div>
              <div class="admin-vendor-stat-label">Customers</div>
            </div>
            <div class="admin-vendor-stat">
              <div class="admin-vendor-stat-value">${vendor.product_count}</div>
              <div class="admin-vendor-stat-label">Products</div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }
};

// Billing Period Toggle
app.switchBillingPeriod = function(period) {
  appState.selectedBillingPeriod = period;
  
  // Update toggle button states
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.toggle-btn[data-period="${period}"]`).classList.add('active');
  
  // Update pricing display
  const annualElements = document.querySelectorAll('.annual-price');
  const monthlyElements = document.querySelectorAll('.monthly-price');
  
  if (period === 'annual') {
    annualElements.forEach(el => el.style.display = 'flex');
    monthlyElements.forEach(el => el.style.display = 'none');
  } else {
    annualElements.forEach(el => el.style.display = 'none');
    monthlyElements.forEach(el => el.style.display = 'flex');
  }
  
  // Update tier click handlers
  document.querySelectorAll('.pricing-tier').forEach((tier, index) => {
    const tierName = ['bronze', 'silver', 'gold', 'platinum'][index];
    tier.onclick = () => app.selectVendorTier(tierName, period);
  });
};

// Vendor Tier Selection
app.selectVendorTier = function(tier, billingPeriod) {
  appState.selectedTier = tier;
  appState.selectedBillingPeriod = billingPeriod || appState.selectedBillingPeriod;
  
  if (tier === 'platinum') {
    alert('Thank you for your interest in Platinum!\n\nOur enterprise team will contact you within 24 hours to discuss custom pricing and features tailored to your operation.');
    return;
  }
  
  // Show pricing summary
  let pricingText = '';
  if (tier === 'bronze') {
    pricingText = 'Free Forever';
  } else if (tier === 'silver') {
    pricingText = appState.selectedBillingPeriod === 'annual' 
      ? '$470/year (Save $118 vs monthly - just $39/month)'
      : '$49/month (or save 20% with annual: $470/year)';
  } else if (tier === 'gold') {
    pricingText = appState.selectedBillingPeriod === 'annual'
      ? '$950/year (Save $238 vs monthly - just $79/month)'
      : '$99/month (or save 20% with annual: $950/year)';
  }
  
  const tierName = tier.toUpperCase();
  const trialText = tier !== 'bronze' ? '\n\n14-day free trial included!' : '';
  
  if (confirm(`Start your ${tierName} plan?\n\n${pricingText}${trialText}\n\nClick OK to continue with registration.`)) {
    appState.vendorRegistrationStep = 1;
    appState.vendorRegistrationData = { 
      tier: tier,
      billingPeriod: appState.selectedBillingPeriod
    };
    this.updateVendorRegistrationStep();
    this.showView('vendor-registration');
  }
};

// Vendor Registration Navigation
app.nextVendorRegistrationStep = function() {
  if (appState.vendorRegistrationStep === 1) {
    // Validate business info
    const businessName = document.getElementById('vendor-reg-business-name').value;
    const license = document.getElementById('vendor-reg-license').value;
    const address = document.getElementById('vendor-reg-address').value;
    const city = document.getElementById('vendor-reg-city').value;
    const state = document.getElementById('vendor-reg-state').value;
    const zip = document.getElementById('vendor-reg-zip').value;
    const phone = document.getElementById('vendor-reg-phone').value;
    
    if (!businessName || !license || !address || !city || !state || !zip || !phone) {
      alert('Please fill in all required fields');
      return;
    }
    
    appState.vendorRegistrationData.businessName = businessName;
    appState.vendorRegistrationData.license = license;
    appState.vendorRegistrationData.address = address;
    appState.vendorRegistrationData.city = city;
    appState.vendorRegistrationData.state = state;
    appState.vendorRegistrationData.zip = zip;
    appState.vendorRegistrationData.businessPhone = phone;
    appState.vendorRegistrationData.website = document.getElementById('vendor-reg-website').value;
    appState.vendorRegistrationData.category = document.getElementById('vendor-reg-category').value;
    
  } else if (appState.vendorRegistrationStep === 2) {
    // Validate account info
    const contactName = document.getElementById('vendor-reg-contact-name').value;
    const email = document.getElementById('vendor-reg-email').value;
    const contactPhone = document.getElementById('vendor-reg-contact-phone').value;
    const password = document.getElementById('vendor-reg-password').value;
    const passwordConfirm = document.getElementById('vendor-reg-password-confirm').value;
    
    if (!contactName || !email || !contactPhone || !password || !passwordConfirm) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }
    
    if (password.length < 8) {
      alert('Password must be at least 8 characters');
      return;
    }
    
    appState.vendorRegistrationData.contactName = contactName;
    appState.vendorRegistrationData.email = email;
    appState.vendorRegistrationData.contactPhone = contactPhone;
    appState.vendorRegistrationData.password = password;
    
  } else if (appState.vendorRegistrationStep === 3) {
    // Validate program config
    const programType = document.querySelector('input[name="vendor-reg-program-type"]:checked').value;
    const threshold = parseInt(document.getElementById('vendor-reg-threshold').value);
    const reward = document.getElementById('vendor-reg-reward').value;
    
    if (!reward) {
      alert('Please define your reward');
      return;
    }
    
    appState.vendorRegistrationData.programType = programType;
    appState.vendorRegistrationData.threshold = threshold;
    appState.vendorRegistrationData.reward = reward;
    
    this.showVendorRegistrationSummary();
  }
  
  appState.vendorRegistrationStep++;
  this.updateVendorRegistrationStep();
};

app.prevVendorRegistrationStep = function() {
  if (appState.vendorRegistrationStep > 1) {
    appState.vendorRegistrationStep--;
    this.updateVendorRegistrationStep();
  }
};

app.vendorRegistrationBack = function() {
  if (appState.vendorRegistrationStep === 1) {
    this.showView('vendor-pricing');
  } else {
    this.prevVendorRegistrationStep();
  }
};

app.updateVendorRegistrationStep = function() {
  for (let i = 1; i <= 4; i++) {
    const indicator = document.getElementById(`vendor-step-indicator-${i}`);
    if (indicator) {
      if (i <= appState.vendorRegistrationStep) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    }
  }
  
  for (let i = 1; i <= 4; i++) {
    const step = document.getElementById(`vendor-registration-step-${i}`);
    if (step) {
      if (i === appState.vendorRegistrationStep) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    }
  }
  
  // Update program preview
  if (appState.vendorRegistrationStep === 3) {
    this.updateVendorProgramPreview();
  }
};

app.updateVendorProgramPreview = function() {
  const programType = document.querySelector('input[name="vendor-reg-program-type"]:checked')?.value || 'purchase_based';
  const threshold = document.getElementById('vendor-reg-threshold')?.value || '6';
  const reward = document.getElementById('vendor-reg-reward')?.value || 'free item from select collection';
  
  let previewText = '';
  let helpText = '';
  
  if (programType === 'purchase_based') {
    previewText = `Buy ${threshold} purchases, earn ${reward}!`;
    helpText = 'Number of purchases required to earn reward';
  } else if (programType === 'spend_based') {
    previewText = `Spend $${threshold}, earn ${reward}!`;
    helpText = 'Dollar amount required to earn reward';
  } else if (programType === 'visits_based') {
    previewText = `Visit ${threshold} times, earn ${reward}!`;
    helpText = 'Number of visits required to earn reward';
  }
  
  const preview = document.getElementById('vendor-program-preview');
  const help = document.getElementById('vendor-threshold-help');
  
  if (preview) preview.textContent = previewText;
  if (help) help.textContent = helpText;
};

app.showVendorRegistrationSummary = function() {
  const data = appState.vendorRegistrationData;
  const summary = document.getElementById('vendor-reg-summary');
  
  const tierName = data.tier.toUpperCase();
  let tierPrice = 'Free';
  let tierSavings = '';
  
  if (data.tier === 'silver') {
    if (data.billingPeriod === 'annual') {
      tierPrice = '$470/year';
      tierSavings = 'Save $118 vs monthly (just $39/month)';
    } else {
      tierPrice = '$49/month';
      tierSavings = 'Save 20% with annual billing';
    }
  } else if (data.tier === 'gold') {
    if (data.billingPeriod === 'annual') {
      tierPrice = '$950/year';
      tierSavings = 'Save $238 vs monthly (just $79/month)';
    } else {
      tierPrice = '$99/month';
      tierSavings = 'Save 20% with annual billing';
    }
  }
  
  const tierTrial = data.tier !== 'bronze' ? ' (14-day free trial)' : '';
  
  let programTypeLabel = 'Purchase-Based';
  if (data.programType === 'spend_based') programTypeLabel = 'Spend-Based';
  if (data.programType === 'visits_based') programTypeLabel = 'Visits-Based';
  
  summary.innerHTML = `
    <div class="vendor-summary-section">
      <h4>Subscription Plan</h4>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Plan:</span>
        <span class="vendor-summary-value">${tierName}</span>
      </div>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Billing:</span>
        <span class="vendor-summary-value">${data.billingPeriod === 'annual' ? 'Annual' : 'Monthly'}</span>
      </div>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Price:</span>
        <span class="vendor-summary-value">${tierPrice}${tierTrial}</span>
      </div>
      ${tierSavings ? `
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Savings:</span>
        <span class="vendor-summary-value" style="color: var(--color-success);">${tierSavings}</span>
      </div>
      ` : ''}
    </div>
    <div class="vendor-summary-section">
      <h4>Business Information</h4>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Business:</span>
        <span class="vendor-summary-value">${data.businessName}</span>
      </div>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">License:</span>
        <span class="vendor-summary-value">${data.license}</span>
      </div>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Location:</span>
        <span class="vendor-summary-value">${data.city}, ${data.state}</span>
      </div>
    </div>
    <div class="vendor-summary-section">
      <h4>Account</h4>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Contact:</span>
        <span class="vendor-summary-value">${data.contactName}</span>
      </div>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Email:</span>
        <span class="vendor-summary-value">${data.email}</span>
      </div>
    </div>
    <div class="vendor-summary-section">
      <h4>Loyalty Program</h4>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Type:</span>
        <span class="vendor-summary-value">${programTypeLabel}</span>
      </div>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Threshold:</span>
        <span class="vendor-summary-value">${data.threshold}</span>
      </div>
      <div class="vendor-summary-item">
        <span class="vendor-summary-label">Reward:</span>
        <span class="vendor-summary-value">${data.reward}</span>
      </div>
    </div>
  `;
};

app.completeVendorRegistration = function() {
  // Validate checkboxes
  const license = document.getElementById('vendor-accept-license').checked;
  const terms = document.getElementById('vendor-accept-terms').checked;
  const compliance = document.getElementById('vendor-accept-compliance').checked;
  const age = document.getElementById('vendor-accept-age').checked;
  const subscription = document.getElementById('vendor-accept-subscription').checked;
  
  if (!license || !terms || !compliance || !age || !subscription) {
    alert('Please accept all terms and compliance requirements');
    return;
  }
  
  const data = appState.vendorRegistrationData;
  const tierName = data.tier.toUpperCase();
  const trialText = data.tier !== 'bronze' ? ' Your 14-day free trial starts now!' : '';
  
  let pricingText = '';
  if (data.tier === 'silver') {
    pricingText = data.billingPeriod === 'annual' ? '\n\nBilling: $470/year (Save $118!)' : '\n\nBilling: $49/month';
  } else if (data.tier === 'gold') {
    pricingText = data.billingPeriod === 'annual' ? '\n\nBilling: $950/year (Save $238!)' : '\n\nBilling: $99/month';
  }
  
  alert(`🎉 Welcome to SellVester XP!\n\nYour ${tierName} account is ready.${trialText}${pricingText}\n\nLet's get your business set up for success.`);
  
  // Create new vendor in system
  const newVendor = {
    id: 'v' + (appState.vendors.length + 1),
    name: data.businessName,
    category: data.category,
    specialization: data.category,
    customer_count: 0,
    product_count: 0,
    reward_type: data.programType,
    threshold: data.threshold,
    reward_description: data.reward,
    phone: data.businessPhone,
    email: data.email,
    monthly_subscription: data.tier === 'bronze' ? '$0' : data.tier === 'silver' ? (data.billingPeriod === 'annual' ? '$470/year' : '$49/month') : (data.billingPeriod === 'annual' ? '$950/year' : '$99/month'),
    billing_period: data.billingPeriod,
    tier: data.tier
  };
  
  appState.vendors.push(newVendor);
  appState.selectedVendorId = newVendor.id;
  
  // Reset registration data
  appState.vendorRegistrationData = {};
  appState.vendorRegistrationStep = 1;
  
  // Load vendor dashboard
  this.loadVendorDashboard();
  this.showView('vendor-dashboard');
};

// Program type change listener for vendor registration
document.addEventListener('change', function(e) {
  if (e.target.name === 'vendor-reg-program-type') {
    app.updateVendorProgramPreview();
  }
});

// Real-time preview updates for vendor registration
document.addEventListener('input', function(e) {
  if (e.target.id === 'vendor-reg-threshold' || e.target.id === 'vendor-reg-reward') {
    app.updateVendorProgramPreview();
  }
  
  // Password strength indicator
  if (e.target.id === 'vendor-reg-password') {
    const password = e.target.value;
    const strength = document.getElementById('vendor-password-strength');
    
    if (password.length === 0) {
      strength.className = 'password-strength';
    } else if (password.length < 8) {
      strength.className = 'password-strength weak';
    } else if (password.length < 12 || !/[0-9]/.test(password) || !/[A-Z]/.test(password)) {
      strength.className = 'password-strength medium';
    } else {
      strength.className = 'password-strength strong';
    }
  }
});

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    app.init();
    app.setupEventListeners();
  });
} else {
  app.init();
  app.setupEventListeners();
}

app.setupEventListeners = function() {
  // Live preview updates for program settings
  const fields = ['threshold-purchases', 'threshold-amount', 'threshold-visits', 'points-threshold', 'points-per-dollar', 'reward-description', 'custom-terminology'];
  fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
      field.addEventListener('input', () => app.updateSettingsPreview());
    }
  });
  
  // VIP program toggle
  const vipToggle = document.getElementById('toggle-vip-enabled');
  if (vipToggle) {
    vipToggle.addEventListener('change', function() {
      const config = document.getElementById('vip-program-config');
      if (config) {
        config.style.display = this.checked ? 'block' : 'none';
      }
    });
  }
};

const searchInput = document.getElementById('customer-search');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const customerItems = document.querySelectorAll('.customer-item');
    
    customerItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'block' : 'none';
    });
  });
}
