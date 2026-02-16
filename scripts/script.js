document.addEventListener("DOMContentLoaded", () => {
  NavigationController.init();

  document
    .querySelectorAll("button, .primary-button, .secondary-button")
    .forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px)";
      });

      button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
      });
    });

  document.querySelectorAll(".hero-buttons [data-page]").forEach((button) => {
    button.addEventListener("click", async (e) => {
      const page = e.target.closest("[data-page]").getAttribute("data-page");
      if (page && page !== AppState.currentPage) {
        NavigationController.updateActiveNavLinks(page);
        await NavigationController.loadContent(page);
      }
    });
  });

//  ThemeController.init();

  MobileNavController.init();

  AOS.init({
    duration: 700,
    easing: "ease-out-cubic",
    once: true,
    offset: 100
  });
});

// App State
const AppState = {
  currentPage: "introduction",
  isLoading: false,
  mobileMenuOpen: false
};

// DOM Elements
const DOM = {
  loadingProgress: document.getElementById("loading-progress"),
  loadingBar: document.querySelector(".loading-bar"),
  mobileMenuButton: document.getElementById("mobile-menu-button"),
  mobileNav: document.getElementById("mobile-nav"),
  dynamicContent: document.getElementById("dynamic-content"),
  header: document.querySelector(".header"),
  navLinks: document.querySelectorAll("[data-page]"),
  heroButtons: document.querySelectorAll(".hero-buttons [data-page]")
};

