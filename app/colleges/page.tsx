"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const Colleges = () => {
  const router = useRouter();
  return (
    <div className="grid justify-between gap-5 grid-cols-1 sm:grid-cols-2">
      <Card className="hover:shadow-lg">
        <CardHeader>
          <CardTitle>ROLAND INSTITUTE OF TECHNOLOGY, BERHAMPUR</CardTitle>
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
      <Card className="hover:shadow-lg">
        <CardHeader>
          <CardTitle>VIGNAN INSTITUTE OF TECHNOLOGY, BERHAMPUR</CardTitle>
          <p>2023</p>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button onClick={() => router.push("/colleges/vignan/1")}>
            SEM 1
          </Button>
          <Button onClick={() => router.push("/colleges/vignan/2")}>
            SEM 2
          </Button>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg">
        <CardHeader>
          <CardTitle>KALAM INSTITUTE OF TECHNOLOGY, BERHAMPUR</CardTitle>
          <p>2023</p>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button onClick={() => router.push("/colleges/kalam/1")}>
            SEM 1
          </Button>
          <Button onClick={() => router.push("/colleges/kalam/2")}>
            SEM 2
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Colleges;
