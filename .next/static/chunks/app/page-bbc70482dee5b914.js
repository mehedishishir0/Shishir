(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[931],{

/***/ 5916:
/***/ (function(module) {

"use strict";
module.exports = @react-three/drei;

/***/ }),

/***/ 2775:
/***/ (function(module) {

"use strict";
module.exports = @react-three/fiber;

/***/ }),

/***/ 8424:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2443));


/***/ }),

/***/ 2443:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ HomePage; }
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7437);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/index.js
var react = __webpack_require__(2265);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 253 modules
var proxy = __webpack_require__(2822);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs + 1 modules
var dist = __webpack_require__(5293);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(535);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(4508);
;// CONCATENATED MODULE: ./components/ui/button.tsx





const buttonVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? dist/* Slot */.g7 : "button";
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Comp, {
        className: (0,utils.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    });
});
Button.displayName = "Button";


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/mail.js
var mail = __webpack_require__(9345);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/external-link.js
var external_link = __webpack_require__(6362);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/github.js
var github = __webpack_require__(5135);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/linkedin.js
var linkedin = __webpack_require__(598);
;// CONCATENATED MODULE: ./components/ui/coding-animation.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function CodingAnimation() {
    const [currentLine, setCurrentLine] = (0,react.useState)(0);
    const [currentChar, setCurrentChar] = (0,react.useState)(0);
    const [displayedCode, setDisplayedCode] = (0,react.useState)([]);
    const codeLines = [
        "const developer = {",
        "  name: 'Alex Chen',",
        "  role: 'Full Stack Developer',",
        "  skills: ['React', 'Node.js', 'Python'],",
        "  passion: 'Creating amazing experiences',",
        "  coffee: '∞',",
        "  status: 'Available for hire'",
        "}",
        "",
        "function createMagic() {",
        "  return code + creativity + coffee;",
        "}",
        "",
        "// Let's build something amazing! \uD83D\uDE80"
    ];
    (0,react.useEffect)(()=>{
        if (currentLine < codeLines.length) {
            const line = codeLines[currentLine];
            if (line !== undefined && currentChar < line.length) {
                const timer = setTimeout(()=>{
                    setDisplayedCode((prev)=>{
                        const newCode = [
                            ...prev
                        ];
                        if (!newCode[currentLine]) newCode[currentLine] = "";
                        newCode[currentLine] += line[currentChar];
                        return newCode;
                    });
                    setCurrentChar((prev)=>prev + 1);
                }, 50);
                return ()=>clearTimeout(timer);
            } else {
                const timer = setTimeout(()=>{
                    setCurrentLine((prev)=>prev + 1);
                    setCurrentChar(0);
                }, 500);
                return ()=>clearTimeout(timer);
            }
        }
    }, [
        currentLine,
        currentChar,
        codeLines
    ]);
    const getSyntaxHighlighting = (line, index)=>{
        if (!line) return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
            className: "text-gray-300",
            children: line
        });
        if (line.includes("const") || line.includes("function")) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-purple-400",
                children: line
            });
        } else if (line.includes("name:") || line.includes("role:")) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-green-400",
                children: line
            });
        } else if (line.includes("//")) {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-gray-500",
                children: line
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                className: "text-cyan-400",
                children: line
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "font-mono text-sm bg-gray-900/90 backdrop-blur-lg rounded-lg p-6 border border-gray-700 shadow-2xl max-w-2xl w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "w-3 h-3 bg-red-500 rounded-full"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "w-3 h-3 bg-yellow-500 rounded-full"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "w-3 h-3 bg-green-500 rounded-full"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-gray-400 ml-2",
                        children: "developer.js"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "space-y-1",
                children: displayedCode.map((line, index)=>{
                    var _codeLines_currentLine;
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-gray-500 w-8 text-right mr-4",
                                children: index + 1
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                className: "text-gray-300",
                                children: [
                                    getSyntaxHighlighting(line || "", index),
                                    index === currentLine && currentChar === (((_codeLines_currentLine = codeLines[currentLine]) === null || _codeLines_currentLine === void 0 ? void 0 : _codeLines_currentLine.length) || 0) && currentLine < codeLines.length && /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "animate-pulse text-white",
                                        children: "|"
                                    })
                                ]
                            })
                        ]
                    }, index);
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/particle-background.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

