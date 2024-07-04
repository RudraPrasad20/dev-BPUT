"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import React from "react";

const Colleges = () => {
  const router = useRouter();
  return (
    <div className="grid justify-between gap-5 grid-cols-1 sm:grid-cols-2">
      <Card className="hover:shadow-lg">
        <CardHeader>
          <CardTitle>ROLAND INSTITUTE OF TECHNOLOGY</CardTitle>
          <p>2023</p>
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

export default Colleges;