// Content Data
const ContentData = {
  introduction: {
    title: "Introduction to Progressive Web Apps",
    subtitle: "Understanding the fundamentals of modern web applications",
    content: `
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <h1 class="tutorial-title">Introduction to PWAs</h1>
                    <p class="tutorial-subtitle">Learn what makes Progressive Web Apps revolutionary</p>
                    <div class="tutorial-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <span>15 min read</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Beginner Level</span>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">What are Progressive Web Apps?</h2>
                    <div class="section-content">
                        <p>Progressive Web Apps (PWAs) represent the next evolution of web applications, combining the best features of web and native mobile apps. They leverage modern web technologies to deliver app-like experiences directly through web browsers, eliminating the need for app store distribution while maintaining the accessibility and reach of traditional web applications.</p>
                        
                        <p>PWAs are built using standard web technologies including HTML, CSS, and JavaScript, but they incorporate advanced features that were previously exclusive to native mobile applications. These features include offline functionality, push notifications, device hardware access, and the ability to be installed directly on users' devices.</p>
                        
                        <div class="info-box">
                            <h4>Key Insight</h4>
                            <p>PWAs bridge the gap between web and native applications, offering users the convenience of web access with the performance and features of native apps.</p>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Core Characteristics of PWAs</h2>
                    <div class="section-content">
                        <h3>Progressive Enhancement</h3>
                        <p>PWAs work for every user, regardless of browser choice, because they're built with progressive enhancement as a core principle. They provide basic functionality on older browsers while delivering advanced features on modern platforms.</p>
                        
                        <h3>Responsive Design</h3>
                        <p>PWAs adapt to any form factor, whether desktop, mobile, tablet, or emerging device types. They use responsive design principles to ensure optimal user experiences across all screen sizes and orientations.</p>
                        
                        <h3>App-like Experience</h3>
                        <p>Through careful design and implementation, PWAs feel like native applications. They use app-shell architecture to provide instant loading and smooth navigation, creating seamless user interactions.</p>
                        
                        <h3>Secure Connections</h3>
                        <p>PWAs require HTTPS connections to ensure data integrity and security. This requirement enables access to powerful web APIs while protecting user data and maintaining trust.</p>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Benefits of PWA Development</h2>
                    <div class="section-content">
                        <h3>For Users</h3>
                        <ul>
                            <li><strong>Fast Performance:</strong> Instant loading and smooth interactions through advanced caching strategies</li>
                            <li><strong>Offline Functionality:</strong> Continue using the app even without internet connectivity</li>
                            <li><strong>No App Store Required:</strong> Install directly from the browser without app store friction</li>
                            <li><strong>Automatic Updates:</strong> Always access the latest version without manual updates</li>
                            <li><strong>Low Storage Impact:</strong> Significantly smaller than traditional native apps</li>
                        </ul>
                        
                        <h3>For Developers</h3>
                        <ul>
                            <li><strong>Single Codebase:</strong> One application works across all platforms and devices</li>
                            <li><strong>Standard Web Technologies:</strong> Leverage existing HTML, CSS, and JavaScript skills</li>
                            <li><strong>Simplified Distribution:</strong> Deploy through web servers instead of app stores</li>
                            <li><strong>Easier Maintenance:</strong> Update once and deploy everywhere instantly</li>
                            <li><strong>Better SEO:</strong> Discoverable through search engines like traditional websites</li>
                        </ul>
                        
                        <div class="tip-box">
                            <h4>Pro Tip</h4>
                            <p>PWAs can reduce development costs by up to 60% compared to building separate native apps for different platforms, while maintaining comparable user experience quality.</p>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Real-world PWA Examples</h2>
                    <div class="section-content">
                        <p>Many successful companies have embraced PWA technology to improve user experience and business metrics:</p>
                        
                        <h3>Twitter Lite</h3>
                        <p>Twitter's PWA delivers the core Twitter experience with 65% increase in pages per session, 75% increase in Tweets sent, and 20% decrease in bounce rate, while using less than 3% of device storage compared to the native Android app.</p>
                        
                        <h3>Pinterest</h3>
                        <p>Pinterest's PWA led to a 60% increase in core engagements, 44% increase in user-generated ad revenue, and 40% more time spent on the platform compared to their previous mobile web experience.</p>
                        
                        <h3>Spotify Web Player</h3>
                        <p>Spotify's PWA provides instant access to music streaming with offline playlist support, demonstrating how complex media applications can benefit from PWA architecture.</p>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Getting Started</h2>
                    <div class="section-content">
                        <p>Throughout this tutorial series, you'll learn how to build production-ready PWAs from the ground up. We'll cover:</p>
                        
                        <ul>
                            <li>Creating and configuring Web App Manifests</li>
                            <li>Implementing Service Workers for offline functionality</li>
                            <li>Designing effective caching strategies</li>
                            <li>Adding push notification support</li>
                            <li>Optimizing performance and user experience</li>
                            <li>Testing and debugging PWA features</li>
                            <li>Deploying and maintaining PWAs in production</li>
                        </ul>
                        
                        <div class="warning-box">
                            <h4>Prerequisites</h4>
                            <p>This tutorial assumes familiarity with HTML, CSS, and JavaScript fundamentals. Knowledge of modern JavaScript (ES6+) and basic understanding of HTTP/HTTPS protocols will be helpful.</p>
                        </div>
                        
                        <p>Ready to start building? Let's begin with the Web App Manifest, which defines how your PWA appears and behaves when installed on users' devices.</p>
                    </div>
                </div>
            </div>
        `
  },

  manifest: {
    title: "Web App Manifestt",
    subtitle: "Configuring your PWA's installation and appearance",
    content: `
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <h1 class="tutorial-title">Web App Manifest</h1>
                    <p class="tutorial-subtitle">Configure how your PWA appears when installed</p>
                    <div class="tutorial-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <span>12 min read</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Beginner Level</span>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Understanding the Web App Manifest</h2>
                    <div class="section-content">
                        <p>The Web App Manifest is a JSON file that provides metadata about your Progressive Web App. It tells the browser how your app should behave when installed on a user's device, defining everything from the app's name and icons to its display mode and theme colors.</p>
                        
                        <p>This manifest file is what transforms a regular website into an installable PWA, enabling users to add your app to their home screen, taskbar, or dock just like a native application.</p>
                        
                        <div class="info-box">
                            <h4>Key Concept</h4>
                            <p>The manifest file acts as a bridge between web and native app experiences, providing the browser with all necessary information to present your PWA as a first-class application.</p>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Creating Your First Manifest</h2>
                    <div class="section-content">
                        <p>Let's create a basic manifest.json file for your PWA:</p>
                        
                        <div class="code-block" data-language="json">
                            <pre>{
  "name": "My Progressive Web App",
  "short_name": "MyPWA",
  "description": "An amazing PWA that works offline",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2196F3",
  "background_color": "#ffffff",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}</pre>
                        </div>
                        
                        <p>Add this link to your HTML head section to reference the manifest:</p>
                        
                        <div class="code-block" data-language="html">
                            <pre>&lt;link rel="manifest" href="/manifest.json"&gt;</pre>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Testing Your Manifest</h2>
                    <div class="section-content">
                        <p>Use these tools to validate and test your Web App Manifest:</p>
                        
                        <h3>Browser Developer Tools</h3>
                        <ul>
                            <li><strong>Chrome DevTools:</strong> Application tab â†’ Manifest section</li>
                            <li><strong>Firefox Developer Tools:</strong> Application tab â†’ Manifest</li>
                            <li><strong>Edge DevTools:</strong> Application tab â†’ Manifest</li>
                        </ul>
                        
                        <h3>Online Validators</h3>
                        <ul>
                            <li><strong>Lighthouse:</strong> Built into Chrome DevTools for comprehensive PWA auditing</li>
                            <li><strong>PWA Builder:</strong> Microsoft's PWA validation and generation tool</li>
                            <li><strong>Web App Manifest Validator:</strong> Online JSON validation specifically for manifests</li>
                        </ul>
                        
                        <div class="tip-box">
                            <h4>Testing Tip</h4>
                            <p>Always test installation prompts on multiple devices and browsers. Each platform may interpret manifest properties slightly differently.</p>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Platform-Specific Considerations</h2>
                    <div class="section-content">
                        <h3>iOS Safari</h3>
                        <p>While iOS supports PWA installation, it doesn't fully honor all manifest properties. Add these meta tags for better iOS support:</p>
                        
                        <div class="code-block" data-language="html">
                            <pre>&lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;
&lt;meta name="apple-mobile-web-app-status-bar-style" content="default"&gt;
&lt;meta name="apple-mobile-web-app-title" content="MyPWA"&gt;
&lt;link rel="apple-touch-icon" href="icons/apple-touch-icon.png"&gt;</pre>
                        </div>
                        
                        <h3>Android Chrome</h3>
                        <p>Android provides excellent manifest support with additional features like shortcuts and share targets:</p>
                        
                        <div class="code-block" data-language="json">
                            <pre>"shortcuts": [
  {
    "name": "New Document",
    "short_name": "New Doc",
    "description": "Create a new document",
    "url": "/new-document",
    "icons": [{ "src": "icons/shortcut-new.png", "sizes": "96x96" }]
  }
],
"share_target": {
  "action": "/share",
  "method": "POST",
  "params": {
    "title": "title",
    "text": "text",
    "url": "url"
  }
}</pre>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Next Steps</h2>
                    <div class="section-content">
                        <p>Now that you understand Web App Manifests, you're ready to move on to the core of PWA functionality: Service Workers. Service Workers enable offline capabilities, background synchronization, and push notifications.</p>
                        
                        <div class="info-box">
                            <h4>Quick Checklist</h4>
                            <ul>
                                <li>âœ“ Created manifest.json with required properties</li>
                                <li>âœ“ Added icons in multiple sizes (192px and 512px minimum)</li>
                                <li>âœ“ Linked manifest in HTML head section</li>
                                <li>âœ“ Tested installation prompt in supported browsers</li>
                                <li>âœ“ Validated manifest using developer tools</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
  },

  "service-worker": {
    title: "Service Workers",
    subtitle: "Implementing offline functionality and background processing",
    content: `
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <h1 class="tutorial-title">Service Workers</h1>
                    <p class="tutorial-subtitle">The backbone of Progressive Web App functionality</p>
                    <div class="tutorial-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <span>25 min read</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Intermediate Level</span>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">What are Service Workers?</h2>
                    <div class="section-content">
                        <p>Service Workers are powerful background scripts that run independently from your web application's main thread. They act as a proxy between your PWA and the network, enabling features like offline functionality, background synchronization, and push notifications that were previously exclusive to native mobile applications.</p>
                        
                        <p>Think of Service Workers as a programmable network proxy that sits between your web app and the server. They can intercept network requests, cache resources, and serve cached content when the network is unavailable, creating seamless offline experiences for users.</p>
                        
                        <div class="info-box">
                            <h4>Key Concept</h4>
                            <p>Service Workers operate on a separate thread from your main application, which means they can't directly manipulate the DOM but can communicate with your app through messages and events.</p>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Service Worker Lifecycle</h2>
                    <div class="section-content">
                        <p>Understanding the Service Worker lifecycle is crucial for implementing reliable PWA functionality. The lifecycle consists of several distinct phases:</p>
                        
                        <h3>1. Registration</h3>
                        <p>The process begins when your main application registers a Service Worker script. This tells the browser to download and prepare the Service Worker for installation.</p>
                        
                        <div class="code-block" data-language="javascript">
                            <pre>// Register the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}</pre>
                        </div>
                        
                        <h3>2. Installation</h3>
                        <p>During installation, the Service Worker downloads and caches essential resources. This is your opportunity to pre-cache critical files that your app needs to function offline.</p>
                        
                        <div class="code-block" data-language="javascript">
                            <pre>// Inside service-worker.js
const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/main.js',
  '/images/icon-192.png',
  '/offline.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});</pre>
                        </div>
                        
                        <h3>3. Activation</h3>
                        <p>Activation occurs after successful installation. This phase is ideal for cleaning up old caches and preparing the Service Worker to handle requests.</p>
                        
                        <div class="code-block" data-language="javascript">
                            <pre>self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete old caches
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});</pre>
                        </div>
                        
                        <h3>4. Fetch Interception</h3>
                        <p>Once activated, the Service Worker can intercept network requests and implement caching strategies to provide offline functionality.</p>
                        
                        <div class="code-block" data-language="javascript">
                            <pre>self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if available
        if (response) {
          return response;
        }
        // Otherwise fetch from network
        return fetch(event.request);
      })
      .catch(() => {
        // Show offline page if both cache and network fail
        if (event.request.destination === 'document') {
          return caches.match('/offline.html');
        }
      })
  );
});</pre>
                        </div>

                        <div class="tip-box">
                            <h4>Important Note</h4>
                            <p>Service Workers only work over HTTPS in production environments. This security requirement ensures that the powerful capabilities of Service Workers can't be exploited by malicious actors.</p>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Building Your First Service Worker</h2>
                    <div class="section-content">
                        <p>Let's create a comprehensive Service Worker that implements basic caching and offline functionality:</p>
                        
                        <div class="code-block" data-language="javascript">
                            <pre>// service-worker.js