function ParticleBackground() {
    const canvasRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        const resizeCanvas = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        const particles = [];
        const colors = [
            "#8B5CF6",
            "#06B6D4",
            "#EC4899",
            "#10B981",
            "#F59E0B"
        ];
        for(let i = 0; i < 150; i++){
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                size: Math.random() * 2 + 0.5,
                color: colors[Math.floor(Math.random() * colors.length)],
                opacity: Math.random() * 0.5 + 0.2
            });
        }
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (e)=>{
            mouseX = e.clientX;
            mouseY = e.clientY;
        };
        window.addEventListener("mousemove", handleMouseMove);
        const animate = ()=>{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle, index)=>{
                const dx = mouseX - particle.x;
                const dy = mouseY - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 150) {
                    particle.vx += dx * 0.00005;
                    particle.vy += dy * 0.00005;
                }
                particle.x += particle.vx;
                particle.y += particle.vy;
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -0.8;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -0.8;
                // Draw connections
                particles.forEach((otherParticle, otherIndex)=>{
                    if (index !== otherIndex) {
                        const dx = particle.x - otherParticle.x;
                        const dy = particle.y - otherParticle.y;
                        const distance = Math.sqrt(dx * dx + dy * dy);
                        if (distance < 100) {
                            ctx.beginPath();
                            ctx.moveTo(particle.x, particle.y);
                            ctx.lineTo(otherParticle.x, otherParticle.y);
                            ctx.strokeStyle = "rgba(139, 92, 246, ".concat(0.1 * (1 - distance / 100), ")");
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                        }
                    }
                });
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = particle.color;
                ctx.globalAlpha = particle.opacity;
                ctx.fill();
                ctx.globalAlpha = 1;
            });
            requestAnimationFrame(animate);
        };
        animate();
        return ()=>{
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 pointer-events-none"
    });
}

;// CONCATENATED MODULE: ./lib/api.ts
/* provided dependency */ var process = __webpack_require__(257);
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";
// Generic API function
async function apiRequest(endpoint, options) {
    const response = await fetch("".concat(API_BASE_URL).concat(endpoint), {
        headers: {
            "Content-Type": "application/json",
            ...options === null || options === void 0 ? void 0 : options.headers
        },
        ...options
    });
    if (!response.ok) {
        throw new Error("API Error: ".concat(response.status, " ").concat(response.statusText));
    }
    return response.json();
}
// Personal Info API
async function getPersonalInfo() {
    return apiRequest("/personal-info");
}
// Projects API
async function getProjects() {
    return apiRequest("/projects");
}
async function getProject(id) {
    return apiRequest("/projects/".concat(id));
}
// Skills API
async function getSkills() {
    return apiRequest("/skills");
}
// Stats API
async function getStats() {
    return apiRequest("/stats");
}
// Contact Form API
async function submitContactForm(data) {
    return apiRequest("/contact", {
        method: "POST",
        body: JSON.stringify(data)
    });
}
// Newsletter API
async function subscribeNewsletter(email) {
    return apiRequest("/newsletter", {
        method: "POST",
        body: JSON.stringify({
            email
        })
    });
}

;// CONCATENATED MODULE: ./hooks/use-personal-info.ts


function usePersonalInfo() {
    const [data, setData] = (0,react.useState)(null);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        async function fetchPersonalInfo() {
            try {
                setIsLoading(true);
                const info = await getPersonalInfo();
                setData(info);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch personal info");
            } finally{
                setIsLoading(false);
            }
        }
        fetchPersonalInfo();
    }, []);
    return {
        data,
        isLoading,
        error
    };
}

;// CONCATENATED MODULE: ./components/ui/error-boundary.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

class ErrorBoundary extends react.Component {
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback || /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-full h-96 bg-gradient-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-lg border border-red-500/20 flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                            className: "w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: "text-red-400 text-2xl",
                                children: "⚠"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-gray-400",
                            children: "Something went wrong loading this component"
                        })
                    ]
                })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
}
/* harmony default export */ var error_boundary = (ErrorBoundary);

;// CONCATENATED MODULE: ./components/sections/hero-section.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






 // Correct import path
