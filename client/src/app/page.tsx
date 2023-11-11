"use client";

import Summary from "@/components/Summary";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  text: z.string().min(2),
});

type TextFormValues = z.infer<typeof formSchema>;

export default function Home() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);

  const form = useForm<TextFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = async (data: TextFormValues) => {
    const formData = new FormData();
    formData.append("text", data.text);

    try {
      setLoading(true);
      const response = await axios.post(
        `https://text-summarizer-backend.onrender.com/api/summarize/`,
        formData
      );
      router.refresh();
      toast.success("Summary Generated Successfully.");
      setSummary(response.data.summary);
      console.log(response.data.summary);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-8 mx-8 mb-10">
      <Heading
        title="AI Text Summarizer"
        description="Summarize your large text into a few words"
      />

      <div className="w-full flex flex-col items-center gap-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full"
          >
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter your Text</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="h-64"
                      placeholder="Enter your large text here....."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" isLoading={loading}>
              Generate Summary
            </Button>
          </form>
        </Form>

        {summary && <Summary text={summary} />}
      </div>
    </div>
  );
}
