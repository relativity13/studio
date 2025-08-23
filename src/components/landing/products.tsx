
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  { name: "Stearic Acid", cas: "57-11-4", formula: "C18H36O2", grade: "Industrial" },
  { name: "Talcum Powder", cas: "14807-96-6", formula: "H2Mg3(SiO3)4", grade: "Cosmetic" },
  { name: "Dimethyl Phthalate", cas: "131-11-3", formula: "C10H10O4", grade: "Technical" },
  { name: "PVC Resin", cas: "9002-86-2", formula: "(C2H3Cl)n", grade: "Suspension" },
];

export function Products() {
  return (
    <section id="products" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">Our Top Products</h2>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl text-justify">
            High-quality chemicals available for bulk enterprise orders.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Product Name</TableHead>
                <TableHead className="font-bold">CAS Number</TableHead>
                <TableHead className="font-bold">Formula</TableHead>
                <TableHead className="font-bold">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.name}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.cas}</TableCell>
                  <TableCell>{product.formula}</TableCell>
                  <TableCell>{product.grade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
