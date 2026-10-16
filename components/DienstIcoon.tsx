import { Truck, ArrowUpFromLine, Car, Warehouse, Piano, Building2, Armchair, Globe2, PackageOpen } from "lucide-react";
import type { Dienst } from "@/lib/diensten";

const map = {
  truck: Truck,
  lift: ArrowUpFromLine,
  bus: Car,
  box: Warehouse,
  piano: Piano,
  office: Building2,
  senior: Armchair,
  grens: Globe2,
  doos: PackageOpen,
} as const;

export function DienstIcoon({ naam, className }: { naam: Dienst["icoon"]; className?: string }) {
  const Icoon = map[naam];
  return <Icoon className={className} aria-hidden="true" strokeWidth={2.2} />;
}
