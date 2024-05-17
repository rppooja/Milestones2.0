import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {
  data:any = [
    {
      navigation: [
        {
          name: "Home",
          link: "/home"
        },
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Courses",
          subItems: [
            {
              name: "Data Science/IT",
              subItems: [
                {
                  name: "Python Programming",
                  link: "/courses/python-programming"
                },
                {
                  name: "Python Programming with Data Science",
                  link: "/courses/python-data-science"
                },
                {
                  name: "PG in Data Analytics",
                  link: "/courses/pg-data-analytics"
                },
                {
                  name: "PG in Data Science with AI & ML",
                  link: "/courses/pg-data-science-ai-ml"
                },
                {
                  name: "Masters in Data Analytics and Data Science with AI",
                  link: "/courses/masters-data-analytics-ai"
                }
              ]
            },
            {
              name: "Mechanical",
              subItems: [
                {
                  name: "Mechanical Draughtsman",
                  link: "/courses/mechanical-draughtsman"
                },
                {
                  name: "Autocad 2D-3D",
                  link: "/courses/autocad"
                },
                {
                  name: "Solidworks Course",
                  link: "/courses/solidworks"
                },
                {
                  name: "Catia Course",
                  link: "/courses/catia"
                },
                {
                  name: "UG-NX Course",
                  link: "/courses/ug-nx"
                }
              ]
            },
            {
              name: "Automobile",
              subItems: [
                {
                  name: "Plastic Product Design",
                  link: "/courses/plastic-product-design"
                }
              ]
            },
            {
              name: "Civil/Arch",
              subItems: [
                {
                  name: "Civil / ArchDman",
                  link: "/courses/civil-arch-dman"
                },
                {
                  name: "Civil Auto CAD 2D-3D",
                  link: "/courses/civil-auto-cad"
                },
                {
                  name: "Sketchup Course",
                  link: "/courses/sketchup"
                },
                {
                  name: "Revit Architecture",
                  link: "/courses/revit-architecture"
                },
                {
                  name: "Revit Structure",
                  link: "/courses/revit-structure"
                }
              ]
            },
            {
              name: "Electrical",
              subItems: [
                {
                  name: "Electrical Autocad",
                  link: "/courses/electrical-autocad"
                }
              ]
            },
            {
              name: "Industrial Automtion",
              subItems: [
                {
                  name: "Electrical Auto CAD",
                  link: "/courses/electrical-auto-cad"
                },
                {
                  name: "PLC Scada",
                  link: "/courses/plc-scada"
                },
                {
                  name: "E-Plan",
                  link: "/courses/e-plan"
                },
                {
                  name: "HMI",
                  link: "/courses/hmi"
                },
                {
                  name: "MCC & VFD",
                  link: "/courses/mcc-vfd"
                }
              ]
            },
            {
              name: "BMI Design",
              subItems: [
                {
                  name: "MEP BIM Design",
                  link: "/courses/mep-bim-design"
                },
                {
                  name: "Architectural BIM Design",
                  link: "/courses/architectural-bim-design"
                },
                {
                  name: "Structural BIM Design",
                  link: "/courses/structural-bim-design"
                }
              ]
            },
            {
              name: "Masters Diploma",
              subItems: [
                {
                  name: "Data Analysis and Data Science with AI",
                  link: "/courses/data-analysis-ai"
                },
                {
                  name: "Product Design and Analysis Course",
                  link: "/courses/product-design-analysis"
                },
                {
                  name: "Civil Design",
                  link: "/courses/civil-design"
                },
                {
                  name: "Architectural Design CAD",
                  link: "/courses/architectural-design-cad"
                },
                {
                  name: "Interior Design",
                  link: "/courses/interior-design"
                },
                {
                  name: "Industrial Automation On Training",
                  link: "/courses/industrial-automation-training"
                }
              ]
            },
            {
              name: "Graphic Design",
              subItems: [
                {
                  name: "Adobe Photoshop",
                  link: "/courses/adobe-photoshop"
                },
                {
                  name: "Indesign",
                  link: "/courses/indesign"
                },
                {
                  name: "Adobe Illustrator",
                  link: "/courses/adobe-illustrator"
                },
                {
                  name: "Corel Draw",
                  link: "/courses/corel-draw"
                }
              ]
            },
            {
              name: "Diploma Courses",
              subItems: [
                {
                  name: "Graphic Design Course",
                  link: "/courses/graphic-design"
                },
                {
                  name: "Video Editing Course",
                  link: "/courses/video-editing"
                }
              ]
            },
            {
              name: "Digital Marketing",
              link: "/courses/digital-marketing"
            }
          ]
        },
        {
          name: "100% Job Gurantee",
          link: "/job-guarantee"
        },
        {
          name: "Projects",
          subItems: [
            {
              name: "Data Science And Analytics",
              link: "/projects/data-science-analytics"
            },
            {
              name: "Civil/Arch/Interior",
              link: "/projects/civil-arch-interior"
            },
            {
              name: "Electrical/Electronics",
              link: "/projects/electrical-electronics"
            },
            {
              name: "Graphics Students Project",
              link: "/projects/graphics-students"
            }
          ]
        },
        {
          name: "Review",
          subItems: [
            {
              name: "Students Reviews",
              link: "/reviews/students"
            },
            {
              name: "Submit Review",
              link: "/reviews/submit"
            },
            {
              name: "Certificate Verifier",
              link: "/reviews/certificate-verifier"
            }
          ]
        },
        {
          name: "Placement",
          subItems: [
            {
              name: "Placed Students",
              link: "/placement/placed-students"
            },
            {
              name: "Institute Login",
              link: "/placement/institute-login"
            },
            {
              name: "Student Login",
              link: "/placement/student-login"
            },
            {
              name: "Online Payment",
              link: "/placement/online-payment"
            },
            {
              name: "Resume Format",
              link: "/placement/resume-format"
            }
          ]
        },
        {
          name: "Contact",
          subItems: [
            {
              name: "Thane Training Institute",
              link: "/contact/thane"
            },
            {
              name: "Andheri Training Institute",
              link: "/contact/andheri"
            },
            {
              name: "Borivali Training Institute",
              link: "/contact/borivali"
            }
          ]
        },
        {
          name: "Mission",
          link: "/mission"
        },
        {
          name: "FAQ",
          link: "/faq"
        },
        {
          name: "Events",
          link: "/events"
        },
        {
          name: "Blog",
          link: "/blog"
        }
      ]
    }
    
  ]
  constructor() { }

  getNav(){
    return this.data;
  }

}