function HeroSection() {
    var _personalInfo_socialLinks;
    const { data: personalInfo, isLoading } = usePersonalInfo();
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
            className: "relative min-h-screen flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "w-16 h-16 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-500 mx-auto mb-4"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-gray-400",
                        children: "Loading..."
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "relative min-h-screen flex items-center justify-center px-4",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(error_boundary, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ParticleBackground, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 1
                        },
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.p, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.2
                                        },
                                        className: "text-cyan-400 text-lg font-medium",
                                        children: (personalInfo === null || personalInfo === void 0 ? void 0 : personalInfo.greeting) || "Hello, I'm"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.h1, {
                                        initial: {
                                            opacity: 0,
                                            y: 30
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.4
                                        },
                                        className: "text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent",
                                        children: (personalInfo === null || personalInfo === void 0 ? void 0 : personalInfo.name) || "Alex Chen"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.p, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.6
                                        },
                                        className: "text-2xl lg:text-3xl text-gray-300 font-light",
                                        children: (personalInfo === null || personalInfo === void 0 ? void 0 : personalInfo.title) || "Full Stack Developer & Creative Technologist"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.p, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: 0.8
                                        },
                                        className: "text-lg text-gray-400 max-w-lg",
                                        children: (personalInfo === null || personalInfo === void 0 ? void 0 : personalInfo.description) || "I craft digital experiences that blend cutting-edge technology with beautiful design."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1
                                },
                                className: "flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                                        className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 text-lg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(mail/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "Get In Touch"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                                        variant: "outline",
                                        className: "border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                                className: "w-5 h-5 mr-2"
                                            }),
                                            "View Resume"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: 1.2
                                },
                                className: "flex gap-6",
                                children: (personalInfo === null || personalInfo === void 0 ? void 0 : (_personalInfo_socialLinks = personalInfo.socialLinks) === null || _personalInfo_socialLinks === void 0 ? void 0 : _personalInfo_socialLinks.map((link)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                        size: "icon",
                                        variant: "ghost",
                                        className: "text-white hover:text-purple-400 hover:bg-white/10",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: link.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                link.platform === "github" && /*#__PURE__*/ (0,jsx_runtime.jsx)(github/* default */.Z, {
                                                    className: "w-6 h-6"
                                                }),
                                                link.platform === "linkedin" && /*#__PURE__*/ (0,jsx_runtime.jsx)(linkedin/* default */.Z, {
                                                    className: "w-6 h-6"
                                                }),
                                                link.platform === "email" && /*#__PURE__*/ (0,jsx_runtime.jsx)(mail/* default */.Z, {
                                                    className: "w-6 h-6"
                                                })
                                            ]
                                        })
                                    }, link.platform))) || // Fallback social links if API data is not available
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "text-white hover:text-purple-400 hover:bg-white/10",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(github/* default */.Z, {
                                                className: "w-6 h-6"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "text-white hover:text-cyan-400 hover:bg-white/10",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(linkedin/* default */.Z, {
                                                className: "w-6 h-6"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "text-white hover:text-pink-400 hover:bg-white/10",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(mail/* default */.Z, {
                                                className: "w-6 h-6"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            delay: 0.5,
                            duration: 1
                        },
                        className: "flex justify-center lg:justify-end",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(error_boundary, {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CodingAnimation, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    delay: 2
                },
                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "w-6 h-10 border-2 border-white/30 rounded-full flex justify-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                        animate: {
                            y: [
                                0,
                                12,
                                0
                            ]
                        },
                        transition: {
                            duration: 1.5,
                            repeat: Infinity
                        },
                        className: "w-1 h-3 bg-white/60 rounded-full mt-2"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/card.tsx



const Card = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    });
});
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("flex flex-col space-y-1.5 p-6", className),
        ...props
    });
});
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    });
});
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("text-sm text-muted-foreground", className),
        ...props
    });
});
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("p-6 pt-0", className),
        ...props
    });
});
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: ref,
        className: (0,utils.cn)("flex items-center p-6 pt-0", className),
        ...props
    });
});
CardFooter.displayName = "CardFooter";


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/heart.js
var heart = __webpack_require__(8997);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/trending-up.js
var trending_up = __webpack_require__(525);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/users.js
var users = __webpack_require__(5805);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/coffee.js
var coffee = __webpack_require__(1197);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/clock.js
var clock = __webpack_require__(1723);
;// CONCATENATED MODULE: ./components/sections/about-section.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function AboutSection() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent",
                            children: "About Me"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-xl text-gray-300 max-w-3xl mx-auto",
                            children: "I'm a passionate full-stack developer with a love for creating immersive digital experiences. With expertise in modern web technologies and creative problem-solving, I bring ideas to life through code."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                    className: "p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg border border-white/10",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(heart/* default */.Z, {
                                                        className: "w-8 h-8 text-pink-400"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "My Passion"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-gray-300",
                                                children: "I believe in the power of technology to solve real-world problems and create meaningful experiences. Every line of code I write is driven by the desire to make a positive impact."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                    className: "p-8 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 backdrop-blur-lg border border-white/10",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(trending_up/* default */.Z, {
                                                        className: "w-8 h-8 text-cyan-400"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Always Growing"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-gray-300",
                                                children: "The tech world evolves rapidly, and I love staying at the forefront. I'm constantly learning new technologies, experimenting with innovative solutions, and pushing the boundaries of what's possible."
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                    className: "p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(users/* default */.Z, {
                                                        className: "w-8 h-8 text-purple-400"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                        className: "text-2xl font-bold text-white",
                                                        children: "Team Player"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                className: "text-gray-300",
                                                children: "Great products are built by great teams. I thrive in collaborative environments and believe that the best solutions come from diverse perspectives and open communication."
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-center p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl border border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(coffee/* default */.Z, {
                                                    className: "w-12 h-12 text-yellow-400 mx-auto mb-4"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                    className: "text-white font-semibold mb-2",
                                                    children: "Coffee Lover"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-400 text-sm",
                                                    children: "Fueled by caffeine and creativity"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text-center p-6 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-2xl border border-white/10",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(clock/* default */.Z, {
                                                    className: "w-12 h-12 text-cyan-400 mx-auto mb-4"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                                    className: "text-white font-semibold mb-2",
                                                    children: "Night Owl"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                                    className: "text-gray-400 text-sm",
                                                    children: "Best code happens after midnight"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                    className: "p-8 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-lg border border-white/10",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                                className: "text-2xl font-bold text-white mb-4",
                                                children: "Fun Facts"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "space-y-3 text-gray-300",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-2 h-2 bg-purple-400 rounded-full"
                                                            }),
                                                            "Started coding at age 12 with HTML and CSS"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-2 h-2 bg-cyan-400 rounded-full"
                                                            }),
                                                            "Built my first mobile app in college"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-2 h-2 bg-pink-400 rounded-full"
                                                            }),
                                                            "Love photography and digital art in my free time"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                                                className: "w-2 h-2 bg-teal-400 rounded-full"
                                                            }),
                                                            "Speak 3 languages: English, Mandarin, and JavaScript \uD83D\uDE04"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-in-view.mjs + 1 modules
