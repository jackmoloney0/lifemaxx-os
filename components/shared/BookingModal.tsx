"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { adSpendOptions, CALENDLY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  website: z
    .string()
    .min(1, "Website URL is required")
    .refine(
      (val) => {
        try {
          new URL(val.includes("://") ? val : `https://${val}`);
          return true;
        } catch {
          return false;
        }
      },
      { message: "Enter a valid URL" }
    ),
  adSpend: z.string().min(1, "Please select monthly ad spend"),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      adSpend: "",
      message: "",
    },
  });

  const adSpend = watch("adSpend");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const onSubmit = async (data: BookingFormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
      onClose();
    } catch {
      // Handled by API stub
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        aria-hidden
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-canvas p-8 sm:p-10"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 rounded-full p-1 text-foreground-muted transition-colors hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h2
          id="booking-title"
          className="font-serif text-2xl text-foreground pr-8"
        >
          Book a strategy call
        </h2>
        <p className="mt-2 text-sm text-muted">
          Tell us about your brand. We&apos;ll be in touch within 24 hours.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} placeholder="Your name" />
            {errors.name && (
              <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="you@brand.ie"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="website">Brand website URL</Label>
            <Input
              id="website"
              {...register("website")}
              placeholder="https://yourbrand.ie"
            />
            {errors.website && (
              <p className="mt-1 text-xs text-red-600">
                {errors.website.message}
              </p>
            )}
          </div>

          <div>
            <Label>Monthly ad spend</Label>
            <Select
              value={adSpend}
              onValueChange={(v) =>
                setValue("adSpend", v, { shouldValidate: true })
              }
            >
              <SelectTrigger className={cn(errors.adSpend && "border-red-400")}>
                <SelectValue placeholder="Select range" />
              </SelectTrigger>
              <SelectContent>
                {adSpendOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.adSpend && (
              <p className="mt-1 text-xs text-red-600">
                {errors.adSpend.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="message">Message (optional)</Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Anything we should know?"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Submit"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Prefer to book directly?{" "}
          <a
            href={CALENDLY_URL}
            className="font-medium text-accent underline-offset-2 hover:underline"
          >
            Calendly link →
          </a>
        </p>
      </motion.div>
    </div>
  );
}
