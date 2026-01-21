// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "372c1232-2d0e-429a-a325-cb4750dc6248",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "ef72ff47fc188ec1c51f329fada86e678330f1c9",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "md",
        templates: [
          {
            name: "academics",
            label: "Academics Page",
            fields: [
              {
                type: "object",
                name: "hero",
                label: "Hero Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              },
              {
                type: "object",
                name: "curriculum",
                label: "Curriculum",
                list: true,
                ui: {
                  itemProps: (item) => {
                    return { label: item?.title || "Curriculum Item" };
                  }
                },
                fields: [
                  { type: "string", name: "class", label: "Class Range" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "focus", label: "Focus" },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" }
                  },
                  {
                    type: "string",
                    name: "features",
                    label: "Features",
                    list: true
                  }
                ]
              },
              {
                type: "object",
                name: "departments",
                label: "Departments",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name || "Department" })
                },
                fields: [
                  { type: "string", name: "id", label: "ID" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "icon", label: "Icon (Emoji)" },
                  { type: "string", name: "description", label: "Description" },
                  {
                    type: "string",
                    name: "faculty",
                    label: "Faculty Count text"
                  },
                  { type: "string", name: "staffLead", label: "Staff Lead" },
                  {
                    type: "string",
                    name: "subjects",
                    label: "Subjects",
                    list: true
                  },
                  {
                    type: "string",
                    name: "highlights",
                    label: "Highlights",
                    list: true
                  }
                ]
              },
              {
                type: "object",
                name: "academicCalendar",
                label: "Academic Calendar",
                list: true,
                fields: [
                  { type: "string", name: "month", label: "Month" },
                  { type: "string", name: "event", label: "Event" },
                  {
                    type: "string",
                    name: "type",
                    label: "Type",
                    options: [
                      "Start",
                      "Activity",
                      "Exam",
                      "Event",
                      "Result"
                    ]
                  }
                ]
              },
              {
                type: "object",
                name: "scholars",
                label: "Scholars",
                list: true,
                fields: [
                  { type: "string", name: "rank", label: "Rank" },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "percentage", label: "Percentage" },
                  { type: "string", name: "class", label: "Class" },
                  { type: "string", name: "icon", label: "Icon" }
                ]
              },
              {
                type: "object",
                name: "cta",
                label: "Call to Action",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "text", label: "Text" },
                  { type: "string", name: "buttonText", label: "Button Text" },
                  { type: "string", name: "buttonLink", label: "Button Link" }
                ]
              }
            ]
          },
          {
            name: "about",
            label: "About Page",
            fields: [
              {
                type: "object",
                name: "hero",
                label: "Hero Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "establishedDate", label: "Established Text" }
                ]
              },
              {
                type: "string",
                name: "edMessage",
                label: "ED Message Component Placeholder (Not editable here yet unless moved to content)"
              },
              {
                type: "object",
                name: "facultySection",
                label: "Faculty Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              },
              {
                type: "object",
                name: "pgtFaculty",
                label: "PGT Faculty",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name || "Faculty Member" })
                },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "designation", label: "Designation" },
                  { type: "string", name: "department", label: "Department" },
                  { type: "image", name: "image", label: "Image" },
                  {
                    type: "string",
                    name: "quote",
                    label: "Quote",
                    ui: { component: "textarea" }
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" }
                  }
                ]
              },
              {
                type: "object",
                name: "tgtFaculty",
                label: "TGT Faculty",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name || "Faculty Member" })
                },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "designation", label: "Designation" },
                  { type: "string", name: "department", label: "Department" },
                  { type: "image", name: "image", label: "Image" },
                  {
                    type: "string",
                    name: "quote",
                    label: "Quote",
                    ui: { component: "textarea" }
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" }
                  }
                ]
              },
              {
                type: "object",
                name: "prtFaculty",
                label: "PRT Faculty",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name || "Faculty Member" })
                },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "designation", label: "Designation" },
                  { type: "string", name: "department", label: "Department" },
                  { type: "image", name: "image", label: "Image" },
                  {
                    type: "string",
                    name: "quote",
                    label: "Quote",
                    ui: { component: "textarea" }
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Description",
                    ui: { component: "textarea" }
                  }
                ]
              },
              {
                type: "object",
                name: "values",
                label: "Core Values",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description", ui: { component: "textarea" } },
                  { type: "string", name: "iconName", label: "Icon Name (Lucide)" },
                  { type: "string", name: "color", label: "Color Theme (e.g. blue, gold, emerald)" }
                ]
              }
            ]
          },
          {
            name: "admission",
            label: "Admission Page",
            fields: [
              {
                type: "object",
                name: "hero",
                label: "Hero Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              },
              {
                type: "object",
                name: "process",
                label: "Process Steps",
                list: true,
                fields: [
                  { type: "number", name: "number", label: "Step Number" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "description", label: "Description" },
                  { type: "string", name: "icon", label: "Icon (Emoji)" }
                ]
              },
              {
                type: "object",
                name: "feeStructure",
                label: "Fee Structure",
                list: true,
                fields: [
                  { type: "string", name: "class", label: "Class" },
                  { type: "string", name: "tuition", label: "Tuition Fee" },
                  { type: "string", name: "annual", label: "Annual Charges" },
                  { type: "string", name: "total", label: "Total" }
                ]
              },
              {
                type: "object",
                name: "faqs",
                label: "FAQs",
                list: true,
                fields: [
                  { type: "string", name: "question", label: "Question" },
                  { type: "string", name: "answer", label: "Answer", ui: { component: "textarea" } }
                ]
              },
              {
                type: "object",
                name: "contactInfo",
                label: "Contact Info",
                fields: [
                  { type: "string", name: "phone", label: "Phone" },
                  { type: "string", name: "email", label: "Email" },
                  { type: "string", name: "hours", label: "Office Hours" }
                ]
              }
            ]
          },
          {
            name: "contact",
            label: "Contact Page",
            fields: [
              {
                type: "object",
                name: "hero",
                label: "Hero Section",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              },
              {
                type: "object",
                name: "contactDetails",
                label: "Contact Details",
                fields: [
                  { type: "string", name: "address", label: "Address", ui: { component: "textarea" } },
                  { type: "string", name: "phone", label: "Phone numbers (multiline)", ui: { component: "textarea" } },
                  { type: "string", name: "email", label: "Emails (multiline)", ui: { component: "textarea" } },
                  { type: "string", name: "hours", label: "Hours (multiline)", ui: { component: "textarea" } }
                ]
              },
              {
                type: "string",
                name: "mapUrl",
                label: "Google Maps Embed URL"
              }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