var use_in_view = __webpack_require__(3433);
;// CONCATENATED MODULE: ./components/ui/stats-counter.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function StatsCounter(param) {
    let { end, duration = 2000, suffix = "" } = param;
    const [count, setCount] = (0,react.useState)(0);
    const ref = (0,react.useRef)(null);
    const isInView = (0,use_in_view/* useInView */.Y)(ref);
    (0,react.useEffect)(()=>{
        if (isInView) {
            let startTime;
            const animate = (currentTime)=>{
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);
                setCount(Math.floor(progress * end));
                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }
    }, [
        isInView,
        end,
        duration
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
        ref: ref,
        children: [
            count,
            suffix
        ]
    });
}

;// CONCATENATED MODULE: ./hooks/use-stats.ts


function useStats() {
    const [data, setData] = (0,react.useState)(null);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        async function fetchStats() {
            try {
                setIsLoading(true);
                const stats = await getStats();
                setData(stats);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch stats");
            } finally{
                setIsLoading(false);
            }
        }
        fetchStats();
    }, []);
    return {
        data,
        isLoading,
        error
    };
}

;// CONCATENATED MODULE: ./components/sections/stats-section.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function StatsSection() {
    const { data: stats, isLoading } = useStats();
    if (isLoading) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "py-20 px-4 bg-gradient-to-r from-purple-900/30 to-cyan-900/30",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-8",
                children: stats === null || stats === void 0 ? void 0 : stats.map((stat, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: index * 0.1
                        },
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "text-4xl lg:text-6xl font-bold bg-gradient-to-r ".concat(stat.gradient, " bg-clip-text text-transparent mb-2"),
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(StatsCounter, {
                                    end: stat.value,
                                    suffix: stat.suffix
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-300",
                                children: stat.label
                            })
                        ]
                    }, stat.id))
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/code.js
var code = __webpack_require__(4935);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/database.js
var database = __webpack_require__(91);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/palette.js
var palette = __webpack_require__(2805);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/smartphone.js
var smartphone = __webpack_require__(3388);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/globe.js
var globe = __webpack_require__(9202);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/zap.js
var zap = __webpack_require__(1239);
;// CONCATENATED MODULE: ./components/ui/skill-card.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