const CACHE_NAME = 'pwa-tutorial-v1';
const OFFLINE_URL = '/offline.html';

// Resources to cache during installation
const CACHE_RESOURCES = [
  '/',
  '/styles.css',
  '/main.js',
  '/aos.js',
  '/offline.html',
  '/images/icon-192.png',
  '/images/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell');
        return cache.addAll(CACHE_RESOURCES);
      })
      .then(() => {
        // Skip waiting and activate immediately
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Cache installation failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(cacheName => {
              // Return true if this cache name should be deleted
              return cacheName.startsWith('pwa-tutorial-') && 
                     cacheName !== CACHE_NAME;
            })
            .map(cacheName => {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        // Claim control of all clients
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Skip cross-origin requests
  if (!request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Handle navigation requests (HTML pages)
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache successful navigation requests
          if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Serve cached page or offline page
          return caches.match(request)
            .then(cachedResponse => {
              return cachedResponse || caches.match(OFFLINE_URL);
            });
        })
    );
    return;
  }
  
  // Handle other requests (CSS, JS, images, etc.)
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Serve from cache
          return cachedResponse;
        }
        
        // Fetch from network and cache the response
        return fetch(request)
          .then(response => {
            // Only cache successful responses
            if (response.ok && response.type === 'basic') {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => cache.put(request, responseClone));
            }
            return response;
          })
          .catch(error => {
            console.error('Fetch failed:', error);
            throw error;
          });
      })
  );
});</pre>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Advanced Caching Strategies</h2>
                    <div class="section-content">
                        <p>Different types of content require different caching approaches. Here are the most effective strategies:</p>
                        
                        <h3>1. Cache First (Offline First)</h3>
                        <p>Best for static assets like CSS, JavaScript, and images that don't change frequently.</p>
                        
                        <div class="code-block" data-language="javascript">
                            <pre>// Cache First Strategy
