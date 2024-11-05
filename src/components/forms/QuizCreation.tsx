'use client'

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { BookOpen, BrainCircuit, CopyCheck } from "lucide-react"

import { quizCreationSchema } from "@/schema/form/quiz"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"

type Input = z.infer<typeof quizCreationSchema>

export const QuizCreation = () => {

    const form = useForm<Input>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
            topic: 'Math',
            type: "mcq",
            amount: 3,
        },
    });

    const onSubmit = (input: Input) => {
        console.log(input)
    }
    form.watch();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                    <CardTitle className="text-2xl font-bold">Quiz me!</CardTitle>
                    <BrainCircuit size={28} strokeWidth={2.5} />
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="topic"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Topic</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter a topic..." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            Place provide a topic for the quiz.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Amount</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="How many questions?"
                                                type="number"
                                                {...field}
                                                onChange={(e) => {
                                                    form.setValue("amount", parseInt(e.target.value));
                                                }}
                                                min={1}
                                                max={10}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Place enter a number for the amount of questions.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-between">
                                <Button
                                    variant={
                                        form.getValues("type") === "mcq" 
                                            ? "btnPrimary" 
                                            : "btnSecondary"
                                    }
                                    size="btnPrimary"
                                    className="w-1/2 rounded-none rounded-l-lg"
                                    onClick={() => {
                                        form.setValue("type", "mcq");
                                    }}
                                    type="button"
                                >
                                    <CopyCheck className="w-4 h-4 mr-2" /> Multiple Choice
                                </Button>
                                <Separator orientation="vertical" color="border"/>
                                <Button
                                    variant={
                                        form.getValues("type") === "open_ended"
                                            ? "btnPrimary"
                                            : "btnSecondary"
                                    }
                                    size="btnPrimary"
                                    className="w-1/2 rounded-none rounded-r-lg"
                                    onClick={() => form.setValue("type", "open_ended")}
                                    type="button"
                                >
                                    <BookOpen className="w-4 h-4 mr-2" /> Open Ended
                                </Button>
                            </div>
                            <Button type="submit" variant="primary" size="primary" className="text-md bg-chart-2 text-primary-foreground">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}