const iconMap = {
    "Code": /*#__PURE__*/ (0,jsx_runtime.jsx)(code/* default */.Z, {
        className: "w-8 h-8 text-white"
    }),
    "Database": /*#__PURE__*/ (0,jsx_runtime.jsx)(database/* default */.Z, {
        className: "w-8 h-8 text-white"
    }),
    "Palette": /*#__PURE__*/ (0,jsx_runtime.jsx)(palette/* default */.Z, {
        className: "w-8 h-8 text-white"
    }),
    "Smartphone": /*#__PURE__*/ (0,jsx_runtime.jsx)(smartphone/* default */.Z, {
        className: "w-8 h-8 text-white"
    }),
    "Globe": /*#__PURE__*/ (0,jsx_runtime.jsx)(globe/* default */.Z, {
        className: "w-8 h-8 text-white"
    }),
    "Zap": /*#__PURE__*/ (0,jsx_runtime.jsx)(zap/* default */.Z, {
        className: "w-8 h-8 text-white"
    })
};
function SkillCard(param) {
    let { skill, index } = param;
    const ref = (0,react.useRef)(null);
    const isInView = (0,use_in_view/* useInView */.Y)(ref);
    const getIcon = (iconName)=>{
        if (!iconName) return /*#__PURE__*/ (0,jsx_runtime.jsx)(code/* default */.Z, {
            className: "w-8 h-8 text-white"
        });
        return iconMap[iconName] || /*#__PURE__*/ (0,jsx_runtime.jsx)(code/* default */.Z, {
            className: "w-8 h-8 text-white"
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
        ref: ref,
        initial: {
            scale: 0,
            rotate: -180
        },
        animate: isInView ? {
            scale: 1,
            rotate: 0
        } : {
            scale: 0,
            rotate: -180
        },
        transition: {
            delay: index * 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20
        },
        className: "group",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
            className: "p-6 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                className: "text-center space-y-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform",
                        children: getIcon(skill.icon)
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                        className: "text-white font-semibold text-lg",
                        children: skill.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex justify-between text-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: "text-gray-400",
                                        children: "Proficiency"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-white",
                                        children: [
                                            skill.level,
                                            "%"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-full bg-gray-700 rounded-full h-2",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                                    className: "h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500",
                                    initial: {
                                        width: 0
                                    },
                                    animate: isInView ? {
                                        width: "".concat(skill.level, "%")
                                    } : {
                                        width: 0
                                    },
                                    transition: {
                                        delay: index * 0.1 + 0.5,
                                        duration: 1
                                    }
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                        className: "text-gray-400 text-sm",
                        children: skill.description
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./hooks/use-skills.ts


function useSkills() {
    const [data, setData] = (0,react.useState)(null);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        async function fetchSkills() {
            try {
                setIsLoading(true);
                const skills = await getSkills();
                setData(skills);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch skills");
            } finally{
                setIsLoading(false);
            }
        }
        fetchSkills();
    }, []);
    return {
        data,
        isLoading,
        error
    };
}

;// CONCATENATED MODULE: ./components/sections/skills-section.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function SkillsSection() {
    const { data: skills, isLoading } = useSkills();
    if (isLoading) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent",
                            children: "Skills & Expertise"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-xl text-gray-300",
                            children: "Technologies and tools I use to bring ideas to life"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: skills === null || skills === void 0 ? void 0 : skills.map((skill, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(SkillCard, {
                            skill: skill,
                            index: index
                        }, skill.id))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/badge.tsx




const badgeVariants = (0,class_variance_authority_dist/* cva */.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge(param) {
    let { className, variant, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: (0,utils.cn)(badgeVariants({
            variant
        }), className),
        ...props
    });
}


// EXTERNAL MODULE: ./node_modules/@radix-ui/react-progress/dist/index.mjs + 4 modules
var react_progress_dist = __webpack_require__(7796);
;// CONCATENATED MODULE: ./components/ui/progress.tsx
/* __next_internal_client_entry_do_not_use__ Progress auto */ 



const Progress = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, value, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(react_progress_dist/* Root */.fC, {
        ref: ref,
        className: (0,utils.cn)("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className),
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react_progress_dist/* Indicator */.z$, {
            className: "h-full w-full flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all",
            style: {
                transform: "translateX(-".concat(100 - (value || 0), "%)")
            }
        })
    });
});
Progress.displayName = react_progress_dist/* Root */.fC.displayName;


;// CONCATENATED MODULE: ./components/ui/project-card.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







function ProjectCard(param) {
    let { project, index } = param;
    const [isFlipped, setIsFlipped] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: index * 0.1
        },
        className: "perspective-1000 group",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "relative w-full h-96 transform-style-preserve-3d transition-transform duration-700 ".concat(isFlipped ? "rotate-y-180" : ""),
            onMouseEnter: ()=>setIsFlipped(true),
            onMouseLeave: ()=>setIsFlipped(false),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                    className: "absolute inset-0 backface-hidden bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-lg border border-white/20 group-hover:border-purple-500/50 transition-all duration-300",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                        className: "p-6 h-full flex flex-col",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "w-full h-48 bg-gradient-to-br from-purple-600/30 to-cyan-600/30 rounded-lg mb-4 flex items-center justify-center overflow-hidden",
                                children: project.image ? /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                                    src: project.image || "/placeholder.svg",
                                    alt: project.title,
                                    className: "w-full h-full object-cover"
                                }) : /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                    className: "text-4xl",
                                    children: project.emoji
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: project.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                className: "text-gray-300 text-sm mb-4 flex-1",
                                children: project.description
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    project.technologies.slice(0, 3).map((tech)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Badge, {
                                            variant: "secondary",
                                            className: "bg-white/10 text-white text-xs",
                                            children: tech
                                        }, tech)),
                                    project.technologies.length > 3 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(Badge, {
                                        variant: "secondary",
                                        className: "bg-white/10 text-white text-xs",
                                        children: [
                                            "+",
                                            project.technologies.length - 3
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                    className: "absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-pink-500/20 to-teal-500/20 backdrop-blur-lg border border-white/20",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(CardContent, {
                        className: "p-6 h-full flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                        className: "text-xl font-bold text-white mb-4",
                                        children: "Project Details"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                        className: "text-gray-300 text-sm mb-4",
                                        children: project.longDescription
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "space-y-2 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                        className: "text-gray-400",
                                                        children: "Completion"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "text-white",
                                                        children: [
                                                            project.completion,
                                                            "%"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Progress, {
                                                value: project.completion,
                                                className: "h-2"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            project.liveUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                                size: "sm",
                                                className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: project.liveUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(external_link/* default */.Z, {
                                                            className: "w-4 h-4 mr-2"
                                                        }),
                                                        "Live Demo"
                                                    ]
                                                })
                                            }),
                                            project.githubUrl && /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                                size: "sm",
                                                variant: "outline",
                                                className: "border-white/20 text-white hover:bg-white/10",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                    href: project.githubUrl,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(github/* default */.Z, {
                                                        className: "w-4 h-4"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: project.technologies.map((tech)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(Badge, {
                                                variant: "secondary",
                                                className: "bg-white/5 text-white text-xs",
                                                children: tech
                                            }, tech))
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./hooks/use-projects.ts


function useProjects() {
    const [data, setData] = (0,react.useState)(null);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    const [error, setError] = (0,react.useState)(null);
    (0,react.useEffect)(()=>{
        async function fetchProjects() {
            try {
                setIsLoading(true);
                const projects = await getProjects();
                setData(projects);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to fetch projects");
            } finally{
                setIsLoading(false);
            }
        }
        fetchProjects();
    }, []);
    return {
        data,
        isLoading,
        error
    };
}

;// CONCATENATED MODULE: ./components/sections/projects-section.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function ProjectsSection() {
    const { data: projects, isLoading } = useProjects();
    if (isLoading) {
        return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
            className: "py-20 px-4",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container mx-auto max-w-7xl",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "text-center mb-16",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
                            children: "Featured Projects"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [
                            ...Array(6)
                        ].map((_, i)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                                className: "h-96 bg-gray-800/50 rounded-lg animate-pulse"
                            }, i))
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
                            children: "Featured Projects"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-xl text-gray-300",
                            children: "A showcase of my recent work and creative experiments"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: projects === null || projects === void 0 ? void 0 : projects.map((project, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectCard, {
                            project: project,
                            index: index
                        }, project.id))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.5
                    },
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                        className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-3 text-lg",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(github/* default */.Z, {
                                className: "w-5 h-5 mr-2"
                            }),
                            "View All Projects"
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/input.tsx