function cacheFirst(request) {
  return caches.match(request)
    .then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(request).then(response => {
        const responseClone = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => cache.put(request, responseClone));
        return response;
      });
    });
}</pre>
                        </div>
                        
                        <h3>2. Network First</h3>
                        <p>Ideal for API requests and dynamic content that needs to be fresh when possible.</p>
                        
                        <div class="code-block" data-language="javascript">
                            <pre>// Network First Strategy
function networkFirst(request) {
  return fetch(request)
    .then(response => {
      // Cache successful responses
      if (response.ok) {
        const responseClone = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => cache.put(request, responseClone));
      }
      return response;
    })
    .catch(() => {
      // Fallback to cache if network fails
      return caches.match(request);
    });
}</pre>
                        </div>
                        
                        <h3>3. Stale While Revalidate</h3>
                        <p>Serves cached content immediately while updating the cache in the background.</p>
                        
                        <div class="code-block" data-language="javascript">
                            <pre>// Stale While Revalidate Strategy
function staleWhileRevalidate(request) {
  const fetchPromise = fetch(request)
    .then(response => {
      const responseClone = response.clone();
      caches.open(CACHE_NAME)
        .then(cache => cache.put(request, responseClone));
      return response;
    });
    
  return caches.match(request)
    .then(cachedResponse => {
      return cachedResponse || fetchPromise;
    });
}</pre>
                        </div>

                        <div class="warning-box">
                            <h4>Strategy Selection</h4>
                            <p>Choose your caching strategy based on content type and user expectations. Critical app shell resources should use Cache First, while user-generated content typically needs Network First.</p>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Communication Between Service Worker and Main Thread</h2>
                    <div class="section-content">
                        <p>Service Workers can communicate with your main application through the postMessage API, enabling features like cache updates, sync status, and user notifications.</p>
                        
                        <h3>Sending Messages from Main Thread</h3>
                        <div class="code-block" data-language="javascript">
                            <pre>// main.js
if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
  navigator.serviceWorker.controller.postMessage({
    type: 'CACHE_UPDATE_REQUEST',
    url: '/api/latest-data'
  });
}</pre>
                        </div>
                        
                        <h3>Receiving Messages in Service Worker</h3>
                        <div class="code-block" data-language="javascript">
                            <pre>// service-worker.js
self.addEventListener('message', event => {
  const { type, url } = event.data;
  
  switch (type) {
    case 'CACHE_UPDATE_REQUEST':
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Cache the updated data
          caches.open(CACHE_NAME)
            .then(cache => cache.put(url, new Response(JSON.stringify(data))));
          
          // Notify the main thread
          event.ports[0].postMessage({
            type: 'CACHE_UPDATED',
            success: true
          });
        })
        .catch(error => {
          event.ports[0].postMessage({
            type: 'CACHE_UPDATE_FAILED',
            error: error.message
          });
        });
      break;
  }
});</pre>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Debugging and Testing Service Workers</h2>
                    <div class="section-content">
                        <h3>Browser Developer Tools</h3>
                        <p>All modern browsers provide excellent Service Worker debugging tools:</p>
                        
                        <ul>
                            <li><strong>Chrome:</strong> DevTools â†’ Application â†’ Service Workers</li>
                            <li><strong>Firefox:</strong> DevTools â†’ Application â†’ Service Workers</li>
                            <li><strong>Edge:</strong> DevTools â†’ Application â†’ Service Workers</li>
                        </ul>
                        
                        <h3>Common Debugging Techniques</h3>
                        <div class="code-block" data-language="javascript">
                            <pre>// Add comprehensive logging
console.log('Service Worker: Install event started');

// Check cache contents
caches.open(CACHE_NAME).then(cache => {
  cache.keys().then(keys => {
    console.log('Cached resources:', keys.map(key => key.url));
  });
});

