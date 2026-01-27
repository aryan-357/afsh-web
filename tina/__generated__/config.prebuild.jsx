// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.CF_PAGES_BRANCH || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
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
            label: "Academics Page (Content)",
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
                name: "curriculumSection",
                label: "Curriculum Section Headers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              },
              {
                type: "object",
                name: "curriculum",
                label: "Curriculum Items",
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
                name: "departmentsSection",
                label: "Departments Section Headers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              },
              {
                type: "object",
                name: "departments",
                label: "Departments List",
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
                name: "calendarSection",
                label: "Calendar Section Headers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              },
              {
                type: "object",
                name: "academicCalendar",
                label: "Academic Calendar Events",
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
                name: "scholarsSection",
                label: "Scholars Section Headers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              },
              {
                type: "object",
                name: "scholars",
                label: "Scholars List",
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
                name: "keyHighlights",
                label: "Key Highlights (Bottom)",
                list: true,
                fields: [
                  { type: "string", name: "icon", label: "Icon (Emoji)" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "desc", label: "Description" }
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
                type: "object",
                name: "edMessage",
                label: "ED's Message",
                fields: [
                  { type: "image", name: "image", label: "Photo" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "message", label: "Message Body", ui: { component: "textarea" } },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "designation", label: "Designation" },
                  { type: "image", name: "signature", label: "Signature Image" }
                ]
              },
              {
                type: "object",
                name: "principalMessage",
                label: "Principal's Message",
                fields: [
                  { type: "image", name: "image", label: "Photo" },
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "message", label: "Message Body", ui: { component: "textarea" } },
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "designation", label: "Designation" },
                  { type: "image", name: "signature", label: "Signature Image" }
                ]
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
                name: "processSection",
                label: "Process Section Headers",
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
                name: "feeSection",
                label: "Fee Section Headers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" },
                  { type: "string", name: "note", label: "Footer Note", ui: { component: "textarea" } }
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
                name: "formSection",
                label: "Form Section Headers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
                ]
              },
              {
                type: "object",
                name: "tcSection",
                label: "Transfer Certificate Section",
                fields: [
                  { type: "string", name: "title", label: "Main Title" },
                  { type: "string", name: "procedureTitle", label: "Procedure Title" },
                  { type: "string", name: "procedureList", label: "Procedure Steps", list: true },
                  { type: "string", name: "documentsTitle", label: "Documents Title" },
                  { type: "string", name: "documentsList", label: "Required Documents", list: true }
                ]
              },
              {
                type: "object",
                name: "faqSection",
                label: "FAQ Section Headers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
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
                name: "contactSection",
                label: "Contact Section Headers",
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  { type: "string", name: "subtitle", label: "Subtitle" }
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
              },
              {
                type: "object",
                name: "formSection",
                label: "Contact Form Header",
                fields: [
                  { type: "string", name: "title", label: "Title" }
                ]
              },
              {
                type: "object",
                name: "linksSection",
                label: "Quick Links Header",
                fields: [
                  { type: "string", name: "title", label: "Title" }
                ]
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