const Input = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
        type: type,
        className: (0,utils.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Input.displayName = "Input";


;// CONCATENATED MODULE: ./components/ui/textarea.tsx



const Textarea = /*#__PURE__*/ react.forwardRef((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("textarea", {
        className: (0,utils.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    });
});
Textarea.displayName = "Textarea";


// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/icons/map-pin.js
var map_pin = __webpack_require__(3774);
// EXTERNAL MODULE: ./hooks/use-toast.ts
var use_toast = __webpack_require__(5153);
// EXTERNAL MODULE: external "@react-three/fiber"
var fiber_ = __webpack_require__(2775);
;// CONCATENATED MODULE: ./components/ui/safe-canvas.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 

 // Removed ErrorBoundary import from 'react'
 // Correct import path for custom ErrorBoundary
function CanvasErrorFallback() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "w-full h-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg border border-white/10 flex items-center justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        className: "text-cyan-400 text-2xl",
                        children: "\uD83C\uDF10"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-gray-400",
                    children: "3D Scene Unavailable"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-gray-500 text-sm",
                    children: "WebGL might not be supported"
                })
            ]
        })
    });
}
function CanvasLoadingFallback() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "w-full h-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-lg rounded-lg border border-white/10 flex items-center justify-center",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "w-16 h-16 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500 mx-auto mb-4"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                    className: "text-gray-400",
                    children: "Loading 3D Scene..."
                })
            ]
        })
    });
}
function SafeCanvas(param) {
    let { children, fallback, className = "w-full h-96" } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: className,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(error_boundary, {
            fallback: fallback || /*#__PURE__*/ (0,jsx_runtime.jsx)(CanvasErrorFallback, {}),
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
                fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(CanvasLoadingFallback, {}),
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(fiber_.Canvas, {
                    camera: {
                        position: [
                            0,
                            0,
                            3
                        ],
                        fov: 75
                    },
                    gl: {
                        antialias: true,
                        alpha: true,
                        powerPreference: "high-performance"
                    },
                    onCreated: (param)=>{
                        let { gl } = param;
                        gl.setClearColor("#000000", 0);
                    },
                    dpr: [
                        1,
                        2
                    ],
                    performance: {
                        min: 0.5
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(react.Suspense, {
                        fallback: null,
                        children: children
                    })
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/api/app-dynamic.js
var app_dynamic = __webpack_require__(166);
;// CONCATENATED MODULE: ./components/sections/contact-section.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 











// Dynamically import the 3D component to avoid SSR issues
const Earth3DSafe = (0,app_dynamic["default"])(()=>__webpack_require__.e(/* import() */ 579).then(__webpack_require__.bind(__webpack_require__, 4579)), {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(4579)
            ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "w-16 h-16 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500"
            })
        })
});
function ContactSection() {
    const [isSubmitting, setIsSubmitting] = (0,react.useState)(false);
    const [isMounted, setIsMounted] = (0,react.useState)(false);
    const { toast } = (0,use_toast/* useToast */.pm)();
    (0,react.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);
        const data = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            message: formData.get("message")
        };
        try {
            await submitContactForm(data);
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon."
            });
            e.currentTarget.reset();
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again.",
                variant: "destructive"
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("section", {
        className: "py-20 px-4 bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-teal-900/50",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        y: 50
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.8
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                            className: "text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-pink-400 bg-clip-text text-transparent",
                            children: "Let's Create Together"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                            className: "text-xl text-gray-300",
                            children: "Ready to bring your ideas to life? Let's start a conversation and build something amazing."
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid lg:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(proxy/* motion */.E.div, {
                            initial: {
                                opacity: 0,
                                x: -50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Card, {
                                    className: "p-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-lg border border-white/20",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CardContent, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                                            onSubmit: handleSubmit,
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "grid grid-cols-2 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                                                            name: "firstName",
                                                            placeholder: "First Name",
                                                            required: true,
                                                            className: "bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                                                            name: "lastName",
                                                            placeholder: "Last Name",
                                                            required: true,
                                                            className: "bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                                                    name: "email",
                                                    type: "email",
                                                    placeholder: "Email Address",
                                                    required: true,
                                                    className: "bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Input, {
                                                    name: "subject",
                                                    placeholder: "Subject",
                                                    required: true,
                                                    className: "bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(Textarea, {
                                                    name: "message",
                                                    placeholder: "Tell me about your project...",
                                                    required: true,
                                                    className: "bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-32"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                                                    type: "submit",
                                                    disabled: isSubmitting,
                                                    className: "w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 py-3 text-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(mail/* default */.Z, {
                                                            className: "w-5 h-5 mr-2"
                                                        }),
                                                        isSubmitting ? "Sending..." : "Send Message"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "grid grid-cols-3 gap-4 mt-8",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(github/* default */.Z, {
                                                className: "w-6 h-6"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            className: "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 p-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(linkedin/* default */.Z, {
                                                className: "w-6 h-6"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            className: "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 p-4",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(mail/* default */.Z, {
                                                className: "w-6 h-6"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "mt-8 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-4 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(map_pin/* default */.Z, {
                                                    className: "w-5 h-5 text-cyan-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "San Francisco, CA"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-4 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(mail/* default */.Z, {
                                                    className: "w-5 h-5 text-purple-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "alex@example.com"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-4 text-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(clock/* default */.Z, {
                                                    className: "w-5 h-5 text-pink-400"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                    children: "Available for freelance work"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(proxy/* motion */.E.div, {
                            initial: {
                                opacity: 0,
                                x: 50
                            },
                            whileInView: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                duration: 0.8
                            },
                            className: "h-96",
                            children: isMounted && /*#__PURE__*/ (0,jsx_runtime.jsx)(SafeCanvas, {
                                className: "w-full h-96",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Earth3DSafe, {})
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/layout/footer.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 


function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("footer", {
        className: "py-12 px-4 border-t border-white/10 bg-gradient-to-r from-purple-900/20 to-cyan-900/20",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto max-w-6xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "grid md:grid-cols-3 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                                    className: "text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4",
                                    children: "Alex Chen"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    className: "text-gray-400 mb-4",
                                    children: "Full Stack Developer passionate about creating amazing digital experiences."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "text-gray-400 hover:text-purple-400",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(github/* default */.Z, {
                                                className: "w-5 h-5"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "text-gray-400 hover:text-cyan-400",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(linkedin/* default */.Z, {
                                                className: "w-5 h-5"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                                            size: "icon",
                                            variant: "ghost",
                                            className: "text-gray-400 hover:text-pink-400",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(mail/* default */.Z, {
                                                className: "w-5 h-5"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                    className: "text-white font-semibold mb-4",
                                    children: "Quick Links"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "space-y-2 text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "#about",
                                                className: "hover:text-white transition-colors",
                                                children: "About"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "#skills",
                                                className: "hover:text-white transition-colors",
                                                children: "Skills"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "#projects",
                                                className: "hover:text-white transition-colors",
                                                children: "Projects"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("a", {
                                                href: "#contact",
                                                className: "hover:text-white transition-colors",
                                                children: "Contact"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("h4", {
                                    className: "text-white font-semibold mb-4",
                                    children: "Services"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                    className: "space-y-2 text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: "Web Development"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: "Mobile Apps"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: "UI/UX Design"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                                            children: "Consulting"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "border-t border-white/10 pt-8 text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                        className: "text-gray-400",
                        children: [
                            "\xa9 2024 Alex Chen. Crafted with ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(heart/* default */.Z, {
                                className: "w-4 h-4 inline text-red-400"
                            }),
                            " and lots of coffee."
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/loading-spinner.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 
function LoadingSpinner() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "w-20 h-20 border-4 border-purple-500/30 rounded-full animate-spin border-t-purple-500"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: "absolute inset-0 w-20 h-20 border-4 border-cyan-500/30 rounded-full animate-spin border-t-cyan-500",
                    style: {
                        animationDirection: "reverse"
                    }
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/page.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









 // Correct import path
function HomePage() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("main", {
        className: "min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white overflow-x-hidden",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(error_boundary, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Suspense, {
                fallback: /*#__PURE__*/ (0,jsx_runtime.jsx)(LoadingSpinner, {}),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(HeroSection, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(StatsSection, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(AboutSection, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SkillsSection, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ProjectsSection, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactSection, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Footer, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 5153:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pm: function() { return /* binding */ useToast; }
/* harmony export */ });
/* unused harmony exports reducer, toast */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2265);
/* __next_internal_client_entry_do_not_use__ reducer,useToast,toast auto */ 
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast(param) {
    let { ...props } = param;
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(memoryState);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}



/***/ }),

/***/ 4508:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: function() { return /* binding */ cn; }
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1994);
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3335);


function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__/* .twMerge */ .m6)((0,clsx__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .W)(inputs));
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [14,923,971,117,744], function() { return __webpack_exec__(8424); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);