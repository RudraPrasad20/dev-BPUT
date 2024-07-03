"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center gap-5">
      <Card className=" w-1/2">
        <CardHeader>
          <CardTitle>ROLAND INSTITUTE OF TECHNOLOGY</CardTitle>
          <CardDescription>2023</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button onClick={() => router.push("/colleges/roland/1")}>
            SEM 1
          </Button>
          <Button onClick={() => router.push("/colleges/roland/2")}>
            SEM 2
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
