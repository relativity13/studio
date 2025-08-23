
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  { name: "Stearic Acid", cas: "57-11-4", brand: "Godrej", grade: "Distric" },
  { name: "Stearic Acid", cas: "57-11-4", brand: "Adani", grade: "SAP" },
  { name: "Talcum Powder", cas: "14807-96-6", brand: "Golcha", grade: "Rajat" },
  { name: "Dimethyl Phthalate", cas: "131-11-3", brand: "KLJ", grade: "Technical" },
  { name: "PVC Resin", cas: "9002-86-2", brand: "CGPC", grade: "H66" },
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
                <TableHead className="font-bold text-base p-6">Product Name</TableHead>
                <TableHead className="font-bold text-base p-6">CAS Number</TableHead>
                <TableHead className="font-bold text-base p-6">Brand</TableHead>
                <TableHead className="font-bold text-base p-6">Grade</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product, index) => (
                <TableRow key={`${product.name}-${index}`}>
                  <TableCell className="uppercase font-bold text-base p-6">{product.name}</TableCell>
                  <TableCell className="text-base p-6">{product.cas}</TableCell>
                  <TableCell className="text-base p-6">{product.brand}</TableCell>
                  <TableCell className="text-base p-6">{product.grade}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
