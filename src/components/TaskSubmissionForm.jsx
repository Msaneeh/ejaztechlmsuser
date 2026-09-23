import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import FormField from "./FormField";

const TaskSubmissionForm = ({ initialValues, onSubmit, onCancel }) => {
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.description.trim())
      newErrors.description = "Description is required";
    if (!form.repoLink.trim())
      newErrors.repoLink = "Repository link is required";
    if (form.repoLink && !/^https?:\/\//i.test(form.repoLink))
      newErrors.repoLink = "Must start with http:// or https://";
    if (form.demoLink && !/^https?:\/\//i.test(form.demoLink))
      newErrors.demoLink = "Must start with http:// or https://";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    onSubmit(form);
  };

  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-4 sm:p-5 shadow-xs">
      <div className="pointer-events-none absolute -left-10 -top-16 h-48 w-48 rounded-full bg-accent-dim blur-[50px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-60 w-60 rounded-full bg-gold-dim blur-[50px]" />

      <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
        <FormField
          label="Submission Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          error={errors.title}
          placeholder="e.g. Linear Regression with Gradient Descent"
        />

        <FormField
          label="Short Description"
          name="description"
          as="textarea"
          rows={4}
          value={form.description}
          onChange={handleChange}
          error={errors.description}
          placeholder="Briefly describe what you built and any key findings..."
        />

        <FormField
          label="Repository Link"
          name="repoLink"
          type="url"
          value={form.repoLink}
          onChange={handleChange}
          error={errors.repoLink}
          placeholder="https://github.com/username/repo"
        />

        <FormField
          label="Live Demo Link"
          name="demoLink"
          type="url"
          value={form.demoLink}
          onChange={handleChange}
          error={errors.demoLink}
          placeholder="https://your-demo.vercel.app"
          optional
        />

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <span className="text-[11px] text-muted-text">
            * Required fields
          </span>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={onCancel}
              className="btn-glass h-9 rounded-full px-4 text-xs font-medium"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={submitted}
              className="btn-primary h-9 rounded-full px-4 text-xs font-medium"
            >
              {submitted ? "✓ Submitted" : "Submit Task"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TaskSubmissionForm;