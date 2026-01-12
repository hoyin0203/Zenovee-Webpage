import { defineField, defineType } from "sanity";

export default defineType({
  name: "faqItem",
  title: "FAQ item",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "product",
      title: "Product (optional)",
      type: "reference",
      to: [{ type: "product" }],
    }),
  ],
});