// Monitor fetch events
self.addEventListener('fetch', event => {
  console.log('SW: Fetching', event.request.url);
});</pre>
                        </div>
                        
                        <h3>Testing Offline Functionality</h3>
                        <ul>
                            <li>Use browser DevTools to simulate offline conditions</li>
                            <li>Test on actual mobile devices with network disabled</li>
                            <li>Verify that offline pages display correctly</li>
                            <li>Ensure cached resources are accessible without network</li>
                        </ul>

                        <div class="tip-box">
                            <h4>Testing Tip</h4>
                            <p>Always test Service Worker updates by incrementing the cache version and verifying that old caches are properly cleaned up during activation.</p>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Creating an Offline Page</h2>
                    <div class="section-content">
                        <p>Every PWA should include a well-designed offline page that provides value even when the network is unavailable:</p>
                        
                        <div class="code-block" data-language="html">
                            <pre>&lt;!-- offline.html --&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;You're Offline - PWA Tutorial&lt;/title&gt;
    &lt;link rel="stylesheet" href="/styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="offline-container"&gt;
        &lt;div class="offline-content"&gt;
            &lt;div class="offline-icon"&gt;
                &lt;svg width="64" height="64" viewBox="0 0 24 24" fill="none"&gt;
                    &lt;path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" stroke-width="2"/&gt;
                    &lt;path d="M9 22V12H15V22" stroke="currentColor" stroke-width="2"/&gt;
                &lt;/svg&gt;
            &lt;/div&gt;
            &lt;h1&gt;You're Currently Offline&lt;/h1&gt;
            &lt;p&gt;Don't worry! You can still browse previously visited pages or check your connection and try again.&lt;/p&gt;
            &lt;button onclick="window.location.reload()" class="retry-button"&gt;
                Try Again
            &lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Best Practices</h2>
                    <div class="section-content">
                        <h3>Performance Optimization</h3>
                        <ul>
                            <li>Keep Service Worker files small and focused</li>
                            <li>Implement selective caching based on content importance</li>
                            <li>Use cache expiration strategies for dynamic content</li>
                            <li>Minimize the number of resources cached during installation</li>
                        </ul>
                        
                        <h3>Error Handling</h3>
                        <ul>
                            <li>Always provide fallbacks for failed network requests</li>
                            <li>Implement proper error logging and monitoring</li>
                            <li>Handle quota exceeded errors gracefully</li>
                            <li>Provide meaningful offline experiences</li>
                        </ul>
                        
                        <h3>User Experience</h3>
                        <ul>
                            <li>Show loading indicators during cache operations</li>
                            <li>Notify users when new content is available</li>
                            <li>Provide clear offline status indicators</li>
                            <li>Enable users to control caching behavior</li>
                        </ul>

                        <div class="info-box">
                            <h4>Next Steps</h4>
                            <p>Now that you understand Service Workers, you're ready to explore advanced caching strategies and implement features like background sync and push notifications. These capabilities will transform your web app into a truly native-like experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
  },

  caching: {
    title: "Caching Strategies",
    subtitle: "Implementing efficient caching for optimal performance",
    content: `
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <h1 class="tutorial-title">Caching Strategies</h1>
                    <p class="tutorial-subtitle">Master efficient caching techniques for PWAs</p>
                    <div class="tutorial-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <span>18 min read</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Advanced Level</span>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Introduction to Caching Strategies</h2>
                    <div class="section-content">
                        <p>Effective caching is the cornerstone of PWA performance and offline functionality. Different types of content require different caching approaches to balance performance, freshness, and reliability. This comprehensive guide covers advanced caching patterns and their practical implementations.</p>
                        
                        <div class="info-box">
                            <h4>Coming Soon</h4>
                            <p>This section will cover comprehensive caching strategies including Cache-First, Network-First, Stale-While-Revalidate, and custom hybrid approaches for different content types.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
  },

  offline: {
    title: "Offline Support",
    subtitle: "Building robust offline experiences",
    content: `
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <h1 class="tutorial-title">Offline Support</h1>
                    <p class="tutorial-subtitle">Create seamless offline experiences for your users</p>
                    <div class="tutorial-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <span>20 min read</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Advanced Level</span>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Building Offline-First Applications</h2>
                    <div class="section-content">
                        <p>Offline support transforms web applications into resilient tools that work regardless of network connectivity. This section explores strategies for building applications that gracefully handle network interruptions and provide meaningful functionality offline.</p>
                        
                        <div class="info-box">
                            <h4>Coming Soon</h4>
                            <p>Learn about background sync, offline data storage, conflict resolution, and creating seamless online/offline transitions.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
  },

  "push-notifications": {
    title: "Push Notifications",
    subtitle: "Implementing push notifications for user engagement",
    content: `
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <h1 class="tutorial-title">Push Notifications</h1>
                    <p class="tutorial-subtitle">Engage users with timely push notifications</p>
                    <div class="tutorial-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <span>22 min read</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Advanced Level</span>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Understanding Push Notifications</h2>
                    <div class="section-content">
                        <p>Push notifications enable PWAs to communicate with users even when the application isn't actively running. This powerful feature requires careful implementation of subscription management, server-side integration, and user experience considerations.</p>
                        
                        <div class="info-box">
                            <h4>Coming Soon</h4>
                            <p>This section will cover push subscription management, notification design best practices, server-side implementation, and advanced features like action buttons and rich media.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
  },

  performance: {
    title: "Performance Optimization",
    subtitle: "Optimizing PWA performance and loading speed",
    content: `
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <h1 class="tutorial-title">Performance Optimization</h1>
                    <p class="tutorial-subtitle">Maximize your PWA's speed and efficiency</p>
                    <div class="tutorial-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <span>16 min read</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Intermediate Level</span>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">PWA Performance Best Practices</h2>
                    <div class="section-content">
                        <p>Performance optimization is crucial for PWA success. Users expect fast, responsive applications that load quickly and provide smooth interactions. This section covers comprehensive performance optimization techniques.</p>
                        
                        <div class="info-box">
                            <h4>Coming Soon</h4>
                            <p>Learn about app shell architecture, resource optimization, lazy loading, code splitting, and performance monitoring techniques.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
  },

  deployment: {
    title: "Deployment & Production",
    subtitle: "Deploying PWAs to production environments",
    content: `
            <div class="tutorial-content">
                <div class="tutorial-header">
                    <h1 class="tutorial-title">Deployment & Production</h1>
                    <p class="tutorial-subtitle">Deploy your PWA to production successfully</p>
                    <div class="tutorial-meta">
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                            </svg>
                            <span>14 min read</span>
                        </div>
                        <div class="meta-item">
                            <svg class="meta-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Intermediate Level</span>
                        </div>
                    </div>
                </div>

                <div class="tutorial-section">
                    <h2 class="section-title">Production Deployment Strategies</h2>
                    <div class="section-content">
                        <p>Deploying PWAs to production requires careful consideration of HTTPS requirements, CDN configuration, caching headers, and monitoring. This section provides comprehensive deployment guidance.</p>
                        
                        <div class="info-box">
                            <h4>Coming Soon</h4>
                            <p>Coverage of deployment platforms, HTTPS setup, CDN configuration, monitoring, analytics, and maintenance strategies for production PWAs.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
  }
};

// Utility Functions
const Utils = {
  // Random delay generator for loading simulation
  randomDelay(min = 800, max = 2500) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Smooth scroll to element
  scrollToElement(element, offset = 100) {
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  },

  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
};

// Loading Progress Bar Controller
const LoadingController = {
  show() {
    DOM.loadingProgress.classList.add("active");
    DOM.loadingBar.style.width = "0%";
  },

  updateProgress(percentage) {
    DOM.loadingBar.style.width = `${Math.min(percentage, 100)}%`;
  },

  hide() {
    setTimeout(() => {
      DOM.loadingProgress.classList.remove("active");
      DOM.loadingBar.style.width = "0%";
    }, 200);
  },

  async simulateLoading() {
    this.show();

    const steps = [
      { percentage: 20, delay: 200 },
      { percentage: 40, delay: 300 },
      { percentage: 65, delay: Utils.randomDelay(400, 800) },
      { percentage: 85, delay: Utils.randomDelay(200, 500) },
      { percentage: 95, delay: Utils.randomDelay(300, 600) },
      { percentage: 100, delay: 200 }
    ];

    for (const step of steps) {
      await new Promise((resolve) => {
        setTimeout(() => {
          this.updateProgress(step.percentage);
          resolve();
        }, step.delay);
      });
    }

    await new Promise((resolve) => setTimeout(resolve, 300));
    this.hide();
  }
};

// Navigation Controller
const NavigationController = {
  init() {
    this.bindEvents();
    this.loadInitialContent();
  },

  bindEvents() {
    // Mobile menu toggle
    DOM.mobileMenuButton.addEventListener(
      "click",
      this.toggleMobileMenu.bind(this)
    );

    // Navigation link clicks
    DOM.navLinks.forEach((link) => {
      link.addEventListener("click", this.handleNavClick.bind(this));
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !DOM.mobileMenuButton.contains(e.target) &&
        !DOM.mobileNav.contains(e.target)
      ) {
        this.closeMobileMenu();
      }
    });

    // Header scroll effect
    window.addEventListener(
      "scroll",
      Utils.debounce(this.handleScroll.bind(this), 10)
    );
  },

  toggleMobileMenu() {
    AppState.mobileMenuOpen = !AppState.mobileMenuOpen;
    DOM.mobileMenuButton.classList.toggle("active");
    DOM.mobileNav.classList.toggle("active");
  },

  closeMobileMenu() {
    if (AppState.mobileMenuOpen) {
      AppState.mobileMenuOpen = false;
      DOM.mobileMenuButton.classList.remove("active");
      DOM.mobileNav.classList.remove("active");
    }
  },

  async handleNavClick(e) {
    e.preventDefault();

    const page = e.target.getAttribute("data-page");
    if (!page || page === AppState.currentPage || AppState.isLoading) {
      return;
    }

    // Close mobile menu if open
    this.closeMobileMenu();

    // Update navigation state
    this.updateActiveNavLinks(page);

    // Load content
    await this.loadContent(page);
  },

  updateActiveNavLinks(activePage) {
    DOM.navLinks.forEach((link) => {
      const linkPage = link.getAttribute("data-page");
      if (linkPage === activePage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  },

  handleScroll() {
    const scrolled = window.scrollY > 50;
    DOM.header.classList.toggle("scrolled", scrolled);
  },

  async loadInitialContent() {
    await this.loadContent("introduction");
  },

  async loadContent(page) {
    if (AppState.isLoading) return;

    AppState.isLoading = true;
    AppState.currentPage = page;

    // Start loading animation
    const loadingPromise = LoadingController.simulateLoading();

    // Fade out current content
    DOM.dynamicContent.classList.add("content-fade-out");

    // Wait for fade out animation
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Get content data
    const contentData = ContentData[page];

    if (contentData) {
      // Update content
      DOM.dynamicContent.innerHTML = contentData.content;

      // Update page title
      document.title = `${contentData.title} - PWA Tutorial`;

      // Reinitialize AOS for new content
      AOS.refresh();
    } else {
      // Fallback content
      DOM.dynamicContent.innerHTML = `
                <div class="tutorial-content">
                    <div class="tutorial-header">
                        <h1 class="tutorial-title">Coming Soon</h1>
                        <p class="tutorial-subtitle">This section is under development</p>
                    </div>
                    <div class="tutorial-section">
                        <div class="info-box">
                            <h4>Stay Tuned</h4>
                            <p>We're working hard to bring you comprehensive content for this section. Check back soon!</p>
                        </div>
                    </div>
                </div>
            `;
    }

    // Wait for loading animation to complete
    await loadingPromise;

    // Fade in new content
    DOM.dynamicContent.classList.remove("content-fade-out");
    DOM.dynamicContent.classList.add("content-fade-in");

    // Scroll to content
    Utils.scrollToElement(DOM.dynamicContent, 120);

    // Clean up animation classes
    setTimeout(() => {
      DOM.dynamicContent.classList.remove("content-fade-in");
    }, 500);

    AppState.isLoading = false;
  }
};

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Initialize navigation
  NavigationController.init();

  // Add smooth transitions to all buttons
  document
    .querySelectorAll("button, .primary-button, .secondary-button")
    .forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px)";
      });

      button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0)";
      });
    });

  // Add click handlers for hero buttons
  document.querySelectorAll(".hero-buttons [data-page]").forEach((button) => {
    button.addEventListener("click", async (e) => {
      const page = e.target.closest("[data-page]").getAttribute("data-page");
      if (page && page !== AppState.currentPage) {
        NavigationController.updateActiveNavLinks(page);
        await NavigationController.loadContent(page);
      }
    });
  });

  // Console welcome message
  console.log(
    "%cðŸš€ PWA Tutorial Website",
    "color: #0ea5e9; font-size: 24px; font-weight: bold;"
  );
  console.log(
    "%cBuilt with vanilla HTML, CSS, and JavaScript",
    "color: #6b7280; font-size: 14px;"
  );
  console.log(
    "%cFeaturing dynamic content loading and smooth animations",
    "color: #6b7280; font-size: 14px;"
  );
});

// Add intersection observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in");
    }
  });
}, observerOptions);

// Observe elements when they're added to the DOM
const observeElements = () => {
  document
    .querySelectorAll(
      ".feature-card, .tutorial-section, .info-box, .warning-box, .tip-box"
    )
    .forEach((el) => {
      observer.observe(el);
    });
};

// Run observer on initial load and after content updates
setTimeout(observeElements, 100);

// Re-run observer after dynamic content loads
const originalLoadContent = NavigationController.loadContent;
NavigationController.loadContent = async function (...args) {
  await originalLoadContent.apply(this, args);
  setTimeout(observeElements, 100);
};

// Mobile Navigation Controller
const MobileNavController = {
  init() {
    this.mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    this.mobileNav = document.getElementById("mobile-nav");
    this.mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    this.isOpen = false;

    this.bindEvents();
  },

  bindEvents() {
    // Toggle mobile menu
    if (this.mobileMenuToggle) {
      this.mobileMenuToggle.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleMenu();
      });
    }

    // Close mobile menu when clicking nav links
    this.mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.closeMenu();
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        this.isOpen &&
        !this.mobileNav.contains(e.target) &&
        !this.mobileMenuToggle.contains(e.target)
      ) {
        this.closeMenu();
      }
    });

    // Close mobile menu on escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.closeMenu();
      }
    });

    // Close mobile menu on window resize to desktop size
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && this.isOpen) {
        this.closeMenu();
      }
    });
  },

  toggleMenu() {
    if (this.isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  },

  openMenu() {
    this.isOpen = true;
    this.mobileMenuToggle.classList.add("active");
    this.mobileNav.classList.add("active");
    this.mobileMenuToggle.setAttribute("aria-expanded", "true");

    // Prevent body scroll when menu is open
    document.body.style.overflow = "hidden";

    // Focus first menu item for accessibility
    const firstLink = this.mobileNav.querySelector(".mobile-nav-link");
    if (firstLink) {
      firstLink.focus();
    }
  },

  closeMenu() {
    this.isOpen = false;
    this.mobileMenuToggle.classList.remove("active");
    this.mobileNav.classList.remove("active");
    this.mobileMenuToggle.setAttribute("aria-expanded", "false");

    // Restore body scroll
    document.body.style.overflow = "";
  }
};

/*!
 * AOS - Animate On Scroll Library
 * Custom minimal implementation for PWA Tutorial
 */

(function () {
  "use strict";

  const AOS = {
    init: function (options = {}) {
      this.options = {
        duration: options.duration || 700,
        easing: options.easing || "ease-out-cubic",
        once: options.once !== false,
        offset: options.offset || 100,
        delay: options.delay || 0,
        ...options
      };

      this.refresh();
      this.bindEvents();
    },

    refresh: function () {
      this.elements = document.querySelectorAll("[data-aos]");
      this.createObserver();
    },

    createObserver: function () {
      if (this.observer) {
        this.observer.disconnect();
      }

      const observerOptions = {
        threshold: 0.1,
        rootMargin: `0px 0px -${this.options.offset}px 0px`
      };

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animateElement(entry.target);

            if (this.options.once) {
              this.observer.unobserve(entry.target);
            }
          } else if (!this.options.once) {
            this.resetElement(entry.target);
          }
        });
      }, observerOptions);

      this.elements.forEach((element) => {
        this.observer.observe(element);
        this.resetElement(element);
      });
    },

    animateElement: function (element) {
      const animationType = element.getAttribute("data-aos");
      const delay =
        element.getAttribute("data-aos-delay") || this.options.delay;

      setTimeout(() => {
        element.classList.add("aos-animate");
      }, delay);
    },

    resetElement: function (element) {
      element.classList.remove("aos-animate");
    },

    bindEvents: function () {
      // Refresh on window resize
      window.addEventListener(
        "resize",
        this.debounce(() => {
          this.refresh();
        }, 150)
      );
    },

    debounce: function (func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
  };

  // Add CSS animations
  const style = document.createElement("style");
  style.textContent = `
        [data-aos] {
            transition-property: opacity, transform;
            transition-duration: 0.7s;
            transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        [data-aos="fade-up"] {
            opacity: 0;
            transform: translateY(30px);
        }

        [data-aos="fade-up"].aos-animate {
            opacity: 1;
            transform: translateY(0);
        }

        [data-aos="fade-down"] {
            opacity: 0;
            transform: translateY(-30px);
        }

        [data-aos="fade-down"].aos-animate {
            opacity: 1;
            transform: translateY(0);
        }

        [data-aos="fade-left"] {
            opacity: 0;
            transform: translateX(30px);
        }

        [data-aos="fade-left"].aos-animate {
            opacity: 1;
            transform: translateX(0);
        }

        [data-aos="fade-right"] {
            opacity: 0;
            transform: translateX(-30px);
        }

        [data-aos="fade-right"].aos-animate {
            opacity: 1;
            transform: translateX(0);
        }

        [data-aos="fade-in"] {
            opacity: 0;
        }

        [data-aos="fade-in"].aos-animate {
            opacity: 1;
        }

        [data-aos="zoom-in"] {
            opacity: 0;
            transform: scale(0.9);
        }

        [data-aos="zoom-in"].aos-animate {
            opacity: 1;
            transform: scale(1);
        }

        [data-aos="zoom-out"] {
            opacity: 0;
            transform: scale(1.1);
        }

        [data-aos="zoom-out"].aos-animate {
            opacity: 1;
            transform: scale(1);
        }

        [data-aos="flip-up"] {
            opacity: 0;
            transform: perspective(400px) rotateX(-90deg);
        }

        [data-aos="flip-up"].aos-animate {
            opacity: 1;
            transform: perspective(400px) rotateX(0);
        }

        [data-aos="flip-down"] {
            opacity: 0;
            transform: perspective(400px) rotateX(90deg);
        }

        [data-aos="flip-down"].aos-animate {
            opacity: 1;
            transform: perspective(400px) rotateX(0);
        }

        [data-aos="slide-up"] {
            opacity: 0;
            transform: translateY(100%);
        }

        [data-aos="slide-up"].aos-animate {
            opacity: 1;
            transform: translateY(0);
        }

        [data-aos="slide-down"] {
            opacity: 0;
            transform: translateY(-100%);
        }

        [data-aos="slide-down"].aos-animate {
            opacity: 1;
            transform: translateY(0);
        }

        /* Custom easing functions */
        [data-aos-easing="ease-out-cubic"] {
            transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        [data-aos-easing="ease-in-out-cubic"] {
            transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        [data-aos-easing="ease-out-back"] {
            transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        /* Disable animations on mobile devices with reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
            [data-aos] {
                transition: none !important;
                animation: none !important;
                transform: none !important;
                opacity: 1 !important;
            }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            [data-aos] {
                transition-duration: 0.5s;
            }
        }
    `;

  document.head.appendChild(style);

  // Export to global scope
  window.AOS = AOS;

  // Auto-initialize if DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      // Auto-init can be disabled by setting data-aos-init="false" on html element
      if (document.documentElement.getAttribute("data-aos-init") !== "false") {
        AOS.init();
      }
    });
  } else {
    if (document.documentElement.getAttribute("data-aos-init") !== "false") {
      AOS.init();
    }
  }
})();
