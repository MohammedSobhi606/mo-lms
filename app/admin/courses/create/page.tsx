"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { courseSchema, CourseSchemaType } from "@/lib/ZodSchema";
import { ArrowLeft, SparkleIcon } from "lucide-react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";
import { Form } from "@/components/ui/form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import slugify from "slugify";
import { Textarea } from "@/components/ui/textarea";
export default function createCourse() {
  const form = useForm<CourseSchemaType>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      title: "",
      description: "",
      status: "Draft",
      category: "",
      duration: 0,
      fileKey: "",
      level: "Beginner",
      price: 1,
      slug: "",
      smaleDescription: "",
    },
  });
  function onSubmit(data: CourseSchemaType) {
    console.log(data);
  }

  return (
    <main className="px-4 lg:px-6 flex flex-col gap-4 py-4 md:gap-6 md:py-6 ">
      <div className="flex items-center space-x-2">
        <Link
          className={buttonVariants({
            size: "icon",
            variant: "outline",
          })}
          href={"/admin/courses"}
        >
          <ArrowLeft />
        </Link>
        <h1 className="text-2xl font-bold">Create Courses</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Provide Basic Info About The Course</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="courseForm"
            className="space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldGroup>
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Course Title</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Course Title "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* slug */}
              <div className="flex gap-4  items-end">
                <Controller
                  name="slug"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      className="w-full "
                      data-invalid={fieldState.invalid}
                    >
                      <FieldLabel htmlFor={field.name}>Slug</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Slug "
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Button
                  variant={"secondary"}
                  type="button"
                  className="w-fit "
                  onClick={(e) => {
                    const title = form.getValues("title");
                    if (!title || title.length < 4) {
                      return;
                    }
                    const slug = slugify(title);
                    form.setValue("slug", slug, { shouldValidate: true });
                  }}
                >
                  Generate <SparkleIcon size={12} />
                </Button>
              </div>
              <Controller
                name="smaleDescription"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>
                      smale description
                    </FieldLabel>
                    <Textarea
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="smale description "
                      className="min-h-32"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="description"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>description</FieldLabel>
                    <Textarea
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder=" description "
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <div className="grid grid-cols-1 md:grid-cols-2">
                <Controller
                  name="category"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>category</FieldLabel>
                      {/* select  */}
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </div>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="vertical">
            <Button type="submit" form={"courseForm"}>
              Submit
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </main>
  );
}
